# React Portfolio

This is my portfolio site written according to MERN Stack.

## What I've used?

* ReactJS

## Installation

```
git clone

npm install
```

## Build an app with ReactJS

There are several steps we have to follow to create an app with ReactJS efficiently. 

1. Breaking the app into components

We look at the UI design and determine what we want

2. Building a static version of the app

In these scenarios, the server will be the initial source of state.

3. Determining what should be stateful, what should be live

At this point, we'll have the data flow from parent to child in place. Then we can inverse data flow, propagating events from child to parent.

## Practices in ReactJS

#### 1. Installation

**React**:
```
npm install react --save
```
**React DOM**:
```
npm install react-dom --save
```

**Using boilerplate**: `create-react-app`

```
mkdir folderName
cd folderName

create-react-app .

code .

npm start
```

#### 2. Components

```jsx
class Link extends React.Component {
  render() {
    return (
      <React.Fragment>

      </React.Fragment>
    )
  }
}
```

Or we can use `div` instead of `React.Fragment`

**Advanced Components**:

```jsx
class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <a className="btn" onClick={this.onClick} href={this.props.href}>
        Click -> {
          (this.props.href ? this.props.href : 'https://github.com')
        }
        (Clicked: {this.state.count})
      </a>
    )
  }
}
Link.propTypes = { initialCount: React.PropTypes.number }
Link.defaultProps = { initialCount: 0 }
```

#### 3. Some lifecycle events

* componentWillMount function()
* componentDidMount function()
* componentWillReceiveProps function(nextProps)
* shouldComponentUpdate function(nextProps, nextState) -> bool
* componentWillUpdate function(nextProps, nextState)
* componentDidUpdate function(prevProps, prevState)
* componentWillUnmount function()