//
// Copyright (c) 2017, Emiliano Barbosa (https://github.com/emilianoeloi)
// Copyright (c) 2016, Yamill Vallecillo (https://github.com/yamill)
// Copyright (c) 2016, Chelsey Mitchell (https://github.com/ChelseyM)
//
// License: MIT
//
import React, {
  Component,
} from 'react';
import {
  View,
  NativeMethodsMixin,
  Dimensions,
} from 'react-native';

const window = Dimensions.get('window');

class InViewPort extends Component {
  constructor(props){
    super(props);
    this.check = this.check.bind(this);
    this.startWatching = this.startWatching.bind(this);
    this.stopWatching = this.stopWatching.bind(this);
  }

  mixins = [NativeMethodsMixin];
  id;
  interval;
  lastValue;
  rectTop;
  rectBottom;
  rectWidth;

  componentDidMount() {
    if (this.props.active) {
      this.startWatching();
    }
  }

  componentWillUnmount() {
    this.stopWatching();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active) {
      this.lastValue = null;
      this.startWatching();
    } else {
      this.stopWatching();
    }
  }

  startWatching() {
    if (this.interval) { return; }
    this.interval = setInterval(this.check, this.props.delay);
  }

  stopWatching() {
    this.interval = clearInterval(this.interval);
  }

  check() {
    var el = this.refs.myview;
    var rect = el.measure((ox, oy, width, height, pageX, pageY) => {
      this.rectTop = pageY;
      this.rectBottom = pageY + height;
      this.rectWidth = pageX + width;

      var isVisible = (
        this.rectBottom != 0 && this.rectTop >= 0 && this.rectBottom <= window.height &&
        this.rectWidth > 0 && this.rectWidth <= window.width
      );

      if (this.lastValue !== isVisible) {
        this.lastValue = isVisible;
        this.props.onChange(this.props.id, isVisible);
      }
    });
  }

  render() {
    return (
      <View
        ref='myview'
        {...this.props}
      >
        {this.props.children}
      </View>
    );
  }
};

InViewPort.defaultProps = {
  active: true,
  delay: 1000
};

export default InViewPort;
