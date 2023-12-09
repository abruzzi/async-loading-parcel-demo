import { AsyncProTools } from "../advanced/AsyncProTools";
import { Suspense, useState } from "react";

import "./Editor.css";
import { ErrorBoundary } from "react-error-boundary";

const Editor = () => {
  const [enableAdvancedTools, setAdvancedTools] = useState(false);

  return (
    <div className="editor-container">
      <nav>
        <ol>
          <li>
            <button>
              <span className="material-symbols-outlined">
                format_align_left
              </span>
            </button>
          </li>
          <li>
            <button>
              <span className="material-symbols-outlined">
                format_align_center
              </span>
            </button>
          </li>
          <li>
            <button>
              <span className="material-symbols-outlined">
                format_align_right
              </span>
            </button>
          </li>
          <li></li>
          <ErrorBoundary
            fallback={
              <li>
                <button>
                  <span className="material-symbols-outlined warning">
                    warning
                  </span>
                </button>
              </li>
            }
          >
            {enableAdvancedTools && (
              <Suspense
                fallback={
                  <li>
                    <button>
                      <span className="material-symbols-outlined spinning">
                        progress_activity
                      </span>
                    </button>
                  </li>
                }
              >
                <AsyncProTools />
              </Suspense>
            )}
          </ErrorBoundary>
        </ol>
      </nav>
      <label>
        <input
          type="checkbox"
          checked={enableAdvancedTools}
          onChange={() => setAdvancedTools((x) => !x)}
        />
        <span>Enable Advanced Tools</span>
      </label>
      <section className="content-container">
        <textarea
          className="content"
          rows={10}
          placeholder="Hello darkness my old friend..."
        />
      </section>
    </div>
  );
};

export { Editor };
