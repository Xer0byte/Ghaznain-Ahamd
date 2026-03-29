import { CSSProperties, useEffect, useRef } from "react";
import { cursorTrail } from "../utility/cursor-trail";

export interface CursorTrailCanvasProps {
  color?: string;
  className?: string;
  style?: CSSProperties;
}

export default function CursorTrailCanvas(props: CursorTrailCanvasProps) {
  const refCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const { cleanUp, renderTrailCursor } = cursorTrail({
      ref: refCanvas,
      color: props.color,
    });
    renderTrailCursor();

    return () => {
      cleanUp();
    };
  }, [props.color]);

  return (
    <canvas
      ref={refCanvas}
      className={`pointer-events-none fixed inset-0 z-50 h-full w-full ${props.className || ""}`}
      style={props.style}
    ></canvas>
  );
}
