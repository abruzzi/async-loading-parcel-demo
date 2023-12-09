import { AsyncMoreTools } from "./AsyncMoreTools";
import { Suspense } from "react";

import "./Editor.css";

const Editor = () => {
  const advancedFeatureEnabled = false;

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
          {advancedFeatureEnabled && (
            <Suspense>
              <AsyncMoreTools />
            </Suspense>
          )}
        </ol>
      </nav>
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
