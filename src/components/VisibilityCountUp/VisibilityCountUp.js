import React, { useState } from "react";

import VisibilitySensor from "react-visibility-sensor";

const VisibilityCountUp = ({ count }) => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  return (
    <VisibilitySensor
      offset={{ top: 10 }}
      delayedCall={true}
      onChange={onVisibilityChange}
    >
    
    </VisibilitySensor>
  );
};

export default VisibilityCountUp;
