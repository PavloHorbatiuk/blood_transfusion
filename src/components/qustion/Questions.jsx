import React from 'react';
import './QuestionsStyle.css';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import BloodTable from './Table';
import BackCross from './../BackCross/BackCross';

const Accordion = styled(props => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	'&:not(:last-child)': {
		borderBottom: 0,
	},
	'&:before': {
		display: 'none',
	},
}));

const AccordionSummary = styled(props => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === 'dark'
			? 'rgba(255, 255, 255, .05)'
			: 'rgba(0, 0, 0, .03)',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(90deg)',
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Questions() {
	const [expanded, setExpanded] = React.useState('panel1');

	const handleChange = panel => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<div className="questions">
			<div className="container">
				<div className="topBtn">
					<BackCross />
				</div>

				<h1 className="title-questions">Часті запитання</h1>
				<div className="content">
					<Accordion
						expanded={expanded === 'panel1'}
						onChange={handleChange('panel1')}
					>
						<AccordionSummary
							aria-controls="panel1d-content"
							id="panel1d-header"
						>
							<Typography>Як підготуватись до донації?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<div>
								<p>
									Напередодні донації головне правильно харчуйтесь і дбайливо
									ставтесь до власного організму.
								</p>
								<p>
									<strong> За 3 доби: </strong>не вживайте ліків, у разі
									вживання ліків, будь ласка, порадьтеся з лікарем в
									плазмацентрі{' '}
								</p>
								<p>
									<strong>За 2 доби:</strong> не пийте алкогольні та енергетичні
									напої
								</p>{' '}
								<p>
									<strong> За добу(для донорів цільної крові):</strong>{' '}
									виключіть з раціону смажене, копчене, жирне, будь-яке молочне,
									яйця, ковбаси, горіхи, насіння, чіпси, магазинні соуси та
									маринади, соління, гострі спеції, фініки, виноград, банани та
									всі види цитрусових
								</p>{' '}
								<p>
									<strong>В день донації:</strong> ситний та легкий сніданок. Не
									вживайте каву, не робіть фізичні навантаження, та приходьте з
									гарним настроєм
								</p>
								<p>
									<strong>За 3 години:</strong> легкий перекус кашею на воді
									(без додавання вершкового масла)
								</p>
								<p> За 2 години: бажано не палити</p>
							</div>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={expanded === 'panel2'}
						onChange={handleChange('panel2')}
					>
						<AccordionSummary
							aria-controls="panel2d-content"
							id="panel2d-header"
						>
							<Typography>Ви можете стати донором, якщо:</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<div>
								<ul>
									<li className="list-pilgi">
										У Вас гарне здоров'я та самопочуття
									</li>
									<li className="list-pilgi">Ви старші 18 років</li>
									<li className="list-pilgi">Ваша вага не менша ніж 50 кг</li>
									<li className="list-pilgi">
										Температура тіла не перевищує 36.6 ± 0.3°С
									</li>
									<li className="list-pilgi">
										Кров'яний тиск у діапазоні 160/90 до 110/60
									</li>
									<li className="list-pilgi">
										Пульс ритмічний від 60 до 90 ударів на хвилину
									</li>
									<li className="list-pilgi">
										Ви не вживали алкоголь упродовж 48 годин перед здачею крові
									</li>
									<li className="list-pilgi">
										Ви не курили за 2 години до здачі крові
									</li>
								</ul>
							</div>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={expanded === 'panel3'}
						onChange={handleChange('panel3')}
					>
						<AccordionSummary
							aria-controls="panel3d-content"
							id="panel3d-header"
						>
							<Typography>
								Інтервали між різними видами донорства (у днях)
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<BloodTable />
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={expanded === 'panel4'}
						onChange={handleChange('panel4')}
					>
						<AccordionSummary
							aria-controls="panel4d-content"
							id="panel4d-header"
						>
							<Typography>Кожному донору безоплатно визначають:</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<p>перед здачею:</p>
							<ul>
								<li className="list-pilgi">групу крові і резус;</li>
								<li className="list-pilgi">гемоглобін;</li>
								<li className="list-pilgi">гематокрит</li>
							</ul>
							<p>після здачі</p>
							<ul>
								<li className="list-pilgi">ВІЛ (СНІД);</li>
								<li className="list-pilgi">сифіліс;</li>
								<li className="list-pilgi">гепатити В і С</li>
							</ul>
						</AccordionDetails>
					</Accordion>
					<p className="title-questions">
						<strong>довідки за тел. 63-68-90; 067-363-41-44</strong>
					</p>
				</div>
			</div>
		</div>
	);
}
