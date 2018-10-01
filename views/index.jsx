var React = require('react');
var DefaultLayout = require('./layouts/default');

class sayHi extends React.Component {
    render() {
        return (
            <DefaultLayout title={this.props.title}>
                <div> {this.props.name}</div>
            </DefaultLayout>
        );
    }
}

module.exports = sayHi