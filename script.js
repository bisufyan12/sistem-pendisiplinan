// DATA MASTER SIMULASI
const DATA_GURU = [
    { nip: '19800101', nama: 'Budi Santoso, S.Pd.', isPembina: true }, // Diberi flag Admin
    { nip: '19850202', nama: 'Siti Aminah, M.Pd.', isPembina: false },
    {nip: '196809171992031007', nama: 'Drs. H. AGUS SETIAWAN, M.Pd.', isPembina: true },
    {nip: '196801191994122001', nama: 'Dra. TENI SUKMAWATI', isPembina: false },
    {nip: '196801081993032004', nama: 'Dra.RINA MELATI', isPembina: false},
    {nip: '196608171990031006', nama: 'AGUS RIYANTO, S.Pd', isPembina: true},
    {nip: '196712151991031009', nama: 'DEDEN KUSWARA, S.Pd.', isPembina: false},
    {nip: '197008181995121003', nama: 'DIDIK JOKO PRAYITNO, M.Pd.', isPembina: true},
    {nip: '196607281990032005', nama: 'ROBIATI, S.Pd', isPembina: false},
    {nip: '196802071991031006', nama: 'H. ENGKOS HENDRAYANA, M.Pd', isPembina: false},
    {nip: '196702151991011003', nama: 'SAPE I, S.Pd.', isPembina: false},
    {nip: '197009042000031004', nama: 'MAMAN SUKMANA, S.Pd', isPembina: false},
    {nip: '197210222005011008', nama: 'YUDI KIRMADI, S.Pd., M.Pd.', isPembina: true},
    {nip: '197710302008012005', nama: 'Hj. HERNI NURAENI, S.Pd', isPembina: false},
    {nip: '197709242005012010', nama: 'AIDA AMALIA, S.Pd', isPembina: true},
    {nip: '196609262005011002', nama: 'II HUDORI, S.Pd', isPembina: true},
    {nip: '198709172011012003', nama: 'LIA KOMALASARI, S.Pd.', isPembina: false},
    {nip: '198411172009032002', nama: 'ROMAULI PANJAITAN, S.Pd', isPembina: false},
    {nip: '197102012011011001', nama: 'SABAM PASARIBU, S.Pd', isPembina: false},
    {nip: '199112012019032012', nama: 'NUNIK RASTANTI, S.Pd.', isPembina: false},
    {nip: '199311052019031012', nama: 'RIZKI ANANDA, S.Pd.', isPembina: false},
    {nip: '197905202022212013', nama: 'MIMIN MINTARSIH, S.Pd', isPembina: true},
    {nip: '199303282022212014', nama: 'RINRIN NURHIDAYANTI, S.Pd.', isPembina: true},
    {nip: '199412182022212022', nama: 'FISKA DESI WARDI, S.Pd.', isPembina: false},
    {nip: '199510082022211005', nama: 'IQBAL NURIANA, S.Sn', isPembina: false},
    {nip: '198506142022212034', nama: 'RINI PURBASARI, S.Pd.', isPembina: false},
    {nip: '199105262022211011', nama: 'NANDAR HARYANA, S.Pd.', isPembina: true},
    {nip: '199107272022211011', nama: 'ANGGA EKA PRATAMA, S.Pd.', isPembina: false},
    {nip: '197602012022212006', nama: 'SRI MURNI, S,S', isPembina: false},
    {nip: '198405192022211008', nama: 'ABDUL AZIZIL HAKIM, S.Pd', isPembina: false},
    {nip: '198506082022211021', nama: 'RASITO ROMADONA, S.Pd.', isPembina: true},
    {nip: '198601172022212032', nama: 'ATNI ADIA, S.ST', isPembina: false},
    {nip: '199104212022212015', nama: 'SITI HODIJAH, S.Pd', isPembina: false},
    {nip: '199304082022212025', nama: 'HAYATUL MARDHIYAH, S.Pd', isPembina: false},
    {nip: '199510182022212011', nama: 'DITA AMALIA, S.Pd', isPembina: false},
    {nip: '199603122022211002', nama: 'ROBBY SOPYAN, S.Pd', isPembina: true},
    {nip: '199501022022211001', nama: 'MUHAMMAD NUR ROHIM, S.Pd.', isPembina: false},
    {nip: '198604082023211011', nama: 'RIZKI MIFTAH FARID, S..Pd.', isPembina: false},
    {nip: '198008082024211007', nama: 'DEDI SOFYAN, S.S', isPembina: false},
    {nip: '199109062024211015', nama: 'DERIANUR SUPARTA, S.Kom', isPembina: false},
    {nip: '199211082024212021', nama: 'EKA ROHMAYASARI, S.Pd.', isPembina: false},
    {nip: '198206062024211007', nama: 'MAHMUD FAUZI, SE', isPembina: false},
    {nip: '198403272024212014', nama: 'RINI EFFENDI, SE', isPembina: false},
    {nip: '197605062024212004', nama: 'SUSY ROSTINAH, S.Ag.', isPembina: false},
    {nip: '198907042024211016', nama: 'TINO BUDI SUSILO, S.Pd.', isPembina: true},
    {nip: '198212192024212010', nama: 'YENI RAHMAWATI, S.Pd.', isPembina: false},
    {nip: '197704032022212004', nama: 'WIWIEK WILLIYA, M.Kom.', isPembina: false},
    {nip: '198602132025212064', nama: 'NINA HERLIANAWATI, S.Pd', isPembina: false},
    {nip: '196912192025212008', nama: 'Dra. Hj. MASRO AH', isPembina: false},
    {nip: '198706062025212139', nama: 'NANI SUMARNI, S.Pd.I', isPembina: false},
    {nip: '199109172025212121', nama: 'HELMI LISTIANI, S.Pd', isPembina: false},
    {nip: '199102132025211103', nama: 'APIP ABDUL LATIP, S.Pd.I', isPembina: false},
    {nip: '199609132025212134', nama: 'WILDA TRI YANTI, S.Pd', isPembina: false},
    {nip: '199609242025212093', nama: 'LUTFI NURSYIFA, S.Pd', isPembina: false},
    {nip: '199705042025212100', nama: 'AVIRELL PUTERI, S.Pd', isPembina: false},
    {nip: '199507242025212128', nama: 'HENI YULIANTI, S.Ak', isPembina: false},
    {nip: '199304142025211153', nama: 'YAYAN SURYANA FATAH, S.Pd.', isPembina: false},
    {nip: '197002082025212014', nama: 'ENDAH ERAWATI', isPembina: false},
    {nip: '197805052025211139', nama: 'SUHERDI', isPembina: false},
    {nip: '198506012025211082', nama: 'NANANG ABDUL ROHMAN, S.I.Pust', isPembina: false},
    {nip: '198511032025212073', nama: 'RENI NOVI ANDRIYANI, SE', isPembina: false},
    {nip: '199208012025211184', nama: 'FIRMAN AL GHANY, S.Sy', isPembina: false},
    {nip: '199406022025211115', nama: 'JANG LANA ', isPembina: false},
    {nip: '200203222025211013', nama: 'RIZKI MAULANA IBRAHIM', isPembina: false},
    {nip: '200202182025212016', nama: 'RINI DELLISA', isPembina: false},
    {nip: '198603232025211164', nama: 'USEP SUPENDI', isPembina: false},
    {nip: '197911102025211099', nama: 'MUHAMMAD HUSEIN', isPembina: false},
    {nip: '199407122025211140', nama: 'BACHTIAR ABDU ZABAR', isPembina: false}
];

const DATA_SISWA = [
    {nisn: '104057390', nama: 'ABDUL RIZIQ', kelas: 'X.1'},
    {nisn: '118621973', nama: 'ABEL SRY REZEKI LIMBONG', kelas: 'X.1'},
    {nisn: '125144206', nama: 'ALIA MALIKA ZULKARNAEN', kelas: 'X.1'},
    {nisn: '113213571', nama: 'ALIN SORAYA', kelas: 'X.1'},
    {nisn: '105749034', nama: 'ANINDYA NAILAH PUTRI', kelas: 'X.1'},
    {nisn: '108007642', nama: 'AQILLA NAFISA', kelas: 'X.1'},
    {nisn: '114200274', nama: 'ASOKA SASTRABAHU', kelas: 'X.1'},
    {nisn: '112390744', nama: 'AYUNI DWI LESTARI', kelas: 'X.1'},
    {nisn: '3113260423', nama: 'CALULLA AJTRIANI SUDRAJAT', kelas: 'X.1'},
    {nisn: '101321371', nama: 'DANIS ISKANDAR', kelas: 'X.1'},
    {nisn: '94858434', nama: 'DEA MUTIA', kelas: 'X.1'},
    {nisn: '107655099', nama: 'DHEA LASMINI', kelas: 'X.1'},
    {nisn: '104597106', nama: 'DINDIN KHOERUDIN', kelas: 'X.1'},
    {nisn: '117090627', nama: 'EVA RAHMA ZAHIRA', kelas: 'X.1'},
    {nisn: '118283419', nama: 'FERNANDO ALEXA PUTRA', kelas: 'X.1'},
    {nisn: '109691537', nama: 'FITHRI QORRATU`AINI', kelas: 'X.1'},
    {nisn: '115679575', nama: 'GARUDA SYAHDAN AZIZI', kelas: 'X.1'},
    {nisn: '119335148', nama: 'IMEL AULIANSYAH', kelas: 'X.1'},
    {nisn: '105474620', nama: 'INNA SHALAATI ASYSYIFA', kelas: 'X.1'},
    {nisn: '3187621831', nama: 'KEYLA ALIA PUTRI', kelas: 'X.1'},
    {nisn: '118094756', nama: 'KIKI PRATAMA', kelas: 'X.1'},
    {nisn: '101081586', nama: 'LASYA AMIRA DEWI', kelas: 'X.1'},
    {nisn: '102923833', nama: 'MANDALA SURYADI PUTRA', kelas: 'X.1'},
    {nisn: '112926189', nama: 'MAYLA NAFA RIZQIANI', kelas: 'X.1'},
    {nisn: '112079396', nama: 'MUHAMMAD ALIF FIRDAUS', kelas: 'X.1'},
    {nisn: '108067662', nama: 'MUHAMMAD GHANI AL-HAQI', kelas: 'X.1'},
    {nisn: '115098537', nama: 'MUHAMMAD WILDAN ALFARIZI', kelas: 'X.1'},
    {nisn: '116837500', nama: 'MUTIA NUR FADHILAH', kelas: 'X.1'},
    {nisn: '101474411', nama: 'NAJWA ASHILAH', kelas: 'X.1'},
    {nisn: '114705851', nama: 'NATHAYA SHAFIYAAH SUSAEI', kelas: 'X.1'},
    {nisn: '103971782', nama: 'NAWFAL AKMALFARUQ ASSYAHNI', kelas: 'X.1'},
    {nisn: '117038521', nama: 'NISRINA ADIARTI ULFAH', kelas: 'X.1'},
    {nisn: '107234987', nama: 'NURMALA SARI', kelas: 'X.1'},
    {nisn: '114883927', nama: 'RAJA ALKHIDIR GIBRAN NUGROHO', kelas: 'X.1'},
    {nisn: '113039139', nama: 'RAYYA KHAIRUNNISA', kelas: 'X.1'},
    {nisn: '102602701', nama: 'RIDWAN PRASETYO', kelas: 'X.1'},
    {nisn: '114394651', nama: 'RISKA AULIA', kelas: 'X.1'},
    {nisn: '114752521', nama: 'SASSY KIRANA SIWI', kelas: 'X.1'},
    {nisn: '3111228711', nama: 'SHAFA` QOTHRUN NADA', kelas: 'X.1'},
    {nisn: '109715005', nama: 'SITI MUQOYIMAH', kelas: 'X.1'},
    {nisn: '105881782', nama: 'SONIA AZ`ZAHRA', kelas: 'X.1'},
    {nisn: '105006944', nama: 'SUPRIYATNO', kelas: 'X.1'},
    {nisn: '118138920', nama: 'TIYA ALILA ANDRIYANI', kelas: 'X.1'},
    {nisn: '112973342', nama: 'WULANI SETIANA BASUKI', kelas: 'X.1'},
    {nisn: '98539295', nama: 'YAHYA TRIMAULIDAN MAHARDHIKA', kelas: 'X.1'},
    {nisn: '104017012', nama: 'ZIVARA NAYA RENATA', kelas: 'X.1'},
    {nisn: '102224717', nama: 'ABDUL RIZKI ARIPIN', kelas: 'X.2'},
    {nisn: '126251410', nama: 'ADARA CHARISSA JUNIAWAN', kelas: 'X.2'},
    {nisn: '105539692', nama: 'AJENG NALA QURROTUL AYUN', kelas: 'X.2'},
    {nisn: '105383293', nama: 'ALINDA MASRUROH', kelas: 'X.2'},
    {nisn: '118320688', nama: 'ANDARA KAYLANISA ARIFIN', kelas: 'X.2'},
    {nisn: '101284176', nama: 'ARNES TASYA', kelas: 'X.2'},
    {nisn: '116310415', nama: 'AUFA AYU NINDIA SALEHA', kelas: 'X.2'},
    {nisn: '3101099682', nama: 'AUFA SYAHDAN WIBOWO', kelas: 'X.2'},
    {nisn: '118890077', nama: 'BERTRAND MARCELINO MANURUNG', kelas: 'X.2'},
    {nisn: '113502618', nama: 'CANTIKA AULIA AKBAR', kelas: 'X.2'},
    {nisn: '101606822', nama: 'CITRA AMIRATUL ZAKIYAH', kelas: 'X.2'},
    {nisn: '105853637', nama: 'DHELIA SYABILLA', kelas: 'X.2'},
    {nisn: '106116618', nama: 'DIO ANGGA REKSA', kelas: 'X.2'},
    {nisn: '102624881', nama: 'ELMIRA ASFA JANEETA', kelas: 'X.2'},
    {nisn: '3106378410', nama: 'FARHAN ABHISTA ALI', kelas: 'X.2'},
    {nisn: '101474378', nama: 'FITRIANI OKTAVIA AYUNINGSIH', kelas: 'X.2'},
    {nisn: '106725621', nama: 'GILANG DWI HERMAWAN', kelas: 'X.2'},
    {nisn: '101002708', nama: 'HANI ANGRAENI', kelas: 'X.2'},
    {nisn: '114709607', nama: 'INTAN ZASKIA ZAHRA PUTRI', kelas: 'X.2'},
    {nisn: '111386313', nama: 'IRFAN SETIAWAN', kelas: 'X.2'},
    {nisn: '109180615', nama: 'KARDIANTI PUTRI', kelas: 'X.2'},
    {nisn: '106079422', nama: 'LATIFA PRIMADINI', kelas: 'X.2'},
    {nisn: '118851413', nama: 'MARIANI DAMEYANTI GULTOM', kelas: 'X.2'},
    {nisn: '116156986', nama: 'MUHAMAD WILDAN ADLIANSYAH', kelas: 'X.2'},
    {nisn: '113596067', nama: 'MUHAMMAD GIAN JUANDONNA', kelas: 'X.2'},
    {nisn: '113096468', nama: 'MUHAMMAD RAFA', kelas: 'X.2'},
    {nisn: '118237429', nama: 'NABILA', kelas: 'X.2'},
    {nisn: '111956721', nama: 'NADYA BALQIS BANU SHAFIRA', kelas: 'X.2'},
    {nisn: '101780903', nama: 'NAYA PUTRI', kelas: 'X.2'},
    {nisn: '118398195', nama: 'NAZWA PURNAMA RIZKIA', kelas: 'X.2'},
    {nisn: '118470759', nama: 'NICHO YEHEZKIEL SITUMORANG', kelas: 'X.2'},
    {nisn: '104159842', nama: 'PANI APRILIANI', kelas: 'X.2'},
    {nisn: '117846097', nama: 'RAFFA PAIRUL ZAHIR', kelas: 'X.2'},
    {nisn: '117880602', nama: 'RAHMA ALYA APRILIANI', kelas: 'X.2'},
    {nisn: '3108166412', nama: 'RIFQI FAITH TIRTANA', kelas: 'X.2'},
    {nisn: '117083927', nama: 'ROFIFAH ALISHA HAMIDAH', kelas: 'X.2'},
    {nisn: '119370718', nama: 'SALSABILA NUR AZ-ZAHRA', kelas: 'X.2'},
    {nisn: '114436449', nama: 'SAYYID WILDAN RAMDHANI', kelas: 'X.2'},
    {nisn: '108494003', nama: 'SHAFAA AFIFAH SALSABILA', kelas: 'X.2'},
    {nisn: '101839868', nama: 'SITI FATIMAH', kelas: 'X.2'},
    {nisn: '101738119', nama: 'SRI AYU', kelas: 'X.2'},
    {nisn: '117863539', nama: 'SYFA AINURROHMAH', kelas: 'X.2'},
    {nisn: '96287992', nama: 'YUSIANI WAROHMAH', kelas: 'X.2'},
    {nisn: '105724170', nama: 'ZAHRA KHOERUNISA', kelas: 'X.2'},
    {nisn: '107009015', nama: 'ZAKARIA KARIMMULLAH', kelas: 'X.2'},
    {nisn: '111993384', nama: 'ABYUDA YUSAN PRAYOGA', kelas: 'X.3'},
    {nisn: '102497293', nama: 'AGUSTINA INDAH RAMADHANI', kelas: 'X.3'},
    {nisn: '111759865', nama: 'ALIFA FAIRUZ FATIN', kelas: 'X.3'},
    {nisn: '116446254', nama: 'ALISA FITRI SARI', kelas: 'X.3'},
    {nisn: '113514514', nama: 'ANINDYA WIDYA PUTRI KIRANA', kelas: 'X.3'},
    {nisn: '115371114', nama: 'ARTANTI YULIANTO', kelas: 'X.3'},
    {nisn: '107494446', nama: 'AZAHRA PUTRI PRAMUDYA', kelas: 'X.3'},
    {nisn: '119084360', nama: 'AZHAN FAJRIL HAQ', kelas: 'X.3'},
    {nisn: '3104147530', nama: 'CELINE PUTRI UNTARI KURNIAWAN', kelas: 'X.3'},
    {nisn: '119733275', nama: 'CHIKA ALEIZA PUTRI KARISMA', kelas: 'X.3'},
    {nisn: '104782257', nama: 'DARELL JOVANOVIC SURYADI', kelas: 'X.3'},
    {nisn: '104808816', nama: 'DEBBY HERTANTRI', kelas: 'X.3'},
    {nisn: '104269736', nama: 'DUDE ALFIANO', kelas: 'X.3'},
    {nisn: '3116609872', nama: 'FATHIMAH NAJMATUNNISA', kelas: 'X.3'},
    {nisn: '118789475', nama: 'FIKRI BAYU PRATAMA', kelas: 'X.3'},
    {nisn: '118005402', nama: 'FRISCILLA GIOVANNY LIMBONG', kelas: 'X.3'},
    {nisn: '116716830', nama: 'GILANG PRASETYA ASKHAR', kelas: 'X.3'},
    {nisn: '109395901', nama: 'INDAH KARTIKA SARI', kelas: 'X.3'},
    {nisn: '118692580', nama: 'KEYLA AZKA SALSABILA', kelas: 'X.3'},
    {nisn: '108963570', nama: 'KUSUMA HARRY SYAPUTRA', kelas: 'X.3'},
    {nisn: '114394456', nama: 'LATIFAH', kelas: 'X.3'},
    {nisn: '103111161', nama: 'LULU AULIA', kelas: 'X.3'},
    {nisn: '111849923', nama: 'MEI SYA ZIFARA BATRISYA', kelas: 'X.3'},
    {nisn: '103352480', nama: 'MUCHAMMAD ZAKY ALBANI', kelas: 'X.3'},
    {nisn: '116420678', nama: 'MUHAMMAD ATSANY FAWWAZ', kelas: 'X.3'},
    {nisn: '177176990', nama: 'MUHAMMAD GILANG RAMADHAN', kelas: 'X.3'},
    {nisn: '117853241', nama: 'MUHAMMAD YAZID IBRAHIM', kelas: 'X.3'},
    {nisn: '114476627', nama: 'NABILA AZAHRA', kelas: 'X.3'},
    {nisn: '104499180', nama: 'NANDA PUTRI AYU WINDA', kelas: 'X.3'},
    {nisn: '102588699', nama: 'NAYAKA ANINDYA WALUYO', kelas: 'X.3'},
    {nisn: '117431037', nama: 'NISRINA MAULIDYA MUMTAZ', kelas: 'X.3'},
    {nisn: '3111464321', nama: 'NUR ASSHIDIQ NUGROHO ACHMAD', kelas: 'X.3'},
    {nisn: '119932963', nama: 'PRISCA DEAN NOVIANTI', kelas: 'X.3'},
    {nisn: '3111237038', nama: 'RAKHAZHIAN JEFFARTYN', kelas: 'X.3'},
    {nisn: '118800912', nama: 'REGINA PUTRI SIMBOLON', kelas: 'X.3'},
    {nisn: '102113208', nama: 'RIJAL MAULANA', kelas: 'X.3'},
    {nisn: '106699675', nama: 'ROFLIANI BARTA', kelas: 'X.3'},
    {nisn: '105469987', nama: 'SAZKIA PUTRI ARYANTI', kelas: 'X.3'},
    {nisn: '106101581', nama: 'SHAVANA TRINURVIANA', kelas: 'X.3'},
    {nisn: '114762705', nama: 'SITI NUR ANNISA', kelas: 'X.3'},
    {nisn: '3103448948', nama: 'SYABILA AISYAH PUTRI KINANTI', kelas: 'X.3'},
    {nisn: '113236228', nama: 'THOMAS ALFHA EDISON', kelas: 'X.3'},
    {nisn: '106306565', nama: 'TSANI AISY NABIILAH', kelas: 'X.3'},
    {nisn: '103498553', nama: 'YUSTINA WIDIATANTRI', kelas: 'X.3'},
    {nisn: '3102108067', nama: 'ZEIN BARIQ AL FAIZ', kelas: 'X.3'},
    {nisn: '101478229', nama: 'ZUHRIATUL AYUNI HAFIZAH', kelas: 'X.3'},
    {nisn: '105484586', nama: 'ACHMAD RAFA ARDHANI', kelas: 'X.4'},
    {nisn: '109973514', nama: 'AINI', kelas: 'X.4'},
    {nisn: '3111437684', nama: 'ALDIZA QORITA NURHANAFIA', kelas: 'X.4'},
    {nisn: '3113744961', nama: 'ALMALIA PUTERI', kelas: 'X.4'},
    {nisn: '109363467', nama: 'ANDHINI AULIA WIRANTO', kelas: 'X.4'},
    {nisn: '114513796', nama: 'ARUM NUR ANDINI', kelas: 'X.4'},
    {nisn: '118025593', nama: 'AULIA FUTRI', kelas: 'X.4'},
    {nisn: '3117359188', nama: 'AZILAN RAMADHAN PUTRA ARYANTO', kelas: 'X.4'},
    {nisn: '102037839', nama: 'AZKA FAKHRIZA AHMAD', kelas: 'X.4'},
    {nisn: '116393940', nama: 'BINTANG NARENDRA WIJAYA', kelas: 'X.4'},
    {nisn: '108004296', nama: 'CHARROLINA JHOZUANA LELLOLSIMA', kelas: 'X.4'},
    {nisn: '114456400', nama: 'CITRA NUR AENI', kelas: 'X.4'},
    {nisn: '113901612', nama: 'DHIYANDRA NISA ARIFHATUL`ULAA', kelas: 'X.4'},
    {nisn: '113480470', nama: 'ELVINA CHIARA ARYANTO', kelas: 'X.4'},
    {nisn: '113228116', nama: 'ERDY PRAYUDA FRATAMA', kelas: 'X.4'},
    {nisn: '114016860', nama: 'FARREL NAUFAL AKBAR', kelas: 'X.4'},
    {nisn: '113774829', nama: 'GADING LARAS MAHARANI', kelas: 'X.4'},
    {nisn: '101409837', nama: 'HASYFA PUTRI HERDIANA', kelas: 'X.4'},
    {nisn: '112248607', nama: 'IRSYAD BAYU RIYADI', kelas: 'X.4'},
    {nisn: '102481775', nama: 'JESSICA FITRI IRAWAN', kelas: 'X.4'},
    {nisn: '113490334', nama: 'KARTIKA SUKMADANI', kelas: 'X.4'},
    {nisn: '104833206', nama: 'LEANDRA CIKAL KAYLILA', kelas: 'X.4'},
    {nisn: '3106169100', nama: 'MARITZA ZAFIRA HUSEN', kelas: 'X.4'},
    {nisn: '119415107', nama: 'MUHAMAD ALKAFFI', kelas: 'X.4'},
    {nisn: '106176745', nama: 'MUHAMAD ZAKI ALEVI', kelas: 'X.4'},
    {nisn: '112722893', nama: 'MUHAMMAD HAIKAL FIRMANSYAH', kelas: 'X.4'},
    {nisn: '119125679', nama: 'MUHAMMAD REZKY ARDYANSYAH', kelas: 'X.4'},
    {nisn: '104020901', nama: 'NABILAH AZARIA', kelas: 'X.4'},
    {nisn: '111825117', nama: 'NAFILA DWIALFANDA', kelas: 'X.4'},
    {nisn: '101424994', nama: 'NAILA MARSALENA PUTRI', kelas: 'X.4'},
    {nisn: '3111032762', nama: 'NAYFA ANINDYA WAHONO', kelas: 'X.4'},
    {nisn: '3114227934', nama: 'NESYA ALIFKA NURAINI', kelas: 'X.4'},
    {nisn: '113918181', nama: 'NURDIANSYAH PUTRA ATMAJA', kelas: 'X.4'},
    {nisn: '118301452', nama: 'PUTI NADHIRAH SHIFA', kelas: 'X.4'},
    {nisn: '103749261', nama: 'RAFFA YUSUF PRAMUDYA', kelas: 'X.4'},
    {nisn: '117949421', nama: 'RIKI ADITYA SOBARI', kelas: 'X.4'},
    {nisn: '104463823', nama: 'SABRINA ALTHAFUNNISA CHABIBI', kelas: 'X.4'},
    {nisn: '116858883', nama: 'SALSABILA SOPIANI PUTRI', kelas: 'X.4'},
    {nisn: '107329692', nama: 'SHELVI YUNIARTI PRATIWY', kelas: 'X.4'},
    {nisn: '117691521', nama: 'SITI FATIMAH', kelas: 'X.4'},
    {nisn: '119518684', nama: 'SYAFA ILLAHIYAH', kelas: 'X.4'},
    {nisn: '101032898', nama: 'SYIFA NUR AZZAHRA', kelas: 'X.4'},
    {nisn: '99207254', nama: 'YUVIANI MAWADAH', kelas: 'X.4'},
    {nisn: '117768657', nama: 'ZAHRRA MAUDI LIVIA', kelas: 'X.4'},
    {nisn: '112561340', nama: 'ZUPAR RAIS RAJASA', kelas: 'X.4'},
    {nisn: '116424027', nama: 'ADAM PRADANA RUSTANDI', kelas: 'X.5'},
    {nisn: '107129014', nama: 'AINUN NISA DEYA PUTRI', kelas: 'X.5'},
    {nisn: '104730025', nama: 'ALFINO RIZKI', kelas: 'X.5'},
    {nisn: '112748576', nama: 'ALIFA GHAISANI ANNAJMI', kelas: 'X.5'},
    {nisn: '106229220', nama: 'ALMIRA SALWA ZHAFIRA', kelas: 'X.5'},
    {nisn: '112790656', nama: 'ANISA MAHARANI DEWI', kelas: 'X.5'},
    {nisn: '109398737', nama: 'ARUM SARI RIANI GUSTIAN', kelas: 'X.5'},
    {nisn: '119555238', nama: 'AZKA SABILLA DEMYANDRA', kelas: 'X.5'},
    {nisn: '101612664', nama: 'CALIZTA RAHMA SEPTEMBERIA', kelas: 'X.5'},
    {nisn: '119929816', nama: 'CHERIKA PUTRIANNA SHOFIA', kelas: 'X.5'},
    {nisn: '104931954', nama: 'DEBI FAUJIAH', kelas: 'X.5'},
    {nisn: '103170016', nama: 'DIANA PUTRI', kelas: 'X.5'},
    {nisn: '103652892', nama: 'ERLANGGA GATUH NOVIAR', kelas: 'X.5'},
    {nisn: '107180561', nama: 'FELICIA CHARYELL STEFANI TRIWIDODO', kelas: 'X.5'},
    {nisn: '109259036', nama: 'FIORDAN ZAAHIIR ALFARABI', kelas: 'X.5'},
    {nisn: '113531090', nama: 'GADIS AULIA APRILIANI', kelas: 'X.5'},
    {nisn: '116568367', nama: 'GILANG SAPUTRA', kelas: 'X.5'},
    {nisn: '119083138', nama: 'GRAYSON LUMBAN TORUAN', kelas: 'X.5'},
    {nisn: '109843422', nama: 'INDAH OKTAVIANI', kelas: 'X.5'},
    {nisn: '113807764', nama: 'JIHAN ALIFAH AL ZAIN', kelas: 'X.5'},
    {nisn: '104130854', nama: 'KEYSA QONITATUR ROHMAH', kelas: 'X.5'},
    {nisn: '115605862', nama: 'LEONY SARIMAULY BR HABEAHAN', kelas: 'X.5'},
    {nisn: '3112816891', nama: 'LINTANG AJI PANGESTU', kelas: 'X.5'},
    {nisn: '118879879', nama: 'MEYLISA SYALOM', kelas: 'X.5'},
    {nisn: '112652435', nama: 'MICHAEL RIZKY SIMANJORANG', kelas: 'X.5'},
    {nisn: '118890007', nama: 'MUHAMAD ALWI', kelas: 'X.5'},
    {nisn: '3100916871', nama: 'MUHAMMAD DAFFA ABDILLAH', kelas: 'X.5'},
    {nisn: '3110133206', nama: 'MUHAMMAD ISTAZ ALIF', kelas: 'X.5'},
    {nisn: '101575885', nama: 'MUHAMMAD ZAHRAN ALFARIZI', kelas: 'X.5'},
    {nisn: '102387002', nama: 'NABILLA PRADIPTA', kelas: 'X.5'},
    {nisn: '108709042', nama: 'NASHA AYUDYA NURRISQEE', kelas: 'X.5'},
    {nisn: '116954386', nama: 'NAYLA NASYAHLA VEGA', kelas: 'X.5'},
    {nisn: '113047671', nama: 'NOVI LUTHFIA', kelas: 'X.5'},
    {nisn: '108581994', nama: 'OKKY MAULANA', kelas: 'X.5'},
    {nisn: '3107507013', nama: 'PUTRI AULIA SHIFA', kelas: 'X.5'},
    {nisn: '112502991', nama: 'RAKHSHINDA CHESTA SETIAWAN', kelas: 'X.5'},
    {nisn: '115674852', nama: 'RESKY RAYA RAMADAN', kelas: 'X.5'},
    {nisn: '111347319', nama: 'RIVALDO', kelas: 'X.5'},
    {nisn: '102112747', nama: 'SABRINA KHOLISTA PRATAMA', kelas: 'X.5'},
    {nisn: '111251183', nama: 'SELLA JAYANTI', kelas: 'X.5'},
    {nisn: '118261450', nama: 'SHINTA FITRIYANI', kelas: 'X.5'},
    {nisn: '106313272', nama: 'SITI NURAZIZAH RAMADAN', kelas: 'X.5'},
    {nisn: '108114744', nama: 'SYAHFIRA YUNIAR', kelas: 'X.5'},
    {nisn: '109817731', nama: 'TRIO RAMADHAN', kelas: 'X.5'},
    {nisn: '111514625', nama: 'VALERINA REZEKI HAHOLONGAN LUMBAN TOBING', kelas: 'X.5'},
    {nisn: '3103369930', nama: 'ZAHIDAH KAMILIYA LABIBAH', kelas: 'X.5'},
    {nisn: '109965136', nama: 'ADAM WIBOWO', kelas: 'X.6'},
    {nisn: '117538257', nama: 'AINUN ROHADATUL AIZY', kelas: 'X.6'},
    {nisn: '106715250', nama: 'AKHMAD ZAIDAN PUTRA SISWANTO', kelas: 'X.6'},
    {nisn: '108212637', nama: 'ALENA DESTIARA', kelas: 'X.6'},
    {nisn: '114408210', nama: 'ALMIRA SHAFA NAFISAH', kelas: 'X.6'},
    {nisn: '107613995', nama: 'ANDINI KHOERUNNISA', kelas: 'X.6'},
    {nisn: '105604810', nama: 'ASHERA ANGELITHA RASTALIA MANIK', kelas: 'X.6'},
    {nisn: '109329638', nama: 'AULIA RAHMA HALWATUNNISA', kelas: 'X.6'},
    {nisn: '118787629', nama: 'AZKA HAFIZH DEWANTORO', kelas: 'X.6'},
    {nisn: '104256413', nama: 'CHIKO NATHANNAEL HARYADI', kelas: 'X.6'},
    {nisn: '119216472', nama: 'CLAIRE YUNIAR MANALU', kelas: 'X.6'},
    {nisn: '115387456', nama: 'DHIYA SALMA APRILLIA', kelas: 'X.6'},
    {nisn: '113110608', nama: 'DIANTI', kelas: 'X.6'},
    {nisn: '101892800', nama: 'EMALIA SAFA', kelas: 'X.6'},
    {nisn: '105010453', nama: 'EVAN RAHMAWAN', kelas: 'X.6'},
    {nisn: '115071694', nama: 'FATHI DHIYA ZHAFAR HUSNI', kelas: 'X.6'},
    {nisn: '112356722', nama: 'GESTINA RANA ARIFFANI', kelas: 'X.6'},
    {nisn: '107738519', nama: 'HADI PURNAWAN', kelas: 'X.6'},
    {nisn: '103565144', nama: 'HAURIA NASHIA ARINKA', kelas: 'X.6'},
    {nisn: '105802653', nama: 'JIBRIL ZAIN', kelas: 'X.6'},
    {nisn: '115096867', nama: 'JIHAN FATIMAH', kelas: 'X.6'},
    {nisn: '113057325', nama: 'KAYLA ZAHWA AGNIKA', kelas: 'X.6'},
    {nisn: '114178908', nama: 'LISVIKA APRILIA KILAH', kelas: 'X.6'},
    {nisn: '117342399', nama: 'MAYANI DAMAYANTI GULTOM', kelas: 'X.6'},
    {nisn: '119053746', nama: 'MUHAMAD FAJAR', kelas: 'X.6'},
    {nisn: '179163360', nama: 'MUHAMMAD AFIF ZIKRI DALIMUNTHE', kelas: 'X.6'},
    {nisn: '109414480', nama: 'MUHAMMAD LUTHFI RAMDHAN PRAYUDA', kelas: 'X.6'},
    {nisn: '102081242', nama: 'MUHAMMAD RIZKI ALAMSYAH', kelas: 'X.6'},
    {nisn: '102398747', nama: 'NADHIFA AZZAHRAA', kelas: 'X.6'},
    {nisn: '119358344', nama: 'NAYLA YASMIN RAMADHANI', kelas: 'X.6'},
    {nisn: '113198011', nama: 'NEYSHA ATHA SAFIRRA', kelas: 'X.6'},
    {nisn: '117882124', nama: 'P NOEL P SILALAHI', kelas: 'X.6'},
    {nisn: '116461053', nama: 'PUTRI MARIA TINAMBUNAN', kelas: 'X.6'},
    {nisn: '3119246566', nama: 'RAFFIE AQMAL DEHAN', kelas: 'X.6'},
    {nisn: '116264984', nama: 'RAIA KHAERUNISA', kelas: 'X.6'},
    {nisn: '105048435', nama: 'RAIHANI QISTINA ANANDA', kelas: 'X.6'},
    {nisn: '107572143', nama: 'RIZKI AKBAR PALESA', kelas: 'X.6'},
    {nisn: '111359439', nama: 'SABRINA PUTRI ZAHIRA', kelas: 'X.6'},
    {nisn: '106853824', nama: 'SANY KHOIRUN NISA', kelas: 'X.6'},
    {nisn: '119605286', nama: 'SIDIQ MAULANA', kelas: 'X.6'},
    {nisn: '116347441', nama: 'SILFIA NUR KHOERUNNISA', kelas: 'X.6'},
    {nisn: '105877339', nama: 'SITI MARYAM', kelas: 'X.6'},
    {nisn: '106280856', nama: 'SYAHLA ANINDYA', kelas: 'X.6'},
    {nisn: '3117758066', nama: 'TALITHA ZAHIRA RISMAN', kelas: 'X.6'},
    {nisn: '111476685', nama: 'ZAHIRA AMELUSI', kelas: 'X.6'},
    {nisn: '103043267', nama: 'ZAVINA JAHWA ALIYA', kelas: 'X.6'},
    {nisn: '3110175457', nama: 'ADNAN MUHAMMAD HAVIANTO', kelas: 'X.7'},
    {nisn: '113409050', nama: 'AIRA PUTRI ARLINGGA', kelas: 'X.7'},
    {nisn: '106326861', nama: 'ALFAN MAULANA MALIK', kelas: 'X.7'},
    {nisn: '115180681', nama: 'ALIFA NAUFALYN AYUNINDYA FARZANA', kelas: 'X.7'},
    {nisn: '113068903', nama: 'ALLEO AUGUSTYA ANWAR', kelas: 'X.7'},
    {nisn: '103332617', nama: 'ANNISA MUKARROMAH', kelas: 'X.7'},
    {nisn: '101291007', nama: 'AZZAM ROFI UN NADZIR', kelas: 'X.7'},
    {nisn: '107031826', nama: 'BINTANG PUTRI ARUMI', kelas: 'X.7'},
    {nisn: '119790964', nama: 'CHIKA DIANA AHMAD', kelas: 'X.7'},
    {nisn: '104247529', nama: 'DEAS RADITHYA MALIQI', kelas: 'X.7'},
    {nisn: '101543342', nama: 'DESI RAHMAWATI', kelas: 'X.7'},
    {nisn: '105713048', nama: 'DINA FATIH ANJANI', kelas: 'X.7'},
    {nisn: '112860343', nama: 'FAEYZA AKHDAN ALFARIZI', kelas: 'X.7'},
    {nisn: '112421852', nama: 'FELISITA NAYLA KIRANA MANULLANG', kelas: 'X.7'},
    {nisn: '118916436', nama: 'FIQRI ALMAIR NAIDIN', kelas: 'X.7'},
    {nisn: '101673709', nama: 'GHAISANI NAZWA ZAKIYAH', kelas: 'X.7'},
    {nisn: '112285676', nama: 'HARITS MAULANA ZAINUDDIN TAMIMI', kelas: 'X.7'},
    {nisn: '106534476', nama: 'INDAH PERMATA', kelas: 'X.7'},
    {nisn: '102410511', nama: 'JIHAN NURSALSABILA', kelas: 'X.7'},
    {nisn: '111335587', nama: 'KHANSA HAURA BASIMAH', kelas: 'X.7'},
    {nisn: '106439732', nama: 'LIVIA AZAHRA', kelas: 'X.7'},
    {nisn: '107944769', nama: 'MAHFUDHZ', kelas: 'X.7'},
    {nisn: '3108232797', nama: 'MAKHYA MARKHAMA TUSSADIYAH', kelas: 'X.7'},
    {nisn: '117902712', nama: 'M. RAFIF ALVARO KHAVA', kelas: 'X.7'},
    {nisn: '113170103', nama: 'MIRNA FADHILAH', kelas: 'X.7'},
    {nisn: '112594822', nama: 'MUHAMMAD DHAFA ADILA RASYA', kelas: 'X.7'},
    {nisn: '3089176383', nama: 'MUHAMMAD MAHFUD FATHULLAH', kelas: 'X.7'},
    {nisn: '118563314', nama: 'MUHAMMAD ZAKIIHAFIDZ NUGRAHA', kelas: 'X.7'},
    {nisn: '109808761', nama: 'NADIA OKTAVIANI', kelas: 'X.7'},
    {nisn: '102492025', nama: 'NASYILA NARAYA', kelas: 'X.7'},
    {nisn: '108443745', nama: 'NAZIFATUL`AINI', kelas: 'X.7'},
    {nisn: '117694299', nama: 'NEISYA WIDYANATA', kelas: 'X.7'},
    {nisn: '109637778', nama: 'NOVI YANI', kelas: 'X.7'},
    {nisn: '118671513', nama: 'PANJI GEMMA ARYADUTHA', kelas: 'X.7'},
    {nisn: '109923016', nama: 'PUTRI NABILA', kelas: 'X.7'},
    {nisn: '101134316', nama: 'RADHITYA ARDIANSYAH', kelas: 'X.7'},
    {nisn: '105609485', nama: 'RAPHAEL XAVERIUS FALERIAN SIMBOLON', kelas: 'X.7'},
    {nisn: '102643219', nama: 'RIESTYA OKTARIEDA RAHMAN', kelas: 'X.7'},
    {nisn: '119639645', nama: 'RIZKY AKBAR RIANTAMA', kelas: 'X.7'},
    {nisn: '117407709', nama: 'SELOMITHA Y SINAGA', kelas: 'X.7'},
    {nisn: '105657748', nama: 'SILVIA PUTRI', kelas: 'X.7'},
    {nisn: '101745785', nama: 'SITI ZULFA FARIDA', kelas: 'X.7'},
    {nisn: '114490154', nama: 'SYAKIRA PUTRI AISYAH', kelas: 'X.7'},
    {nisn: '117557775', nama: 'TYO PRATAMA', kelas: 'X.7'},
    {nisn: '116961711', nama: 'VANIA PUTRI NAZQIN', kelas: 'X.7'},
    {nisn: '102497777', nama: 'ZAHIRA JILAN', kelas: 'X.7'},
    {nisn: '109084061', nama: 'ADRIAN CHANDRA WIDJAYA', kelas: 'X.8'},
    {nisn: '104091928', nama: 'AIRA SALSABILA', kelas: 'X.8'},
    {nisn: '117448919', nama: 'AKMAL MOCHAMED AL`QAWIY', kelas: 'X.8'},
    {nisn: '9825056497', nama: 'ALYA EKA OKTAVIANI', kelas: 'X.8'},
    {nisn: '114058760', nama: 'ANDITA AULIA RAMADANI', kelas: 'X.8'},
    {nisn: '101554585', nama: 'ASSYIFA NURAINI', kelas: 'X.8'},
    {nisn: '112303215', nama: 'AYU DIAH RAHMAWATI', kelas: 'X.8'},
    {nisn: '113500169', nama: 'BABAN NABANI', kelas: 'X.8'},
    {nisn: '3112488361', nama: 'CHINTYA MAYLANDI', kelas: 'X.8'},
    {nisn: '118159371', nama: 'CRISTINE KEVIN TABELAK', kelas: 'X.8'},
    {nisn: '112626819', nama: 'DAFFA FAHRIZAL SIDIQ', kelas: 'X.8'},
    {nisn: '102129369', nama: 'DINAR AMANI KARIMAH', kelas: 'X.8'},
    {nisn: '3101791648', nama: 'EMILIA JASMINE KUSUMAPUTRI', kelas: 'X.8'},
    {nisn: '117304455', nama: 'FATHUL BAHRI', kelas: 'X.8'},
    {nisn: '114663388', nama: 'GINA MAHMUDAH', kelas: 'X.8'},
    {nisn: '101680135', nama: 'HARLAN FADILLAH ADYTIHA', kelas: 'X.8'},
    {nisn: '106294546', nama: 'HUMAIRAH', kelas: 'X.8'},
    {nisn: '102905173', nama: 'JIHAN SHAFWA RAIHANA', kelas: 'X.8'},
    {nisn: '118231939', nama: 'KEILA MIFTA KALIFAH', kelas: 'X.8'},
    {nisn: '101636733', nama: 'KENZI ADRIAN LOGAWA', kelas: 'X.8'},
    {nisn: '102361177', nama: 'LUBENA IKA SUSILOWATI', kelas: 'X.8'},
    {nisn: '118939084', nama: 'MAYDA ALLYA QURROTUAINI', kelas: 'X.8'},
    {nisn: '119637214', nama: 'MUHAMAD HASBI ASSIDIQ', kelas: 'X.8'},
    {nisn: '106177531', nama: 'MUHAMMAD AL RIZKY AKBAR RAMDHAN', kelas: 'X.8'},
    {nisn: '109243129', nama: 'MUHAMMAD MALIK ALBAYUMI', kelas: 'X.8'},
    {nisn: '119230237', nama: 'NADIA SILVIA ARETHA SUDARMONO', kelas: 'X.8'},
    {nisn: '117176797', nama: 'NAILA RISKA RAHAYU', kelas: 'X.8'},
    {nisn: '106805652', nama: 'NAZILA KHOERUNNISA', kelas: 'X.8'},
    {nisn: '101910385', nama: 'NIHAYATUL HUSNA', kelas: 'X.8'},
    {nisn: '101174018', nama: 'PARID AINUNNAZA', kelas: 'X.8'},
    {nisn: '117468639', nama: 'PUTRI PUSPA AYU', kelas: 'X.8'},
    {nisn: '119290660', nama: 'RAFIF AL SABRI', kelas: 'X.8'},
    {nisn: '119457939', nama: 'RAISSA VANIA MAULIDYA', kelas: 'X.8'},
    {nisn: '113906446', nama: 'REINA FAHIRA APRIADI', kelas: 'X.8'},
    {nisn: '107144118', nama: 'RULLY FA`IZ ATMAJAYA', kelas: 'X.8'},
    {nisn: '105968989', nama: 'SALMA SALSABILA', kelas: 'X.8'},
    {nisn: '105517278', nama: 'SARAH REGINA PUTRI', kelas: 'X.8'},
    {nisn: '105168511', nama: 'SIN SIN', kelas: 'X.8'},
    {nisn: '106023162', nama: 'SITI MASFUFAH', kelas: 'X.8'},
    {nisn: '105809362', nama: 'STEVEN WINARDI', kelas: 'X.8'},
    {nisn: '102313980', nama: 'SYAKIRAH ATHAYA RAZKIYAH', kelas: 'X.8'},
    {nisn: '106491168', nama: 'TASYA FITRIA NURUL HUDA', kelas: 'X.8'},
    {nisn: '121099959', nama: 'ZAHIRA NUR AZIZAH', kelas: 'X.8'},
    {nisn: '105790479', nama: 'ZIHAN SANDI SEPTIANI', kelas: 'X.8'},
    {nisn: '101922002', nama: 'AFFIADUN NAFIRI ZARKASIH', kelas: 'X.9'},
    {nisn: '102523127', nama: 'AHMAD RAMDANI', kelas: 'X.9'},
    {nisn: '3107914132', nama: 'AIRA SHAFA NAFISA', kelas: 'X.9'},
    {nisn: '3116268112', nama: 'ALIFIA NASYA NUR APRIANI', kelas: 'X.9'},
    {nisn: '112482437', nama: 'ALVARO RIZKI PRATAMA', kelas: 'X.9'},
    {nisn: '115465033', nama: 'ALVIANI LAYLA JANAH', kelas: 'X.9'},
    {nisn: '107128647', nama: 'ALYA JAZILA MUTHMAINNAH', kelas: 'X.9'},
    {nisn: '118472602', nama: 'ANNISA NAYZZYLIA PUTRI', kelas: 'X.9'},
    {nisn: '111537778', nama: 'ASYIFA LEAND CHAERUNNISA', kelas: 'X.9'},
    {nisn: '111643646', nama: 'BACHTIAR RISKI MAULANA', kelas: 'X.9'},
    {nisn: '102758604', nama: 'CAHYA LESTIANA', kelas: 'X.9'},
    {nisn: '111376960', nama: 'CHORY WULAN APRILIA', kelas: 'X.9'},
    {nisn: '119097125', nama: 'DERICK ADRIANO OTA', kelas: 'X.9'},
    {nisn: '117474708', nama: 'DESTI NUR RAHMAN', kelas: 'X.9'},
    {nisn: '101490488', nama: 'DINDA', kelas: 'X.9'},
    {nisn: '112646497', nama: 'FAISAL ADITYA NUGRAHA', kelas: 'X.9'},
    {nisn: '114717545', nama: 'FELYSHA RIFDA SHAFANA', kelas: 'X.9'},
    {nisn: '104465145', nama: 'FURKI ABDULAH', kelas: 'X.9'},
    {nisn: '116840214', nama: 'HERDIANSYAH', kelas: 'X.9'},
    {nisn: '108690490', nama: 'INDINA FATKHATUL ARIF', kelas: 'X.9'},
    {nisn: '119179194', nama: 'JOYCE ABEL JELITA SITUMORANG', kelas: 'X.9'},
    {nisn: '106544248', nama: 'KINANTI SEKAR AYU', kelas: 'X.9'},
    {nisn: '116572263', nama: 'MUHAMAD NABIL RASYDAN', kelas: 'X.9'},
    {nisn: '3103051408', nama: 'MUHAMMAD FACHRI SULISTYO', kelas: 'X.9'},
    {nisn: '116356134', nama: 'MUHAMMAD MUHYIDDIN', kelas: 'X.9'},
    {nisn: '107794269', nama: 'MUKTI ABDULL AZZIS', kelas: 'X.9'},
    {nisn: '104366364', nama: 'MULYATI ANDINI', kelas: 'X.9'},
    {nisn: '116393276', nama: 'NADILA PUTRI BAIHAKI', kelas: 'X.9'},
    {nisn: '119000627', nama: 'NASYWAA ASHIILAH ELFANIE', kelas: 'X.9'},
    {nisn: '3116753372', nama: 'NAZWA HARDIANTI IRFAN', kelas: 'X.9'},
    {nisn: '95735176', nama: 'NUR CHALISTA SALSABILA', kelas: 'X.9'},
    {nisn: '115366937', nama: 'PRADA FIRMAN KYARO NABABAN', kelas: 'X.9'},
    {nisn: '103110955', nama: 'PUTRI YOANI PRAMESTI', kelas: 'X.9'},
    {nisn: '106469949', nama: 'RENDI NUR ALFIANSYAH', kelas: 'X.9'},
    {nisn: '106138771', nama: 'RIRIN PUSPITASARI', kelas: 'X.9'},
    {nisn: '111776635', nama: 'RYAN ABDY DARMAWAN', kelas: 'X.9'},
    {nisn: '103062347', nama: 'SALSA FEBRIANTI', kelas: 'X.9'},
    {nisn: '107565093', nama: 'SEPTI ZAHRA AWALIYAH', kelas: 'X.9'},
    {nisn: '104792057', nama: 'SINTA AULIA PUTRI', kelas: 'X.9'},
    {nisn: '108721480', nama: 'SOBIAH RAFI', kelas: 'X.9'},
    {nisn: '117539249', nama: 'SYALSA SRI RAHAYU', kelas: 'X.9'},
    {nisn: '117389325', nama: 'VIONY FEBRILIAN', kelas: 'X.9'},
    {nisn: '104086243', nama: 'WAHYUDI AZZAM RAMADHAN', kelas: 'X.9'},
    {nisn: '101424583', nama: 'ZAHIRA ZAKYATUL HAZIA', kelas: 'X.9'},
    {nisn: '3103293604', nama: 'AHMAD ADI SATRIA', kelas: 'X.10'},
    {nisn: '107757933', nama: 'AISYAH NURUL ARSY', kelas: 'X.10'},
    {nisn: '109587489', nama: 'AL THAF NOVAL NAJI IB', kelas: 'X.10'},
    {nisn: '116933728', nama: 'ALFIA NADZIRA', kelas: 'X.10'},
    {nisn: '116400544', nama: 'AMANDA NAZEERA PRABANINGRUM', kelas: 'X.10'},
    {nisn: '115966607', nama: 'ANGEL NAULINA SIRAIT', kelas: 'X.10'},
    {nisn: '3108523777', nama: 'ATHAYA NURUL AZMI', kelas: 'X.10'},
    {nisn: '108459118', nama: 'AYUAN NAZWA JESSAR GUNAWAN', kelas: 'X.10'},
    {nisn: '113197996', nama: 'BADRA ARUM NABAWI', kelas: 'X.10'},
    {nisn: '112654665', nama: 'CIKA RAHMANIA PUTRI', kelas: 'X.10'},
    {nisn: '118841913', nama: 'CUT MAULIDA', kelas: 'X.10'},
    {nisn: '104315066', nama: 'DAFFA SATRIO UTOMO', kelas: 'X.10'},
    {nisn: '109063382', nama: 'DINI DANIAWATI', kelas: 'X.10'},
    {nisn: '119118926', nama: 'ERZA KALYSTA KAZIAFALLA', kelas: 'X.10'},
    {nisn: '107105274', nama: 'FAIZ DIANKA FITRAYANSYAH', kelas: 'X.10'},
    {nisn: '105218846', nama: 'FATIH ARKAN SYAH', kelas: 'X.10'},
    {nisn: '115348929', nama: 'HAIFA QORRINA AZKIYA', kelas: 'X.10'},
    {nisn: '103202876', nama: 'IBNU MALIK ALHAYYI', kelas: 'X.10'},
    {nisn: '3111728941', nama: 'IFATUL HUSNAH', kelas: 'X.10'},
    {nisn: '111671690', nama: 'JUNITA AMANDA SIRAIT', kelas: 'X.10'},
    {nisn: '3108103041', nama: 'KEVIN SHIHAB MUHAMMAD', kelas: 'X.10'},
    {nisn: '102571754', nama: 'KEYLA', kelas: 'X.10'},
    {nisn: '109052928', nama: 'LUSIANA', kelas: 'X.10'},
    {nisn: '113587713', nama: 'MAYKA SYAHIRA', kelas: 'X.10'},
    {nisn: '116164769', nama: 'MUHAMAD RIFA PRATAMA', kelas: 'X.10'},
    {nisn: '106878094', nama: 'MUHAMMAD ALDI', kelas: 'X.10'},
    {nisn: '3107751665', nama: 'MUHAMMAD NAJIKH RIVANO', kelas: 'X.10'},
    {nisn: '109072439', nama: 'MUHAMMAD THORIQ YUSRON', kelas: 'X.10'},
    {nisn: '104985506', nama: 'NADINE PERMATA NUGRAHA', kelas: 'X.10'},
    {nisn: '105199677', nama: 'NAJIZA AISIYAH', kelas: 'X.10'},
    {nisn: '115174189', nama: 'NAZWA MUTIA FADHILA', kelas: 'X.10'},
    {nisn: '107239825', nama: 'NINDY AULIA', kelas: 'X.10'},
    {nisn: '3112403249', nama: 'QUINSHA ZHIFARA AIHDINA', kelas: 'X.10'},
    {nisn: '113915521', nama: 'RADITYA PUTERA PRADANA', kelas: 'X.10'},
    {nisn: '106768933', nama: 'RAIHAN AKBAR SETIAPATI', kelas: 'X.10'},
    {nisn: '117644691', nama: 'RAISYA PUTRI SETIAWAN', kelas: 'X.10'},
    {nisn: '107858289', nama: 'SADDAM AGUNG RAMDHANI', kelas: 'X.10'},
    {nisn: '3112829337', nama: 'SALSA NUR FADILLAH', kelas: 'X.10'},
    {nisn: '114379976', nama: 'SARAH SRI RAHAYU', kelas: 'X.10'},
    {nisn: '102179040', nama: 'SINTA WULANDARI', kelas: 'X.10'},
    {nisn: '111503253', nama: 'SITI MAULIDA LUTHFIA', kelas: 'X.10'},
    {nisn: '108828575', nama: 'SULTAN ADRIYANSYAH MUNAZRIL', kelas: 'X.10'},
    {nisn: '117078607', nama: 'SYAQIRA QOTRUNNADA', kelas: 'X.10'},
    {nisn: '114464541', nama: 'TIKA RIZKI ANANDA', kelas: 'X.10'},
    {nisn: '118988171', nama: 'ZAHRA ANNISA UTAMI', kelas: 'X.10'},
    {nisn: '113225649', nama: 'ZIPANY APRILLIA SITORUS', kelas: 'X.10'},
    {nisn: '115864696', nama: 'AHMAD FAIRELL ATHARIZZ RIDA', kelas: 'X.11'},
    {nisn: '108481672', nama: 'AJENG EKA PRATIWI', kelas: 'X.11'},
    {nisn: '113924901', nama: 'ALIKA PUTRI HADITYA', kelas: 'X.11'},
    {nisn: '113212821', nama: 'ALDDY ADRIAN SYAFE`I', kelas: 'X.11'},
    {nisn: '119630726', nama: 'AMELIANY MUHTAR', kelas: 'X.11'},
    {nisn: '113779521', nama: 'ANUGRAH FITRI AZZAHRA', kelas: 'X.11'},
    {nisn: '115503862', nama: 'ASHLAM DHARMAWAN', kelas: 'X.11'},
    {nisn: '98087857', nama: 'ATIKA ZAHRA RATIFA', kelas: 'X.11'},
    {nisn: '117882831', nama: 'BAYU ANUGRAH', kelas: 'X.11'},
    {nisn: '109072873', nama: 'CINTA NUR SIFA', kelas: 'X.11'},
    {nisn: '3119619959', nama: 'DARREL FATHAN', kelas: 'X.11'},
    {nisn: '114397942', nama: 'DEVLIN NUR FADILLAH', kelas: 'X.11'},
    {nisn: '104570344', nama: 'DEWI SRI XANIA', kelas: 'X.11'},
    {nisn: '112049077', nama: 'ELIZA AYU PUTRI', kelas: 'X.11'},
    {nisn: '103800867', nama: 'FALIQ AZAM HIKMATIAR SUPRIADI', kelas: 'X.11'},
    {nisn: '104005835', nama: 'FIOLA LAURA ZASKIA', kelas: 'X.11'},
    {nisn: '107862042', nama: 'GALFIN MALIKI GEMILANG', kelas: 'X.11'},
    {nisn: '103805664', nama: 'HANA ALIFAH ZAHRA', kelas: 'X.11'},
    {nisn: '103084876', nama: 'ILYASA AL QOWI', kelas: 'X.11'},
    {nisn: '103775420', nama: 'INDIRA FADILLAH WAFA', kelas: 'X.11'},
    {nisn: '118585048', nama: 'KANAYA NOVA ELVIRA', kelas: 'X.11'},
    {nisn: '111635380', nama: 'LASTRI SARI NENGSIH', kelas: 'X.11'},
    {nisn: '111899390', nama: 'MAISYA ALIFA KIRANA', kelas: 'X.11'},
    {nisn: '105214671', nama: 'MALDINI MILAN NISTI', kelas: 'X.11'},
    {nisn: '3114633242', nama: 'MUHAMAD WIJAYA KUSUMA', kelas: 'X.11'},
    {nisn: '107292736', nama: 'MUHAMMAD FAUZAN AZIZI', kelas: 'X.11'},
    {nisn: '101168186', nama: 'MUHAMMAD NIZAR GHAISAN HILMY', kelas: 'X.11'},
    {nisn: '105995131', nama: 'MUSTIKA DEWI ARUM', kelas: 'X.11'},
    {nisn: '107529077', nama: 'NABIL FAYYADH ZAIDAN', kelas: 'X.11'},
    {nisn: '106753063', nama: 'NADIRA AULIA RAHMA', kelas: 'X.11'},
    {nisn: '112966120', nama: 'NATANIA FEBRIANTI WIDODO', kelas: 'X.11'},
    {nisn: '114528539', nama: 'NAZWA NAFISAH', kelas: 'X.11'},
    {nisn: '105903477', nama: 'NURLIA OKPIANI', kelas: 'X.11'},
    {nisn: '107228459', nama: 'RADITYA RAMDANI', kelas: 'X.11'},
    {nisn: '113405424', nama: 'RAHAYU RIZQY MAULIDA', kelas: 'X.11'},
    {nisn: '107269607', nama: 'RIAL ARIZKI NUGRAHA', kelas: 'X.11'},
    {nisn: '106608458', nama: 'RISFA OKTAVIA', kelas: 'X.11'},
    {nisn: '106568976', nama: 'SAFIRA NUR RAMADHANI', kelas: 'X.11'},
    {nisn: '109314963', nama: 'SATRIA ADRIWINATA', kelas: 'X.11'},
    {nisn: '118378606', nama: 'SESILIA SEKAR KINANTHI', kelas: 'X.11'},
    {nisn: '105435980', nama: 'SITI AISYAH EKA PUTRI', kelas: 'X.11'},
    {nisn: '107573351', nama: 'SOFILAH ADHARISMA', kelas: 'X.11'},
    {nisn: '116774027', nama: 'SYAZWAN YUSINA NATHANIA', kelas: 'X.11'},
    {nisn: '104753576', nama: 'WIDHAAH RAMADHANI', kelas: 'X.11'},
    {nisn: '118292613', nama: 'WILDAN RIZQI MUBAROK', kelas: 'X.11'},
    {nisn: '119014492', nama: 'ZAHRA AULIA', kelas: 'X.11'},
    {nisn: '108666914', nama: 'ALYSSA NUR HARIS', kelas: 'XI.1'},
    {nisn: '104172927', nama: 'AMELDA PUTRI AZAHARA', kelas: 'XI.1'},
    {nisn: '3098981042', nama: 'ANNISA ZAINUR RAHMAH', kelas: 'XI.1'},
    {nisn: '105116288', nama: 'ARRUM SAFARINA SHALIHAH', kelas: 'XI.1'},
    {nisn: '108123890', nama: 'AULIYA KHANSA ZAHRA', kelas: 'XI.1'},
    {nisn: '109257440', nama: 'CALISA NURALIA', kelas: 'XI.1'},
    {nisn: '106763626', nama: 'DAUT RAFAEL MANURUNG', kelas: 'XI.1'},
    {nisn: '92833735', nama: 'DEARVA MINHATUL MAULA', kelas: 'XI.1'},
    {nisn: '93970079', nama: 'DHEAIRA TRI AGUSTIANI', kelas: 'XI.1'},
    {nisn: '106950090', nama: 'EDWARD HASIHOLAN MANIK', kelas: 'XI.1'},
    {nisn: '107453591', nama: 'FALENT EIROS MARLAN SINUPAYUNG', kelas: 'XI.1'},
    {nisn: '104968272', nama: 'FARIZ RIZKY ADITYA', kelas: 'XI.1'},
    {nisn: '108992296', nama: 'FIKRI NUGRAHA', kelas: 'XI.1'},
    {nisn: '109549457', nama: 'FRILDAN FATHURROHMAN', kelas: 'XI.1'},
    {nisn: '102468227', nama: 'HAIKAL FAIRUZ RENALOV', kelas: 'XI.1'},
    {nisn: '101913247', nama: 'HAMDAN MAULANA', kelas: 'XI.1'},
    {nisn: '107079235', nama: 'IRFA AULIA ROSIANTI', kelas: 'XI.1'},
    {nisn: '94434856', nama: 'IZZATI JUANITRIA AZZAHRA', kelas: 'XI.1'},
    {nisn: '104244604', nama: 'JENNI ROS SETIAWAN', kelas: 'XI.1'},
    {nisn: '109996978', nama: 'JOHANNES RHIO NAINGGOLAN', kelas: 'XI.1'},
    {nisn: '104072990', nama: 'KEVIN INDRA FICO', kelas: 'XI.1'},
    {nisn: '91192472', nama: 'LAFRAN ADJI PRASTYO', kelas: 'XI.1'},
    {nisn: '3092266874', nama: 'LUTFIAH ZAHRA RAMADHANI', kelas: 'XI.1'},
    {nisn: '104471668', nama: 'M. IQBAL BHADALI', kelas: 'XI.1'},
    {nisn: '103448358', nama: 'MILLA AMILATUN NASIHAH', kelas: 'XI.1'},
    {nisn: '104906420', nama: 'MUHAMAD AZMIYANSYAH PUTRA PERMANA', kelas: 'XI.1'},
    {nisn: '91302542', nama: 'MUHAMAD IKBAL', kelas: 'XI.1'},
    {nisn: '95816248', nama: 'MUHAMAD PARIZ HUSEN', kelas: 'XI.1'},
    {nisn: '103966231', nama: 'MUHAMMAD FAKHRI', kelas: 'XI.1'},
    {nisn: '109507889', nama: 'MUHAMMAD ZAKI ALVINO HIDAYAT', kelas: 'XI.1'},
    {nisn: '103341090', nama: 'MUTIARA DEWI SARTIKA', kelas: 'XI.1'},
    {nisn: '91361724', nama: 'OWEN FELIX SIHOLE', kelas: 'XI.1'},
    {nisn: '109421658', nama: 'QUEENSHA FAUZIAH AS SYIFA', kelas: 'XI.1'},
    {nisn: '93709382', nama: 'RISMA WIDYA RAFFIDATUNNISA', kelas: 'XI.1'},
    {nisn: '98860185', nama: 'RIZKI OKTAPRIYANTO', kelas: 'XI.1'},
    {nisn: '106359063', nama: 'SAFIRA KHAIRANI', kelas: 'XI.1'},
    {nisn: '107981484', nama: 'SHIHAB FATHIN ABDILLAH', kelas: 'XI.1'},
    {nisn: '108445068', nama: 'TIARA APRILIA', kelas: 'XI.1'},
    {nisn: '95184392', nama: 'VITA NURAYU BUDIMAN', kelas: 'XI.1'},
    {nisn: '142821671', nama: 'ZAHRA NURUL SAFIRA', kelas: 'XI.1'},
    {nisn: '108075140', nama: 'ZIDAN ZAYID PUJIWIYADI', kelas: 'XI.1'},
    {nisn: '97410180', nama: 'ABY MAEL HANDRIAN', kelas: 'XI.2'},
    {nisn: '91335148', nama: 'ADITYA PRATAMA', kelas: 'XI.2'},
    {nisn: '99353016', nama: 'AHMAD DHAKYANI', kelas: 'XI.2'},
    {nisn: '105476228', nama: 'AIRIS FADHIL ATHAILLAH', kelas: 'XI.2'},
    {nisn: '102566859', nama: 'ANGGITA MAHARANI', kelas: 'XI.2'},
    {nisn: '104404816', nama: 'ANNE GRACEYA SEBAYANG', kelas: 'XI.2'},
    {nisn: '93061855', nama: 'ANNISA INDAH AURORA', kelas: 'XI.2'},
    {nisn: '101415074', nama: 'AZRIEL SYAHREZA', kelas: 'XI.2'},
    {nisn: '101385650', nama: 'BATRICIA ORIN GHAISANI', kelas: 'XI.2'},
    {nisn: '94757394', nama: 'CALLISTA DEWI ALMIRAH', kelas: 'XI.2'},
    {nisn: '105098289', nama: 'DEVI', kelas: 'XI.2'},
    {nisn: '104854373', nama: 'DINDA FEBRIYANTI', kelas: 'XI.2'},
    {nisn: '99360582', nama: 'DURRATUL FAKHIRA RAMADHANI', kelas: 'XI.2'},
    {nisn: '101793962', nama: 'DWI ANDHIKA HERMAWAN', kelas: 'XI.2'},
    {nisn: '99643819', nama: 'EKA MULJAYA', kelas: 'XI.2'},
    {nisn: '107633248', nama: 'FELICIA EKA RAMADHANI', kelas: 'XI.2'},
    {nisn: '95417762', nama: 'FRISILLAH FARYCA MANIK', kelas: 'XI.2'},
    {nisn: '3104839086', nama: 'GICHELLE MARITO NABABAN', kelas: 'XI.2'},
    {nisn: '101905914', nama: 'HAFIZH BAHTIAR YANUAR', kelas: 'XI.2'},
    {nisn: '95453149', nama: 'HANAN AMELIA', kelas: 'XI.2'},
    {nisn: '105874962', nama: 'IBNU HASAN', kelas: 'XI.2'},
    {nisn: '104213553', nama: 'IGNASIUS BRIYAN SIHALOHO', kelas: 'XI.2'},
    {nisn: '105906461', nama: 'JEAN FARIDZ LESMANA', kelas: 'XI.2'},
    {nisn: '95857036', nama: 'KEVIEN OKTORIAN PARDEDE', kelas: 'XI.2'},
    {nisn: '104951450', nama: 'KINARIYOSI SIMANJORANG', kelas: 'XI.2'},
    {nisn: '101961547', nama: 'LINDA KHUMAYIROH NUR RIZKI', kelas: 'XI.2'},
    {nisn: '101466386', nama: 'LINI ANGGRAENI WIDYANINGRUM', kelas: 'XI.2'},
    {nisn: '102745385', nama: 'MAULANA ISKANDAR', kelas: 'XI.2'},
    {nisn: '91210024', nama: 'MOCHAMAD NAJWAN RAFI ASSYIFA', kelas: 'XI.2'},
    {nisn: '104530243', nama: 'MOZA SALSABILA', kelas: 'XI.2'},
    {nisn: '3104093474', nama: 'MUHAMAD FAKHRI SHAQIF ZAHLADI', kelas: 'XI.2'},
    {nisn: '98884062', nama: 'MUHAMAD HANIF', kelas: 'XI.2'},
    {nisn: '94602811', nama: 'MUHAMAD RIZKI', kelas: 'XI.2'},
    {nisn: '102243339', nama: 'MUHAMMAD FATHIR FADILLAH', kelas: 'XI.2'},
    {nisn: '107474554', nama: 'NASYWA DWI ADINDA', kelas: 'XI.2'},
    {nisn: '106897614', nama: 'QUINZA PERMATA FEBRIANY', kelas: 'XI.2'},
    {nisn: '96515895', nama: 'RAFKA FADILLAH PURNAMA', kelas: 'XI.2'},
    {nisn: '107076486', nama: 'RAKHA AYDIN KHALFANI', kelas: 'XI.2'},
    {nisn: '94075716', nama: 'SABRINA AULIA PUTRI', kelas: 'XI.2'},
    {nisn: '96869938', nama: 'SITI NAJMILAH', kelas: 'XI.2'},
    {nisn: '106050236', nama: 'YONATAN SIREGAR', kelas: 'XI.2'},
    {nisn: '102050362', nama: 'ZAIDAN FAYADH HAIL', kelas: 'XI.2'},
    {nisn: '3099455041', nama: 'ACYUTA UGRA AONDY', kelas: 'XI.3'},
    {nisn: '95071881', nama: 'ADITTYA SITUMORANG', kelas: 'XI.3'},
    {nisn: '103823489', nama: 'AHMAD IHSAN FAUZI', kelas: 'XI.3'},
    {nisn: '116737145', nama: 'AIRA MAHARANI', kelas: 'XI.3'},
    {nisn: '99802623', nama: 'AJENG KHANZA AWALIYA', kelas: 'XI.3'},
    {nisn: '96051147', nama: 'ALISA PUTRI NOVIANTI', kelas: 'XI.3'},
    {nisn: '96445265', nama: 'ANITA MAHARANI', kelas: 'XI.3'},
    {nisn: '105381284', nama: 'APRILIA ZAHRA', kelas: 'XI.3'},
    {nisn: '109508807', nama: 'AZKA SYAHRULLAH PASELERY', kelas: 'XI.3'},
    {nisn: '106726459', nama: 'BONARDO IMMANUEL SIMBOLON', kelas: 'XI.3'},
    {nisn: '102362518', nama: 'CAESSARIO GHANNII ABBAS AS SHIDIQ', kelas: 'XI.3'},
    {nisn: '106942919', nama: 'EDWIN SINAGA', kelas: 'XI.3'},
    {nisn: '96154551', nama: 'EGI PERMANA', kelas: 'XI.3'},
    {nisn: '98551476', nama: 'FATTIH DWI ABDUHAQQIN', kelas: 'XI.3'},
    {nisn: '161728228', nama: 'HERLANGGA', kelas: 'XI.3'},
    {nisn: '104969161', nama: 'JACINDA RAHMADHANTI', kelas: 'XI.3'},
    {nisn: '99370431', nama: 'JOHANES RAFI MEWENGKANG', kelas: 'XI.3'},
    {nisn: '107286416', nama: 'KANEISHIA ANINDYA SHIFA', kelas: 'XI.3'},
    {nisn: '102368990', nama: 'KEYZA ARDELIA PANJAITAN', kelas: 'XI.3'},
    {nisn: '105026751', nama: 'LUQMAN ILHAM KUSUMA', kelas: 'XI.3'},
    {nisn: '93916962', nama: 'LUTHFI ADITYA KURNIADI', kelas: 'XI.3'},
    {nisn: '94013654', nama: 'MAHIRA SALMA ASLIHA', kelas: 'XI.3'},
    {nisn: '109622496', nama: 'MART ZEPANYA BR SIMARMATA', kelas: 'XI.3'},
    {nisn: '107000081', nama: 'MAURA TANIA AFANDI', kelas: 'XI.3'},
    {nisn: '102475060', nama: 'MEGA RIZKIYA', kelas: 'XI.3'},
    {nisn: '3109793240', nama: 'MICHELLE ROTUA NABABAN', kelas: 'XI.3'},
    {nisn: '104680567', nama: 'MOCHAMMAD FATQURROHMAN NURSALIM', kelas: 'XI.3'},
    {nisn: '97298623', nama: 'MUHAMAD WILDHAN YUSUF', kelas: 'XI.3'},
    {nisn: '107598781', nama: 'MUHAMMAD RIZKY MAULANA', kelas: 'XI.3'},
    {nisn: '102740770', nama: 'MUTI AMANDA', kelas: 'XI.3'},
    {nisn: '106653079', nama: 'NUR KHAIRUNNISA', kelas: 'XI.3'},
    {nisn: '3104308781', nama: 'OZKAN OLIVIA PUTRI ARIYNTA', kelas: 'XI.3'},
    {nisn: '97434126', nama: 'PUTRI AULIA RAMADHANI', kelas: 'XI.3'},
    {nisn: '109822366', nama: 'RAIHAN ALFAKHRIZI', kelas: 'XI.3'},
    {nisn: '92410799', nama: 'REGHINA FIANI KHAIRUNNISA', kelas: 'XI.3'},
    {nisn: '101882637', nama: 'RENDI FEBRIAN', kelas: 'XI.3'},
    {nisn: '91521971', nama: 'RIZKIA DWI RAMADHANI', kelas: 'XI.3'},
    {nisn: '106943612', nama: 'SAFA KHOERUNNISA', kelas: 'XI.3'},
    {nisn: '101033705', nama: 'SUPRAYOGI AKHMADI ZAKARIA', kelas: 'XI.3'},
    {nisn: '3095970597', nama: 'WINGRID SIMANJUNTAK', kelas: 'XI.3'},
    {nisn: '97858017', nama: 'ZHAQWAL QADDAFI AKBAR', kelas: 'XI.3'},
    {nisn: '109600876', nama: 'AHMAD DAHLAN', kelas: 'XI.4'},
    {nisn: '98679147', nama: 'AIRA OKTAVIANISA ARIFAH NAFRATILOVA', kelas: 'XI.4'},
    {nisn: '103740930', nama: 'AISYAH NURUSSHOFY', kelas: 'XI.4'},
    {nisn: '99406882', nama: 'APRILIYANI SEKAR AYU', kelas: 'XI.4'},
    {nisn: '105393322', nama: 'ASYIFA ASHFA', kelas: 'XI.4'},
    {nisn: '101714615', nama: 'AULIA NURUL ZAHRA', kelas: 'XI.4'},
    {nisn: '103072388', nama: 'BIMO KHOIRY RAMADHAN', kelas: 'XI.4'},
    {nisn: '96375952', nama: 'CHAERUNNISA RAHMANIA YULIA AFIFAH', kelas: 'XI.4'},
    {nisn: '109039373', nama: 'CYNTHIA AYU NIRMALA', kelas: 'XI.4'},
    {nisn: '107599547', nama: 'FARIDZ MULYA HADIST', kelas: 'XI.4'},
    {nisn: '101816119', nama: 'FEBRIYANI TUNGGA DEWI', kelas: 'XI.4'},
    {nisn: '108092435', nama: 'GHADIZA ADYA QOLBU', kelas: 'XI.4'},
    {nisn: '3094849263', nama: 'GRACE SEPTIANI SITUMORANG', kelas: 'XI.4'},
    {nisn: '106366706', nama: 'HAFIZ RISFY ADNAN', kelas: 'XI.4'},
    {nisn: '92353724', nama: 'INTAN BARKAH', kelas: 'XI.4'},
    {nisn: '104901970', nama: 'IRES REZKYA', kelas: 'XI.4'},
    {nisn: '95139878', nama: 'JANICE VANIA MICHAELIA', kelas: 'XI.4'},
    {nisn: '105776349', nama: 'KHOJINATUL JANAH', kelas: 'XI.4'},
    {nisn: '102635488', nama: 'MAHESA ERLANGGA', kelas: 'XI.4'},
    {nisn: '107611127', nama: 'MEIDHIYYA SYAUQIEE PRAZSTELLA', kelas: 'XI.4'},
    {nisn: '107898510', nama: 'MELINDA AI NAFTALIA', kelas: 'XI.4'},
    {nisn: '94774107', nama: 'MIRZA KUSUMAWARDHANI', kelas: 'XI.4'},
    {nisn: '91728629', nama: 'MUCHAMAD RIZKY PRAKOSO', kelas: 'XI.4'},
    {nisn: '107049258', nama: 'MUHAMMAD RAJA AL-GHIFARI', kelas: 'XI.4'},
    {nisn: '109943020', nama: 'MUTIARA ISNAENI ZAHRA', kelas: 'XI.4'},
    {nisn: '105902635', nama: 'NABILA AYU APRILIANA', kelas: 'XI.4'},
    {nisn: '102710723', nama: 'NADIEN MADRINIA PUTRI', kelas: 'XI.4'},
    {nisn: '92616559', nama: 'NAISMA ANMA', kelas: 'XI.4'},
    {nisn: '92524375', nama: 'NATASYA AULIA PUTRI ERVINA', kelas: 'XI.4'},
    {nisn: '3090223901', nama: 'NOVIA NUR AZIIZAH', kelas: 'XI.4'},
    {nisn: '101936502', nama: 'PEPI APRIYANI', kelas: 'XI.4'},
    {nisn: '92238003', nama: 'RADEN RARA INAS PARASWARI BUDIYANTO', kelas: 'XI.4'},
    {nisn: '98679439', nama: 'RAHAYU DEWI LESTARI', kelas: 'XI.4'},
    {nisn: '103958373', nama: 'RAISYA FATARANI', kelas: 'XI.4'},
    {nisn: '107713518', nama: 'REIZAN DAMAR ALDAFARI', kelas: 'XI.4'},
    {nisn: '108503781', nama: 'SARMILA', kelas: 'XI.4'},
    {nisn: '104141668', nama: 'SILVANA ADINDA PUTRI MULYANA', kelas: 'XI.4'},
    {nisn: '108540619', nama: 'SITI ASMAWATI SOPYANI', kelas: 'XI.4'},
    {nisn: '93776156', nama: 'SYAFIRA PRIAMITA', kelas: 'XI.4'},
    {nisn: '102339774', nama: 'WINDY AULIA RAMADHANI', kelas: 'XI.4'},
    {nisn: '109786948', nama: 'ZAHIDA QALBI NADHIFA', kelas: 'XI.4'},
    {nisn: '91151305', nama: 'ZAHRA FIKRIYAH', kelas: 'XI.4'},
    {nisn: '92371316', nama: 'ADRIAN MAULANA', kelas: 'XI.5'},
    {nisn: '3093660805', nama: 'AHMAD NUR APDANI', kelas: 'XI.5'},
    {nisn: '93027166', nama: 'ANDHIKA PRASTYO JATI', kelas: 'XI.5'},
    {nisn: '109534346', nama: 'ANGEL JULIA RAHMAWATI', kelas: 'XI.5'},
    {nisn: '114134371', nama: 'ANITA CHRISTIANA STEFANY PASARIBU', kelas: 'XI.5'},
    {nisn: '95624981', nama: 'AYU SHINTA MULYA PUTRI', kelas: 'XI.5'},
    {nisn: '103321322', nama: 'AZKIA MAULIDA NAILA', kelas: 'XI.5'},
    {nisn: '94853811', nama: 'BINTANG MUTHI SALSABILA', kelas: 'XI.5'},
    {nisn: '106464628', nama: 'BUNGA PUTRI YAMAN', kelas: 'XI.5'},
    {nisn: '101998975', nama: 'CITRA NUR HAFIDZAH', kelas: 'XI.5'},
    {nisn: '95881692', nama: 'DINI RAMADHANI DWI MULYANTI', kelas: 'XI.5'},
    {nisn: '3091766795', nama: 'ELFARISNA SYAHIRA', kelas: 'XI.5'},
    {nisn: '92921280', nama: 'FAUZIAH NUR KHOFI', kelas: 'XI.5'},
    {nisn: '91800380', nama: 'GHEISYA RAHAYUNIAR', kelas: 'XI.5'},
    {nisn: '105323895', nama: 'GIWANGKARA SHOLIHAT', kelas: 'XI.5'},
    {nisn: '98499202', nama: 'HARNUM NOVIA FATMAWATI', kelas: 'XI.5'},
    {nisn: '102463304', nama: 'INTAN APRILLA NURAENI', kelas: 'XI.5'},
    {nisn: '106958016', nama: 'KAMELIA ASYIPA', kelas: 'XI.5'},
    {nisn: '93854407', nama: 'KEYSHA HELPA RIDA AMMARA', kelas: 'XI.5'},
    {nisn: '106475265', nama: 'MANIHATUL QONAAH', kelas: 'XI.5'},
    {nisn: '105221977', nama: 'MARIA SEPTI YONI', kelas: 'XI.5'},
    {nisn: '104798034', nama: 'MARVA AGASYA SAPUTRA', kelas: 'XI.5'},
    {nisn: '105252045', nama: 'MILANEISYA RAHMAYANTI GEULIZA', kelas: 'XI.5'},
    {nisn: '95870739', nama: 'MUHAMAD FARHAN', kelas: 'XI.5'},
    {nisn: '95954204', nama: 'MUHAMAD RIZKI RAMADHAN', kelas: 'XI.5'},
    {nisn: '94195112', nama: 'MUHAMMAD ARHABI RIZQI', kelas: 'XI.5'},
    {nisn: '109778878', nama: 'NAOMI ANGELIA NAPITUPULU', kelas: 'XI.5'},
    {nisn: '109672813', nama: 'NATALIA CHRISTY ANDINI', kelas: 'XI.5'},
    {nisn: '95411724', nama: 'NAYLA RAMADANI', kelas: 'XI.5'},
    {nisn: '107543288', nama: 'NUR PUTRI PEBRIYANTI', kelas: 'XI.5'},
    {nisn: '107436397', nama: 'PRAMESTI BERLIANA GEVIRA MUSLIH', kelas: 'XI.5'},
    {nisn: '97797720', nama: 'PRICILIA PUTRI SEPTIANA', kelas: 'XI.5'},
    {nisn: '94980577', nama: 'RAFA AGLIA ATTHORIQ', kelas: 'XI.5'},
    {nisn: '101748057', nama: 'RANGGA DWI PUTRA', kelas: 'XI.5'},
    {nisn: '107447670', nama: 'REGINA AURELLIA', kelas: 'XI.5'},
    {nisn: '104230990', nama: 'REKSA TRESNA SAPUTRA', kelas: 'XI.5'},
    {nisn: '107751139', nama: 'SARAH QONITA ARIFIA', kelas: 'XI.5'},
    {nisn: '91763211', nama: 'SHERLY WIDYADARI', kelas: 'XI.5'},
    {nisn: '93924570', nama: 'SILVA AFRIYANTI', kelas: 'XI.5'},
    {nisn: '106642805', nama: 'STEFANI ROSE SIHOTANG', kelas: 'XI.5'},
    {nisn: '105071539', nama: 'THALITA KINARA AYUNIAR', kelas: 'XI.5'},
    {nisn: '109243229', nama: 'ZIVARA KHALISHA', kelas: 'XI.5'},
    {nisn: '106243640', nama: 'AJENG RIZKY KHOIRUNNISA', kelas: 'XI.6'},
    {nisn: '108579166', nama: 'AMANDA RAINA DEWI', kelas: 'XI.6'},
    {nisn: '95548831', nama: 'ANGGUN MUTIARA SALSA NURAULIA', kelas: 'XI.6'},
    {nisn: '97181146', nama: 'ANNISYA NURUL PAJRIANI', kelas: 'XI.6'},
    {nisn: '106805599', nama: 'ARTHANIA DWI PUTRI HIDAYAT', kelas: 'XI.6'},
    {nisn: '96029906', nama: 'ASIFA RAMADHANI', kelas: 'XI.6'},
    {nisn: '107647558', nama: 'ATHA TYAS PARAMESTI', kelas: 'XI.6'},
    {nisn: '92383647', nama: 'BINTANG ARSY MAYA', kelas: 'XI.6'},
    {nisn: '104460629', nama: 'CHERYL ADELLIA NESA', kelas: 'XI.6'},
    {nisn: '103223569', nama: 'DHEA MARCHELA SIREGAR', kelas: 'XI.6'},
    {nisn: '97312722', nama: 'FIRYAL AGHNA NINDYA', kelas: 'XI.6'},
    {nisn: '106544542', nama: 'GILANG PERMANA', kelas: 'XI.6'},
    {nisn: '3099101233', nama: 'HAIFA ALIA KHOIRUNISA', kelas: 'XI.6'},
    {nisn: '105026440', nama: 'HANNY DIVA FITRIA RAMADANI MUHTAR', kelas: 'XI.6'},
    {nisn: '93918851', nama: 'HITSA RISDIANA SUSANTO', kelas: 'XI.6'},
    {nisn: '104086180', nama: 'INTAN NURAENI', kelas: 'XI.6'},
    {nisn: '105521592', nama: 'ISTI NUR FATONAH', kelas: 'XI.6'},
    {nisn: '92112430', nama: 'JADWAL FAYYADH DHAHIR', kelas: 'XI.6'},
    {nisn: '109811721', nama: 'KEISYA NADIRA HAYFA', kelas: 'XI.6'},
    {nisn: '103930127', nama: 'LAILI HASNA NURIAH', kelas: 'XI.6'},
    {nisn: '118232091', nama: 'MARLA NURSYIFA', kelas: 'XI.6'},
    {nisn: '108690446', nama: 'MUHAMAD RIZQI PRATAMA', kelas: 'XI.6'},
    {nisn: '109981259', nama: 'MUHAMMAD CHESTA ARDIONA', kelas: 'XI.6'},
    {nisn: '107846361', nama: 'MUHAMMAD SEIF TAUFIQILLAH', kelas: 'XI.6'},
    {nisn: '3103497957', nama: 'NADHIFA KHAERANI', kelas: 'XI.6'},
    {nisn: '109989188', nama: 'NOVA AYU KURNIAWAN', kelas: 'XI.6'},
    {nisn: '108596916', nama: 'NURHALIZA IJABATUL NUGRAHA', kelas: 'XI.6'},
    {nisn: '95745691', nama: 'NURUL HAWA', kelas: 'XI.6'},
    {nisn: '99426867', nama: 'PRISCILIA NATALI PANGARIBUAN', kelas: 'XI.6'},
    {nisn: '101709349', nama: 'RAISSA MAEDA PUTRI', kelas: 'XI.6'},
    {nisn: '93495603', nama: 'RATNA KUSUMAWATI', kelas: 'XI.6'},
    {nisn: '102478310', nama: 'RIZKY RADITHYA BUDIMAN', kelas: 'XI.6'},
    {nisn: '108410135', nama: 'SALMA NURMALA LUTHFIANI', kelas: 'XI.6'},
    {nisn: '99284806', nama: 'SHINDY LESTARI', kelas: 'XI.6'},
    {nisn: '103568743', nama: 'SITI MARWAH AZZAHRI', kelas: 'XI.6'},
    {nisn: '94681491', nama: 'SYAFIRRA ANGELINE DESTYA WARDANI', kelas: 'XI.6'},
    {nisn: '103810146', nama: 'UNAISAH HAURO', kelas: 'XI.6'},
    {nisn: '92521756', nama: 'ZAHRA ZAKIYYAH RAHMAT', kelas: 'XI.6'},
    {nisn: '94615651', nama: 'ACHMAD ANABILL ROJAB', kelas: 'XI.7'},
    {nisn: '95754169', nama: 'ADELIA PUTRI SYAWALLANI', kelas: 'XI.7'},
    {nisn: '107877832', nama: 'ADITYA FIRMANSYAH', kelas: 'XI.7'},
    {nisn: '93015590', nama: 'ALIFAH NUR HASANAH', kelas: 'XI.7'},
    {nisn: '92177233', nama: 'ALMIRA RUKMANA', kelas: 'XI.7'},
    {nisn: '109625881', nama: 'ALVEN FALVIAN WANURI', kelas: 'XI.7'},
    {nisn: '97738595', nama: 'ALYA HANIFAH', kelas: 'XI.7'},
    {nisn: '91136580', nama: 'ANISKA OKTAVIA', kelas: 'XI.7'},
    {nisn: '93934405', nama: 'ANNISA SYIFA HASANAH', kelas: 'XI.7'},
    {nisn: '97696486', nama: 'CALLISTA RAYSHA PUTRI GUNAWAN', kelas: 'XI.7'},
    {nisn: '104243843', nama: 'CHANTIKA NOER ELYSA', kelas: 'XI.7'},
    {nisn: '93705964', nama: 'DAFA SURYANA', kelas: 'XI.7'},
    {nisn: '99282192', nama: 'DAMAR INDRA RAMADHAN', kelas: 'XI.7'},
    {nisn: '93104653', nama: 'DIANA RISMA YANTI', kelas: 'XI.7'},
    {nisn: '3103000736', nama: 'DWI INDHIRA', kelas: 'XI.7'},
    {nisn: '93597214', nama: 'ENDA', kelas: 'XI.7'},
    {nisn: '83566792', nama: 'FANY PRATIWI', kelas: 'XI.7'},
    {nisn: '108241718', nama: 'FIORENZA NATHANIA CALLYSTA SAMBALI', kelas: 'XI.7'},
    {nisn: '96824925', nama: 'GILANG RAPIKA', kelas: 'XI.7'},
    {nisn: '95049304', nama: 'KAE LINTANG INGTYAS', kelas: 'XI.7'},
    {nisn: '91632279', nama: 'KARISMA', kelas: 'XI.7'},
    {nisn: '96910284', nama: 'LAURA FRANSSISCA', kelas: 'XI.7'},
    {nisn: '105735076', nama: 'MALIKA ILMA KAUTSAR', kelas: 'XI.7'},
    {nisn: '103211652', nama: 'MARIANUS STEVEN CHRISTIANO SAING', kelas: 'XI.7'},
    {nisn: '102937431', nama: 'MAULIDA RAHMANIA YUSUP', kelas: 'XI.7'},
    {nisn: '3095831628', nama: 'MUHAMAD RASYA RAMADHAN', kelas: 'XI.7'},
    {nisn: '94875470', nama: 'MUHAMMAD FAJRIANSAH', kelas: 'XI.7'},
    {nisn: '106675102', nama: 'MUHAMMAD ILHAM', kelas: 'XI.7'},
    {nisn: '93641082', nama: 'NABIL RIZQI KHOERUN ADIN', kelas: 'XI.7'},
    {nisn: '3108072942', nama: 'NABILA TJENDIKIA SUHENDAR', kelas: 'XI.7'},
    {nisn: '107355687', nama: 'NAJLA FAIRUZ', kelas: 'XI.7'},
    {nisn: '95895598', nama: 'NUR ALISA AMALIA', kelas: 'XI.7'},
    {nisn: '103317440', nama: 'PRITA ISLAMI PUTRI', kelas: 'XI.7'},
    {nisn: '94960216', nama: 'RENREN PRASETYA NUGRAHA', kelas: 'XI.7'},
    {nisn: '86291996', nama: 'RIFAI ALMA ARIF', kelas: 'XI.7'},
    {nisn: '97750985', nama: 'RIYAN MAULANA', kelas: 'XI.7'},
    {nisn: '97667862', nama: 'RIZKY HERMAWAN', kelas: 'XI.7'},
    {nisn: '115076179', nama: 'SANIA FITRI LUTHFIAN', kelas: 'XI.7'},
    {nisn: '93128695', nama: 'SITI AISAH', kelas: 'XI.7'},
    {nisn: '102091055', nama: 'SITI AUSIFA NUROHMAH', kelas: 'XI.7'},
    {nisn: '93001902', nama: 'SYIFA AULIA SASHI', kelas: 'XI.7'},
    {nisn: '95415319', nama: 'TITA AMALIA', kelas: 'XI.7'},
    {nisn: '98674388', nama: 'ABDUL ROHMAN', kelas: 'XI.8'},
    {nisn: '107444594', nama: 'ABIMANYU SAKTI WIGUNO', kelas: 'XI.8'},
    {nisn: '98273582', nama: 'AISAH', kelas: 'XI.8'},
    {nisn: '94047498', nama: 'ALBIYANU', kelas: 'XI.8'},
    {nisn: '109730800', nama: 'ALTAVIRA WANARIZQI', kelas: 'XI.8'},
    {nisn: '107740368', nama: 'ANDEAS PRATAMA PUTRA', kelas: 'XI.8'},
    {nisn: '99913776', nama: 'ARYO JAYA', kelas: 'XI.8'},
    {nisn: '106079706', nama: 'AZIZAH PUTRI LATIFAH', kelas: 'XI.8'},
    {nisn: '101930412', nama: 'AZIZIYAH', kelas: 'XI.8'},
    {nisn: '103801687', nama: 'BINTANG RIZKY EDISON SIMBOLON', kelas: 'XI.8'},
    {nisn: '86136496', nama: 'CANDRA', kelas: 'XI.8'},
    {nisn: '91342358', nama: 'DARULL ADITYA FIRMANSYAH', kelas: 'XI.8'},
    {nisn: '93711407', nama: 'DAVA PUTRA JAELANI', kelas: 'XI.8'},
    {nisn: '108030724', nama: 'DEDE HERLINA', kelas: 'XI.8'},
    {nisn: '98794267', nama: 'DEDEN ARDIANSAH', kelas: 'XI.8'},
    {nisn: '98447627', nama: 'DELLA PUTRI ANANDA', kelas: 'XI.8'},
    {nisn: '96478806', nama: 'FATHIR MOHARROM ARIFIEN', kelas: 'XI.8'},
    {nisn: '106839404', nama: 'FITRIYA AISYA AKMALA ZULFA', kelas: 'XI.8'},
    {nisn: '101271515', nama: 'GLADYS ALISYA RAMADHANI', kelas: 'XI.8'},
    {nisn: '101247361', nama: 'IRGI ARGA KUSUMA PRADITA', kelas: 'XI.8'},
    {nisn: '103809150', nama: 'IRVAN MURDANI', kelas: 'XI.8'},
    {nisn: '73811417', nama: 'JESSICA AUREL NATASHA', kelas: 'XI.8'},
    {nisn: '92546706', nama: 'KARLINAWATI', kelas: 'XI.8'},
    {nisn: '107250971', nama: 'LIVIA SABILA', kelas: 'XI.8'},
    {nisn: '102126107', nama: 'MONALISA AZZAHRA SULAEMAN', kelas: 'XI.8'},
    {nisn: '91342457', nama: 'MUHAMAD FARID ZEIN', kelas: 'XI.8'},
    {nisn: '93614496', nama: 'MUHAMAD PADLI AL KHAPI', kelas: 'XI.8'},
    {nisn: '94415338', nama: 'MUHAMAD YUSUP', kelas: 'XI.8'},
    {nisn: '103303954', nama: 'MUHAMMAD RIZKY WIJAYA', kelas: 'XI.8'},
    {nisn: '103341795', nama: 'NAIZAR ZAHRAN', kelas: 'XI.8'},
    {nisn: '96557483', nama: 'NENG PITRI', kelas: 'XI.8'},
    {nisn: '103455266', nama: 'NISA FARICHA', kelas: 'XI.8'},
    {nisn: '101739476', nama: 'NOVITA DARA ANJANI', kelas: 'XI.8'},
    {nisn: '105176723', nama: 'NURAMANAH', kelas: 'XI.8'},
    {nisn: '101014939', nama: 'REVINA RIYONO', kelas: 'XI.8'},
    {nisn: '93411191', nama: 'RIZKI MUHAMMAD IDRIS', kelas: 'XI.8'},
    {nisn: '106143506', nama: 'SEBASTIAN ANUGRAH SITOMPUL', kelas: 'XI.8'},
    {nisn: '99695114', nama: 'SILVI AULIA NATALIE', kelas: 'XI.8'},
    {nisn: '106894856', nama: 'SITI LUTHVIA AZZAHRA', kelas: 'XI.8'},
    {nisn: '104550251', nama: 'SYAHRINI YULIANI', kelas: 'XI.8'},
    {nisn: '95311548', nama: 'SYIFA NURLATIFAH', kelas: 'XI.8'},
    {nisn: '93337539', nama: 'ZHITYA RAHMAWATI', kelas: 'XI.8'},
    {nisn: '103785873', nama: 'ABDHAN NURUL ILHAM', kelas: 'XI.9'},
    {nisn: '99041551', nama: 'ABDUL AZIS', kelas: 'XI.9'},
    {nisn: '3098623484', nama: 'ADELARD USMAN ZHAFIR ALRASYID', kelas: 'XI.9'},
    {nisn: '96461408', nama: 'ALFIA ZAHRA', kelas: 'XI.9'},
    {nisn: '106808111', nama: 'ALIP BAYHAKKY', kelas: 'XI.9'},
    {nisn: '104484186', nama: 'ANGELYN POLISCHA LUMBAN TOBING', kelas: 'XI.9'},
    {nisn: '92271017', nama: 'ANGGUN OKTAVIA', kelas: 'XI.9'},
    {nisn: '104545486', nama: 'AQILLA NUR AZZAHRA SETIADI', kelas: 'XI.9'},
    {nisn: '104776722', nama: 'ARPA NUGRAHA', kelas: 'XI.9'},
    {nisn: '104492603', nama: 'AULYA RIZKYTA PUTRI', kelas: 'XI.9'},
    {nisn: '99849618', nama: 'CITRA DEWI', kelas: 'XI.9'},
    {nisn: '105796984', nama: 'DAPA ALFA RIZKI', kelas: 'XI.9'},
    {nisn: '97957609', nama: 'DECIKA FEBRIYANTI', kelas: 'XI.9'},
    {nisn: '94447414', nama: 'DESWITA AULIDIA', kelas: 'XI.9'},
    {nisn: '107699615', nama: 'ESTHER AGUSTI YANI SIGALINGGING', kelas: 'XI.9'},
    {nisn: '108575894', nama: 'FACHRI ALFARIZI', kelas: 'XI.9'},
    {nisn: '104581907', nama: 'HAJWA NUR ASIAH', kelas: 'XI.9'},
    {nisn: '91629034', nama: 'IBRAHIM AMIRUL ABRAR', kelas: 'XI.9'},
    {nisn: '98783856', nama: 'KAYLA ANGGRAENI', kelas: 'XI.9'},
    {nisn: '3096936623', nama: 'KEYNA ANASTASYA PUTRI', kelas: 'XI.9'},
    {nisn: '104763103', nama: 'LAURA MAYA SOFA', kelas: 'XI.9'},
    {nisn: '104622289', nama: 'MUHAMAD ADZAM NAZRIL ILHAMZAH', kelas: 'XI.9'},
    {nisn: '99376440', nama: 'MUHAMAD RIZKY ALFIANSYAH', kelas: 'XI.9'},
    {nisn: '96823392', nama: 'MUHAMAD YUDA PRATAMA', kelas: 'XI.9'},
    {nisn: '108409513', nama: 'MUHAMMAD BASMALLAH PUTRA FIRDAUS', kelas: 'XI.9'},
    {nisn: '103403217', nama: 'MUHAMMAD WILLYANA NURYASIN', kelas: 'XI.9'},
    {nisn: '106108357', nama: 'NANDI ZEAMAY DEFANZA', kelas: 'XI.9'},
    {nisn: '98779861', nama: 'NIKI ASTRIA', kelas: 'XI.9'},
    {nisn: '99463468', nama: 'NURAENI AMELIA PUTRI', kelas: 'XI.9'},
    {nisn: '93314118', nama: 'NURMA RESA GINANTI', kelas: 'XI.9'},
    {nisn: '108754442', nama: 'NYIMAS AZZAHRA', kelas: 'XI.9'},
    {nisn: '107003368', nama: 'RAHMA SYIFA AZ ZAHRA', kelas: 'XI.9'},
    {nisn: '107543471', nama: 'RATU PANGESTU', kelas: 'XI.9'},
    {nisn: '109153506', nama: 'REGINA CANDRA KIRANA DEWI', kelas: 'XI.9'},
    {nisn: '84296124', nama: 'RETNO WIGATI', kelas: 'XI.9'},
    {nisn: '108242839', nama: 'REVANISKY SATRIANI', kelas: 'XI.9'},
    {nisn: '97658160', nama: 'RIZKY ROHMAT JUMELAR', kelas: 'XI.9'},
    {nisn: '94101125', nama: 'SASKIA WULANDARI', kelas: 'XI.9'},
    {nisn: '99018349', nama: 'SATRIA BANDA PUTRA PALMIN SURYA KELANA', kelas: 'XI.9'},
    {nisn: '105736297', nama: 'SITI HAPIZA', kelas: 'XI.9'},
    {nisn: '97707024', nama: 'SITI MARIYAM', kelas: 'XI.9'},
    {nisn: '97379119', nama: 'TASYA ULFA', kelas: 'XI.9'},
    {nisn: '101487209', nama: 'ADINDA ALYA RIZKYA', kelas: 'XI.10'},
    {nisn: '103414818', nama: 'ALINDIA ZAHRA', kelas: 'XI.10'},
    {nisn: '109933932', nama: 'ANGELINE SARI WIJAYA', kelas: 'XI.10'},
    {nisn: '108543391', nama: 'ARDHINA NYSSA ILHYA', kelas: 'XI.10'},
    {nisn: '73375267', nama: 'ARIS ARDANA', kelas: 'XI.10'},
    {nisn: '96841858', nama: 'ARMAN', kelas: 'XI.10'},
    {nisn: '81546637', nama: 'ASRI NURAENI', kelas: 'XI.10'},
    {nisn: '103564725', nama: 'AZEL ANDRISKA', kelas: 'XI.10'},
    {nisn: '104692429', nama: 'AZKIANO RAKHA MULYAWAN', kelas: 'XI.10'},
    {nisn: '84657903', nama: 'BHAMAWESTI SANDI SAID', kelas: 'XI.10'},
    {nisn: '107849286', nama: 'CHIKA VIOSA VALENTINA', kelas: 'XI.10'},
    {nisn: '96105250', nama: 'CUCU ELISA', kelas: 'XI.10'},
    {nisn: '94305295', nama: 'DHAFI SULAIMAN KAMIL', kelas: 'XI.10'},
    {nisn: '94654017', nama: 'DIAZ FATHUR ROHMAN', kelas: 'XI.10'},
    {nisn: '96875716', nama: 'FANNY NURFADHILAH', kelas: 'XI.10'},
    {nisn: '96725577', nama: 'FIKA RAHAYU', kelas: 'XI.10'},
    {nisn: '104758784', nama: 'GEISAN EIDEN', kelas: 'XI.10'},
    {nisn: '99612136', nama: 'HAIFA LUNA HIJRIYANI', kelas: 'XI.10'},
    {nisn: '98791783', nama: 'JELITA PERMATA SARI', kelas: 'XI.10'},
    {nisn: '102908926', nama: 'JOAN REVANNO', kelas: 'XI.10'},
    {nisn: '96296523', nama: 'KAILAH KHOIRUN NISA', kelas: 'XI.10'},
    {nisn: '96987771', nama: 'KARISKA SEPTIANI PUTRI', kelas: 'XI.10'},
    {nisn: '103342617', nama: 'KEISYA NADIN PUTRI SASMITA', kelas: 'XI.10'},
    {nisn: '93578196', nama: 'KEZYA RADITYA MULYA PRATAMA', kelas: 'XI.10'},
    {nisn: '94890936', nama: 'MIFTA AINUN AULIANA AYUNA NINGSIH', kelas: 'XI.10'},
    {nisn: '105195442', nama: 'MIRA AMANDA', kelas: 'XI.10'},
    {nisn: '104047325', nama: 'MUHAMMAD AL FAZRY', kelas: 'XI.10'},
    {nisn: '96453573', nama: 'MUHAMMAD ZAHRAN RADITHYA FIRDAUS', kelas: 'XI.10'},
    {nisn: '94075245', nama: 'MUHAMMAD ZHARIF KHAIRULANAM', kelas: 'XI.10'},
    {nisn: '93620064', nama: 'PUTRI SYAFIRA ISLAMI', kelas: 'XI.10'},
    {nisn: '95524725', nama: 'RAHMA NURINDAH', kelas: 'XI.10'},
    {nisn: '92211537', nama: 'RANI OKTAVIANI', kelas: 'XI.10'},
    {nisn: '105111141', nama: 'REVAN AFRIANSYAH', kelas: 'XI.10'},
    {nisn: '95439631', nama: 'RIDWAN NURWAHID', kelas: 'XI.10'},
    {nisn: '103209979', nama: 'SALMAN ALFARIZY', kelas: 'XI.10'},
    {nisn: '93425527', nama: 'SITI AISYAH', kelas: 'XI.10'},
    {nisn: '106692137', nama: 'SITI NURALIIFAH SETIAWAN', kelas: 'XI.10'},
    {nisn: '101623706', nama: 'SYAHAD FITRIA', kelas: 'XI.10'},
    {nisn: '3104281358', nama: 'TALITHA IVANA SABILLA', kelas: 'XI.10'},
    {nisn: '99834356', nama: 'UUT MURTAPIAH', kelas: 'XI.10'},
    {nisn: '104441296', nama: 'WIDIYA LESTARI', kelas: 'XI.10'},
    {nisn: '109371484', nama: 'ZAHRATUL SYFAH', kelas: 'XI.10'},
    {nisn: '107188852', nama: 'ABDULLAH FAKHRI', kelas: 'XI.11'},
    {nisn: '92403136', nama: 'AFIAH SENJA ARYANTO', kelas: 'XI.11'},
    {nisn: '105466216', nama: 'ALIKA ALDIANA PUTRI', kelas: 'XI.11'},
    {nisn: '103501061', nama: 'ANDRE MAULANA', kelas: 'XI.11'},
    {nisn: '102583518', nama: 'APRILIA NURSEHA', kelas: 'XI.11'},
    {nisn: '92877840', nama: 'AQILA RAFAN NURI', kelas: 'XI.11'},
    {nisn: '99227391', nama: 'AULIA SASKIA TULROHMAH', kelas: 'XI.11'},
    {nisn: '102811517', nama: 'AZKIA NURMAULIDA ISKANDAR', kelas: 'XI.11'},
    {nisn: '88501698', nama: 'CHICA DWI FANI', kelas: 'XI.11'},
    {nisn: '105333993', nama: 'CLARISA RATU SALSABILA', kelas: 'XI.11'},
    {nisn: '96716108', nama: 'CUCU SETIAWATI', kelas: 'XI.11'},
    {nisn: '93928775', nama: 'DE CINTA AURELLIA KURNAEDI', kelas: 'XI.11'},
    {nisn: '97597437', nama: 'DIYO ANDIKA ARIFANDI', kelas: 'XI.11'},
    {nisn: '95948743', nama: 'ENENG', kelas: 'XI.11'},
    {nisn: '92017206', nama: 'FACHRI ARDIANSYAH RAMADHAN', kelas: 'XI.11'},
    {nisn: '99578946', nama: 'FADHILLA ANGGUN WIJAYA', kelas: 'XI.11'},
    {nisn: '99476106', nama: 'HAIFA ALIFANYA', kelas: 'XI.11'},
    {nisn: '83192184', nama: 'HILDA DAMAYANTI', kelas: 'XI.11'},
    {nisn: '92612342', nama: 'INTAN AULIA', kelas: 'XI.11'},
    {nisn: '101258595', nama: 'JHON  CRISTIAN SAPUTRA HUTABARAT', kelas: 'XI.11'},
    {nisn: '104152275', nama: 'JIHAN HUSNADIREJA', kelas: 'XI.11'},
    {nisn: '109623072', nama: 'KAREN JULIE DAANIYAH SATRIANTORO', kelas: 'XI.11'},
    {nisn: '103520533', nama: 'KEYSHA HIKMATUL SHALIHAT', kelas: 'XI.11'},
    {nisn: '104527669', nama: 'KHAIRUNNISA AMELIA PUTRI', kelas: 'XI.11'},
    {nisn: '97299183', nama: 'KIRANA SALSABILA', kelas: 'XI.11'},
    {nisn: '3104193857', nama: 'LEONARD DYLAN ALFANDY', kelas: 'XI.11'},
    {nisn: '106059339', nama: 'MOCHAMAD SALMAN ALFARIZI', kelas: 'XI.11'},
    {nisn: '109197066', nama: 'MUHAMAD FIQIH', kelas: 'XI.11'},
    {nisn: '94110114', nama: 'MUHAMAD YUDI PRIYADI', kelas: 'XI.11'},
    {nisn: '104071791', nama: 'MUHAMMAD FARREL ADITYA HELMAN', kelas: 'XI.11'},
    {nisn: '104622536', nama: 'MULTAZAM APTA SUWARDANA', kelas: 'XI.11'},
    {nisn: '107758918', nama: 'PAHRU ROJI', kelas: 'XI.11'},
    {nisn: '92375628', nama: 'PUTRI PORTUNA', kelas: 'XI.11'},
    {nisn: '95489176', nama: 'RIMA CAHYA NINGRUM', kelas: 'XI.11'},
    {nisn: '96074307', nama: 'RIZKI HERMAWAN', kelas: 'XI.11'},
    {nisn: '91845287', nama: 'ROBY SAPUTRA', kelas: 'XI.11'},
    {nisn: '96405215', nama: 'SAYYID ADIL RAJABI', kelas: 'XI.11'},
    {nisn: '91302528', nama: 'SITI NUR HABIBAH', kelas: 'XI.11'},
    {nisn: '107901758', nama: 'SYACHLENDRA WINATA', kelas: 'XI.11'},
    {nisn: '109695458', nama: 'TRI RAHMAWATI', kelas: 'XI.11'},
    {nisn: '98932379', nama: 'WILLIAM DANU', kelas: 'XI.11'},
    {nisn: '105787098', nama: 'YUDA ANUGRAH ARITONANG', kelas: 'XI.11'},
    {nisn: '92788524', nama: 'AISHA AULIA ZAHRA', kelas: 'XII.1'},
    {nisn: '86211722', nama: 'ALAUDDIN DZAKI ATHAURRAHMAN', kelas: 'XII.1'},
    {nisn: '93607298', nama: 'AUFA HILAL NASUKHA', kelas: 'XII.1'},
    {nisn: '91075764', nama: 'AUREL ELIA YUANITA', kelas: 'XII.1'},
    {nisn: '87033795', nama: 'BAYU RAHARDIAN', kelas: 'XII.1'},
    {nisn: '91086895', nama: 'BELLA ANASTASYA', kelas: 'XII.1'},
    {nisn: '94399525', nama: 'BUNGA NAZIA KAUTSER', kelas: 'XII.1'},
    {nisn: '91019199', nama: 'CARISSA AULIA PUTRI', kelas: 'XII.1'},
    {nisn: '87159777', nama: 'CHACHA CELIA', kelas: 'XII.1'},
    {nisn: '96402401', nama: 'DINDA AYU LESTARI', kelas: 'XII.1'},
    {nisn: '91200315', nama: 'ELVIRA NURMAULIDA', kelas: 'XII.1'},
    {nisn: '3087484284', nama: 'FAA IQAH LARASATI', kelas: 'XII.1'},
    {nisn: '92026827', nama: 'FALENTIN SIHOTANG', kelas: 'XII.1'},
    {nisn: '81341050', nama: 'FITRIA RAMADHANI', kelas: 'XII.1'},
    {nisn: '93014692', nama: 'GHIZA ALYSSA INDHIANSYAH', kelas: 'XII.1'},
    {nisn: '86385776', nama: 'HIKMAL AKBAR SUTISNA', kelas: 'XII.1'},
    {nisn: '92018422', nama: 'INKA FADILLAH', kelas: 'XII.1'},
    {nisn: '91828798', nama: 'INTAN TYARA', kelas: 'XII.1'},
    {nisn: '84977479', nama: 'KARINA DWI PERTIWI', kelas: 'XII.1'},
    {nisn: '87503598', nama: 'KHAIRUNNISA RAMADHANI', kelas: 'XII.1'},
    {nisn: '85224134', nama: 'MAHARANI CAHYA AULIA AYUNINGTYAS', kelas: 'XII.1'},
    {nisn: '99053003', nama: 'MUHAMMAD RIFQY FAYYADH PRATAMA', kelas: 'XII.1'},
    {nisn: '82528497', nama: 'MUHAMMAD RIZKI RAMADHAN', kelas: 'XII.1'},
    {nisn: '95139886', nama: 'MUHAMMAD TROY SATRIA RANISYAH POETRA', kelas: 'XII.1'},
    {nisn: '93412028', nama: 'NABIL AL FARIZI', kelas: 'XII.1'},
    {nisn: '89178051', nama: 'NAZWA LULU AZAIDAM', kelas: 'XII.1'},
    {nisn: '89718505', nama: 'NURHABIBAH NABHAR', kelas: 'XII.1'},
    {nisn: '99827691', nama: 'RAHAYU NASYIVA', kelas: 'XII.1'},
    {nisn: '85800939', nama: 'RENJANI WULANDARI', kelas: 'XII.1'},
    {nisn: '92154763', nama: 'RIN RIVERA ISTIANA', kelas: 'XII.1'},
    {nisn: '85725571', nama: 'SADIRA AURELIA SALSABILA', kelas: 'XII.1'},
    {nisn: '94295135', nama: 'SHADIQ AMIRUL ADLI', kelas: 'XII.1'},
    {nisn: '95716075', nama: 'TILA KAMILAH', kelas: 'XII.1'},
    {nisn: '92561811', nama: 'VINA NOVITA', kelas: 'XII.1'},
    {nisn: '93843348', nama: 'YOGI AHMAD FAUZI', kelas: 'XII.1'},
    {nisn: '89293402', nama: 'ZAHRA WAHYU MAULIDA', kelas: 'XII.1'},
    {nisn: '96914304', nama: 'ALIF FATHIN ANDANA PUTRA NUGROHO', kelas: 'XII.2'},
    {nisn: '98189127', nama: 'ALYA MUKHBITA WAFIQ', kelas: 'XII.2'},
    {nisn: '93608856', nama: 'ANJELINA NAPITUPULU', kelas: 'XII.2'},
    {nisn: '98036539', nama: 'ANNISA NUR ROSMAWATI', kelas: 'XII.2'},
    {nisn: '92643529', nama: 'AVRILYA DWI MAWAR GULTOM', kelas: 'XII.2'},
    {nisn: '86798834', nama: 'AZKA NABILAH PRIYANTO', kelas: 'XII.2'},
    {nisn: '88076405', nama: 'BIMA RAFIF HABIBI', kelas: 'XII.2'},
    {nisn: '97890588', nama: 'CHINTAMI RINDYANI RANOENISTI', kelas: 'XII.2'},
    {nisn: '92430228', nama: 'ELMIRA RIZKIA AULIA PUTRI', kelas: 'XII.2'},
    {nisn: '81068994', nama: 'FACHRI IBRAHIM ADHA ALWAHYUDIN', kelas: 'XII.2'},
    {nisn: '94072731', nama: 'FERRYAWAN PRAYOGA', kelas: 'XII.2'},
    {nisn: '88216749', nama: 'GESYA AULIA HAFSYAH', kelas: 'XII.2'},
    {nisn: '99483781', nama: 'INDIRA PURNAMA PUTRI', kelas: 'XII.2'},
    {nisn: '99667728', nama: 'INE WIDYA HASTUTI', kelas: 'XII.2'},
    {nisn: '91635648', nama: 'IRVAN DWI RAMADHAN', kelas: 'XII.2'},
    {nisn: '84313127', nama: 'KEISHA BAYU SHEILA', kelas: 'XII.2'},
    {nisn: '99425573', nama: 'LAURA MAULIDA', kelas: 'XII.2'},
    {nisn: '94941701', nama: 'MARITZA KHAYLA TSABITAH', kelas: 'XII.2'},
    {nisn: '99224054', nama: 'MAVERICK BIE LAURENT', kelas: 'XII.2'},
    {nisn: '95005807', nama: 'MIRA ZULIANI', kelas: 'XII.2'},
    {nisn: '83793040', nama: 'MUHAMMAD NUR RIFAT RAMADHAN', kelas: 'XII.2'},
    {nisn: '98908916', nama: 'NADIEN HARYANTO UTOMO', kelas: 'XII.2'},
    {nisn: '96080081', nama: 'NAJWA KHOIRUN NISA', kelas: 'XII.2'},
    {nisn: '96108965', nama: 'NAYARA ABBY GITAFREYA', kelas: 'XII.2'},
    {nisn: '95810836', nama: 'NIA NIHAYATUL HIDAYAH', kelas: 'XII.2'},
    {nisn: '96436005', nama: 'PUTRI WAHYU SALSABILILLAH', kelas: 'XII.2'},
    {nisn: '99710654', nama: 'RADIANSYAH', kelas: 'XII.2'},
    {nisn: '97328301', nama: 'RAFA ARIQ FADHILAH', kelas: 'XII.2'},
    {nisn: '87752932', nama: 'REZI BANGKIT PRATAMA', kelas: 'XII.2'},
    {nisn: '82042163', nama: 'RIZAL RAFI RAISYA', kelas: 'XII.2'},
    {nisn: '85640067', nama: 'ROSTIAWATI', kelas: 'XII.2'},
    {nisn: '95620430', nama: 'SELVIA NADIA', kelas: 'XII.2'},
    {nisn: '94264185', nama: 'SITI ROBIAH SYAH BANIAH', kelas: 'XII.2'},
    {nisn: '85103474', nama: 'SRI HAMIMAH RIZKY', kelas: 'XII.2'},
    {nisn: '94091693', nama: 'TASYA DAME FRISCA PASARIBU', kelas: 'XII.2'},
    {nisn: '83558463', nama: 'ZASKIA LORIN', kelas: 'XII.2'},
    {nisn: '85241674', nama: 'AMELIA ANASTASYA', kelas: 'XII.3'},
    {nisn: '95148619', nama: 'ANWAR HIDAYAT', kelas: 'XII.3'},
    {nisn: '89810743', nama: 'ARIF RAHMAN HAKIM', kelas: 'XII.3'},
    {nisn: '3092710787', nama: 'ASYIFA NURAENI SOLEHA AZ ZAHRA', kelas: 'XII.3'},
    {nisn: '93578774', nama: 'AURA ZAHRA ZAHIRA', kelas: 'XII.3'},
    {nisn: '81610758', nama: 'AZRI HAFIDH', kelas: 'XII.3'},
    {nisn: '97267193', nama: 'BAYU SEGARA', kelas: 'XII.3'},
    {nisn: '87962589', nama: 'DEVYNA ARNITA PUTRI', kelas: 'XII.3'},
    {nisn: '82325002', nama: 'DINA AULIA', kelas: 'XII.3'},
    {nisn: '92329659', nama: 'FAITH FADHIL ZHAFRAN', kelas: 'XII.3'},
    {nisn: '92005609', nama: 'FEBRYAN MANUEL SIDABARIBA', kelas: 'XII.3'},
    {nisn: '82501309', nama: 'GEZZHA FAZREEHA', kelas: 'XII.3'},
    {nisn: '98549989', nama: 'HANDINI DAMAYANTI', kelas: 'XII.3'},
    {nisn: '92260538', nama: 'ILHAM RAHMAN', kelas: 'XII.3'},
    {nisn: '85949700', nama: 'ITA INDRIYANI', kelas: 'XII.3'},
    {nisn: '99614297', nama: 'JESSICA RODELINA SILALAHI', kelas: 'XII.3'},
    {nisn: '96601309', nama: 'KAYSHA MUZZY CAHYANI', kelas: 'XII.3'},
    {nisn: '86732509', nama: 'KEYLA NAZWA AULIA', kelas: 'XII.3'},
    {nisn: '99415557', nama: 'LIDYA VANESA MANURUNG', kelas: 'XII.3'},
    {nisn: '91504960', nama: 'MUHAMMAD ALVINO MAALIKA PUTRA', kelas: 'XII.3'},
    {nisn: '86077988', nama: 'MUHAMMAD ARIZAL FAUZI RAMADHAN', kelas: 'XII.3'},
    {nisn: '91161547', nama: 'MUHAMMAD JANUARIZQI RODYIANTO', kelas: 'XII.3'},
    {nisn: '97400003', nama: 'MUHAMMAD RIZKY', kelas: 'XII.3'},
    {nisn: '83858893', nama: 'NADILA AULIA', kelas: 'XII.3'},
    {nisn: '85669283', nama: 'NAILA FADILLAH SUHAIMAH', kelas: 'XII.3'},
    {nisn: '99228055', nama: 'NASYA ZAFIRA', kelas: 'XII.3'},
    {nisn: '89993802', nama: 'RAISYA PUTERI PERTIWI', kelas: 'XII.3'},
    {nisn: '86829191', nama: 'RITA MAYANG SARI', kelas: 'XII.3'},
    {nisn: '81186054', nama: 'SALEHA NURAINI', kelas: 'XII.3'},
    {nisn: '85639162', nama: 'SELFI NOVIA', kelas: 'XII.3'},
    {nisn: '81562884', nama: 'SERINA', kelas: 'XII.3'},
    {nisn: '95211401', nama: 'SHIFA ANJELI FARIHAH', kelas: 'XII.3'},
    {nisn: '89463935', nama: 'TANISA ADINDA RAMADHANI', kelas: 'XII.3'},
    {nisn: '83189343', nama: 'ZASKIA MUTIARA JAMEELA', kelas: 'XII.3'},
    {nisn: '93196064', nama: 'ZURIEL BOB MAGA MANURUNG', kelas: 'XII.3'},
    {nisn: '85205733', nama: 'ADLI KAMIL RAMADHAN', kelas: 'XII.4'},
    {nisn: '94731442', nama: 'AIDILA FITRIA SURYANTI', kelas: 'XII.4'},
    {nisn: '92015281', nama: 'ANANDA PRICILA', kelas: 'XII.4'},
    {nisn: '95725163', nama: 'ANAYA RIZAL FAZARI', kelas: 'XII.4'},
    {nisn: '85080023', nama: 'ARGA RAVEN NAPITUPULU', kelas: 'XII.4'},
    {nisn: '92792810', nama: 'BRILLY RAFASYA AUREL FIRELLI', kelas: 'XII.4'},
    {nisn: '87692397', nama: 'DIDA SUGIANTO', kelas: 'XII.4'},
    {nisn: '84690491', nama: 'DINI NURUL AQMARINA', kelas: 'XII.4'},
    {nisn: '81278896', nama: 'FARIDA PERMANA SARI', kelas: 'XII.4'},
    {nisn: '83685699', nama: 'FARRAS AULIA AZZAHRA', kelas: 'XII.4'},
    {nisn: '96566934', nama: 'GENIA ANGGRAENI', kelas: 'XII.4'},
    {nisn: '97266716', nama: 'GHIFARY AZIZAL NUR ROKHMAN', kelas: 'XII.4'},
    {nisn: '89636322', nama: 'HANITASARI', kelas: 'XII.4'},
    {nisn: '92733249', nama: 'HYLMI AIDAN MAKARIM', kelas: 'XII.4'},
    {nisn: '89164207', nama: 'IRENE PRADYSTA BARASA', kelas: 'XII.4'},
    {nisn: '86294430', nama: 'KUMALA ANJANI', kelas: 'XII.4'},
    {nisn: '93571913', nama: 'LOVY JELITA AURELLA', kelas: 'XII.4'},
    {nisn: '94277044', nama: 'LUCKY PRATIWI', kelas: 'XII.4'},
    {nisn: '98729986', nama: 'MALIKA RAHMANIA', kelas: 'XII.4'},
    {nisn: '91239052', nama: 'MUHAMAD NIZAR MAHBUBY', kelas: 'XII.4'},
    {nisn: '87809129', nama: 'MUHAMMAD FARDHAN ALFAIZY', kelas: 'XII.4'},
    {nisn: '92123598', nama: 'MUHAMMAD ZIDAN ALFARIDZI', kelas: 'XII.4'},
    {nisn: '92116459', nama: 'NAGITA SUCI APRILIANI', kelas: 'XII.4'},
    {nisn: '96968344', nama: 'NAYLA AULIA PRATIWI', kelas: 'XII.4'},
    {nisn: '83600655', nama: 'NAYRA ANANDITA', kelas: 'XII.4'},
    {nisn: '96745439', nama: 'NUNU NURJANAH', kelas: 'XII.4'},
    {nisn: '96466799', nama: 'RAFI NARAYA PUTRA', kelas: 'XII.4'},
    {nisn: '81355626', nama: 'RAHMAN CHANDRA KURNIAWAN', kelas: 'XII.4'},
    {nisn: '86302781', nama: 'RIZKY ADITYA', kelas: 'XII.4'},
    {nisn: '89994633', nama: 'SCHATZI AULIA', kelas: 'XII.4'},
    {nisn: '86626342', nama: 'SITI NURFADILLAH', kelas: 'XII.4'},
    {nisn: '84470623', nama: 'SULTHAN ADAM MALIK', kelas: 'XII.4'},
    {nisn: '82069813', nama: 'SYAHLA SAFITRI', kelas: 'XII.4'},
    {nisn: '88022967', nama: 'TANZILLAL NASYWA RAHMAN', kelas: 'XII.4'},
    {nisn: '91871959', nama: 'YARA SYAHLA ISLAMY RIDWAN', kelas: 'XII.4'},
    {nisn: '97829882', nama: 'ABIL ATAYA RIZQULLOH', kelas: 'XII.5'},
    {nisn: '3092680862', nama: 'ANGELINA BR SIREGAR', kelas: 'XII.5'},
    {nisn: '95998293', nama: 'ARIP RAHMAN', kelas: 'XII.5'},
    {nisn: '99759128', nama: 'AYU SYAFIRA DAHLAN', kelas: 'XII.5'},
    {nisn: '65933033', nama: 'BENRI RUDI MARTIN HUTAURUK', kelas: 'XII.5'},
    {nisn: '88180612', nama: 'CANTIKA KHOIRUNNISA', kelas: 'XII.5'},
    {nisn: '83717130', nama: 'DEVI TRI UTAMI', kelas: 'XII.5'},
    {nisn: '84197938', nama: 'FIKA MAYLINA PUTRI PRASETYO', kelas: 'XII.5'},
    {nisn: '83836532', nama: 'FITRIA RAHAYU', kelas: 'XII.5'},
    {nisn: '99748423', nama: 'FRISKA KIRANI NAKHWA FIRDAUSI', kelas: 'XII.5'},
    {nisn: '89430596', nama: 'GILANG PRATAMA', kelas: 'XII.5'},
    {nisn: '97272684', nama: 'IDA AYU SUCI SAVITRI PUTRI SWASTIKA', kelas: 'XII.5'},
    {nisn: '91700516', nama: 'INTAN RUSDIANA', kelas: 'XII.5'},
    {nisn: '94274078', nama: 'KARIN MELIA PERMATA', kelas: 'XII.5'},
    {nisn: '96204053', nama: 'KRISTINA SIHOTANG', kelas: 'XII.5'},
    {nisn: '92582244', nama: 'LYDIA NURWIDIANI', kelas: 'XII.5'},
    {nisn: '84347199', nama: 'MUHAMAD FAKHRI', kelas: 'XII.5'},
    {nisn: '101248350', nama: 'MUTIARA CHANDRA KRISNANTA', kelas: 'XII.5'},
    {nisn: '95577222', nama: 'NADIA IRENA SYAFIKA', kelas: 'XII.5'},
    {nisn: '92735081', nama: 'NADINE AULIA KUSUMAPRILIA', kelas: 'XII.5'},
    {nisn: '89504757', nama: 'NAURA VIDYASHA LAKHSMI', kelas: 'XII.5'},
    {nisn: '93706527', nama: 'NAVIZA AMANDA LESTARI', kelas: 'XII.5'},
    {nisn: '99259468', nama: 'QIRANI AURELIKHA FEBRINA', kelas: 'XII.5'},
    {nisn: '93817741', nama: 'RAHMAH ANANDA PUTRI', kelas: 'XII.5'},
    {nisn: '91342244', nama: 'PUTRI ARIANTI', kelas: 'XII.5'},
    {nisn: '99501473', nama: 'RENALA DIEN MUSA', kelas: 'XII.5'},
    {nisn: '105067300', nama: 'ROSITA', kelas: 'XII.5'},
    {nisn: '88957814', nama: 'RYAISHA MOZZA HERDIAN PUTRI', kelas: 'XII.5'},
    {nisn: '71182348', nama: 'SAGHTYA KAYLA DWITANTYA PUTRI IRAWAN', kelas: 'XII.5'},
    {nisn: '81156002', nama: 'SANDRA ENGGELLIA', kelas: 'XII.5'},
    {nisn: '84366679', nama: 'SARMA ULI MANURUNG', kelas: 'XII.5'},
    {nisn: '95769362', nama: 'SITI HOERIYAH', kelas: 'XII.5'},
    {nisn: '93495622', nama: 'SYIEFA AZZAHRA BARRYPUTRI', kelas: 'XII.5'},
    {nisn: '98233127', nama: 'TATI SRI WAHYUNI', kelas: 'XII.5'},
    {nisn: '3089966394', nama: 'WARDATUL FITRI RAMADHANI', kelas: 'XII.5'},
    {nisn: '83671097', nama: 'ZHEVANNI ANANDITA DEWI', kelas: 'XII.5'},
    {nisn: '88184825', nama: 'ADIVA ZARA NUHA PRATIWI', kelas: 'XII.6'},
    {nisn: '92969024', nama: 'ALISYA LASMANA', kelas: 'XII.6'},
    {nisn: '94515724', nama: 'ANNISA NOVIYANTI', kelas: 'XII.6'},
    {nisn: '96046987', nama: 'ARUMY WANASITA HANDOYO', kelas: 'XII.6'},
    {nisn: '84505907', nama: 'CAHYATI', kelas: 'XII.6'},
    {nisn: '99796650', nama: 'CHILLA ALKALYCA', kelas: 'XII.6'},
    {nisn: '92224713', nama: 'CIKA PHALOSA ALMUFARRIHAH', kelas: 'XII.6'},
    {nisn: '93459731', nama: 'ELANG AHMAD KHADAFI', kelas: 'XII.6'},
    {nisn: '88115028', nama: 'FITRI RAMADHANI', kelas: 'XII.6'},
    {nisn: '92536548', nama: 'HAIKAL AKMAL', kelas: 'XII.6'},
    {nisn: '85123376', nama: 'HILAL FAJAR RAMADHAN', kelas: 'XII.6'},
    {nisn: '83282826', nama: 'KAYLA PUTRI RAMADHANI', kelas: 'XII.6'},
    {nisn: '86214337', nama: 'KEYSA ANASTASIA', kelas: 'XII.6'},
    {nisn: '93914693', nama: 'KHAHILA AULIA RAMADHANI', kelas: 'XII.6'},
    {nisn: '83153512', nama: 'KHUMAIRAH', kelas: 'XII.6'},
    {nisn: '95043362', nama: 'LUCKEN SANDRILA', kelas: 'XII.6'},
    {nisn: '86574315', nama: 'LUNA AULIA NOVIYANTI', kelas: 'XII.6'},
    {nisn: '96436885', nama: 'MUHAMMAD FARDHAN FAUZAN', kelas: 'XII.6'},
    {nisn: '96761749', nama: 'NASTASYA LAILATU SHIFA', kelas: 'XII.6'},
    {nisn: '93925203', nama: 'NAURAH OLINDA SYAHDA', kelas: 'XII.6'},
    {nisn: '99938595', nama: 'NAZMA NURJEHAN', kelas: 'XII.6'},
    {nisn: '84924345', nama: 'NIZAR VIDYAS NITISARA', kelas: 'XII.6'},
    {nisn: '94433990', nama: 'NURMASHITTA NABILA', kelas: 'XII.6'},
    {nisn: '3089487979', nama: 'RAYYA RIESTENDI PUTRI', kelas: 'XII.6'},
    {nisn: '96017601', nama: 'PUTRI YUNITA PRATIWI', kelas: 'XII.6'},
    {nisn: '99478698', nama: 'RASYID SABIQ ADRYAN', kelas: 'XII.6'},
    {nisn: '99667713', nama: 'RIYANA', kelas: 'XII.6'},
    {nisn: '96861488', nama: 'SALSA BILLA QOLBU', kelas: 'XII.6'},
    {nisn: '85919076', nama: 'SANTI HIZKIA TAMBUNAN', kelas: 'XII.6'},
    {nisn: '91312121', nama: 'SITI FATIMAH AZZAHRA', kelas: 'XII.6'},
    {nisn: '3080511281', nama: 'SITI ZULAIHA', kelas: 'XII.6'},
    {nisn: '99084455', nama: 'SYAKILA MAULIDA', kelas: 'XII.6'},
    {nisn: '77786715', nama: 'TIARA NURHASANAH', kelas: 'XII.6'},
    {nisn: '92623777', nama: 'WIDIA FITRIANI SURYADI', kelas: 'XII.6'},
    {nisn: '89071675', nama: 'ZAHRA AMELIA WARDIE', kelas: 'XII.6'},
    {nisn: '63589077', nama: 'ZULFAN FERROS PRASETYO', kelas: 'XII.6'},
    {nisn: '99786185', nama: 'ALIN ZAHRA DIVA NUGRAHA', kelas: 'XII.7'},
    {nisn: '95864743', nama: 'ANGGIA MEYLANI', kelas: 'XII.7'},
    {nisn: '94543969', nama: 'ANJELIKA NAPITUPULU', kelas: 'XII.7'},
    {nisn: '85971007', nama: 'ARTIKA SINAGA', kelas: 'XII.7'},
    {nisn: '93368387', nama: 'ATHIFA ADNY FIORENZA', kelas: 'XII.7'},
    {nisn: '95146579', nama: 'CARISSA ZAHRA FARADISA', kelas: 'XII.7'},
    {nisn: '98144444', nama: 'CELINE LAYSA WIDIYANI', kelas: 'XII.7'},
    {nisn: '98222293', nama: 'DEVI JULIANTI', kelas: 'XII.7'},
    {nisn: '82579376', nama: 'EGA PERMANA', kelas: 'XII.7'},
    {nisn: '99358411', nama: 'ELSA STEVANY', kelas: 'XII.7'},
    {nisn: '96278445', nama: 'FAKHRI ANDARA PUTRA ASTINA', kelas: 'XII.7'},
    {nisn: '93315914', nama: 'FIRA FAJARINA LESTARI', kelas: 'XII.7'},
    {nisn: '81853310', nama: 'HUMAIRA RAYSHA FITRIA', kelas: 'XII.7'},
    {nisn: '91123059', nama: 'JHUAN RIANA A IRAWAN', kelas: 'XII.7'},
    {nisn: '92241524', nama: 'KEIZA PUTRI AGUSTIAN', kelas: 'XII.7'},
    {nisn: '87250389', nama: 'MUHAMAD ILMAN RAMADHAN', kelas: 'XII.7'},
    {nisn: '87699632', nama: 'MUHAMMAD RIZKY FIRDAUS', kelas: 'XII.7'},
    {nisn: '91548199', nama: 'NAYSILA MAULA', kelas: 'XII.7'},
    {nisn: '93941442', nama: 'NAZZAINA SILMI', kelas: 'XII.7'},
    {nisn: '99361330', nama: 'NIKITA', kelas: 'XII.7'},
    {nisn: '83693277', nama: 'NISRINA ALWILDANUN', kelas: 'XII.7'},
    {nisn: '93800408', nama: 'NURASIPAH', kelas: 'XII.7'},
    {nisn: '96736285', nama: 'PUAN MAHIRA ZAHRANI', kelas: 'XII.7'},
    {nisn: '84009698', nama: 'RAEHAN JAELANI', kelas: 'XII.7'},
    {nisn: '95849246', nama: 'RISMA AYU AMALIA DEWI', kelas: 'XII.7'},
    {nisn: '3093972620', nama: 'SABRINA AZIZAH ZALPA ADRANA', kelas: 'XII.7'},
    {nisn: '99545943', nama: 'SALMA FAKHRIYATU SYAZWINA', kelas: 'XII.7'},
    {nisn: '95500986', nama: 'SASKYA FIORENTINA SIMANULLANG', kelas: 'XII.7'},
    {nisn: '97533502', nama: 'SELLA MAULIDYA ARYANI', kelas: 'XII.7'},
    {nisn: '98217413', nama: 'SENANDUNG NAYCILLA', kelas: 'XII.7'},
    {nisn: '94623024', nama: 'SONYA JULIANTI HOTNAULI PASARIBU', kelas: 'XII.7'},
    {nisn: '82125773', nama: 'TAMARA NUR OKTAVERA RYANI', kelas: 'XII.7'},
    {nisn: '95219816', nama: 'THERESIA ROMAULI NAIBAHO', kelas: 'XII.7'},
    {nisn: '83813817', nama: 'VIECELLIA SALSABILA PUTRI', kelas: 'XII.7'},
    {nisn: '98312979', nama: 'WAFA AULIA', kelas: 'XII.7'},
    {nisn: '92859132', nama: 'WULAN HANDAYANI', kelas: 'XII.7'},
    {nisn: '84343800', nama: 'AGUNG TRI JAYA', kelas: 'XII.8'},
    {nisn: '96824193', nama: 'AIRA ALVIYANTO PUTRI', kelas: 'XII.8'},
    {nisn: '83665212', nama: 'ALIEF FAHDIRUL AZZAM', kelas: 'XII.8'},
    {nisn: '84015638', nama: 'ANDINI MAULIDYA', kelas: 'XII.8'},
    {nisn: '97036706', nama: 'BUNGA APRILIANI PUTRI', kelas: 'XII.8'},
    {nisn: '92853053', nama: 'CALLISTA DARA PUSPITA', kelas: 'XII.8'},
    {nisn: '93649117', nama: 'DESNITA PUTRI LUTHFIAH', kelas: 'XII.8'},
    {nisn: '98840653', nama: 'DIAN ALMAHRI', kelas: 'XII.8'},
    {nisn: '89238480', nama: 'DWI NURCAHYO', kelas: 'XII.8'},
    {nisn: '99530332', nama: 'EKA PUTRI', kelas: 'XII.8'},
    {nisn: '97891551', nama: 'EVAN FAUZI', kelas: 'XII.8'},
    {nisn: '87637962', nama: 'FUTRI NURHASANAH', kelas: 'XII.8'},
    {nisn: '95871151', nama: 'GAN GAN GANI ADIANSAH', kelas: 'XII.8'},
    {nisn: '97598331', nama: 'GRESYELA TIUR SIMANJUNTAK', kelas: 'XII.8'},
    {nisn: '95163996', nama: 'HANIFA NUR RAJABI', kelas: 'XII.8'},
    {nisn: '85190564', nama: 'IRENA PUTRI TAMALA', kelas: 'XII.8'},
    {nisn: '82325228', nama: 'KARIN PITALOKA', kelas: 'XII.8'},
    {nisn: '83802508', nama: 'KRISTIAN TAUFIK ROHMAN', kelas: 'XII.8'},
    {nisn: '97233639', nama: 'LAUDYA SHIVA', kelas: 'XII.8'},
    {nisn: '95152504', nama: 'MAYCHA MAHA RANI', kelas: 'XII.8'},
    {nisn: '84043353', nama: 'MEDINA KUSUMAWATI', kelas: 'XII.8'},
    {nisn: '81660822', nama: 'MUCHAMMAD ADHITYA KURNIA', kelas: 'XII.8'},
    {nisn: '96701752', nama: 'MUHAMMAD RADITIYAN FAJRI', kelas: 'XII.8'},
    {nisn: '92018912', nama: 'MUHAMMAD RIDHO SETIABUDI', kelas: 'XII.8'},
    {nisn: '81894800', nama: 'NABILA RIZKIA ANISA', kelas: 'XII.8'},
    {nisn: '86385892', nama: 'NAILA NADIA KAMILA', kelas: 'XII.8'},
    {nisn: '88867056', nama: 'NAIS LARASATI', kelas: 'XII.8'},
    {nisn: '89160555', nama: 'NINDYA HILDA SUPANDI', kelas: 'XII.8'},
    {nisn: '86434202', nama: 'NOER RIANA ADINDA ANASTASYA', kelas: 'XII.8'},
    {nisn: '94196941', nama: 'PUTRI SALSABILA FAUZI', kelas: 'XII.8'},
    {nisn: '86422993', nama: 'RAFI AKBAR HIDAYATULLAH', kelas: 'XII.8'},
    {nisn: '96325921', nama: 'RESYA WILIA BIMA AGUSTIN', kelas: 'XII.8'},
    {nisn: '84295997', nama: 'RIZKY CANDRAWINATA', kelas: 'XII.8'},
    {nisn: '98619149', nama: 'SISKA FAHRA NURAINI', kelas: 'XII.8'},
    {nisn: '95085841', nama: 'VIOLLA SALSABILA', kelas: 'XII.8'},
    {nisn: '98603581', nama: 'YOGA ARDHIYANTO', kelas: 'XII.8'},
    {nisn: '94192237', nama: 'ALMIRA NAYLA RAHMADITA', kelas: 'XII.9'},
    {nisn: '99660116', nama: 'ANISA AMELIA', kelas: 'XII.9'},
    {nisn: '88616608', nama: 'AULIA NISA PUSPA MANDIRI', kelas: 'XII.9'},
    {nisn: '93346069', nama: 'AYATUL HUSNA', kelas: 'XII.9'},
    {nisn: '91031558', nama: 'DEDE APRILIA', kelas: 'XII.9'},
    {nisn: '95808292', nama: 'DIAN NISA NUR ADILLA', kelas: 'XII.9'},
    {nisn: '97120601', nama: 'DJAGAT RAYA ALFATH HUSAEMI', kelas: 'XII.9'},
    {nisn: '89629808', nama: 'EKA PRASETIYO', kelas: 'XII.9'},
    {nisn: '84714940', nama: 'FAHRI MAULANA YUSUP', kelas: 'XII.9'},
    {nisn: '98253309', nama: 'GEIZHA MAHARANI', kelas: 'XII.9'},
    {nisn: '95767810', nama: 'HIFNIA NAJWA AININ FARAH', kelas: 'XII.9'},
    {nisn: '99930253', nama: 'IMRON TRI PAMUNGKAS', kelas: 'XII.9'},
    {nisn: '84814499', nama: 'JAUHAR ABDILLAH', kelas: 'XII.9'},
    {nisn: '99311362', nama: 'KAHLIL MAFTUH FAAWAAZ', kelas: 'XII.9'},
    {nisn: '93333247', nama: 'KEISYA FEBRIANTI AZZAHRA', kelas: 'XII.9'},
    {nisn: '92368349', nama: 'MUHAMAD GIAN NAUFAL MIRJAN SANJAYA', kelas: 'XII.9'},
    {nisn: '86901865', nama: 'MUHAMAD RAIHAAN AKMAL', kelas: 'XII.9'},
    {nisn: '97394982', nama: 'MUHAMAD RIFALDI FIRDAUS', kelas: 'XII.9'},
    {nisn: '85468866', nama: 'MUHAMMAD ARUL NURFATAH', kelas: 'XII.9'},
    {nisn: '82667193', nama: 'NABILA RIYANA PUTRI', kelas: 'XII.9'},
    {nisn: '91755389', nama: 'NAJWA ANASTASYA', kelas: 'XII.9'},
    {nisn: '91628473', nama: 'NAURA SAKIRA PUTRI PRAMANA', kelas: 'XII.9'},
    {nisn: '86697878', nama: 'NUR LATIFAH SITANGGANG', kelas: 'XII.9'},
    {nisn: '91791059', nama: 'NAZWA NAYSILLA', kelas: 'XII.9'},
    {nisn: '87822567', nama: 'NIRMALA', kelas: 'XII.9'},
    {nisn: '84244313', nama: 'NURUL IZZA FAUZZIAH', kelas: 'XII.9'},
    {nisn: '84938074', nama: 'PITRI OKTAPIANI', kelas: 'XII.9'},
    {nisn: '98610446', nama: 'RAHANI ADINIA', kelas: 'XII.9'},
    {nisn: '89451300', nama: 'REYSA ADISTYA NURFADILLAH', kelas: 'XII.9'},
    {nisn: '78402127', nama: 'RIZAL PAMUNGKAS', kelas: 'XII.9'},
    {nisn: '92924698', nama: 'SEVIYASA GUNAWAN', kelas: 'XII.9'},
    {nisn: '87603904', nama: 'SUHARJA', kelas: 'XII.9'},
    {nisn: '88842358', nama: 'VIONA ADELYA PUTRI', kelas: 'XII.9'},
    {nisn: '99094868', nama: 'YASMIN NUR FAJRINA', kelas: 'XII.9'},
    {nisn: '89114090', nama: 'ZIHAN SAFIRA OKTAVIANI', kelas: 'XII.9'},
    {nisn: '97012893', nama: 'ALLINE RATU ABDIRIANI', kelas: 'XII.10'},
    {nisn: '82478596', nama: 'AMELIA', kelas: 'XII.10'},
    {nisn: '96229165', nama: 'ARSIFA FITRIA', kelas: 'XII.10'},
    {nisn: '98510517', nama: 'AUDWINA FEBRIYANTI', kelas: 'XII.10'},
    {nisn: '96006528', nama: 'BUNGA AMELIA ROSADI', kelas: 'XII.10'},
    {nisn: '84566220', nama: 'DIDI RAHMADI', kelas: 'XII.10'},
    {nisn: '91177363', nama: 'DINA PAUSAN', kelas: 'XII.10'},
    {nisn: '89314556', nama: 'EKA DENDI FEBYANSYAH', kelas: 'XII.10'},
    {nisn: '84822907', nama: 'FUJI MELVINA PUTRI', kelas: 'XII.10'},
    {nisn: '92754124', nama: 'GUNAWAN', kelas: 'XII.10'},
    {nisn: '99847352', nama: 'HANA MUFIDAH HAFSHOH', kelas: 'XII.10'},
    {nisn: '96860625', nama: 'HERLINA PEBRIANI', kelas: 'XII.10'},
    {nisn: '89260749', nama: 'IQBAL FIRDAUS', kelas: 'XII.10'},
    {nisn: '106528524', nama: 'KEYSA NOPAL', kelas: 'XII.10'},
    {nisn: '92619967', nama: 'LULU LUTHFIYYAH', kelas: 'XII.10'},
    {nisn: '97905472', nama: 'MAL SAULJER AZZAHRA', kelas: 'XII.10'},
    {nisn: '92566375', nama: 'MARSYA ALYA PUTRIRIYANI', kelas: 'XII.10'},
    {nisn: '92721443', nama: 'MEGA OKTAVIANI RATDIANA', kelas: 'XII.10'},
    {nisn: '89888111', nama: 'MUHAMAD NAWFAL FIRDAWS SIANTURI', kelas: 'XII.10'},
    {nisn: '93514470', nama: 'MUHAMAD RIZKI JANUARDI', kelas: 'XII.10'},
    {nisn: '82040146', nama: 'MUHAMMAD DEVA RIVALDO AMHAR', kelas: 'XII.10'},
    {nisn: '84084194', nama: 'NABILLA ALSAVINA TAENI NAJA', kelas: 'XII.10'},
    {nisn: '83739218', nama: 'NAWAL AULIA', kelas: 'XII.10'},
    {nisn: '86629620', nama: 'NOVI RIYANTI', kelas: 'XII.10'},
    {nisn: '75952821', nama: 'NURUL OKTAVIANI', kelas: 'XII.10'},
    {nisn: '84359644', nama: 'PIRLA NURAENI', kelas: 'XII.10'},
    {nisn: '107367010', nama: 'PUTRI SULISTIA WATI', kelas: 'XII.10'},
    {nisn: '99231871', nama: 'RAHMANIA', kelas: 'XII.10'},
    {nisn: '93234495', nama: 'RIDA SYAHDAN', kelas: 'XII.10'},
    {nisn: '82125378', nama: 'ROBY FIRMANSYAH', kelas: 'XII.10'},
    {nisn: '99300667', nama: 'SYAKIRA RIZKIANA PUTRI MAIRIN', kelas: 'XII.10'},
    {nisn: '93103551', nama: 'SYBIEL CICILIA SIAHAAN', kelas: 'XII.10'},
    {nisn: '99187959', nama: 'WIRAHADY PRATAMA', kelas: 'XII.10'},
    {nisn: '83064036', nama: 'YOSIANA PUTRI', kelas: 'XII.10'},
    {nisn: '94633840', nama: 'YURI NURANNISA PURNAMA', kelas: 'XII.10'},
    {nisn: '3094891713', nama: 'ZAKI FARENDRA PRATAMA', kelas: 'XII.10'},
    {nisn: '82013963', nama: 'ADEL LARAS RIZKY UTAMI', kelas: 'XII.11'},
    {nisn: '94126907', nama: 'ALIV MUHAMAD FIRDAUS', kelas: 'XII.11'},
    {nisn: '98621953', nama: 'ANUGRAH BINTANG SETYO PAMBUDI', kelas: 'XII.11'},
    {nisn: '95374501', nama: 'ASSYFA LAELATUS SADIAH', kelas: 'XII.11'},
    {nisn: '86818165', nama: 'CINDI AULIA', kelas: 'XII.11'},
    {nisn: '94047283', nama: 'DAVID DHARMAWAN', kelas: 'XII.11'},
    {nisn: '99656496', nama: 'DOMINGGO PUTRA PRATAMA NAINGGOLAN', kelas: 'XII.11'},
    {nisn: '91400092', nama: 'FAJAR SAKTI LINGGAR PINULUH', kelas: 'XII.11'},
    {nisn: '95460213', nama: 'FEBI RAHMAWATI', kelas: 'XII.11'},
    {nisn: '92885468', nama: 'GHINA NUR OKTAVIANI', kelas: 'XII.11'},
    {nisn: '98025964', nama: 'GILANG HADI PRAYOGO', kelas: 'XII.11'},
    {nisn: '87070745', nama: 'INDAH PURNAMASARI', kelas: 'XII.11'},
    {nisn: '85927170', nama: 'KEVIN ALNAZRIL', kelas: 'XII.11'},
    {nisn: '87988470', nama: 'KEYSHA KHALIILAH ZULFAA', kelas: 'XII.11'},
    {nisn: '94726091', nama: 'KHANAYA NADIRA SOPIYAN', kelas: 'XII.11'},
    {nisn: '93249906', nama: 'KIRAL DENEVAN KHAIRAAN', kelas: 'XII.11'},
    {nisn: '89005618', nama: 'LUSY INDAH GAYATRI', kelas: 'XII.11'},
    {nisn: '93960196', nama: 'MUHAMMAD RAMADHANY ROMANSYAH', kelas: 'XII.11'},
    {nisn: '98759028', nama: 'MAHESA YUDISTIRA', kelas: 'XII.11'},
    {nisn: '98794212', nama: 'MERYLLIA NADIA IVANA ZALUKHU', kelas: 'XII.11'},
    {nisn: '94984527', nama: 'MUHAMAD GUNTUR RAPIANTO', kelas: 'XII.11'},
    {nisn: '3096783887', nama: 'MUHAMAD RIZKY AL ANSORY', kelas: 'XII.11'},
    {nisn: '81860213', nama: 'NABILA DESWITA PUTRI', kelas: 'XII.11'},
    {nisn: '82947914', nama: 'NAJMA NURHABIBAH', kelas: 'XII.11'},
    {nisn: '93029512', nama: 'NAJWA NOVYA PUTRI SALSABILLA', kelas: 'XII.11'},
    {nisn: '85470205', nama: 'NAYLA AMIRA', kelas: 'XII.11'},
    {nisn: '82626894', nama: 'NAVIRA ALVANISSA', kelas: 'XII.11'},
    {nisn: '97376330', nama: 'PEBRIANA BR GULTOM', kelas: 'XII.11'},
    {nisn: '98113198', nama: 'PUTRI JULIANA MIFTAHURROHMAH', kelas: 'XII.11'},
    {nisn: '83348176', nama: 'PUTRI RAMADANI', kelas: 'XII.11'},
    {nisn: '88895085', nama: 'RAKA FIRMANSYAH', kelas: 'XII.11'},
    {nisn: '93708683', nama: 'SALZA ZANUBA WARDAH', kelas: 'XII.11'},
    {nisn: '98175268', nama: 'SHAFIRA INTAN ZAKIYYA', kelas: 'XII.11'},
    {nisn: '82070884', nama: 'SUCI', kelas: 'XII.11'},
    {nisn: '99668837', nama: 'TIARA NUR ALISYA', kelas: 'XII.11'},
    {nisn: '85688639', nama: 'YUNITA AMALIA', kelas: 'XII.11'},
    {nisn: '96334729', nama: 'AFRIZAL OKTANI', kelas: 'XII.12'},
    {nisn: '84804795', nama: 'ALYA INDAH FRATIWI', kelas: 'XII.12'},
    {nisn: '89177402', nama: 'ANITA PURWANTI', kelas: 'XII.12'},
    {nisn: '97195807', nama: 'ARYA BIMANTARA', kelas: 'XII.12'},
    {nisn: '98678032', nama: 'DEA MASRIYANTI DIREJA', kelas: 'XII.12'},
    {nisn: '96795562', nama: 'DELLA AMELLIA', kelas: 'XII.12'},
    {nisn: '86098601', nama: 'DIANA FITRIA RAMADHANI', kelas: 'XII.12'},
    {nisn: '95362102', nama: 'DONI SIANTURI', kelas: 'XII.12'},
    {nisn: '88996741', nama: 'FIKRY ATHHAR HAFIZHA', kelas: 'XII.12'},
    {nisn: '89272529', nama: 'FIRMAN ALAMSYAH', kelas: 'XII.12'},
    {nisn: '99995714', nama: 'FITRI NURSIAM', kelas: 'XII.12'},
    {nisn: '95314799', nama: 'FRIAN TIRSA ANANDA', kelas: 'XII.12'},
    {nisn: '93561913', nama: 'GLADYS FELIANY AGUERA', kelas: 'XII.12'},
    {nisn: '81177754', nama: 'ITA PUSPITASARI', kelas: 'XII.12'},
    {nisn: '97142208', nama: 'KARINA HERLIANA', kelas: 'XII.12'},
    {nisn: '92595782', nama: 'LIAN AZHARI', kelas: 'XII.12'},
    {nisn: '82036135', nama: 'MARIYATUL QIBTIYAH NUR AISYAH HILALIYAH', kelas: 'XII.12'},
    {nisn: '98567371', nama: 'MAYSALMAA MUTHIA HAFIZHAH', kelas: 'XII.12'},
    {nisn: '94620554', nama: 'MONICA DEWI ANGGRAENI', kelas: 'XII.12'},
    {nisn: '95205310', nama: 'MUHAMAD ALI TOPAN', kelas: 'XII.12'},
    {nisn: '92842127', nama: 'MUHAMMAD ARRASYID', kelas: 'XII.12'},
    {nisn: '3095604649', nama: 'MUHAMMAD RAFIF KENZIE', kelas: 'XII.12'},
    {nisn: '82358161', nama: 'NAYLA ZAHROTUSYIFA', kelas: 'XII.12'},
    {nisn: '91949742', nama: 'PUTRI AYU', kelas: 'XII.12'},
    {nisn: '96048111', nama: 'RADIT SALMAN ALFARISYI HERMAWAN', kelas: 'XII.12'},
    {nisn: '93833070', nama: 'RADITTIA', kelas: 'XII.12'},
    {nisn: '92588072', nama: 'RAIHANA ISLAMADINA', kelas: 'XII.12'},
    {nisn: '94032600', nama: 'RATNA WULAN', kelas: 'XII.12'},
    {nisn: '92291481', nama: 'RAYHANA ZEMA WIBOWO', kelas: 'XII.12'},
    {nisn: '81211452', nama: 'REVAN SONJAYA', kelas: 'XII.12'},
    {nisn: '75084594', nama: 'SARI INDAH', kelas: 'XII.12'},
    {nisn: '83538891', nama: 'SITI FARIDA', kelas: 'XII.12'},
    {nisn: '73997117', nama: 'SITI JANATUL MAHWA', kelas: 'XII.12'},
    {nisn: '83720401', nama: 'TARYUDIN', kelas: 'XII.12'},
    {nisn: '83550253', nama: 'WILLIAM EFRAIN MARBUN', kelas: 'XII.12'},
    {nisn: '93819060', nama: 'WIWI ROHIMAH', kelas: 'XII.12'}
];


const LIST_PELANGGARAN = [
  "Terlambat Datang", "Atribut Tidak Lengkap", "Pakaian Tidak Rapi/Sesuai",
  "Rambut Tidak Pantas", "Berdandan Berlebihan", "Mengejek", "Berkata Tidak Pantas", "Bolos Pelajaran", "Bolos Sekolah",
  "Merokok", "Minum Minuman Keras", "Konsumsi Obat Terlarang", "Berkelahi", "Pelecehan Seksual"
];

// ==================== 2. KONFIGURASI SUPABASE (BARU) ====================
const SUPABASE_URL = 'https://cymgrwdjhsrgmhgkaraj.supabase.co'; // <--- GANTI INI
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5bWdyd2RqaHNyZ21oZ2thcmFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1MjM2NzMsImV4cCI6MjEwMjA5OTY3M30.3D6orIlB6ISe9e000b-cgcmZcQxOG_O3jX3WSmDnT28';               // <--- GANTI INI

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Variable Global
let currentUser = null;
let listKolektifTerpilih = [];

// Dynamic Init Saat Halaman Dimuat
        // window.onload = function() {
        //   const selectInd = document.getElementById('indPelanggaran');
        //   const selectKol = document.getElementById('kolPelanggaran');
        //   LIST_PELANGGARAN.forEach(p => {
        //     selectInd.add(new Option(p, p));
        //     selectKol.add(new Option(p, p));
        //   });
        
        //   // Generate Otomatis Pilih Kelas di Form Individu
        //   const selectKelas = document.getElementById('indKelas');
        //   const daftarKelas = [...new Set(DATA_SISWA.map(s => s.kelas))].sort();
        //   daftarKelas.forEach(k => {
        //     selectKelas.add(new Option(k, k));
        //   });
        // };
// --- KODE BARU (Sesudah Dihapus) ---
window.onload = function() {
  const selectInd = document.getElementById('indPelanggaran');
  const selectKol = document.getElementById('kolPelanggaran');
  if (typeof LIST_PELANGGARAN !== 'undefined') {
    LIST_PELANGGARAN.forEach(p => {
      if (selectInd) selectInd.add(new Option(p, p));
      if (selectKol) selectKol.add(new Option(p, p));
    });
  }
};


// ==================== 3. LOGIKA AUTH & NAVIGASI ====================
function handleLogin(e) {
  e.preventDefault();
  const idInput = document.getElementById('loginId').value.trim();
  const passInput = document.getElementById('loginPass').value.trim();

  if (idInput !== passInput) {
    showError();
    return;
  }

  let user = DATA_GURU.find(g => g.nip === idInput);
  let role = 'Guru';
  let isPembina = false;

  if (user) {
    isPembina = user.isPembina || false;
    if (isPembina) role = 'Admin';
  } else {
    user = DATA_SISWA.find(s => s.nisn === idInput);
    role = 'Pengurus OSIS';
  }

  if (user) {
    currentUser = { nama: user.nama, role: role, id: idInput, isPembina: isPembina };
    document.getElementById('loginError').classList.add('hidden');
    initReportPage();
  } else {
    showError();
  }
}

function showError() {
  document.getElementById('loginError').classList.remove('hidden');
}

function handleLogout() {
  currentUser = null;
  document.getElementById('mainApp').classList.add('hidden');
  document.getElementById('pageLogin').classList.remove('hidden');
  document.getElementById('loginForm').reset();
}

function initReportPage() {
  document.getElementById('pageLogin').classList.add('hidden');
  document.getElementById('mainApp').classList.remove('hidden');

  document.getElementById('userPelapor').innerText = `${currentUser.nama} (${currentUser.role})`;
  document.getElementById('infoNamaPelapor').innerText = currentUser.nama;

  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('infoTanggal').innerText = now.toLocaleDateString('id-ID', options);

  const navMenu = document.getElementById('navMenu');
  if (currentUser.isPembina) {
    navMenu.classList.remove('hidden');
  } else {
    navMenu.classList.add('hidden');
  }

  showSection('form');
}

function showSection(section) {
  const formSec = document.getElementById('sectionForm');
  const dashSec = document.getElementById('sectionDashboard');
  const navFormBtn = document.getElementById('navFormBtn');
  const navDashBtn = document.getElementById('navDashboardBtn');

  if (section === 'form') {
    formSec.classList.remove('hidden');
    dashSec.classList.add('hidden');
    navFormBtn.className = "px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold shadow";
    navDashBtn.className = "px-4 py-2 bg-slate-200 text-slate-700 hover:bg-slate-300 rounded-lg text-sm font-semibold";
  } else {
    dashSec.classList.remove('hidden');
    formSec.classList.add('hidden');
    navDashBtn.className = "px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold shadow";
    navFormBtn.className = "px-4 py-2 bg-slate-200 text-slate-700 hover:bg-slate-300 rounded-lg text-sm font-semibold";
    renderDashboardTable();
  }
}

function switchTab(tab) {
  const indForm = document.getElementById('formIndividu');
  const kolForm = document.getElementById('formKolektif');
  const indBtn = document.getElementById('tabIndividuBtn');
  const kolBtn = document.getElementById('tabKolektifBtn');

  if (tab === 'individu') {
    indForm.classList.remove('hidden');
    kolForm.classList.add('hidden');
    indBtn.className = "flex-1 py-2 text-center font-semibold text-blue-600 border-b-2 border-blue-600";
    kolBtn.className = "flex-1 py-2 text-center font-semibold text-slate-500 border-b-2 border-transparent";
  } else {
    kolForm.classList.remove('hidden');
    indForm.classList.add('hidden');
    kolBtn.className = "flex-1 py-2 text-center font-semibold text-blue-600 border-b-2 border-blue-600";
    indBtn.className = "flex-1 py-2 text-center font-semibold text-slate-500 border-b-2 border-transparent";
  }
}

// ==================== 4. LOGIKA FORM INPUT ====================
function filterSiswaIndividu() {
  const kelas = document.getElementById('indKelas').value;
  const selectSiswa = document.getElementById('indSiswa');
  selectSiswa.innerHTML = '<option value="">-- Pilih Siswa --</option>';

  if (!kelas) {
    selectSiswa.disabled = true;
    return;
  }

  const filtered = DATA_SISWA.filter(s => s.kelas === kelas);
  filtered.forEach(s => {
    selectSiswa.add(new Option(s.nama, s.nama));
  });
  selectSiswa.disabled = false;
}

function liveSearchSiswa() {
  const query = document.getElementById('kolSearch').value.toLowerCase();
  const resultsDiv = document.getElementById('searchResults');
  resultsDiv.innerHTML = '';

  if (query.length < 1) {
    resultsDiv.classList.add('hidden');
    return;
  }

  const matches = DATA_SISWA.filter(s => s.nama.toLowerCase().includes(query));

  if (matches.length > 0) {
    matches.forEach(s => {
      const item = document.createElement('div');
      item.className = "p-2.5 hover:bg-slate-100 cursor-pointer border-b text-sm flex justify-between";
      item.innerHTML = `<span><strong>${s.nama}</strong></span> <span class="text-xs text-slate-500">(${s.kelas})</span>`;
      item.onclick = () => tambahSiswaKolektif(s);
      resultsDiv.appendChild(item);
    });
    resultsDiv.classList.remove('hidden');
  } else {
    resultsDiv.classList.add('hidden');
  }
}

function tambahSiswaKolektif(siswa) {
  if (listKolektifTerpilih.some(s => s.nisn === siswa.nisn)) {
    alert('Siswa sudah ada dalam daftar kolektif');
    return;
  }

  listKolektifTerpilih.push({ ...siswa, keterangan: '' });
  document.getElementById('kolSearch').value = '';
  document.getElementById('searchResults').classList.add('hidden');
  renderDaftarKolektif();
}

function updateKetKolektif(nisn, val) {
  const idx = listKolektifTerpilih.findIndex(s => s.nisn === nisn);
  if (idx !== -1) listKolektifTerpilih[idx].keterangan = val;
}

function hapusSiswaKolektif(nisn) {
  listKolektifTerpilih = listKolektifTerpilih.filter(s => s.nisn !== nisn);
  renderDaftarKolektif();
}

function renderDaftarKolektif() {
  const container = document.getElementById('kolDaftarSiswa');
  container.innerHTML = '';

  if (listKolektifTerpilih.length === 0) {
    container.innerHTML = '<p id="kolEmptyMsg" class="text-xs text-slate-400 text-center py-2">Belum ada siswa yang ditambahkan.</p>';
    return;
  }

  listKolektifTerpilih.forEach(s => {
    const row = document.createElement('div');
    row.className = "flex flex-col sm:flex-row items-center gap-2 bg-white p-2.5 rounded border shadow-sm";
    row.innerHTML = `
      <div class="w-full sm:w-1/3 text-sm font-semibold">
        ${s.nama} <span class="text-xs font-normal text-slate-500">(${s.kelas})</span>
      </div>
      <input type="text" placeholder="Keterangan siswa ini..." value="${s.keterangan}" oninput="updateKetKolektif('${s.nisn}', this.value)" class="w-full sm:w-2/3 p-1.5 border rounded text-sm outline-none focus:border-blue-500">
      <button type="button" onclick="hapusSiswaKolektif('${s.nisn}')" class="text-red-500 hover:text-red-700 text-xs px-2 font-bold">Hapus</button>
    `;
    container.appendChild(row);
  });
}


// Jalankan saat halaman web selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
  muatDropdownKelas();
});

function muatDropdownKelas() {
  // Ambil elemen dropdown
  const selectIndividu = document.getElementById('indKelas');
  const selectKolektif = document.getElementById('kolKelas'); // Jika ada form kolektif

  // Pastikan variabel DATA_SISWA ada dan berupa array
  if (typeof DATA_SISWA === 'undefined' || !Array.isArray(DATA_SISWA)) {
    console.error('Data DATA_SISWA tidak ditemukan!');
    return;
  }

  // 1. Ambil nama kelas unik (hilangkan duplikat)
  const kelasUnik = [...new Set(DATA_SISWA.map(siswa => siswa.kelas))];

  // 2. Urutkan kelas secara alami (X.1, X.2, ..., XII.12)
  kelasUnik.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

  // 3. Fungsi pembantu untuk mengisi elemen <select>
  const isiSelect = (selectElement) => {
    if (!selectElement) return;
    
    // BERSIHKAN ISI LAMA agar tidak terjadi duplikasi saat dipanggil ulang
    selectElement.innerHTML = '<option value="">-- Pilih Kelas --</option>';

    kelasUnik.forEach(kelas => {
      const option = document.createElement('option');
      option.value = kelas;
      option.textContent = kelas;
      selectElement.appendChild(option);
    });
  };

  // 4. Terapkan ke dropdown yang ada
  isiSelect(selectIndividu);
  isiSelect(selectKolektif);
}
// ==================== 5. SIMPAN DATA KE SUPABASE ====================
async function simpanLaporIndividu(e) {
  e.preventDefault();
  const dataLaporan = {
    id: Date.now(),
    tipe: 'Individu',
    pelapor: currentUser.nama,
    tanggal: new Date().toLocaleDateString('id-ID'),
    kelas: document.getElementById('indKelas').value,
    siswa: document.getElementById('indSiswa').value,
    pelanggaran: document.getElementById('indPelanggaran').value,
    keterangan: document.getElementById('indKet').value
  };

  const { error } = await supabaseClient.from('laporan_siswa').insert([dataLaporan]);

  if (error) {
    alert('Gagal menyimpan ke database: ' + error.message);
  } else {
    alert('Laporan Individu berhasil tersimpan di Cloud Database!');
    e.target.reset();
    document.getElementById('indSiswa').disabled = true;
  }
}

async function simpanLaporKolektif(e) {
  e.preventDefault();
  if (listKolektifTerpilih.length === 0) {
    alert('Tambahkan minimal 1 siswa!');
    return;
  }

  const dataLaporan = {
    id: Date.now(),
    tipe: 'Kolektif',
    pelapor: currentUser.nama,
    tanggal: new Date().toLocaleDateString('id-ID'),
    pelanggaran: document.getElementById('kolPelanggaran').value,
    daftar_siswa: listKolektifTerpilih
  };

  const { error } = await supabaseClient.from('laporan_siswa').insert([dataLaporan]);

  if (error) {
    alert('Gagal menyimpan ke database: ' + error.message);
  } else {
    alert('Laporan Kolektif berhasil tersimpan di Cloud Database!');
    e.target.reset();
    listKolektifTerpilih = [];
    renderDaftarKolektif();
  }
}

// ==================== 6. BACA & KELOLA DATA DARI SUPABASE ====================
async function renderDashboardTable() {
  const tbody = document.getElementById('rekapTableBody');
  tbody.innerHTML = '<tr><td colspan="6" class="p-4 text-center text-slate-400">Memuat data dari database...</td></tr>';

  const { data: allData, error } = await supabaseClient
    .from('laporan_siswa')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    alert('Gagal mengambil data: ' + error.message);
    return;
  }

  const filterTipe = document.getElementById('filterTipe').value;
  const keyword = document.getElementById('filterKeyword').value.toLowerCase();
  tbody.innerHTML = '';

  // Update Stat Ringkasan
  document.getElementById('statTotal').innerText = allData.length;
  document.getElementById('statIndividu').innerText = allData.filter(d => d.tipe === 'Individu').length;
  document.getElementById('statKolektif').innerText = allData.filter(d => d.tipe === 'Kolektif').length;

  // Filter Data
  const filtered = allData.filter(item => {
    const matchTipe = filterTipe === 'SEMUA' || item.tipe === filterTipe;
    let matchKeyword = item.pelapor.toLowerCase().includes(keyword) || item.pelanggaran.toLowerCase().includes(keyword);

    if (item.tipe === 'Individu') {
      matchKeyword = matchKeyword || (item.siswa && item.siswa.toLowerCase().includes(keyword));
    } else if (item.tipe === 'Kolektif' && item.daftar_siswa) {
      matchKeyword = matchKeyword || item.daftar_siswa.some(s => s.nama.toLowerCase().includes(keyword));
    }

    return matchTipe && matchKeyword;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="p-4 text-center text-slate-400 text-sm">Belum ada data laporan yang cocok.</td></tr>`;
    return;
  }

  filtered.forEach(item => {
    let detailSiswaHtml = '';

    if (item.tipe === 'Individu') {
      detailSiswaHtml = `<strong>${item.siswa}</strong> (${item.kelas})<br><span class="text-xs text-slate-500">${item.keterangan || '-'}</span>`;
    } else if (item.daftar_siswa) {
      detailSiswaHtml = '<ul class="list-disc pl-4 space-y-1 text-xs">';
      item.daftar_siswa.forEach(s => {
        detailSiswaHtml += `<li><strong>${s.nama}</strong> (${s.kelas}) - <span class="text-slate-500">${s.keterangan || 'Tanpa Keterangan'}</span></li>`;
      });
      detailSiswaHtml += '</ul>';
    }

    const badgeColor = item.tipe === 'Individu' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800';

    const tr = document.createElement('tr');
    tr.className = "border-b hover:bg-slate-50 text-xs sm:text-sm";
    tr.innerHTML = `
      <td class="p-3 whitespace-nowrap">${item.tanggal}</td>
      <td class="p-3 font-semibold whitespace-nowrap">${item.pelapor}</td>
      <td class="p-3"><span class="px-2 py-1 rounded text-xs font-semibold ${badgeColor}">${item.tipe}</span></td>
      <td class="p-3 font-medium text-slate-700">${item.pelanggaran}</td>
      <td class="p-3">${detailSiswaHtml}</td>
      <td class="p-3 text-center">
        <button onclick="hapusLaporan(${item.id})" class="bg-red-50 hover:bg-red-100 text-red-600 p-1.5 rounded-lg text-xs font-bold transition">Hapus</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

async function hapusLaporan(id) {
  if (confirm('Apakah Anda yakin ingin menghapus laporan ini?')) {
    const { error } = await supabaseClient.from('laporan_siswa').delete().eq('id', id);

    if (error) {
      alert('Gagal menghapus: ' + error.message);
    } else {
      renderDashboardTable();
    }
  }
}

// Export Data ke CSV / Excel
async function exportToCSV() {
  const { data: allData, error } = await supabaseClient.from('laporan_siswa').select('*');
  if (error || !allData || allData.length === 0) {
    alert('Tidak ada data untuk di-export!');
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,ID,Tanggal,Pelapor,Tipe,Pelanggaran,Siswa Terlibat,Keterangan\n";

  allData.forEach(row => {
    if (row.tipe === 'Individu') {
      csvContent += `"${row.id}","${row.tanggal}","${row.pelapor}","Individu","${row.pelanggaran}","${row.siswa} (${row.kelas})","${row.keterangan || ''}"\n`;
    } else if (row.daftar_siswa) {
      const siswas = row.daftar_siswa.map(s => `${s.nama} (${s.kelas})`).join('; ');
      const kets = row.daftar_siswa.map(s => `${s.nama}: ${s.keterangan || '-'}`).join('; ');
      csvContent += `"${row.id}","${row.tanggal}","${row.pelapor}","Kolektif","${row.pelanggaran}","${siswas}","${kets}"\n`;
    }
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Rekap_Pelanggaran_Siswa_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
