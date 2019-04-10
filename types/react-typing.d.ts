
declare module 'react-typing-animation' {

  import React from 'react';

  class Typing extends React.Component<{
    children: React.ReactNode | React.ReactNodeArray,
    className?: string;
    cursorClassName?: string;
    cursor?: React.ReactNode;
    hideCursor?: boolean;
    speed?: number;
    startDelay?: number;
    loop?: boolean;
    onStartedTyping?: () => any;
    onBeforeType?: () => any;
    onAfterType?: () => any;
    onFinishedTyping?: () => any;
  }> {}

  class Backspace extends React.Component<{
    count?: number;
    delay?: number;
    speed?: number;
  }> {}

  class Delay extends React.Component<{
    ms?: number;
  }> {}

  class Speed extends React.Component<{
    ms?: number;
  }> {}

  class Reset extends React.Component<{
    count?: number;
    delay?: number;
    speed?: number;
  }> {}

  export = Typing;

  export {
    Backspace,
    Delay,
    Speed,
    Reset
  }
}