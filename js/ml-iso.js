function mal_to_iso(){

    trans_iso(ch);
    function trans_iso(){
        ch = ch.replace(/ംക്/g, "ṅk");
        ch = ch.replace(/ംക/g, "ṅka");
        ch = ch.replace(/ംഖ്/g, "ṅkh");
        ch = ch.replace(/ംഖ/g, "ṅkha");
        ch = ch.replace(/ംഗ്/g, "ṅg");
        ch = ch.replace(/ംഗ/g, "ṅga");
        ch = ch.replace(/ംഘ്/g, "ṅgh");
        ch = ch.replace(/ംഘ/g, "ṅgha");
        /**vowels */
        ch = ch.replace(/അ/g, "a");
        ch = ch.replace(/ആ/g, "ā");
        ch = ch.replace(/ഇ/g, "i");
        ch = ch.replace(/ഈ/g, "ī");
        ch = ch.replace(/ഉ/g, "u");
        ch = ch.replace(/ഊ/g, "ū");
        ch = ch.replace(/എ/g, "e");
        ch = ch.replace(/ഏ/g, "ē");
        ch = ch.replace(/ഒ/g, "o");
        ch = ch.replace(/ഓ/g, "ō");
        ch = ch.replace(/ഐ/g, "ai");
        ch = ch.replace(/ഔ/g, "au");
        ch = ch.replace(/ഋ/g, "r̥");
        ch = ch.replace(/അം/g, "am");
        ch = ch.replace(/ആം/g, "ām");
        ch = ch.replace(/അഃ/g, "aḥ");
        ch = ch.replace(/ം/g, "m");
     /**consonants */
             /**nta d*/
        ch = ch.replace(/ന്റ്/g, "nḏ");
        ch = ch.replace(/ന്റ/g, "nḏa");
        ch = ch.replace(/ndaാ/g, "nḏā");
        ch = ch.replace(/ndaി/g, "nḏi");
        ch = ch.replace(/ndaീ/g, "nḏī");
        ch = ch.replace(/ndaു/g, "nḏu");
        ch = ch.replace(/ndaൂ/g, "nḏū");
        ch = ch.replace(/ndaെ/g, "nḏe");
        ch = ch.replace(/ndaേ/g, "nḏē");
        ch = ch.replace(/ndaൊ/g, "nḏo");
        ch = ch.replace(/ndaോ/g, "nḏō");
        ch = ch.replace(/ndaൈ/g, "nḏai");
        ch = ch.replace(/ndaൗ/g, "nḏau");
        ch = ch.replace(/ndaൃ/g, "nḏr̥");
        ch = ch.replace(/ndaം/g, "nḏam");
        ch = ch.replace(/ndaഃ/g, "nḏaḥ");  
     /**ka */
        ch = ch.replace(/ക്/g, "k");
        ch = ch.replace(/ക/g, "ka");
        ch = ch.replace(/kaാ/g, "kā");
        ch = ch.replace(/kaി/g, "ki");
        ch = ch.replace(/kaീ/g, "kī");
        ch = ch.replace(/kaു/g, "ku");
        ch = ch.replace(/kaൂ/g, "kū");
        ch = ch.replace(/kaെ/g, "ke");
        ch = ch.replace(/kaേ/g, "kē");
        ch = ch.replace(/kaൊ/g, "ko");
        ch = ch.replace(/kaോ/g, "kō");
        ch = ch.replace(/kaൈ/g, "kai");
        ch = ch.replace(/kaൗ/g, "kau");
        ch = ch.replace(/kaൃ/g, "kr̥");
        ch = ch.replace(/kaം/g, "kam");
        ch = ch.replace(/kaഃ/g, "kaḥ");
             /**kha */
        ch = ch.replace(/ഖ്/g, "kh");
        ch = ch.replace(/ഖ/g, "kha");
        ch = ch.replace(/khaാ/g, "khā");
        ch = ch.replace(/khaി/g, "khi");
        ch = ch.replace(/khaീ/g, "khī");
        ch = ch.replace(/khaു/g, "khu");
        ch = ch.replace(/khaൂ/g, "khū");
        ch = ch.replace(/khaെ/g, "khe");
        ch = ch.replace(/khaേ/g, "khē");
        ch = ch.replace(/khaൊ/g, "kho");
        ch = ch.replace(/khaോ/g, "khō");
        ch = ch.replace(/khaൈ/g, "khai");
        ch = ch.replace(/khaൗ/g, "khau");
        ch = ch.replace(/khaൃ/g, "khr̥");
        ch = ch.replace(/khaം/g, "kham");
        ch = ch.replace(/khaഃ/g, "khaḥ");
        /**ga */
        ch = ch.replace(/ഗ്/g, "g");
        ch = ch.replace(/ഗ/g, "ga");
        ch = ch.replace(/gaാ/g, "gā");
        ch = ch.replace(/gaി/g, "gi");
        ch = ch.replace(/gaീ/g, "gī");
        ch = ch.replace(/gaു/g, "gu");
        ch = ch.replace(/gaൂ/g, "gū");
        ch = ch.replace(/gaെ/g, "ge");
        ch = ch.replace(/gaേ/g, "gē");
        ch = ch.replace(/gaൊ/g, "go");
        ch = ch.replace(/gaോ/g, "gō");
        ch = ch.replace(/gaൈ/g, "gai");
        ch = ch.replace(/gaൗ/g, "gau");
        ch = ch.replace(/gaൃ/g, "gr̥");
        ch = ch.replace(/gaം/g, "gam");
        ch = ch.replace(/gaഃ/g, "gaḥ");
                /**ga */
        ch = ch.replace(/ഘ്/g, "gh");
        ch = ch.replace(/ഘ/g, "gha");
        ch = ch.replace(/ghaാ/g, "ghā");
        ch = ch.replace(/ghaി/g, "ghi");
        ch = ch.replace(/ghaീ/g, "ghī");
        ch = ch.replace(/ghaു/g, "ghu");
        ch = ch.replace(/ghaൂ/g, "ghū");
        ch = ch.replace(/ghaെ/g, "ghe");
        ch = ch.replace(/ghaേ/g, "ghē");
        ch = ch.replace(/ghaൊ/g, "gho");
        ch = ch.replace(/ghaോ/g, "ghō");
        ch = ch.replace(/ghaൈ/g, "ghai");
        ch = ch.replace(/ghaൗ/g, "ghau");
        ch = ch.replace(/ghaൃ/g, "ghr̥");
        ch = ch.replace(/ghaം/g, "gham");
        ch = ch.replace(/ghaഃ/g, "ghaḥ");
         /**nga */
        ch = ch.replace(/ങ്/g, "ṅ");
        ch = ch.replace(/ങ/g, "ṅa");
        ch = ch.replace(/ṅaാ/g, "ṅā");
        ch = ch.replace(/ṅaി/g, "ṅi");
        ch = ch.replace(/ṅaീ/g, "ṅī");
        ch = ch.replace(/ṅaു/g, "ṅu");
        ch = ch.replace(/ṅaൂ/g, "ṅū");
        ch = ch.replace(/ṅaെ/g, "ṅe");
        ch = ch.replace(/ṅaേ/g, "ṅē");
        ch = ch.replace(/ṅaൊ/g, "ṅo");
        ch = ch.replace(/ṅaോ/g, "ṅō");
        ch = ch.replace(/ṅaൈ/g, "ṅai");
        ch = ch.replace(/ṅaൗ/g, "ṅau");
        ch = ch.replace(/ṅaൃ/g, "ṅr̥");
        ch = ch.replace(/ṅaം/g, "ṅam");
        ch = ch.replace(/ṅaഃ/g, "ṅaḥ"); 
        /**ca*/
        ch = ch.replace(/ച്/g, "c");
        ch = ch.replace(/ച/g, "ca");
        ch = ch.replace(/caാ/g, "cā");
        ch = ch.replace(/caി/g, "ci");
        ch = ch.replace(/caീ/g, "cī");
        ch = ch.replace(/caു/g, "cu");
        ch = ch.replace(/caൂ/g, "cū");
        ch = ch.replace(/caെ/g, "ce");
        ch = ch.replace(/caേ/g, "cē");
        ch = ch.replace(/caൊ/g, "co");
        ch = ch.replace(/caോ/g, "cō");
        ch = ch.replace(/caൈ/g, "cai");
        ch = ch.replace(/caൗ/g, "cau");
        ch = ch.replace(/caൃ/g, "cr̥");
        ch = ch.replace(/caം/g, "cam");
        ch = ch.replace(/caഃ/g, "caḥ"); 
        /**cha*/
        ch = ch.replace(/ഛ്/g, "ch");
        ch = ch.replace(/ഛ/g, "cha");
        ch = ch.replace(/chaാ/g, "chā");
        ch = ch.replace(/chaി/g, "chi");
        ch = ch.replace(/chaീ/g, "chī");
        ch = ch.replace(/chaു/g, "chu");
        ch = ch.replace(/chaൂ/g, "chū");
        ch = ch.replace(/chaെ/g, "che");
        ch = ch.replace(/chaേ/g, "chē");
        ch = ch.replace(/chaൊ/g, "cho");
        ch = ch.replace(/chaോ/g, "chō");
        ch = ch.replace(/chaൈ/g, "chai");
        ch = ch.replace(/chaൗ/g, "chau");
        ch = ch.replace(/chaൃ/g, "chr̥");
        ch = ch.replace(/chaം/g, "cham");
        ch = ch.replace(/chaഃ/g, "chaḥ"); 
            /**ja*/
        ch = ch.replace(/ജ്/g, "j");
        ch = ch.replace(/ജ/g, "ja");
        ch = ch.replace(/jaാ/g, "jā");
        ch = ch.replace(/jaി/g, "ji");
        ch = ch.replace(/jaീ/g, "jī");
        ch = ch.replace(/jaു/g, "ju");
        ch = ch.replace(/jaൂ/g, "jū");
        ch = ch.replace(/jaെ/g, "je");
        ch = ch.replace(/jaേ/g, "jē");
        ch = ch.replace(/jaൊ/g, "jo");
        ch = ch.replace(/jaോ/g, "jō");
        ch = ch.replace(/jaൈ/g, "jai");
        ch = ch.replace(/jaൗ/g, "jau");
        ch = ch.replace(/jaൃ/g, "jr̥");
        ch = ch.replace(/jaം/g, "jam");
        ch = ch.replace(/jaഃ/g, "jaḥ"); 

        /**jha*/
        ch = ch.replace(/ഝ്/g, "jh");
        ch = ch.replace(/ഝ/g, "jha");
        ch = ch.replace(/jhaാ/g, "jhā");
        ch = ch.replace(/jhaി/g, "jhi");
        ch = ch.replace(/jhaീ/g, "jhī");
        ch = ch.replace(/jhaു/g, "jhu");
        ch = ch.replace(/jhaൂ/g, "jhū");
        ch = ch.replace(/jhaെ/g, "jhe");
        ch = ch.replace(/jhaേ/g, "jhē");
        ch = ch.replace(/jhaൊ/g, "jho");
        ch = ch.replace(/jhaോ/g, "jhō");
        ch = ch.replace(/jhaൈ/g, "jhai");
        ch = ch.replace(/jhaൗ/g, "jhau");
        ch = ch.replace(/jhaൃ/g, "jhr̥");
        ch = ch.replace(/jhaം/g, "jham");
        ch = ch.replace(/jhaഃ/g, "jhaḥ");  
        /**nja*/
        ch = ch.replace(/ഞ്/g, "ñ");
        ch = ch.replace(/ഞ/g, "ña");
        ch = ch.replace(/ñaാ/g, "ñā");
        ch = ch.replace(/ñaി/g, "ñi");
        ch = ch.replace(/ñaീ/g, "ñī");
        ch = ch.replace(/ñaു/g, "ñu");
        ch = ch.replace(/ñaൂ/g, "ñū");
        ch = ch.replace(/ñaെ/g, "ñe");
        ch = ch.replace(/ñaേ/g, "ñē");
        ch = ch.replace(/ñaൊ/g, "ño");
        ch = ch.replace(/ñaോ/g, "ñō");
        ch = ch.replace(/ñaൈ/g, "ñai");
        ch = ch.replace(/ñaൗ/g, "ñau");
        ch = ch.replace(/ñaൃ/g, "ñr̥");
        ch = ch.replace(/ñaം/g, "ñam");
        ch = ch.replace(/ñaഃ/g, "ñaḥ");   

       /**Ta*/
        ch = ch.replace(/ട്/g, "ṭ");
        ch = ch.replace(/ട/g, "ṭa");
        ch = ch.replace(/ṭaാ/g, "ṭā");
        ch = ch.replace(/ṭaി/g, "ṭi");
        ch = ch.replace(/ṭaീ/g, "ṭī");
        ch = ch.replace(/ṭaു/g, "ṭu");
        ch = ch.replace(/ṭaൂ/g, "ṭū");
        ch = ch.replace(/ṭaെ/g, "ṭe");
        ch = ch.replace(/ṭaേ/g, "ṭē");
        ch = ch.replace(/ṭaൊ/g, "ṭo");
        ch = ch.replace(/ṭaോ/g, "ṭō");
        ch = ch.replace(/ṭaൈ/g, "ṭai");
        ch = ch.replace(/ṭaൗ/g, "ṭau");
        ch = ch.replace(/ṭaൃ/g, "ṭr̥");
        ch = ch.replace(/ṭaം/g, "ṭam");
        ch = ch.replace(/ṭaഃ/g, "ṭaḥ");   
        
        /**THa ṭh */
        ch = ch.replace(/ഠ്/g, "ṭh");
        ch = ch.replace(/ഠ/g, "ṭha");
        ch = ch.replace(/ṭhaാ/g, "ṭhā");
        ch = ch.replace(/ṭhaി/g, "ṭhi");
        ch = ch.replace(/ṭhaീ/g, "ṭhī");
        ch = ch.replace(/ṭhaു/g, "ṭhu");
        ch = ch.replace(/ṭhaൂ/g, "ṭhū");
        ch = ch.replace(/ṭhaെ/g, "ṭhe");
        ch = ch.replace(/ṭhaേ/g, "ṭhē");
        ch = ch.replace(/ṭhaൊ/g, "ṭho");
        ch = ch.replace(/ṭhaോ/g, "ṭhō");
        ch = ch.replace(/ṭhaൈ/g, "ṭhai");
        ch = ch.replace(/ṭhaൗ/g, "ṭhau");
        ch = ch.replace(/ṭhaൃ/g, "ṭhr̥");
        ch = ch.replace(/ṭhaം/g, "ṭham");
        ch = ch.replace(/ṭhaഃ/g, "ṭhaḥ");   

        /**Da*/
        ch = ch.replace(/ഡ്/g, "ḍ");
        ch = ch.replace(/ഡ/g, "ḍa");
        ch = ch.replace(/ḍaാ/g, "ḍā");
        ch = ch.replace(/ḍaി/g, "ḍi");
        ch = ch.replace(/ḍaീ/g, "ḍī");
        ch = ch.replace(/ḍaു/g, "ḍu");
        ch = ch.replace(/ḍaൂ/g, "ḍū");
        ch = ch.replace(/ḍaെ/g, "ḍe");
        ch = ch.replace(/ḍaേ/g, "ḍē");
        ch = ch.replace(/ḍaൊ/g, "ḍo");
        ch = ch.replace(/ḍaോ/g, "ḍō");
        ch = ch.replace(/ḍaൈ/g, "ḍai");
        ch = ch.replace(/ḍaൗ/g, "ḍau");
        ch = ch.replace(/ḍaൃ/g, "ḍr̥");
        ch = ch.replace(/ḍaം/g, "ḍam");
        ch = ch.replace(/ḍaഃ/g, "ḍaḥ");   

        /**ḍha*/
        ch = ch.replace(/ഢ്/g, "ḍh");
        ch = ch.replace(/ഢ/g, "ḍha");
        ch = ch.replace(/ḍhaാ/g, "ḍhā");
        ch = ch.replace(/ḍhaി/g, "ḍhi");
        ch = ch.replace(/ḍhaീ/g, "ḍhī");
        ch = ch.replace(/ḍhaു/g, "ḍhu");
        ch = ch.replace(/ḍhaൂ/g, "ḍhū");
        ch = ch.replace(/ḍhaെ/g, "ḍhe");
        ch = ch.replace(/ḍhaേ/g, "ḍhē");
        ch = ch.replace(/ḍhaൊ/g, "ḍho");
        ch = ch.replace(/ḍhaോ/g, "ḍhō");
        ch = ch.replace(/ḍhaൈ/g, "ḍhai");
        ch = ch.replace(/ḍhaൗ/g, "ḍhau");
        ch = ch.replace(/ḍhaൃ/g, "ḍhr̥");
        ch = ch.replace(/ḍhaം/g, "ḍham");
        ch = ch.replace(/ḍhaഃ/g, "ḍhaḥ");          
        /**na*/
        ch = ch.replace(/ണ്/g, "ṇ");
        ch = ch.replace(/ണ/g, "ṇa");
        ch = ch.replace(/ṇaാ/g, "ṇā");
        ch = ch.replace(/ṇaി/g, "ṇi");
        ch = ch.replace(/ṇaീ/g, "ṇī");
        ch = ch.replace(/ṇaു/g, "ṇu");
        ch = ch.replace(/ṇaൂ/g, "ṇū");
        ch = ch.replace(/ṇaെ/g, "ṇe");
        ch = ch.replace(/ṇaേ/g, "ṇē");
        ch = ch.replace(/ṇaൊ/g, "ṇo");
        ch = ch.replace(/ṇaോ/g, "ṇō");
        ch = ch.replace(/ṇaൈ/g, "ṇai");
        ch = ch.replace(/ṇaൗ/g, "ṇau");
        ch = ch.replace(/ṇaൃ/g, "ṇr̥");
        ch = ch.replace(/ṇaം/g, "ṇam");
        ch = ch.replace(/ṇaഃ/g, "ṇaḥ");  
        /**ta*/
        ch = ch.replace(/ത്/g, "t");
        ch = ch.replace(/ത/g, "ta");
        ch = ch.replace(/taാ/g, "tā");
        ch = ch.replace(/taി/g, "ti");
        ch = ch.replace(/taീ/g, "tī");
        ch = ch.replace(/taു/g, "tu");
        ch = ch.replace(/taൂ/g, "tū");
        ch = ch.replace(/taെ/g, "te");
        ch = ch.replace(/taേ/g, "tē");
        ch = ch.replace(/taൊ/g, "to");
        ch = ch.replace(/taോ/g, "tō");
        ch = ch.replace(/taൈ/g, "tai");
        ch = ch.replace(/taൗ/g, "tau");
        ch = ch.replace(/taൃ/g, "tr̥");
        ch = ch.replace(/taം/g, "tam");
        ch = ch.replace(/taഃ/g, "taḥ");
        /*tha*/
        ch = ch.replace(/ഥ്/g, "th");
        ch = ch.replace(/ഥ/g, "tha");
        ch = ch.replace(/thaാ/g, "thā");
        ch = ch.replace(/thaി/g, "thi");
        ch = ch.replace(/thaീ/g, "thī");
        ch = ch.replace(/thaു/g, "thu");
        ch = ch.replace(/thaൂ/g, "thū");
        ch = ch.replace(/thaെ/g, "the");
        ch = ch.replace(/thaേ/g, "thē");
        ch = ch.replace(/thaൊ/g, "tho");
        ch = ch.replace(/thaോ/g, "thō");
        ch = ch.replace(/thaൈ/g, "thai");
        ch = ch.replace(/thaൗ/g, "thau");
        ch = ch.replace(/thaൃ/g, "thr̥");
        ch = ch.replace(/thaം/g, "tham");
        ch = ch.replace(/thaഃ/g, "thaḥ");   
        /**da*/
        ch = ch.replace(/ദ്/g, "d");
        ch = ch.replace(/ദ/g, "da");
        ch = ch.replace(/daാ/g, "dā");
        ch = ch.replace(/daി/g, "di");
        ch = ch.replace(/daീ/g, "dī");
        ch = ch.replace(/daു/g, "du");
        ch = ch.replace(/daൂ/g, "dū");
        ch = ch.replace(/daെ/g, "de");
        ch = ch.replace(/daേ/g, "dē");
        ch = ch.replace(/daൊ/g, "do");
        ch = ch.replace(/daോ/g, "dō");
        ch = ch.replace(/daൈ/g, "dai");
        ch = ch.replace(/daൗ/g, "dau");
        ch = ch.replace(/daൃ/g, "dr̥");
        ch = ch.replace(/daം/g, "dam");
        ch = ch.replace(/daഃ/g, "daḥ");   
        /**dha*/
        ch = ch.replace(/ധ്/g, "dh");
        ch = ch.replace(/ധ/g, "dha");
        ch = ch.replace(/dhaാ/g, "dhā");
        ch = ch.replace(/dhaി/g, "dhi");
        ch = ch.replace(/dhaീ/g, "dhī");
        ch = ch.replace(/dhaു/g, "dhu");
        ch = ch.replace(/dhaൂ/g, "dhū");
        ch = ch.replace(/dhaെ/g, "dhe");
        ch = ch.replace(/dhaേ/g, "dhē");
        ch = ch.replace(/dhaൊ/g, "dho");
        ch = ch.replace(/dhaോ/g, "dhō");
        ch = ch.replace(/dhaൈ/g, "dhai");
        ch = ch.replace(/dhaൗ/g, "dhau");
        ch = ch.replace(/dhaൃ/g, "dhr̥");
        ch = ch.replace(/dhaം/g, "dham");
        ch = ch.replace(/dhaഃ/g, "dhaḥ");   
        /**nja*/
        ch = ch.replace(/ന്/g, "n");
        ch = ch.replace(/ന/g, "na");
        ch = ch.replace(/naാ/g, "nā");
        ch = ch.replace(/naി/g, "ni");
        ch = ch.replace(/naീ/g, "nī");
        ch = ch.replace(/naു/g, "nu");
        ch = ch.replace(/naൂ/g, "nū");
        ch = ch.replace(/naെ/g, "ne");
        ch = ch.replace(/naേ/g, "nē");
        ch = ch.replace(/naൊ/g, "no");
        ch = ch.replace(/naോ/g, "nō");
        ch = ch.replace(/naൈ/g, "nai");
        ch = ch.replace(/naൗ/g, "nau");
        ch = ch.replace(/naൃ/g, "nr̥");
        ch = ch.replace(/naം/g, "nam");
        ch = ch.replace(/naഃ/g, "naḥ");   
        /**pa*/
        ch = ch.replace(/പ്/g, "p");
        ch = ch.replace(/പ/g, "pa");
        ch = ch.replace(/paാ/g, "pā");
        ch = ch.replace(/paി/g, "pi");
        ch = ch.replace(/paീ/g, "pī");
        ch = ch.replace(/paു/g, "pu");
        ch = ch.replace(/paൂ/g, "pū");
        ch = ch.replace(/paെ/g, "pe");
        ch = ch.replace(/paേ/g, "pē");
        ch = ch.replace(/paൊ/g, "po");
        ch = ch.replace(/paോ/g, "pō");
        ch = ch.replace(/paൈ/g, "pai");
        ch = ch.replace(/paൗ/g, "pau");
        ch = ch.replace(/paൃ/g, "pr̥");
        ch = ch.replace(/paം/g, "pam");
        ch = ch.replace(/paഃ/g, "paḥ");   
         /**pha*/
        ch = ch.replace(/ഫ്/g, "ph");
        ch = ch.replace(/ഫ/g, "pha");
        ch = ch.replace(/phaാ/g, "phā");
        ch = ch.replace(/phaി/g, "phi");
        ch = ch.replace(/phaീ/g, "phī");
        ch = ch.replace(/phaു/g, "phu");
        ch = ch.replace(/phaൂ/g, "phū");
        ch = ch.replace(/phaെ/g, "phe");
        ch = ch.replace(/phaേ/g, "phē");
        ch = ch.replace(/phaൊ/g, "pho");
        ch = ch.replace(/phaോ/g, "phō");
        ch = ch.replace(/phaൈ/g, "phai");
        ch = ch.replace(/phaൗ/g, "phau");
        ch = ch.replace(/phaൃ/g, "phr̥");
        ch = ch.replace(/phaം/g, "pham");
        ch = ch.replace(/phaഃ/g, "phaḥ");   
        /**ba*/
        ch = ch.replace(/ബ്/g, "b");
        ch = ch.replace(/ബ/g, "ba");
        ch = ch.replace(/baാ/g, "bā");
        ch = ch.replace(/baി/g, "bi");
        ch = ch.replace(/baീ/g, "bī");
        ch = ch.replace(/baു/g, "bu");
        ch = ch.replace(/baൂ/g, "bū");
        ch = ch.replace(/baെ/g, "be");   
        ch = ch.replace(/baേ/g, "bē");
        ch = ch.replace(/baൊ/g, "bo");
        ch = ch.replace(/baോ/g, "bō");
        ch = ch.replace(/baൈ/g, "bai");
        ch = ch.replace(/baൗ/g, "bau");
        ch = ch.replace(/baൃ/g, "br̥");
        ch = ch.replace(/baം/g, "bam");
        ch = ch.replace(/baഃ/g, "baḥ");   
        /**bha*/
        ch = ch.replace(/ഭ്/g, "b");
        ch = ch.replace(/ഭ/g, "ba");
        ch = ch.replace(/baാ/g, "bā");
        ch = ch.replace(/baി/g, "bi");
        ch = ch.replace(/baീ/g, "bī");
        ch = ch.replace(/baു/g, "bu");
        ch = ch.replace(/baൂ/g, "bū");
        ch = ch.replace(/baെ/g, "be");
        ch = ch.replace(/baേ/g, "bē");
        ch = ch.replace(/baൊ/g, "bo");
        ch = ch.replace(/baോ/g, "bō");
        ch = ch.replace(/baൈ/g, "bai");
        ch = ch.replace(/baൗ/g, "bau");
        ch = ch.replace(/baൃ/g, "br̥");
        ch = ch.replace(/baം/g, "bam");
        ch = ch.replace(/baഃ/g, "baḥ");   
        /**ma*/
        ch = ch.replace(/മ്/g, "m");
        ch = ch.replace(/മ/g, "ma");
        ch = ch.replace(/maാ/g, "mā");
        ch = ch.replace(/maി/g, "mi");
        ch = ch.replace(/maീ/g, "mī");
        ch = ch.replace(/maു/g, "mu");
        ch = ch.replace(/maൂ/g, "mū");
        ch = ch.replace(/maെ/g, "me");
        ch = ch.replace(/maേ/g, "mē");
        ch = ch.replace(/maൊ/g, "mo");
        ch = ch.replace(/maോ/g, "mō");
        ch = ch.replace(/maൈ/g, "mai");
        ch = ch.replace(/maൗ/g, "mau");
        ch = ch.replace(/maൃ/g, "mr̥");
        ch = ch.replace(/maം/g, "mam");
        ch = ch.replace(/maഃ/g, "maḥ");   
        /**ya*/
        ch = ch.replace(/യ്/g, "y");
        ch = ch.replace(/യ/g, "ya");
        ch = ch.replace(/yaാ/g, "yā");
        ch = ch.replace(/yaി/g, "yi");
        ch = ch.replace(/yaീ/g, "yī");
        ch = ch.replace(/yaു/g, "yu");
        ch = ch.replace(/yaൂ/g, "yū");
        ch = ch.replace(/yaെ/g, "ye");
        ch = ch.replace(/yaേ/g, "yē");
        ch = ch.replace(/yaൊ/g, "yo");
        ch = ch.replace(/yaോ/g, "yō");
        ch = ch.replace(/yaൈ/g, "yai");
        ch = ch.replace(/yaൗ/g, "yau");
        ch = ch.replace(/yaൃ/g, "yr̥");
        ch = ch.replace(/yaം/g, "yam");
        ch = ch.replace(/yaഃ/g, "yaḥ");   
        /**ra*/
        ch = ch.replace(/ര്/g, "r");
        ch = ch.replace(/ര/g, "ra");
        ch = ch.replace(/raാ/g, "rā");
        ch = ch.replace(/raി/g, "ri");
        ch = ch.replace(/raീ/g, "rī");
        ch = ch.replace(/raു/g, "ru");
        ch = ch.replace(/raൂ/g, "rū");
        ch = ch.replace(/raെ/g, "re");
        ch = ch.replace(/raേ/g, "rē");
        ch = ch.replace(/raൊ/g, "ro");
        ch = ch.replace(/raോ/g, "rō");
        ch = ch.replace(/raൈ/g, "rai");
        ch = ch.replace(/raൗ/g, "rau");
        ch = ch.replace(/raൃ/g, "rr̥");
        ch = ch.replace(/raം/g, "ram");
        ch = ch.replace(/raഃ/g, "raḥ");   
        /**la*/
        ch = ch.replace(/ല്/g, "l");
        ch = ch.replace(/ല/g, "la");
        ch = ch.replace(/laാ/g, "lā");
        ch = ch.replace(/laി/g, "li");
        ch = ch.replace(/laീ/g, "lī");
        ch = ch.replace(/laു/g, "lu");
        ch = ch.replace(/laൂ/g, "lū");
        ch = ch.replace(/laെ/g, "le");
        ch = ch.replace(/laേ/g, "lē");
        ch = ch.replace(/laൊ/g, "lo");
        ch = ch.replace(/laോ/g, "lō");
        ch = ch.replace(/laൈ/g, "lai");
        ch = ch.replace(/laൗ/g, "lau");
        ch = ch.replace(/laൃ/g, "lr̥");
        ch = ch.replace(/laം/g, "lam");
        ch = ch.replace(/laഃ/g, "laḥ");   
        /**La*/
        ch = ch.replace(/ള്/g, "ḷ");
        ch = ch.replace(/ള/g, "ḷa");
        ch = ch.replace(/ḷaാ/g, "ḷā");
        ch = ch.replace(/ḷaി/g, "ḷi");
        ch = ch.replace(/ḷaീ/g, "ḷī");
        ch = ch.replace(/ḷaു/g, "ḷu");
        ch = ch.replace(/ḷaൂ/g, "ḷū");
        ch = ch.replace(/ḷaെ/g, "ḷe");
        ch = ch.replace(/ḷaേ/g, "ḷē");
        ch = ch.replace(/ḷaൊ/g, "ḷo");
        ch = ch.replace(/ḷaോ/g, "ḷō");
        ch = ch.replace(/ḷaൈ/g, "ḷai");
        ch = ch.replace(/ḷaൗ/g, "ḷau");
        ch = ch.replace(/ḷaൃ/g, "ḷr̥");
        ch = ch.replace(/ḷaം/g, "ḷam");
        ch = ch.replace(/ḷaഃ/g, "ḷaḥ");  
         /**zha*/
        ch = ch.replace(/ഴ്/g, "ḻ");
        ch = ch.replace(/ഴ/g, "ḻa");
        ch = ch.replace(/ḻaാ/g, "ḻā");
        ch = ch.replace(/ḻaി/g, "ḻi");
        ch = ch.replace(/ḻaീ/g, "ḻī");
        ch = ch.replace(/ḻaു/g, "ḻu");
        ch = ch.replace(/ḻaൂ/g, "ḻū");
        ch = ch.replace(/ḻaെ/g, "ḻe");
        ch = ch.replace(/ḻaേ/g, "ḻē");
        ch = ch.replace(/ḻaൊ/g, "ḻo");
        ch = ch.replace(/ḻaോ/g, "ḻō");
        ch = ch.replace(/ḻaൈ/g, "ḻai");
        ch = ch.replace(/ḻaൗ/g, "ḻau");
        ch = ch.replace(/ḻaൃ/g, "ḻr̥");
        ch = ch.replace(/ḻaം/g, "ḻam");
        ch = ch.replace(/ḻaഃ/g, "ḻaḥ");  
      
        /**va*/
        ch = ch.replace(/വ്/g, "v");
        ch = ch.replace(/വ/g, "va");
        ch = ch.replace(/vaാ/g, "vā");
        ch = ch.replace(/vaി/g, "vi");
        ch = ch.replace(/vaീ/g, "vī");
        ch = ch.replace(/vaു/g, "vu");
        ch = ch.replace(/vaൂ/g, "vū");
        ch = ch.replace(/vaെ/g, "ve");
        ch = ch.replace(/vaേ/g, "vē");
        ch = ch.replace(/vaൊ/g, "vo");
        ch = ch.replace(/vaോ/g, "vō");
        ch = ch.replace(/vaൈ/g, "vai");
        ch = ch.replace(/vaൗ/g, "vau");
        ch = ch.replace(/vaൃ/g, "vr̥");
        ch = ch.replace(/vaം/g, "vam");
        ch = ch.replace(/vaഃ/g, "vaḥ");   
        /**sha*/
        ch = ch.replace(/ശ്/g, "ś");
        ch = ch.replace(/ശ/g, "śa");
        ch = ch.replace(/śaാ/g, "śā");
        ch = ch.replace(/śaി/g, "śi");
        ch = ch.replace(/śaീ/g, "śī");
        ch = ch.replace(/śaു/g, "śu");
        ch = ch.replace(/śaൂ/g, "śū");
        ch = ch.replace(/śaെ/g, "śe");
        ch = ch.replace(/śaേ/g, "śē");
        ch = ch.replace(/śaൊ/g, "śo");
        ch = ch.replace(/śaോ/g, "śō");
        ch = ch.replace(/śaൈ/g, "śai");
        ch = ch.replace(/śaൗ/g, "śau");
        ch = ch.replace(/śaൃ/g, "śr̥");
        ch = ch.replace(/śaം/g, "śam");
        ch = ch.replace(/śaഃ/g, "śaḥ");  
        /**Sha*/
        ch = ch.replace(/ഷ്/g, "ṣ");
        ch = ch.replace(/ഷ/g, "ṣa");
        ch = ch.replace(/ṣaാ/g, "ṣā");
        ch = ch.replace(/ṣaി/g, "ṣi");
        ch = ch.replace(/ṣaീ/g, "ṣī");
        ch = ch.replace(/ṣaു/g, "ṣu");
        ch = ch.replace(/ṣaൂ/g, "ṣū");
        ch = ch.replace(/ṣaെ/g, "ṣe");
        ch = ch.replace(/ṣaേ/g, "ṣē");
        ch = ch.replace(/ṣaൊ/g, "ṣo");
        ch = ch.replace(/ṣaോ/g, "ṣō");
        ch = ch.replace(/ṣaൈ/g, "ṣai");
        ch = ch.replace(/ṣaൗ/g, "ṣau");
        ch = ch.replace(/ṣaൃ/g, "ṣr̥");
        ch = ch.replace(/ṣaം/g, "ṣam");
        ch = ch.replace(/ṣaഃ/g, "ṣaḥ");    
        /**sa*/
        ch = ch.replace(/സ്/g, "s");
        ch = ch.replace(/സ/g, "sa");
        ch = ch.replace(/saാ/g, "sā");
        ch = ch.replace(/saി/g, "si");
        ch = ch.replace(/saീ/g, "sī");
        ch = ch.replace(/saു/g, "su");
        ch = ch.replace(/saൂ/g, "sū");
        ch = ch.replace(/saെ/g, "se");
        ch = ch.replace(/saേ/g, "sē");
        ch = ch.replace(/saൊ/g, "so");
        ch = ch.replace(/saോ/g, "sō");
        ch = ch.replace(/saൈ/g, "sai");
        ch = ch.replace(/saൗ/g, "sau");
        ch = ch.replace(/saൃ/g, "sr̥");
        ch = ch.replace(/saം/g, "sam");
        ch = ch.replace(/saഃ/g, "saḥ");  
        /**ha*/
        ch = ch.replace(/ഹ്/g, "h");
        ch = ch.replace(/ഹ/g, "ha");
        ch = ch.replace(/haാ/g, "hā");
        ch = ch.replace(/haി/g, "hi");
        ch = ch.replace(/haീ/g, "hī");
        ch = ch.replace(/haു/g, "hu");
        ch = ch.replace(/haൂ/g, "hū");
        ch = ch.replace(/haെ/g, "he");
        ch = ch.replace(/haേ/g, "hē");
        ch = ch.replace(/haൊ/g, "ho");
        ch = ch.replace(/haോ/g, "hō");
        ch = ch.replace(/haൈ/g, "hai");
        ch = ch.replace(/haൗ/g, "hau");
        ch = ch.replace(/haൃ/g, "hr̥");
        ch = ch.replace(/haം/g, "ham");
        ch = ch.replace(/haഃ/g, "haḥ");  
       /**tta*/
        ch = ch.replace(/റ്റ്/g, "ṯṯ");
        ch = ch.replace(/റ്റ/g, "ṯṯa");
        ch = ch.replace(/taാ/g, "ṯṯā");
        ch = ch.replace(/taി/g, "ṯṯi");
        ch = ch.replace(/taീ/g, "ṯṯī");
        ch = ch.replace(/taു/g, "ṯṯu");
        ch = ch.replace(/taൂ/g, "ṯṯū");
        ch = ch.replace(/taെ/g, "ṯṯe");
        ch = ch.replace(/taേ/g, "ṯṯē");
        ch = ch.replace(/taൊ/g, "ṯṯo");
        ch = ch.replace(/taോ/g, "ṯṯō");
        ch = ch.replace(/taൈ/g, "ṯṯai");
        ch = ch.replace(/taൗ/g, "ṯṯau");
        ch = ch.replace(/taൃ/g, "ṯṯr̥");
        ch = ch.replace(/taം/g, "ṯṯam");
        ch = ch.replace(/taഃ/g, "ṯṯaḥ");  
          /**Ra*/
          ch = ch.replace(/റ്/g, "ṟ");
          ch = ch.replace(/റ/g, "ṟa");
          ch = ch.replace(/ṟaാ/g, "ṟā");
          ch = ch.replace(/ṟaി/g, "ṟi");
          ch = ch.replace(/ṟaീ/g, "ṟī");
          ch = ch.replace(/ṟaു/g, "ṟu");
          ch = ch.replace(/ṟaൂ/g, "ṟū");
          ch = ch.replace(/ṟaെ/g, "ṟe");
          ch = ch.replace(/ṟaേ/g, "ṟē");
          ch = ch.replace(/ṟaൊ/g, "ṟo");
          ch = ch.replace(/ṟaോ/g, "ṟō");
          ch = ch.replace(/ṟaൈ/g, "ṟai");
          ch = ch.replace(/ṟaൗ/g, "ṟau");
          ch = ch.replace(/ṟaൃ/g, "ṟr̥");
          ch = ch.replace(/ṟaം/g, "ṟam");
          ch = ch.replace(/ṟaഃ/g, "ṟaḥ");  

    }
}