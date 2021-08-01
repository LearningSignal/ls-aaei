import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
      <CFooter fixed={false}>
          <div>
              <a
                  href="https://dev.learningsignal.com"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  LearningSignal
              </a>
              <span className="ml-1">&copy; 2021 Learning Analytics Lab.</span>
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
