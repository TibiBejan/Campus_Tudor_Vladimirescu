import { lazy } from 'react';

// CAMPUS LAZY ROUTES
const Index = lazy(()=> import('../pages/Index'));
const About = lazy(()=> import('../pages/About'));
const Contact = lazy(()=> import('../pages/Contact'));
const News = lazy(()=> import('../pages/News'));
const Organisations = lazy(()=> import('../pages/Organisations'));
const StudentServices = lazy(()=> import('../pages/StudentServices'));
const Cafetaria = lazy(()=> import('../pages/Cafetaria'));
const SportsBase = lazy(()=> import('../pages/SportsBase'));
const Tuiasi = lazy(()=> import('../pages/Tuiasi'));
const HealthSecurity = lazy(()=> import('../pages/HealthSecurity'));
const Police = lazy(()=> import('../pages/Police'));
const Dispensary = lazy(()=> import('../pages/Dispensary'));
const CounselingCenter = lazy(()=> import('../pages/CounselingCenter'));
const Accommodation = lazy(()=> import('../pages/Accommodation'));
const ResidenceHalls = lazy(()=> import('../pages/ResidenceHalls'));
const ResidenceHall = lazy(()=> import('../pages/ResidenceHall'));
const FAQ = lazy(()=> import('../pages/FAQ'));
const Post = lazy(()=> import('../pages/Post'));

// ADMIN LAZY ROUTES
const AdminDashboard = lazy(()=> import('../pages/AdminDashboard'));
const AdminDashboardAccountInfo = lazy(()=> import('../pages/AdminDashboardAccountInfo'));
const AdminDashboardPassword = lazy(()=> import('../pages/AdminDashboardPassword'));
const AdminDashboardCreateAcc = lazy(()=> import('../pages/AdminDashboardCreateAcc'));
const AdminDashboardStudent = lazy(()=> import('../pages/AdminDashboardStudent'));

// STUDENT LAZY ROUTES
const StudentDashboard = lazy(()=> import('../pages/StudentDashboard'));
const StudentDashboardPwdUpdate = lazy(()=> import('../pages/StudentDashboardPwdUpdate'));
const StudentDashboardAccountInfo = lazy(()=> import('../pages/StudentDashboardAccountInfo'));
const StudentDashboardEnrollment = lazy(()=> import('../pages/StudentDashboardEnrollment'));
const StudentDashboardEnrollmentConfirm = lazy(()=> import('../pages/StudentDashboardEnrollmentConfirm'));
const StudentDashboardInformation = lazy(()=> import('../pages/StudentDashboardInfromation'));
const StudentDashboardKin = lazy(()=> import('../pages/StudentDashboardKin'));
const StudentDashboardKinUpdate = lazy(()=> import('../pages/StudentDashboardKinUpdate'));

// PUBLIC LAZY ROUTES
const Login = lazy(()=> import('../pages/Login'));
const Register = lazy(()=> import('../pages/Register'));
const ForgotPassword = lazy(()=> import('../pages/ForgotPassword'));
const ResetPassword = lazy(()=> import('../pages/ResetPassword'));


export const campusRoutes = [
    {
        path: '/',
        component: Index,
        exact: true,
    },
    {
        path: '/about',
        component: About,
        exact: true,
    },
    {
        path: '/contact',
        component: Contact,
        exact: true,
    },
    {
        path: '/news',
        component: News,
        exact: true,
    },
    {
        path: '/news/:post',
        component: Post,
        exact: true,
    },
    {
        path: '/health-security',
        component: HealthSecurity,
        exact: true,
    },
    {
        path: '/health-security/police',
        component: Police,
        exact: true,
    },
    {
        path: '/health-security/dispensary',
        component: Dispensary,
        exact: true,
    },
    {
        path: '/health-security/counseling-center',
        component: CounselingCenter,
        exact: true,
    },
    {
        path: '/organisations',
        component: Organisations,
        exact: true,
    },
    {
        path: '/dss',
        component: StudentServices,
        exact: true,
    },
    {
        path: '/cafeteria',
        component: Cafetaria,
        exact: true,
    },
    {
        path: '/sports-base',
        component: SportsBase,
        exact: true,
    },
    {
        path: '/tuiasi',
        component: Tuiasi,
        exact: true,
    },
    {
        path: '/accommodation',
        component: Accommodation,
        exact: true,
    },
    {
        path: '/residence-halls',
        component: ResidenceHalls,
        exact: true,
    },
    {
        path: '/residence-halls/:hallName',
        component: ResidenceHall,
        exact: true,
    },
    {
        path: '/questions',
        component: FAQ,
        exact: true,
    },
];

export const publicRoutes = [
    {
        path: '/login',
        component: Login,
        exact: true,
    },
    {
        path: '/register',
        component: Register,
        exact: true,
    },
    {
        path: '/forgot-password',
        component: ForgotPassword,
        exact: true,
    },
    {
        path: '/reset-password/:id',
        component: ResetPassword,
        exact: true,
    },
];

export const studentRoutes = [
    {
        path: '/:name/dashboard',
        component: StudentDashboard,
        role: 'student',
        exact: true,
    },
    {
        path: '/:name/update-password',
        component: StudentDashboardPwdUpdate,
        role: 'student',
        exact: true,
    },
    {
        path: '/:name/update-details',
        component: StudentDashboardAccountInfo,
        role: 'student',
        exact: true,
    },
    {
        path: '/:name/enrollment',
        component: StudentDashboardEnrollment,
        role: 'student',
        exact: true,
    },
    {
        path: '/:name/enrollment/success',
        component: StudentDashboardEnrollmentConfirm,
        role: 'student',
        exact: true,
    },
    {
        path: '/:name/information',
        component: StudentDashboardInformation,
        role: 'student',
        exact: true,
    },
    {
        path: '/:name/kins',
        component: StudentDashboardKin,
        role: 'student',
        exact: true,
    },
    {
        path: '/:name/kins/:id',
        component: StudentDashboardKinUpdate,
        role: 'student',
        exact: true,
    },
];

export const adminRoutes = [
    {
        path: '/admin',
        component: AdminDashboard,
        role: 'admin',
        exact: true,
    },
    {
        path: '/admin-details',
        component: AdminDashboardAccountInfo,
        role: 'admin',
        exact: true,
    },
    {
        path: '/admin-password',
        component: AdminDashboardPassword,
        role: 'admin',
        exact: true,
    },
    {
        path: '/admin/:id',
        component: AdminDashboardStudent,
        role: 'admin',
        exact: true,
    },
    {
        path: '/admin-create',
        component: AdminDashboardCreateAcc,
        role: 'admin',
        exact: true,
    },
];
