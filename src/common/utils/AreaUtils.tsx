import { AvailableLanguages } from '@/i18n/settings';

export function getFullAreaName(country: AvailableLanguages, subArea: string): string {
  // 지역데이터 획득 후 일치하는 풀지역명 반환, 없으면 null반환
  const areas = getAreaByCountry(country);
  for (const area of areas) {
    if (area.subArea.includes(subArea)) {
      return `${area.name} ${subArea}`;
    }
  }
  return '';
}

export function getAreaByCountry(country: AvailableLanguages): Array<Area> {
  if (country === 'ko') {
    return KoArea;
  } else if (country === 'en') {
    return UsArea;
  } else {
    return []
  }
}

const KoArea: Array<Area> = [
  {
    name: '서울특별시',
    subArea: [
      '강남구',
      '강동구',
      '강북구',
      '강서구',
      '관악구',
      '광진구',
      '구로구',
      '금천구',
      '노원구',
      '도봉구',
      '동대문구',
      '동작구',
      '마포구',
      '서대문구',
      '서초구',
      '성동구',
      '성북구',
      '송파구',
      '양천구',
      '영등포구',
      '용산구',
      '은평구',
      '종로구',
      '중구',
      '중랑구',
    ],
  },
  {
    name: '경기도',
    subArea: [
      '고양시',
      '과천시',
      '광명시',
      '광주시',
      '구리시',
      '군포시',
      '김포시',
      '남양주시',
      '동두천시',
      '부천시',
      '성남시',
      '수원시',
      '시흥시',
      '안산시',
      '안성시',
      '안양시',
      '양주시',
      '오산시',
      '용인시',
      '의왕시',
      '의정부시',
      '이천시',
      '파주시',
      '평택시',
      '포천시',
      '하남시',
      '화성시',
      '가평군',
      '양평군',
      '여주군',
      '연천군',
    ],
  },
  {
    name: '인천광역시',
    subArea: [
      '계양구',
      '미추홀구',
      '남동구',
      '동구',
      '부평구',
      '서구',
      '연수구',
      '중구',
      '강화군',
      '옹진군',
    ],
  },
  {
    name: '대전광역시',
    subArea: ['대덕구', '동구', '서구', '유성구', '중구'],
  },
  {
    name: '대구광역시',
    subArea: [
      '남구',
      '달서구',
      '동구',
      '북구',
      '서구',
      '수성구',
      '중구',
      '달성군',
    ],
  },
  {
    name: '부산광역시',
    subArea: [
      '강서구',
      '금정구',
      '남구',
      '동구',
      '동래구',
      '부산진구',
      '북구',
      '사상구',
      '사하구',
      '서구',
      '수영구',
      '연제구',
      '영도구',
      '중구',
      '해운대구',
      '기장군',
    ],
  },
  {
    name: '울산광역시',
    subArea: ['남구', '동구', '북구', '중구', '울주군'],
  },
  {
    name: '광주광역시',
    subArea: ['광산구', '남구', '동구', '북구', '서구'],
  },
  {
    name: '강원도',
    subArea: [
      '강릉시',
      '동해시',
      '삼척시',
      '속초시',
      '원주시',
      '춘천시',
      '태백시',
      '고성군',
      '양구군',
      '양양군',
      '영월군',
      '인제군',
      '정선군',
      '철원군',
      '평창군',
      '홍천군',
      '화천군',
      '횡성군',
    ],
  },
  {
    name: '충청북도',
    subArea: [
      '제천시',
      '청주시',
      '충주시',
      '괴산군',
      '단양군',
      '보은군',
      '영동군',
      '옥천군',
      '음성군',
      '증평군',
      '진천군',
      '청원군',
    ],
  },

  {
    name: '충청남도',
    subArea: [
      '계룡시',
      '공주시',
      '논산시',
      '보령시',
      '서산시',
      '아산시',
      '천안시',
      '금산군',
      '당진군',
      '부여군',
      '서천군',
      '연기군',
      '예산군',
      '청양군',
      '태안군',
      '홍성군',
    ],
  },

  {
    name: '경상북도',
    subArea: [
      '경산시',
      '경주시',
      '구미시',
      '김천시',
      '문경시',
      '상주시',
      '안동시',
      '영주시',
      '영천시',
      '포항시',
      '고령군',
      '군위군',
      '봉화군',
      '성주군',
      '영덕군',
      '영양군',
      '예천군',
      '울릉군',
      '울진군',
      '의성군',
      '청도군',
      '청송군',
      '칠곡군',
    ],
  },
  {
    name: '경상남도',
    subArea: [
      '거제시',
      '김해시',
      '마산시',
      '밀양시',
      '사천시',
      '양산시',
      '진주시',
      '진해시',
      '창원시',
      '통영시',
      '거창군',
      '고성군',
      '남해군',
      '산청군',
      '의령군',
      '창녕군',
      '하동군',
      '함안군',
      '함양군',
      '합천군',
    ],
  },
  {
    name: '전라북도',
    subArea: [
      '군산시',
      '김제시',
      '남원시',
      '익산시',
      '전주시',
      '정읍시',
      '고창군',
      '무주군',
      '부안군',
      '순창군',
      '완주군',
      '임실군',
      '장수군',
      '진안군',
    ],
  },
  {
    name: '전라남도',
    subArea: [
      '광양시',
      '나주시',
      '목포시',
      '순천시',
      '여수시',
      '강진군',
      '고흥군',
      '곡성군',
      '구례군',
      '담양군',
      '무안군',
      '보성군',
      '신안군',
      '영광군',
      '영암군',
      '완도군',
      '장성군',
      '장흥군',
      '진도군',
      '함평군',
      '해남군',
      '화순군',
    ],
  },
  {
    name: '제주도',
    subArea: ['서귀포시', '제주시'],
  },
];

const UsArea: Array<Area> = [
  {
    name: 'Alabama',
    subArea: ['Birmingham', 'Montgomery', 'Huntsville', 'Mobile', 'Tuscaloosa'],
  },
  {
    name: 'Alaska',
    subArea: ['Anchorage', 'Fairbanks', 'Juneau', 'Sitka', 'Ketchikan'],
  },
  {
    name: 'Arizona',
    subArea: ['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Glendale'],
  },
  {
    name: 'Arkansas',
    subArea: ['Little Rock', 'Fort Smith', 'Fayetteville', 'Springdale', 'Jonesboro'],
  },
  {
    name: 'California',
    subArea: ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento', 'San Jose'],
  },
  {
    name: 'Colorado',
    subArea: ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Lakewood'],
  },
  {
    name: 'Connecticut',
    subArea: ['Hartford', 'Bridgeport', 'New Haven', 'Stamford', 'Waterbury'],
  },
  {
    name: 'Delaware',
    subArea: ['Wilmington', 'Dover', 'Newark', 'Middletown', 'Smyrna'],
  },
  {
    name: 'Florida',
    subArea: ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Tallahassee'],
  },
  {
    name: 'Georgia',
    subArea: ['Atlanta', 'Augusta', 'Savannah', 'Columbus', 'Macon'],
  },
  {
    name: 'Hawaii',
    subArea: ['Honolulu', 'Hilo', 'Kailua', 'Kaneohe', 'Lahaina'],
  },
  {
    name: 'Idaho',
    subArea: ['Boise', 'Nampa', 'Meridian', 'Idaho Falls', 'Pocatello'],
  },
  {
    name: 'Illinois',
    subArea: ['Chicago', 'Aurora', 'Naperville', 'Rockford', 'Joliet'],
  },
  {
    name: 'Indiana',
    subArea: ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Carmel'],
  },
  {
    name: 'Iowa',
    subArea: ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City', 'Iowa City'],
  },
  {
    name: 'Kansas',
    subArea: ['Wichita', 'Overland Park', 'Kansas City', 'Topeka', 'Olathe'],
  },
  {
    name: 'Kentucky',
    subArea: ['Louisville', 'Lexington', 'Bowling Green', 'Covington', 'Richmond'],
  },
  {
    name: 'Louisiana',
    subArea: ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette', 'Lake Charles'],
  },
  {
    name: 'Maine',
    subArea: ['Portland', 'Lewiston', 'Bangor', 'Augusta', 'South Portland'],
  },
  {
    name: 'Maryland',
    subArea: ['Baltimore', 'Frederick', 'Rockville', 'Gaithersburg', 'Bowie'],
  },
  {
    name: 'Massachusetts',
    subArea: ['Boston', 'Worcester', 'Springfield', 'Cambridge', 'Lowell'],
  },
  {
    name: 'Michigan',
    subArea: ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Ann Arbor'],
  },
  {
    name: 'Minnesota',
    subArea: ['Minneapolis', 'Saint Paul', 'Rochester', 'Duluth', 'Bloomington'],
  },
  {
    name: 'Mississippi',
    subArea: ['Jackson', 'Gulfport', 'Southaven', 'Hattiesburg', 'Biloxi'],
  },
  {
    name: 'Missouri',
    subArea: ['Kansas City', 'Saint Louis', 'Springfield', 'Columbia', 'Independence'],
  },
  {
    name: 'Montana',
    subArea: ['Billings', 'Missoula', 'Great Falls', 'Bozeman', 'Butte'],
  },
  {
    name: 'Nebraska',
    subArea: ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island', 'Kearney'],
  },
  {
    name: 'Nevada',
    subArea: ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas', 'Sparks'],
  },
  {
    name: 'New Hampshire',
    subArea: ['Manchester', 'Nashua', 'Concord', 'Derry', 'Rochester'],
  },
  {
    name: 'New Jersey',
    subArea: ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Trenton'],
  },
  {
    name: 'New Mexico',
    subArea: ['Albuquerque', 'Las Cruces', 'Rio Rancho', 'Santa Fe', 'Roswell'],
  },
  {
    name: 'New York',
    subArea: ['New York City', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse'],
  },
  {
    name: 'North Carolina',
    subArea: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem'],
  },
  {
    name: 'North Dakota',
    subArea: ['Fargo', 'Bismarck', 'Grand Forks', 'Minot', 'West Fargo'],
  },
  {
    name: 'Ohio',
    subArea: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron'],
  },
  {
    name: 'Oklahoma',
    subArea: ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow', 'Edmond'],
  },
  {
    name: 'Oregon',
    subArea: ['Portland', 'Salem', 'Eugene', 'Gresham', 'Hillsboro'],
  },
  {
    name: 'Pennsylvania',
    subArea: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading'],
  },
  {
    name: 'Rhode Island',
    subArea: ['Providence', 'Warwick', 'Cranston', 'Pawtucket', 'East Providence'],
  },
  {
    name: 'South Carolina',
    subArea: ['Columbia', 'Charleston', 'North Charleston', 'Greenville', 'Summerville'],
  },
  {
    name: 'South Dakota',
    subArea: ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings', 'Mitchell'],
  },
  {
    name: 'Tennessee',
    subArea: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga', 'Clarksville'],
  },
  {
    name: 'Texas',
    subArea: ['Houston', 'San Antonio', 'Dallas', 'Austin', 'Fort Worth'],
  },
  {
    name: 'Utah',
    subArea: ['Salt Lake City', 'West Valley City', 'Provo', 'West Jordan', 'Orem'],
  },
  {
    name: 'Vermont',
    subArea: ['Burlington', 'Essex', 'South Burlington', 'Rutland', 'Barre'],
  },
  {
    name: 'Virginia',
    subArea: ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Richmond', 'Newport News'],
  },
  {
    name: 'Washington',
    subArea: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue'],
  },
  {
    name: 'West Virginia',
    subArea: ['Charleston', 'Huntington', 'Morgantown', 'Parkersburg', 'Weirton'],
  },
  {
    name: 'Wisconsin',
    subArea: ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha', 'Appleton'],
  },
  {
    name: 'Wyoming',
    subArea: ['Cheyenne', 'Casper', 'Laramie', 'Gillette', 'Rock Springs'],
  },
];