import React from 'react';
import StudentDashboardNav from '../StudentDashboardNav/StudentDashboardNav';
import { Link } from 'react-router-dom';
// REUDX
import { useSelector } from 'react-redux';
import { userSelector } from '../../../redux/userSlice';
import './StudentDashboardMain.scss';

function StudentDashboardMain() {

    // GLOBAL STATE SLICE
    const userState = useSelector(userSelector);

    return (
        <section className="dashboard-main">
            <div className="dashboard-main-inner">
                <StudentDashboardNav />
                <div className="dashboard-information">
                    <h3 className="information-title heading-three">Bine ai venit, {`${userState.user.last_name} ${userState.user.first_name}`}</h3>
                    <p className="information-description paragraph">Pe această pagină se vor regăsi informațiile dumneavoastră privind căminul și camera în care ați fost repartizat din campusul nostru, precum și viitorii colegi de cameră. De asemenea, utilizând link-urile de mai sus puteți să vă actualizați informațiile generale , puteți să adaugați persoane de contact sau puteți să vă actualizați parola. În cazul în care nu sunteți înrolat, dar doriți să fiți repartizat în campusul Tudor Vladimirescu, vă rugam să urmați pașii de mai jos.</p>
                    <ol className="information-accommodation-steps">
                        <li className="accommodation-step">
                            <p className="accommodation-step-label paragraph">
                                Primul pas din cadrul procesului de cazare consta in actualizarea informatiilor dumneavoastră generale. Acestea pot fi completate accesand link-ul urmator:
                                <Link to={`/${userState.user.first_name}.${userState.user.last_name}/information`} className="step-link">
                                    <span className="step-link-label label">Datele studentului</span>
                                </Link>
                            </p>
                        </li>
                        <li className="accommodation-step">
                            <p className="accommodation-step-label paragraph">
                                Al doilea pas din cadrul procesului de cazare consta in actualizarea persoanei/persoanelor de contact. Acestea pot fi adaugate accesand link-ul urmator:
                                <Link to={`/${userState.user.first_name}.${userState.user.last_name}/kins`} className="step-link">
                                    <span className="step-link-label label">Persoane de contact</span>
                                </Link>
                            </p>
                        </li>
                        <li className="accommodation-step">
                            <p className="accommodation-step-label paragraph">
                                Ultimul pas din cadrul procesului de cazare consta in inrolarea propriu-zisa. Aceasta poate fi completata accesand link-ul urmator:
                                <Link to={`/${userState.user.first_name}.${userState.user.last_name}/enrollment`} className="step-link">
                                    <span className="step-link-label label">Inrolare</span>
                                </Link>
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default StudentDashboardMain;
