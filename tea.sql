/*
Navicat MySQL Data Transfer

Source Server         : alin
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : tea

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-05-30 17:19:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `cha`
-- ----------------------------
DROP TABLE IF EXISTS `cha`;
CREATE TABLE `cha` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `ximg` varchar(20) DEFAULT NULL,
  `dimg` varchar(20) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `price` float(6,2) DEFAULT NULL,
  `shuomin` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cha
-- ----------------------------
INSERT INTO `cha` VALUES ('1', '罐装小叶苦丁代用茶', 'cp13.jpg', 'cp25.jpg', '85', '85.00', '精选优质小叶苦丁为原料，经严格工序加工而成，色泽翠绿，香气馥郁，滋味甘醇。');
INSERT INTO `cha` VALUES ('2', '翠谷幽兰罐装花茶', 'cp14.jpg', 'cp26.jpg', '100', '100.00', '吴裕泰独创的兰花花茶，原料产于四川雅安，外形隐翠显毫；汤色嫩绿明亮；滋味鲜爽醇和；香气清雅悠长、兰香明显。用当地种植的兰花，与制作好的茶坯进行数次分离窨花，通过茶叶吸收花香来达到窨花效果，既吸取了兰花的幽香，也保留了绿茶的特点及汤色。');
INSERT INTO `cha` VALUES ('3', '罐装贡菊代用茶', 'cp15.jpg', 'cp27.jpg', '18', '18.00', '贡菊色白、蒂绿、花心小，均匀不散朵，质柔软，气芳香，味甘微苦，被“中国药典”誉为“菊中之冠”、“民族瑰宝”。');
INSERT INTO `cha` VALUES ('4', '罐装杭白菊胎菊代用茶', 'cp16.jpg', 'cp28.jpg', '20', '20.00', '精选杭白菊胎菊为原料，经严格工序加工而成，色泽金黄、香气浓郁、滋味纯正浓冽，性微寒。');
INSERT INTO `cha` VALUES ('5', '盒装茉莉金奖小叶花茶', 'cp17.jpg', 'cp29.jpg', '75', '75.00', '茶叶外形紧结重实，香气鲜灵浓郁，滋味浓厚，耐泡。内装28袋独立小包装3克杯泡，方便携带，适合于日常办公、出行携带。牛皮纸盒装更加环保，有质感。');
INSERT INTO `cha` VALUES ('6', '罐装玫瑰茄代用茶', 'cp18.jpg', 'cp30.jpg', '16', '16.00', '玫瑰茄含有维生素C，柠檬酸等，可以用来冲泡茶和制作饮料。');
INSERT INTO `cha` VALUES ('7', '盒装一级蜜香铁观音', 'cp19.jpg', 'cp31.jpg', '100', '100.00', '精选安溪县高海拔山区的铁观音品种茶叶为原料，先将鲜叶按正宗传统工艺加工制成毛茶，再精挑细选，通过烘焙工艺二次精加工成熟茶，外形紧结重实。蜜香型铁观音焙火程度重，香气浓郁，蜜香显，滋味醇厚回甘。牛皮纸盒装，更加环保、有质感。');
INSERT INTO `cha` VALUES ('8', '赐福传香花茶礼盒', 'cp20.jpg', 'cp32.jpg', '280', '280.00', '礼盒内装专门拼配的赐福传香特种茉莉花茶原料，条索紧结显毫，茉莉花香浓郁，滋味醇厚有回甘。外盒以中国“福”字凸显热闹吉祥的节日氛围，花从福中生，生机勃勃的将福气运气送给您！');
INSERT INTO `cha` VALUES ('9', '纳福留香花茶礼盒', 'cp21.jpg', 'cp33.jpg', '180', '180.00', '礼盒内装专门拼配的纳福留香茉莉花茶原料，条索紧结，茉莉花香突显，滋味浓厚、耐冲泡。外盒以中国“福”字凸显热闹吉祥的节日氛围，花从福中生，生机勃勃的将福气运气送给您！');
INSERT INTO `cha` VALUES ('10', '蓬音清韵清香型铁观音礼盒', 'cp22.jpg', 'cp34.jpg', '600', '600.00', '精心挑选福建安溪特级茶叶，茶形重实匀整，茶叶色泽翠绿润，冲泡后音韵显，汤色金黄明亮，滋味鲜醇高爽，余香高长，叶底肥厚软亮');
INSERT INTO `cha` VALUES ('11', '韵品大红袍礼盒', 'cp23.jpg', 'cp35.jpg', '500', '500.00', '精选福建南平特级大红袍茶叶，茶质美而醇厚，有幽长的兰花清香，汤色浓艳橙黄，叶底鲜活软亮，红边显著，茶汤味浓醇厚，喉韵明显。');
INSERT INTO `cha` VALUES ('12', '散装玳玳红茶', 'cp24.jpg', 'cp36.jpg', '200', '200.00', '玳玳红茶是我国花茶家族中的一枝新秀，由新鲜玳玳花和优质功夫红茶茶坯，经过窨制工艺制作而成。玳玳红茶条索壮结、色泽乌润、金毫尚显，略带玳玳花片；汤色红亮，花香浓烈，甜爽回甘。被誉为“花茶小姐”。');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `time` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '茶叶市场理当回归平民本色', '在这几年的“茶市”大战中，一些商家为了迎合顾客、占领市场，不仅在茶叶的外盒包装、工艺制作等方面煞费苦心，还别出心裁地炒出养生保健等新概念，挖空心思地玩起新花样。各种豪华、名贵茶叶着实让人摸不着头脑，也常常是望“茶”兴叹。&茶叶超出传统食品的范畴，追根溯源，恐怕是醉翁之意不在“茶”，更多地被注入了权钱交易和利益寻租的因素，这不仅散发出豪华的奢靡，更透出腐味，让其卸下重任、回归本色已是当务之急。&令人欣喜的是，今年茶叶“轻”装上阵，这是弘扬新风所产生的功效。对商家来讲，在目前的形势下，已经不能再把眼光仅仅盯在公务消费上了，而应坚持以大众消费为主力、以市场需求为主导来“转方式、调结构”，唯有始终遵循物美价廉的经营理念，放下“身价”接“地气”，才能赢得大众之口立足市场、获得良好口碑占领市场。&茶叶回归平民本色，既减少了资源浪费、人情攀比，也堵住了腐败漏洞，是众望所归、大势所趋，得到实惠的是普通百姓，还原的是社会新风，值得喝彩。', '2017-06-28');
INSERT INTO `user` VALUES ('2', '铁观音苦瓜茶成最受欢迎防暑降温茶', '进入盛夏，防暑降温成为当前的一大热门话题。而记者在茶叶市场走访时发现，不少茶叶店纷纷在柜台的显眼位置摆起了苦瓜茶，作为招揽生意的新法宝。业内人士透露，具有祛火消暑等功效的苦瓜茶，迎合了市场防暑降温的需求，成了夏暑季节茶饮市场的明星产品。&养生意识兴起苦瓜茶保健功效受青睐&在南安英都镇良山村，记者看到，南都茶叶合作社理事长洪添配的家中放置着成堆的新鲜苦瓜。这清爽的绿色不仅让酷暑变得清凉起来，也让记者纳闷，难道茶农跨界种起了苦瓜?&看见记者不解，洪添配主动介绍：“铁观音苦瓜茶其实也不算什么新鲜事物，早年间，在安溪、南安一带就曾流传着苦瓜茶的制作方法，只是因为年代久远，就被人遗忘了。如今，我们又重新将这一茶种推向市场。”&而安溪铁观音制茶工艺大师陈两固此前也表示，陈年铁观音原本就是民间用来作为祛火、消暑、除腻的佳品，如果放置10年以上的陈茶储存得当，拿来做苦瓜茶，保健功效更佳。&近年来，随着养生意识不断深入人心，一些茶农和茶商看到市场上简单切片晒干的苦瓜茶挺受欢迎，便重新拾起上一辈人流传下来的苦瓜茶制作方法。洪添配告诉记者：“因为茶叶和烘焙设备都有，尝试做苦瓜茶也很方便。刚开始做只是想和家人、朋友分享，没想到还有不少客人主动要求购买。将茶与苦瓜结合的苦瓜茶，具有降‘三高’的功效，更是祛火消暑的健康饮品。”&工艺复杂做一泡茶要花5天时间&在不少茶农小时候的记忆里，苦瓜茶都是用土法晒干的，而今这祖传秘制茶也用上“慢焙”这种现代新工艺。不过即便这样，前前后后也要花上5天时间，要喝上一泡苦瓜茶，实属不易。做苦瓜茶首先要把苦瓜掏空，再把精心储藏的陈年铁观音填到里头。由于苦瓜形状不一，掏馕这活没法用机器流水线加工，处理苦瓜就要花不少时间。&洪添配告诉记者，装了经过独特加工后的陈年铁观音后，新鲜的苦瓜完全换了一副模样，外表略带焦脆，轻轻一掰就露出色泽乌黑油润的老茶。而到了这一步，制作工艺还不算完成，经过冷却之后要将苦瓜和茶叶再次分离，将焙干的苦瓜打碎，并与茶叶搅拌均匀。&拌匀后的苦瓜茶的泡制方法与铁观音的泡饮方式无异。但慢焙的工艺更让铁观音吸足了苦瓜的养分，瓜中有茶，茶中有瓜，泡出来的茶汤澄亮金黄似琥珀，口感微苦却柔软，滋味颇为醇厚，香韵十足，并且很耐泡。&价格亲民但整体产量有限', '2017-06-28');
INSERT INTO `user` VALUES ('3', '雨林茶山行探秘古茶树见证传统古法', '近日，由雨林古茶坊主办的全国大规模的茶山行体验活动，迎来了第二批参观团。&雨林古茶坊是一家专注于手工制古树普洱茶的茶叶品牌，建于西双版纳勐海县的雨林古茶坊庄园，占地400亩，是集古树茶产品研发、古树茶原料仓储、茶山行活动接待、古树普洱茶文化体验于一体，全国最大的古树茶体验中心。茶山行活动是邀请参观者走进核心腹地、走进源头、走进研发中心，倾听古茶坊“心里”真实的声音的寻源之旅。&一款古树普洱茶的诞生，要经历采摘、萎凋、杀青、摊凉、揉捻、晒青、剔捡、封存、蒸茶、包揉、用石磨压茶、包装等几十道工序，每一道工序都是制茶师傅的呕心之作。雨林古茶坊自2012年以来，持续推出茶山行活动，欢迎来自全国的茶友来到茶山亲身体验古树茶的生长环境以及做茶的全过程，恰恰反应了该企业对高品质的追求。', '2017-06-28');
INSERT INTO `user` VALUES ('4', '2014年茶文化节即将在北京隆重招开,不仅可以品茶还有优惠', '我国茶文化节每年都会举行，今年将在北京举行。在今年的6月19日至6月22日，“2014北京国际茶业展、2014北京马连道国际茶文化展、信阳第22届国际茶文化节北京活动周”将在北京展览馆举行。&今年的“两展一节”为期4天，分为发布推介、展览展示、交流论坛和交易洽谈、茶文化传承体验及促销、茶知识茶人才培训五大板块。茶文化节举办期间，市民可到马连道各门店免费品茶，在品饮中国茶和体验茶文化的同时，还能以优惠价格购买茶叶及相关产品。&为保持交通良好，让前来体验茶文化的人们方便，主办方将每天保证一小时对开一次班车，往返于马连道茶叶街体验区和北京展览馆展区，方便市民在马连道和北展两区域体验各项茶文化互动活动和体验活动。', '2017-06-28');
INSERT INTO `user` VALUES ('5', '海峡两岸少数民族茶产业交流会在福建华安举办', '11月11日，由国家民委、国务院台办指导，福建省民族与宗教事务厅、福建省茶叶学会主办的“2015年海峡两岸少数民族茶产业交流会暨福建省第三届少数民族名优茶评选大赛”在华安县举办。国家民委港澳台办主任俸兰、省民族宗教厅厅长杨志英、台湾两岸少数民族经济文化发展协会理事长林春德、漳州市副市长兰万安参加相关活动。&本次活动旨在推动海峡两岸少数民族茶产业交流，推进福建省少数民族和民族地区茶产业发展，培育少数民族制茶能手，提高茶叶加工技术水平和茶叶质量，促进少数民族群众增产增收。&据了解，此次活动共收到绿茶、红茶、白茶和乌龙茶等参赛茶样四大类、150份，由福建省茶叶学会组织茶叶审评专家，按照《茶叶感官审评办法》(GB/T23776—2009)进行感官密码审评，共评选出茶王4个、金奖4个、银奖5个和优质奖7个。两岸茶叶专家还对获奖茶叶进行精彩点评，并展示交流两岸少数民族茶产业的发展成果、发展技艺和发展经验。', '2017-06-28');
INSERT INTO `user` VALUES ('6', '西湖龙井茶未来的发展方向，如何打造西湖龙井茶品牌', '西湖龙井大家都知道，相信很多人都喜欢喝，那么西湖龙井茶它的知名度有多大呢？它未来的发展方向是什么样呢？这些有待思考，下面就来介绍一下西湖龙井未来的发展方向以及如何打造出最好的龙井茶品牌。&1、中国是茶文化发源地，而杭州是龙井茶的故乡。转塘地处西湖龙井茶产区中心，介于周浦、龙坞与留下之间，是连接产、供、销必不可缺的流通环节。&2、国内70%以上的西湖龙井与其它各类龙井是从西湖茶叶市场销售出去的，西湖茶叶市场不但有地理优势，更有文化优势。&3、它是整合市场资源，解决供求信息不对称问题，方便、实惠地买卖正宗的西湖龙井，解决供求双方问题的一个良好平台。&4、当前中国的茶叶公司规模偏小，品牌多，且没有代表性的茶业巨头；从销量上难以抗衡洋茶品牌如“立顿”。而把视野缩小到省级，浙江又相对薄弱。譬如福建有铁观音集团、云南有普洱茶集团——都是以省为单位的抱团取胜，而浙江的龙井茶闻名遐迩，却没有龙头，难以抱团，销售上自然难以突破。&5、“如果实现强强联合，把区域内的茶企形成真正集团化模式运作，就能实现抱团共进，资源整合。”我认为可以借鉴国外做葡萄酒的模式：大型酒庄、公司把某一区域的葡萄归到自己名下，葡萄的品质肯定有保障，葡萄种植以后的销路也完全有保障。于茶业而言，形成西湖龙井茶叶集团后，集团公司就把茶农的西湖龙井茶全部包干。因此，茶叶的种植将全部正规化操作，茶叶的质量、茶农的收入就得到保证。至于每个子公司与哪个村对接，则可以竞争、抽签的方式来决定。这样以西湖龙井茶叶集团的名义来做茶，出售的茶叶全部是正宗的。而正宗西湖龙井茶全部控住了，外面龙井茶就是假的了，这样一来，西湖龙井茶的这块金字招牌就得到了保护。整个西湖茶叶市场也就具有了更强的专业性和竞争力。&杭州西湖茶叶市场建于1998年，已经走过了16个年头。市场二期占地面积16亩，设有260间茶叶摊位，同时还配有冷库等配套设施，并提供包装、运输等全方位的服务，规模完善、设施齐全。全年的摊位出租率达100%，年销售量达到3000吨以上，交易额突破6亿元，创利税3500多万元。市场系浙江省工商局认定的三星级文明规范市场。项目紧邻之江度假区内的中国美术学院（象山校区）和浙江音乐学院，是以茶文化、茶旅游、茶贸易为一体的博览城，占地面积为55589平方米，设计地上建筑面积11万平方米，地下7万平方米，将按五星级市场标准建设，分为商贸区、办公区、茶企总部及配套服务区，建成后将涵盖国际茶文化展示中心、茶科学/茶文化培训中心、茶质量检测中心、国际茶叶交易中心、国际茶信息交流及茶文化旅游体验等多项内容。项目预计2014年年底结顶，2015年完成装修，于2016年初开业。&西湖龙井茶未来一定会发展的越来越好，同时西湖龙井之地杭州西湖也将成为茶博城，这将给西湖的茶业发展带来很大的发展，它不但在我国有名气，也将在世界有一定的地位。', '2017-06-28');
INSERT INTO `user` VALUES ('7', '未来茶行业的发展方向，如何打造最完美茶企业', '如今我们这个大的社会，发展越来越快，快速的步伐让我们不得不跑着跟上，到底是什么造就这个发展趋势呢？如何去更好地发展呢？未来茶行业的发展方向是什么？&如今社会信息网络化，越来越多的人都喜欢网上购物，键盘一敲，所有想要的都可以买下来，这让人们免去了奔波，安稳的呆在电脑旁就有一切了。谁都喜欢简单的做事情方法，所以电子商务的发展是越来越快了。那么现如今茶叶市场很大，目前我国茶产业的基本现状是品牌缺乏。中国茶叶流通协会常务副会长王庆表示，随着以品牌消费为特征的新消费习惯的逐渐形成，茶业品牌化正当其时，这不仅是业界也是社会对茶叶企业的一种要求。快速打造具有较高品牌价值和强大影响力的茶叶品牌，成为我国茶叶企业共同的心声与愿望。从各类商品的销售渠道上来看，目前电商可以说做得风生水起。王庆表示，电子商务作为一种新兴的产品销售平台和渠道模式，目前在茶行业整体规模还不大，尚未发展成为大部分企业销售的主要支点。去年茶叶电商的销售额接近85亿元，根据目前的增长势头推算，到2014年底，茶叶电子商务总产值预计为100亿元。&未来茶行业的发展趋势将是品牌化和电商渠道，相信这样快速的发展将给茶叶行业的人带来不小的变化，所以大家一定要准备打好这个战。在不断地变化中，打造出最好的茶叶，让茶叶行业发展的越来越好。', '2017-06-28');
INSERT INTO `user` VALUES ('8', '打造世界茶第一村，让中国本土茶名扬世海', '茶，地地道道的中国古文化，怎么才能打造出中国茶在世界的地位呢？要想走向世界，就要打造一片坚实的基础。&2014年5月30日，四川省国际合作投资促进会—邛崃投资考察对接会在邛崃举行，意大利对外贸易委员会成都代表处首席代表汪道君、成都海外交流协会省友协副会长万禾等建议邛崃推进农业、旅游等产业项目招商。从对接会上获悉，成都将打造“茶马古道第一村”。&“项目主要是依靠当地茶园产业，结合旅游产业而立项。”省国际合作投资促进会农业专委会副主任陈宏透露，该项目位于邛崃临济镇，总投资13亿元，主要将整合近万亩茶园资源，将打造约13.5公里长绿色骑游走廊，“建成后将是4A级旅游景区，三年半后，成都市民们就可以到邛崃骑游过端午了。”希望未来中国茶不但能够本土上发展的更好，更能走向世界，让世界人们都知道中国茶，了解中国的茶文化。', '2017-06-28');
INSERT INTO `user` VALUES ('9', '打造世界茶第一村，让中国本土茶名扬世海', '茶，地地道道的中国古文化，怎么才能打造出中国茶在世界的地位呢？要想走向世界，就要打造一片坚实的基础。&2014年5月30日，四川省国际合作投资促进会—邛崃投资考察对接会在邛崃举行，意大利对外贸易委员会成都代表处首席代表汪道君、成都海外交流协会省友协副会长万禾等建议邛崃推进农业、旅游等产业项目招商。从对接会上获悉，成都将打造“茶马古道第一村”。&“项目主要是依靠当地茶园产业，结合旅游产业而立项。”省国际合作投资促进会农业专委会副主任陈宏透露，该项目位于邛崃临济镇，总投资13亿元，主要将整合近万亩茶园资源，将打造约13.5公里长绿色骑游走廊，“建成后将是4A级旅游景区，三年半后，成都市民们就可以到邛崃骑游过端午了。”希望未来中国茶不但能够本土上发展的更好，更能走向世界，让世界人们都知道中国茶，了解中国的茶文化。', '2017-06-28');
INSERT INTO `user` VALUES ('10', '世界茶文化专家论道一带一路茶文化共通性', '茶叶自古是中国与“一带一路”国家和地区经贸往来的重要商品，茶文化也一直是中华文明传播于全世界的重要象征。印度茶商代表罗禅今天在“2015 美丽中国· 一带一路茶文化共通性国际研讨会”接受中新网记者采访时表示，中国茶文化底蕴深厚，可以通过食物的和谐，构成一带一路中交流、文化的和谐。&罗禅认为，中国茶文化底蕴深厚，激发了人们的兴趣，得到了人们的关注：“当一种食物或其他东西进入到你的身体中，就会对你造成影响。茶是食物，茶文化便是中国食物所蕴含文化中的重要组成部分。茶文化使茶在人的生活中变得愈发重要，使人们为之着迷，自然而然达到一种和谐的状态，通过食物的和谐，构成交流的和谐、文化的和谐。”&当问及杭州西湖龙井茶给予的印象，罗禅赞不绝口：作为中国茶叶的代表，西湖龙井有着无与伦比的魅力，水、酒等饮品都不能与其相提并论。&据悉，2015 美丽中国· 一带一路茶文化共通性国际研讨会12日—13日在浙江农林大学举办。在当天的研讨会上，浙江农林大学文化学院院长王旭烽指出，茶与“一带一路”的绝大多数国家紧密相连，这使茶文化的国际化交流极为重要。交流首要方面之一就是“茶文化呈现”，其呈现的不仅仅只是茶文化本身这么简单，而是将茶作为一种文化符号，继以参与构建我们的生活。&此外，还有20多名专家学者结合国内外实际情况，提交了《论一带一路国际交流中的茶文化呈现意义》、《中国茶文化在“一带一路”沿线国家的传播与发展—以西亚为例》等研究成果，交流了新形势下茶文化国际传播、一带一路茶文化健康养生、一带一路茶商品国际贸易等方面的成果与案例。&值得一提的是，云南大学茶马古道文化研究中心研究员周重林就《茶马古道是怎么从学术概念变成国家文物的》着重阐述了茶马古道概念的成形过程。茶马古道在不断深化中形成文化符号，成为国家遗产，正以一个庞大的文化产业品牌，拉动了区域经济的产业化，带动经济文化的发展，值得其他国家和地区借鉴。', '2017-06-28');
INSERT INTO `user` VALUES ('11', '茶叶品牌如何一举成名，如何才能让它走的更远，名扬天下', '茶叶品牌如何一举成名，怎么才能走出一条宽广长久的大路，让茶叶成为全国乃至世界人民都喜欢的口味呢？茶叶需要去品，那么茶叶的品牌也是在人们不断地品过后，一个一个传出去，从而越来越受大家的欢迎，那么品牌的名就逐渐响亮起来了。&湖北羊楼洞青砖茶如何有名的？&1、最近在俄罗斯萨马拉市举行的中国长江中上游地区和俄罗斯伏尔加河沿岸联邦区领导人座谈会上，湖北省赤壁市的羊楼洞青砖茶作为“国礼”赠送俄方。&2、羊楼洞青砖茶的风味得到了与会者的一致好评。料考证，位于湖北赤壁市的羊楼洞是这条“万里茶道”繁荣兴盛历史最长、且制茶业规模最大的源头集镇，从这里走出去的“洞茶”经汉水运至襄樊、贯河南入泽州，经潞安抵平遥、祁县、太谷、忻州、大同、天镇到张家口，一路北上贯穿蒙古草原到库伦（今蒙古乌兰巴托）至俄罗斯恰克图，再由东向西横跨西伯利亚、伏尔加河抵达圣彼得堡远销中亚及欧洲各国。&3、也正是这条连通欧亚大陆的“伟大茶叶之路”缔造了持续繁荣兴盛二百多年的羊楼洞茶市传奇和“洞茶”被尊誉“生命之茶”的美称。&4、近年来，湖北大力实施鄂茶“走出去”战略，重点推出“青砖茶”等曾经名振中外的湖北茶。&5、赤壁市全力推动青砖茶产业跨越式发展。该市砖茶生产园区已被批准为省级现代农业产业园，基本形成了以羊楼洞茶业股份有限公司、赵李桥茶厂有限责任公司两个省级龙头企业为主，洞庄等4个市级龙头企业为辅，多个中小茶企跟进快速发展的可喜局面。&6、羊楼洞茶业将借活动契机，积极对外展示中国茶文化，推广湖北“青砖茶”。&茶叶走出去，茶叶的文化也很重要，每一个茶叶品牌的背后都有一段茶文化的发展，都是经历着漫长的时间，渐渐地形成的。让这个品牌好起来，首先要诚信，因为你的茶推出去了，你的品牌也形成了，可是你的茶味道真的不地道，不是大家喜欢的，那么你就只得到那么一次机会，后面你的品牌名会被越来越多的人厌烦，从而你的品牌便不再受欢迎。所以做什么，都要给人一种真诚，茶的口味也要对路，品茶即是品人生。', '2017-06-28');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `pass` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '18225144129', '1233211234567');
INSERT INTO `users` VALUES ('2', '18225144128', '12345678');
INSERT INTO `users` VALUES ('3', '18225144127', '12345678');
INSERT INTO `users` VALUES ('4', '18225144126', '12345678');
INSERT INTO `users` VALUES ('5', '18225144125', '12345678');
INSERT INTO `users` VALUES ('6', '18225144124', '12345678');
INSERT INTO `users` VALUES ('7', '18225144123', '12345678');
INSERT INTO `users` VALUES ('8', '18225144121', '12345678');
INSERT INTO `users` VALUES ('9', '18225144119', '12345678');
INSERT INTO `users` VALUES ('10', '18225144120', '12345678');
INSERT INTO `users` VALUES ('11', '18225144111', '12345678');
