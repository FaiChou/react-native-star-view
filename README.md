# react-native-star-view [![Build Status](https://travis-ci.org/FaiChou/react-native-star-view.svg?branch=master)](https://travis-ci.org/FaiChou/react-native-star-view) ![license](https://img.shields.io/github/license/mashape/apistatus.svg)

<img src="http://o7bkcj7d7.bkt.clouddn.com/StarView.png" width="400"/>

### How to use

Install package:

```
npm install --save react-native-star-view
# or
yarn add react-native-star-view
```

Import to your app:

```
import Star from 'react-native-star-view';
```

Use the component:

```
  render() {
    const starStyle = {
      width: 100,
      height: 20,
      marginBottom: 20,
    };
    return (
      <View style={styles.container}>
        <Star score={0} style={starStyle} />
        <Star score={0.5} style={starStyle} />
        <Star score={1} style={starStyle} />
        <Star score={2} style={starStyle} />
        <Star score={3} style={starStyle} />
        <Star score={3.5} style={starStyle} />
        <Star score={4} style={starStyle} />
        <Star score={4.2} style={starStyle} />
        <Star score={4.7} style={starStyle} />
        <Star score={5} style={starStyle}/>
      </View>
    );
  }
```

### API

API name       | Desc
---------------|----------------------------------------
score          | score number, Required
totalScore     | total score, default is 5, Optional
style          | style of container, Optional
