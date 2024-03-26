import React from 'react';
import {Text} from 'react-native';
import {styles} from './style';
import {CountDownProps} from '.';

export const CountDown: React.FC<CountDownProps> = React.memo(
  ({count, onTimeout, propStyle = styles.label}) => {
    const [timerCount, setTimerCount] = React.useState<number>(count);
    let countdownInterval: NodeJS.Timeout;
    const TIMER_INTERVAL = 1000;

    React.useEffect(() => {
      if (count > 0) {
        countdownInterval = setInterval(() => {
          setTimerCount(currentCount => {
            if (currentCount === 0) {
              //your redirection to Quit screen
              clearInterval(countdownInterval);
              onTimeout();
              return 0;
            } else {
              return currentCount - 1;
            }
          });
        }, TIMER_INTERVAL); //each count lasts for a second
      } else {
        console.warn('Count is negative number....!', count);
      }
      //cleanup the interval on complete
      return () => clearInterval(countdownInterval);
    }, [count]);

    return timerCount >= 0 ? (
      <Text style={propStyle}>{timerCount} Sec</Text>
    ) : null;
  },
);
