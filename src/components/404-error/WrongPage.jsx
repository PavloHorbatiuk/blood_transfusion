import React from 'react';
import './WrongStylePage.css';
import './../qustion/QuestionsStyle.css';
import BackCross from './../BackCross/BackCross';

function WrongPage() {
	return (
		<div className="wrongPage">
			<div className="container">
				<div className="content">
					<h2 className="num-four">404</h2>
					<div className="title404">Ой лишенько!</div>{' '}
					<div className="title404">🙄 Щось пішло не так :(</div>
					<p>Cторінку було видалено системою, aбо</p>
					<p> адресна строка містить помилки - перевірте чи</p>
					<p>правильно ви ввели посилання</p>
				</div>
				<div className="btn-wrong">
					<BackCross />
				</div>
			</div>
		</div>
	);
}

export default WrongPage;
