import React from 'react';

import Chorok from './Chorok';
import LeftEye from './LeftEye';
import RightEye from './RightEye';
import Lip from './Lip';
import Nose from './Nose';

class Face extends React.Component{

  render(){
    return (
      <React.Fragment>
        <path id="Face"
          d="M5.054,82.946c-9.72,48.602 -1.215,71.08 2.43,108.746c3.645,37.666 10.935,114.821 17.011,128.794c6.075,13.973 17.01,20.656 24.908,28.553c7.897,7.898 43.741,55.892 65.612,72.295c21.87,16.403 25.515,18.225 46.779,18.225c21.263,0 35.236,-8.505 62.574,-35.843c27.338,-27.338 66.827,-71.687 74.725,-100.848c7.897,-29.161 13.973,-112.391 17.618,-137.299c3.645,-24.908 7.859,-161.152 -52.286,-164.797c-60.144,-3.645 -48.319,10.192 -98.136,10.192c-49.816,0 -67.983,-7.878 -98.967,-10.308c-30.983,-2.431 -52.548,33.689 -62.268,82.29Z"
          style={
            {
              fill:"#9c8a8a",
            }
          }
        />
        <clipPath id="_clip1">
          <path
            d="M5.054,82.946c-9.72,48.602 -1.215,71.08 2.43,108.746c3.645,37.666 10.935,114.821 17.011,128.794c6.075,13.973 17.01,20.656 24.908,28.553c7.897,7.898 43.741,55.892 65.612,72.295c21.87,16.403 25.515,18.225 46.779,18.225c21.263,0 35.236,-8.505 62.574,-35.843c27.338,-27.338 66.827,-71.687 74.725,-100.848c7.897,-29.161 13.973,-112.391 17.618,-137.299c3.645,-24.908 7.859,-161.152 -52.286,-164.797c-60.144,-3.645 -48.319,10.192 -98.136,10.192c-49.816,0 -67.983,-7.878 -98.967,-10.308c-30.983,-2.431 -52.548,33.689 -62.268,82.29Z" />
        </clipPath>
        <g clip-path="url(#_clip1)">
          <path id="FaceFrame"
            d="M62.109,17.163c-17.011,5.467 -26.731,23.693 -32.199,41.311c-5.467,17.618 3.645,25.516 2.43,44.349c-1.215,18.833 -18.225,37.058 -15.188,47.386l3.038,10.328c0,0 -8.505,43.741 4.253,61.966c12.757,18.226 6.075,80.8 14.58,94.773c8.505,13.973 73.509,111.175 112.391,110.568c38.881,-0.608 92.342,-53.462 109.96,-71.08c17.618,-17.618 27.338,-43.133 34.628,-69.864c7.291,-26.731 19.441,-120.896 15.188,-163.422c-4.252,-42.526 -12.15,-106.315 -41.918,-109.353c-29.769,-3.037 -75.94,22.478 -113.606,21.263c-37.666,-1.215 -76.547,-23.693 -93.557,-18.225Z"
            style={
              {
                fill:"#b09e9e"
              }
            }
          />
          <clipPath id="_clip2">
            <path
              d="M62.109,17.163c-17.011,5.467 -26.731,23.693 -32.199,41.311c-5.467,17.618 3.645,25.516 2.43,44.349c-1.215,18.833 -18.225,37.058 -15.188,47.386l3.038,10.328c0,0 -8.505,43.741 4.253,61.966c12.757,18.226 6.075,80.8 14.58,94.773c8.505,13.973 73.509,111.175 112.391,110.568c38.881,-0.608 92.342,-53.462 109.96,-71.08c17.618,-17.618 27.338,-43.133 34.628,-69.864c7.291,-26.731 19.441,-120.896 15.188,-163.422c-4.252,-42.526 -12.15,-106.315 -41.918,-109.353c-29.769,-3.037 -75.94,22.478 -113.606,21.263c-37.666,-1.215 -76.547,-23.693 -93.557,-18.225Z" />
          </clipPath>
          <g clip-path="url(#_clip2)">
            {/* here comes next things */}
            <RightEye />
            <LeftEye />
            <Nose />
            <Chorok />
            <Lip />
          </g>
        </g>
      </React.Fragment>
    );
  }

}

export default Face;