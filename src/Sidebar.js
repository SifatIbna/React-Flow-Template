import React, { useEffect } from 'react';
import { useStoreApi, useReactFlow } from 'react-flow-renderer';

export default () => {
  const store = useStoreApi();
  const rfInstance = useReactFlow();
  const { zoomIn, zoomOut, setCenter } = rfInstance;

  const focusNode = () => {
    const { nodeInternals } = store.getState();
    const nodes = Array.from(nodeInternals).map(([, node]) => node);

    if (nodes.length > 0) {
      const node = nodes[0];

      const x = node.position.x + node.width / 2;
      const y = node.position.y + node.height / 2;
      const zoom = 1.85;

      setCenter(x, y, { zoom, duration: 1000 });
    }
  };

  useEffect(()=>{
    console.log(rfInstance);
  })

  return (
    <aside>
      <div className="description">
        This is an example of how you can use the zoom pan helper hook
      </div>
      <button onClick={focusNode}>focus node</button>
      <button onClick={zoomIn}>zoom in</button>
      <button onClick={zoomOut}>zoom out</button>
    </aside>
  );
};
