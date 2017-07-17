import { h, Component } from 'preact';
import style from './style';

import { Form } from 'semantic-ui-react';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>This is the Home component.</p>
                <Form>
                    <Form.Checkbox label='Why the errors?'/>
                </Form>
			</div>
		);
	}
}
