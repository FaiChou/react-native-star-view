import React from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import YellowStar from './star-yellow.png';
import GrayStar from './star-gray.png';
import HalfStar from './star-half.png';
const STAR_COUNT = 5;

// default total score is 5
// if score >= 3.3 and score < 3.8 contain half star
// default length is 150 height is 30
class Star extends React.PureComponent {
  render() {
    const { score, totalScore, style } = this.props;
    const scale = totalScore / STAR_COUNT;
    let yellowStarCount = ~~(score / scale);
    const dif = (score/scale) - yellowStarCount
    let halfStarCount = 0;
    let grayStarCount = STAR_COUNT - yellowStarCount;
    if (0 <= dif && dif < 0.3) {
      // console.log('0 <= dif && 0 < 0.3');
    } else if (0.3 <= dif && dif < 0.8) {
      halfStarCount = 1;
      grayStarCount = grayStarCount - 1;
    } else if (dif >= 0.8) {
      yellowStarCount = yellowStarCount + 1;
      grayStarCount = grayStarCount - 1;
    }
    let flattenStyle = {};
    if (typeof style === 'number') {
      flattenStyle = StyleSheet.flatten([style]);
    } else {
      flattenStyle = style;
    }
    const starWidth = flattenStyle.width/STAR_COUNT || 30;
    const starHeight = flattenStyle.height || 30;
    const Star = ({source}) => (
      <View style={[Styles.star, { width: starWidth, height: starHeight }]}>
        <Image
          source={source}
          style={[Styles.starImg, {
            width: starWidth*0.8, height: starHeight*0.8
          }]} />
      </View>
    );
    return (
      <View style={[Styles.container, style]}>
        {Array(yellowStarCount).fill().map((e, i) => <Star key={i.toString()} source={YellowStar} />)}
        {Array(halfStarCount).fill().map((e, i) => <Star key={i.toString()} source={HalfStar} />)}
        {Array(grayStarCount).fill().map((e, i) => <Star key={i.toString()} source={GrayStar} />)}
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    width: 150,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  star: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  starImg: {
    width: '80%',
    height: '80%',
  },
});

Star.propTypes = {
  score: PropTypes.number.isRequired,
  totalScore: PropTypes.number,
  style: PropTypes.any,
};

Star.defaultProps = {
  totalScore: 5,
  style: {
    width: 150,
    height: 30,
  },
};

export default Star;
