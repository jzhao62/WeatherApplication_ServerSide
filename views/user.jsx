var React = require('react');
var DefaultLayout = require('./layouts/default');

class HelloMessage extends React.Component {
    render() {
        return (
            <DefaultLayout title={this.props.title}>
                <div>{this.props.name} </div>
            </DefaultLayout>
        );
    }
}

module.exports = HelloMessage;