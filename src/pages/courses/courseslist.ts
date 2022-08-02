
export interface EMSCourse {
    srch: string,
    lat: number,
    lng: number
}

const WIT: EMSCourse = {
    srch: 'Wentworth Institute of Technology',
    lat: 42.33424380551404, 
    lng: -71.09359540883334
}

const BostonEMS: EMSCourse = {
    srch: 'Boston EMS',
    lat: 42.3369244189615, 
    lng: -71.07446450696094
}

const TestCourse: EMSCourse = {
    srch: 'test',
    lat: 0,
    lng: 0
}

export const courseList: EMSCourse[] = [WIT, BostonEMS, TestCourse];
