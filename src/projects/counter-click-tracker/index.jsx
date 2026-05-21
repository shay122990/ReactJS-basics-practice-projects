import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;

          min-height: 100vh;

          background:
            radial-gradient(circle at center, #2a0050, #090011);

          font-family: monospace;

          overflow: hidden;
        }

        .page {
          min-height: 100vh;

          display: flex;
          justify-content: center;
          align-items: center;

          position: relative;
        }

        .grid {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(255,0,255,0.18) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,0,255,0.18) 1px,
              transparent 1px
            );

          background-size: 42px 42px;

          transform:
            perspective(800px)
            rotateX(70deg)
            scale(2);

          transform-origin: center top;

          animation: moveGrid 10s linear infinite;
        }

        .panel {
          position: relative;

          z-index: 10;

          width: 420px;

          padding: 36px;

          border:
            4px solid #ff00ff;

          background:
            rgba(0,0,0,0.55);

          box-shadow:
            0 0 12px #ff00ff,
            0 0 40px rgba(255,0,255,0.4);

          text-align: center;
        }

        .title {
          color: #00ffff;

          font-size: 1rem;

          letter-spacing: 0.25em;

          margin-bottom: 28px;

          text-transform: uppercase;
        }

        .count {
          font-size: 7rem;

          color: #fff000;

          text-shadow:
            0 0 8px #fff000,
            0 0 24px #ff8800;

          margin-bottom: 28px;
        }

        .controls {
          display: flex;

          justify-content: center;

          gap: 18px;
        }

        button {
          border: none;

          background: #0a0016;

          color: #00ffff;

          font-size: 1.6rem;

          padding: 14px 22px;

          cursor: pointer;

          border:
            3px solid #00ffff;

          box-shadow:
            0 0 8px rgba(0,255,255,0.5);

          font-family: inherit;

          transition:
            transform 0.1s ease,
            background 0.1s ease;
        }

        button:hover {
          background: #130024;
        }

        button:active {
          transform: scale(0.94);
        }

        .reset {
          margin-top: 22px;

          width: 100%;
        }

        @keyframes moveGrid {
          from {
            transform:
              perspective(800px)
              rotateX(70deg)
              translateY(0)
              scale(2);
          }

          to {
            transform:
              perspective(800px)
              rotateX(70deg)
              translateY(42px)
              scale(2);
          }
        }
      `}</style>

      <div className="page">
        <div className="grid"></div>

        <div className="panel">
          <div className="title">High Score Counter</div>

          <div className="count">{count}</div>

          <div className="controls">
            <button onClick={() => setCount((p) => p - 1)}>−</button>

            <button onClick={() => setCount((p) => p + 1)}>+</button>
          </div>

          <button className="reset" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
