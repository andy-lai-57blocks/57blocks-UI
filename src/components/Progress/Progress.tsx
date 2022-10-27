import React, { FC } from 'react';
import classNames from 'classnames';
import Icon from '../Icon/icon';

export type ProgressType = 'line' | 'circle';
export type ProgressStatus = 'success' | 'exception';

interface IProgressProps {
  percentage?: number;
  type?: ProgressType;
  status?: ProgressStatus;
  textInside?: boolean;
  strokeHeight?: number;
  circleWidth?: number;
  showText?: boolean;
}

const Progress: FC<IProgressProps> = (props) => {
  const {
    percentage, type, status, textInside, strokeHeight, circleWidth, showText
  } = props;
  const prefix = 'blocks-progress';

  const circleCoordinate = `${Number(circleWidth) / 2}`;

  const getPercentage = ():number => {
    const newPercentage = Number(percentage);
    if (newPercentage > 100) {
      return 100;
    } if (newPercentage < 0) {
      return 0;
    }
    return newPercentage;
  };

  const getProgressTextSize = () => (type === 'line' ? 12 + Number(strokeHeight) * 0.4 : Number(circleWidth) * 0.2 + 2);

  const getStatusIcon = () => {
    if (type === 'line') {
      return status === 'success' ? <Icon theme="success" icon="circle-check" /> : <Icon theme="danger" icon="circle-xmark" />;
    }
    return status === 'success' ? <Icon theme="success" icon="check" /> : <Icon theme="danger" icon="xmark" />;
  };

  const getCircleStrokeColor = () => {
    if (status === 'success') {
      return '#52c41a';
    } if (status === 'exception') {
      return '#dc3545';
    }
    return '#0d6efd';
  };

  const getCircleRadius = () => ((circleWidth as number) - (strokeHeight as number)) / 2;

  const geCircleStrokeDasharray = () => {
    const radius = getCircleRadius();
    const perimeter = 2 * Math.PI * radius;
    const offset = (getPercentage() / 100) * perimeter;
    return `${offset} ${perimeter}`;
  };

  return (
    <div className={classNames(`${prefix}`, { [`${prefix}--${type}`]: type })}>
      { type === 'line'
        ? (
          <>
            <div className={`${prefix}-line`}>
              <div className={`${prefix}-line__outer`} style={{ height: `${strokeHeight}px` }}>
                <div
                  className={classNames(`${prefix}-line__inner`, { [`${prefix}-line__inner--${status}`]: status })}
                  style={{ width: `${getPercentage()}%` }}
                >
                  { showText && textInside
                && (
                <div className={`${prefix}-line__inner-text`}>
                  {`${getPercentage()}%`}
                </div>
                )}
                </div>
              </div>
            </div>
            { showText && !textInside
            && (
            <div className={`${prefix}-line__text`} style={{ fontSize: getProgressTextSize() }}>
              {status ? getStatusIcon() : `${getPercentage()}%`}
            </div>
            )}
          </>
        )
        : (
          <>
            <div className={`${prefix}-circle`} style={{ height: `${circleWidth}px`, width: `${circleWidth}px` }}>
              <svg viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
                <circle cx={circleCoordinate} cy={circleCoordinate} r={getCircleRadius()} strokeWidth={strokeHeight} stroke="#e9ecef" fill="none" />
                <circle cx={circleCoordinate} cy={circleCoordinate} r={getCircleRadius()} strokeWidth={strokeHeight} stroke={getCircleStrokeColor()} fill="none" transform={`matrix(0,-1,1,0,0, ${circleWidth})`} strokeDasharray={geCircleStrokeDasharray()} />
              </svg>
            </div>
            { showText && (
            <div className={`${prefix}-circle__text`} style={{ fontSize: getProgressTextSize() }}>
              {status ? getStatusIcon() : `${getPercentage()}%`}
            </div>
            )}
          </>
        )}
    </div>

  );
};

Progress.defaultProps = {
  percentage: 0,
  type: 'line',
  textInside: false,
  strokeHeight: 6,
  circleWidth: 126,
  showText: true,
};

export default Progress;
