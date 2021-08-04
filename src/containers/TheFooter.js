import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
      <CFooter fixed={false}>
          <div>
              <span>&copy; 2021 </span>
              <a
                  href="https://dev.learningsignal.com"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  LearningSignal
              </a>
          </div>
          <div className="mfs-auto">
              <span className="mr-1">Powered by</span>
              <a
                  href="https://dev.learningsignal.com/product-passfinder"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  PASS Finder
              </a>
          </div>
      </CFooter>
  );
}

export default React.memo(TheFooter)
