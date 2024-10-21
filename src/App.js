import { useEffect } from 'react';
import { Stage, Layer, Shape, Text, Group } from 'react-konva';
import styles from './App.module.css'

function App() {
  const points = [
    { x: 620, y: 380, label: '1' },
    { x: 590, y: 620, label: '2' },
    { x: 420, y: 740, label: '3' },
  ];

  const handleShapeClick = (point) => {
    alert(`Coordinates: x=${point.x}, y=${point.y}`);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: document.body.scrollWidth,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Stage width={window.innerWidth * 2} height={window.innerHeight}>
          <Layer>
            {points.map((point) => (
              <Group key={point.label} onTouchStart={() => handleShapeClick(point)}>
                <Shape
                  x={point.x}
                  y={point.y}
                  width={66}
                  height={30}
                  sceneFunc={(context, shape) => {
                    const width = shape.width();
                    const height = shape.height();
                    context.beginPath();
                    context.ellipse(width / 2, height / 2, width / 2, height / 2, 0, 0, Math.PI * 2);
                    context.closePath();
                    context.fillStyle = 'rgba(234, 98, 0, 0.5)';
                    context.shadowColor = 'rgba(0, 0, 0, 0.5)';
                    context.shadowBlur = 20;
                    context.shadowOffsetY = 15; 
                    context.fill(); 
                    context.beginPath();
                    context.ellipse(width / 2, height / 2, width / 2, height / 2, 0, 0, Math.PI * 2);
                    context.closePath();
                    context.fillStyle = '#FFD24B';
                    context.fill();
                    context.strokeStyle = '#917F66';
                    context.lineWidth = 1; 
                    context.stroke();
                    context.fillStrokeShape(shape);
                  }}
                />
                <Text
                  x={point.x + 28}
                  y={point.y + 6}
                  text={point.label}
                  fontSize={20}
                  fill="black"
                  align="center"
                />
              </Group>
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
}

export default App;
