import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
    };
  }
  componentDidMount() {}
  render() {
    return (
      <>
        <h2>Counter:{this.state.count}</h2>
        <p>{this.props.name}</p>
        <h6>{this.props.num}</h6>
        <button
          onClick={() =>
            this.setState({
              count: 2,
            })
          }
        >
          ClickIt
        </button>
      </>
    );
  }
}

export default Profile;
