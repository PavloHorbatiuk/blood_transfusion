import React from 'react';
import './DataContactsStyle.css';
import Divider from '@mui/material/Divider';
import { MdPhone } from 'react-icons/md';
import { Chip } from '@mui/material';

const DataContacts = () => {
	return (
		<div className="data-contacts" id="contacts">
			<div className="container">
				<h1>Контакти</h1>
				<div className="content">
					<Divider>Адрес</Divider>
					<p>33014, м. Рівне, вул. Ст. Бандери, 31</p>
					<Divider>Електронна пошта</Divider>
					<p>E-mail:RivneOSPK@gmail.com </p>
					<p>
						<strong>приймальня головного лікаря </strong>
					</p>
					<Chip
						sx={{ marginTop: '1rem' }}
						icon={<MdPhone />}
						label="0362 63-68-89"
					/>
					<p>
						<strong>відділ комплектування донорських кадрів </strong>
					</p>
					<Chip
						icon={<MdPhone />}
						label="0362
                        63-68-90"
					/>
					<Chip
						sx={{ margin: '1rem' }}
						icon={<MdPhone />}
						label="моб. тел. 0673634144 "
					/>
					<p>
						<strong>
							Відділення керування запасами трансфузійних середників
							(цілодобово){' '}
						</strong>
					</p>
					<Chip
						sx={{ marginTop: '1rem' }}
						icon={<MdPhone />}
						label="0362 63-68-68"
					/>
					<Chip
						sx={{ marginLeft: '1rem', marginTop: '1rem' }}
						icon={<MdPhone />}
						label="моб. тел. 0673633076"
					/>

					<p>
						<strong>Відділ лабораторної діагностики СНІД</strong>
					</p>
					<Chip
						sx={{ marginTop: '1rem' }}
						icon={<MdPhone />}
						label="0362 62-11-32"
					/>
				</div>
			</div>
		</div>
	);
};

export default DataContacts;
