import styles from './styles';

const tooltipStyles = `
  .rc-tooltip.rc-tooltip-zoom-enter,
  .rc-tooltip.rc-tooltip-zoom-leave {
    display: block;
  }
  .rc-tooltip-zoom-enter,
  .rc-tooltip-zoom-appear {
    opacity: 0;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
    animation-play-state: paused;
  }
  .rc-tooltip-zoom-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.6, -0.3, 0.74, 0.05);
    animation-play-state: paused;
  }
  .rc-tooltip-zoom-enter.rc-tooltip-zoom-enter-active,
  .rc-tooltip-zoom-appear.rc-tooltip-zoom-appear-active {
    animation-name: rcToolTipZoomIn;
    animation-play-state: running;
  }
  .rc-tooltip-zoom-leave.rc-tooltip-zoom-leave-active {
    animation-name: rcToolTipZoomOut;
    animation-play-state: running;
  }
  @keyframes rcToolTipZoomIn {
    0% {
      opacity: 0;
      transform-origin: 50% 50%;
      transform: scale(0, 0);
    }
    100% {
      opacity: 1;
      transform-origin: 50% 50%;
      transform: scale(1, 1);
    }
  }
  @keyframes rcToolTipZoomOut {
    0% {
      opacity: 1;
      transform-origin: 50% 50%;
      transform: scale(1, 1);
    }
    100% {
      opacity: 0;
      transform-origin: 50% 50%;
      transform: scale(0, 0);
    }
  }
  .rc-tooltip {
    position: absolute;
    z-index: 1070;
    display: block;
    visibility: visible;
    line-height: 1.5;
    font-size: 12px;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 1px;
    opacity: 0.9;
  }
  .rc-tooltip-hidden {
    display: none;
  }
  .rc-tooltip-inner {
    padding: 10px;
    color: ${styles.white1};
    text-align: left;
    text-decoration: none;
    background-color: ${styles.dark1};
    border-radius: 3px;
  }
  .rc-tooltip-arrow,
  .rc-tooltip-arrow-inner {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }
  .rc-tooltip-placement-top .rc-tooltip-arrow,
  .rc-tooltip-placement-topLeft .rc-tooltip-arrow,
  .rc-tooltip-placement-topRight .rc-tooltip-arrow {
    bottom: -5px;
    margin-left: -6px;
    border-width: 6px 6px 0;
    border-top-color: ${styles.dark1};
  }
  .rc-tooltip-placement-top .rc-tooltip-arrow-inner,
  .rc-tooltip-placement-topLeft .rc-tooltip-arrow-inner,
  .rc-tooltip-placement-topRight .rc-tooltip-arrow-inner {
    bottom: 1px;
    margin-left: -6px;
    border-width: 6px 6px 0;
    border-top-color: #ffffff;
  }
  .rc-tooltip-placement-top .rc-tooltip-arrow {
    left: 50%;
  }
  .rc-tooltip-placement-topLeft .rc-tooltip-arrow {
    left: 15%;
  }
  .rc-tooltip-placement-topRight .rc-tooltip-arrow {
    right: 15%;
  }
  .rc-tooltip-placement-right .rc-tooltip-arrow,
  .rc-tooltip-placement-rightTop .rc-tooltip-arrow,
  .rc-tooltip-placement-rightBottom .rc-tooltip-arrow {
    left: -5px;
    margin-top: -6px;
    border-width: 6px 6px 6px 0;
    border-right-color: ${styles.dark1};
  }
  .rc-tooltip-placement-right .rc-tooltip-arrow-inner,
  .rc-tooltip-placement-rightTop .rc-tooltip-arrow-inner,
  .rc-tooltip-placement-rightBottom .rc-tooltip-arrow-inner {
    left: 1px;
    margin-top: -6px;
    border-width: 6px 6px 6px 0;
    border-right-color: #ffffff;
  }
  .rc-tooltip-placement-right .rc-tooltip-arrow {
    top: 50%;
  }
  .rc-tooltip-placement-rightTop .rc-tooltip-arrow {
    top: 15%;
    margin-top: 0;
  }
  .rc-tooltip-placement-rightBottom .rc-tooltip-arrow {
    bottom: 15%;
  }
  .rc-tooltip-placement-left .rc-tooltip-arrow,
  .rc-tooltip-placement-leftTop .rc-tooltip-arrow,
  .rc-tooltip-placement-leftBottom .rc-tooltip-arrow {
    right: -5px;
    margin-top: -6px;
    border-width: 6px 0 6px 6px;
    border-left-color: ${styles.dark1};
  }
  .rc-tooltip-placement-left .rc-tooltip-arrow-inner,
  .rc-tooltip-placement-leftTop .rc-tooltip-arrow-inner,
  .rc-tooltip-placement-leftBottom .rc-tooltip-arrow-inner {
    right: 1px;
    margin-top: -6px;
    border-width: 6px 0 6px 6px;
    border-left-color: #ffffff;
  }
  .rc-tooltip-placement-left .rc-tooltip-arrow {
    top: 50%;
  }
  .rc-tooltip-placement-leftTop .rc-tooltip-arrow {
    top: 15%;
    margin-top: 0;
  }
  .rc-tooltip-placement-leftBottom .rc-tooltip-arrow {
    bottom: 15%;
  }
  .rc-tooltip-placement-bottom .rc-tooltip-arrow,
  .rc-tooltip-placement-bottomLeft .rc-tooltip-arrow,
  .rc-tooltip-placement-bottomRight .rc-tooltip-arrow {
    top: -5px;
    margin-left: -6px;
    border-width: 0 6px 6px;
    border-bottom-color: ${styles.dark1};
  }
  .rc-tooltip-placement-bottom .rc-tooltip-arrow-inner,
  .rc-tooltip-placement-bottomLeft .rc-tooltip-arrow-inner,
  .rc-tooltip-placement-bottomRight .rc-tooltip-arrow-inner {
    top: 1px;
    margin-left: -6px;
    border-width: 0 6px 6px;
    border-bottom-color: #ffffff;
  }
  .rc-tooltip-placement-bottom .rc-tooltip-arrow {
    left: 50%;
  }
  .rc-tooltip-placement-bottomLeft .rc-tooltip-arrow {
    left: 15%;
  }
  .rc-tooltip-placement-bottomRight .rc-tooltip-arrow {
    right: 15%;
  }
`;

export default tooltipStyles;