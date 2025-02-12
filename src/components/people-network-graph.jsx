import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ForceGraph2D from 'react-force-graph-2d';

const MALE_COLOR = 'blue';
const FEMALE_COLOR = 'pink';

function PeopleNetworkGraph({ relationships }) {
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });

  const extractGenderAndName = (text) => (text.match(/\((M|F)\) (.+)/) || []).slice(1, 3);

  const myCanvasRender = (node, ctx, globalScale) => {
    const [gender, name] = extractGenderAndName(node.id);

    // Draw circle
    const radius = 5;
    ctx.beginPath();
    ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = gender === 'M' ? MALE_COLOR : FEMALE_COLOR;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();

    // Draw text
    const fontSize = 12 / globalScale;
    ctx.font = `${fontSize}px Sans-Serif`;
    ctx.fillStyle = 'black';
    ctx.fillText(name, node.x + 6, node.y + 6);
  };

  useEffect(() => {
    const nodesMap = new Map();
    const links = [];

    relationships.forEach((relation) => {
      const [group, target] = relation.split(', ');
      const people = group.split(' & ');

      people.forEach((p) => {
        if (!nodesMap.has(p)) {
          nodesMap.set(p, { id: p });
        }
      });

      if (!nodesMap.has(target)) {
        nodesMap.set(target, { id: target });
      }

      people.forEach((p) => {
        links.push({ source: p, target });
      });
    });

    setGraphData({ nodes: Array.from(nodesMap.values()), links });
  }, [relationships]);

  return (
    <ForceGraph2D
      graphData={graphData}
      nodeVal={1}
      linkDirectionalArrowLength={4}
      linkDirectionalArrowRelPos={1}
      nodeCanvasObject={myCanvasRender}
    />
  );
}

PeopleNetworkGraph.propTypes = {
  relationships: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PeopleNetworkGraph;
