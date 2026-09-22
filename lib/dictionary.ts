import type { Locale } from "./i18n";

export const contact = {
  phone: "+964 782 554 2642",
  phoneHref: "tel:+9647825542642",
  email: "info@bawadikarbala.iq",
  careersEmail: "hr@etihad.iq",
  etihadHref: "https://www.etihad.iq",
  mapsHref: "https://maps.google.com/?q=Karbala+Strategic+Road+Iraq",
  mapsEmbed: "https://www.google.com/maps?q=Karbala%20Strategic%20Road%2C%20Iraq&output=embed",
};

/** A capacity figure. `value` is what gets set large; `label` finishes the sentence. */
type Figure = { value: string; label: string };
type Step = { title: string; figure?: Figure; body: string };

const ar = {
  meta: {
    title: "بوادي كربلاء — بيض التفقيس وصوص التسمين ولحم الدجاج",
    description:
      "شركة بوادي كربلاء للإنتاج الزراعي والحيواني، إحدى شركات مجموعة الاتحاد، تنتج بيض التفقيس وصوص التسمين ولحم الدجاج في كربلاء، العراق.",
  },
  nav: {
    home: "الرئيسية",
    about: "من نحن",
    products: "منتجاتنا",
    careers: "التوظيف",
    contact: "اتصل بنا",
    switchLang: "English",
    switchLangLabel: "Read the site in English",
    menu: "القائمة",
    close: "إغلاق",
    main: "القائمة الرئيسية",
    skip: "انتقل إلى المحتوى",
  },
  company: {
    name: "بوادي كربلاء",
    legal: "شركة بوادي كربلاء للإنتاج الزراعي والحيواني",
    address: "العراق، كربلاء، الخط الاستراتيجي",
    hours: "السبت إلى الخميس، من 7 صباحاً حتى 5 مساءً",
    tagline:
      "مشروع دواجن متكامل في كربلاء تملكه مجموعة الاتحاد، ينتج بيض التفقيس وصوص التسمين ولحم الدجاج وفق المواصفات العالمية.",
  },
  capacity: [
    { value: "210", label: "مليون بيضة تفقيس في السنة" },
    { value: "175", label: "مليون صوص تسمين في السنة" },
    { value: "9", label: "مزارع تربية، في كل منها 8 حظائر" },
    { value: "18", label: "مزرعة إنتاج، في كل منها 8 حظائر" },
  ] satisfies Figure[],
  lines: {
    parent: {
      name: "دجاج الأمهات",
      body: "قطعان أمهات تُربّى في مزارعنا لإنتاج بيض التفقيس، أول حلقة في سلسلة الدواجن.",
    },
    meat: {
      name: "لحم الدجاج",
      body: "دواجن صحية للسوق العراقية، مطابقة للمواصفات العالمية.",
    },
  },
  cycle: {
    title: "من قطيع الأمهات إلى لحم الدجاج",
    body: "كل مرحلة تغذّي المرحلة التي تليها. ندير الدورة كاملة في كربلاء بأحدث الماكنات من أبرز الشركات العالمية، وبنظام صحي متكامل يضمن جودة المنتج.",
    steps: [
      {
        title: "قطعان الأمهات",
        figure: { value: "27", label: "مزرعة" },
        body: "9 مزارع تربية و18 مزرعة إنتاج، في كل منها 8 حظائر.",
      },
      {
        title: "بيض التفقيس",
        figure: { value: "210,000,000", label: "بيضة في السنة" },
        body: "تضعها قطعان الأمهات لتبدأ منها دورة الإنتاج.",
      },
      {
        title: "التفقيس",
        body: "يُحضَن البيض بماكنات وتقنيات من أبرز الشركات العالمية المصنّعة.",
      },
      {
        title: "صوص التسمين",
        figure: { value: "175,000,000", label: "صوص في السنة" },
        body: "أفراخ لاحمة بصحة جيدة، جاهزة لمزارع التسمين.",
      },
      {
        title: "لحم الدجاج",
        body: "دواجن صحية للسوق المحلية، مطابقة للمواصفات العالمية.",
      },
    ] satisfies Step[],
  },
  home: {
    heroTitle: "دواجن عراقية، تبدأ من قطعان الأمهات.",
    heroBody:
      "تنتج بوادي كربلاء بيض التفقيس وصوص التسمين ولحم الدجاج في كربلاء. نحن إحدى شركات مجموعة الاتحاد، ونعمل على تزويد السوق العراقية بدواجن صحية مطابقة للمواصفات العالمية.",
    heroCta: "تعرّف على منتجاتنا",
    heroSecondary: "من نحن",
    capacityTitle: "الطاقة التصميمية",
    linesTitle: "خطّا إنتاج، ودورة واحدة",
    linesBody: "من البيضة الأولى حتى المنتج الذي يصل إلى السوق.",
    details: "التفاصيل",
    etihadTitle: "إحدى شركات مجموعة الاتحاد",
    etihadBody:
      "أُطلقت بوادي كربلاء مشروعاً مملوكاً لمجموعة الاتحاد، لدعم الاقتصاد العراقي وخفض أسعار الغذاء اليومي وخلق فرص عمل محلية.",
    etihadCta: "قصتنا",
  },
  about: {
    title: "من نحن",
    intro: "بوادي كربلاء للإنتاج الزراعي والحيواني، مشروع دواجن متكامل في كربلاء تملكه مجموعة الاتحاد.",
    storyTitle: "لماذا أُسّست بوادي كربلاء",
    story: [
      "أُطلقت بوادي كربلاء مشروعاً مملوكاً لمجموعة الاتحاد، لدعم اقتصاد العراق وتزويد السوق المحلية بمنتجات دواجن صحية مطابقة للمواصفات العالمية. ومن خلال النهوض بالثروة الحيوانية في العراق وإتاحة منتجاتها للسكان المحليين، نسعى إلى المساعدة في خفض أسعار الأغذية الاستهلاكية اليومية.",
      "ونعمل على خلق وظائف جديدة للسكان المحليين، بأفضل المؤهلات والخبرات في مجالات التشغيل والصيانة والتقنية والمالية والموارد البشرية والصحة والسلامة والبيئة. ونهدف إلى توفير جميع البنى التحتية والأنظمة واللوائح والإجراءات اللازمة في الوقت المناسب وبطريقة آمنة، لضمان انتقال سلس وناجح إلى مرحلة التشغيل.",
    ],
    missionTitle: "مهمتنا",
    mission:
      "لشركتنا دور ريادي وأساسي في السوق العراقية. نلتزم بالتحسينات البيئية التي تعزّز مستقبلاً مستداماً وتؤدي إلى تحسينات اجتماعية واقتصادية لمجتمعنا، ونسعى لأن نكون الخيار الأول للمستهلك العراقي.",
    visionTitle: "رؤيتنا",
    vision:
      "مشروع ضخم جديد لإنتاج بيض الأمهات بطاقة تصميمية تبلغ 210 ملايين بيضة و175 مليون صوص تسمين في السنة، عبر 9 مزارع تربية و18 مزرعة إنتاج، في كل منها 8 حظائر.",
    valuesTitle: "قيمنا",
    valuesBody: "قيمنا هي أساسنا ومرتكزنا.",
    values: [
      {
        title: "جودة لعملائنا",
        body: "نأخذ على عاتقنا خدمة عملائنا بجودة عالية، ونقدّم للمستهلك العراقي منتجات من أفضل المصادر في جميع أنحاء العالم.",
      },
      {
        title: "احترام القانون",
        body: "نحترم القانون وندعم حقوق الإنسان العالمية، ونساعد في النهوض بالاقتصاد العراقي.",
      },
      {
        title: "حماية البيئة",
        body: "نلتزم بالتعليمات البيئية للتعامل مع فضلات مشروع الدواجن، ونعتمد نظاماً حديثاً ومتكاملاً للتخلّص منها يحافظ على بيئة نقية وعلى سلامة الدواجن.",
      },
      {
        title: "المجتمع المحلي",
        body: "نحافظ على علاقات وثيقة مع المجتمع المحلي، ونجدّد يوماً بعد يوم الدعم الاجتماعي الذي قدّمه مؤسسونا منذ البداية.",
      },
    ],
    qualityTitle: "التقنية والجودة",
    quality:
      "تعاقدت بوادي كربلاء مع أبرز الشركات العالمية المصنّعة لتوفير أحدث الماكنات والتقنيات، وأنشأت نظاماً صحياً متكاملاً لضمان جودة المنتجات.",
    etihadTitle: "مجموعة الاتحاد",
    etihad:
      "بوادي كربلاء مملوكة لمجموعة الاتحاد. والشركة الأم، الاتحاد للصناعات الغذائية المحدودة، معروفة بجودة منتجاتها من الزيوت والسكر والتزامها بالإرشادات الصحية.",
    etihadCta: "زُر موقع مجموعة الاتحاد",
  },
  products: {
    title: "منتجاتنا",
    intro: "خطّا إنتاج من مشروع واحد متكامل في كربلاء: دجاج الأمهات ولحم الدجاج.",
    parent: {
      lead: "قطعان الأمهات هي بداية كل شيء. تضع بيض التفقيس الذي يُحضَن لينتج صوص التسمين، ومنه يبدأ إنتاج لحم الدجاج.",
      body: "نربّي قطعان الأمهات في مزارع تربية وإنتاج مجهّزة بأحدث الماكنات من أبرز الشركات العالمية، ونتابع صحتها بنظام صحي متكامل.",
      facts: [
        { value: "210 مليون", label: "بيضة تفقيس في السنة" },
        { value: "9 مزارع تربية", label: "في كل منها 8 حظائر" },
        { value: "18 مزرعة إنتاج", label: "في كل منها 8 حظائر" },
      ],
    },
    meat: {
      lead: "من صوص التسمين الذي ننتجه يأتي لحم الدجاج: دواجن صحية للسوق العراقية، مطابقة للمواصفات العالمية.",
      body: "هدفنا أن يصل إلى المستهلك العراقي منتج محلي عالي الجودة بسعر أقرب إلى متناوله، مع نظام صحي متكامل يضمن جودة المنتج في كل مرحلة.",
      facts: [
        { value: "175 مليون", label: "صوص تسمين في السنة" },
        { value: "المواصفات العالمية", label: "معيار منتجاتنا" },
        { value: "نظام صحي متكامل", label: "لضمان الجودة" },
      ],
    },
    inquire: "استفسر عن التوريد",
  },
  careers: {
    title: "التوظيف",
    intro: "شكراً لاهتمامكم بالانضمام إلى شركتنا. يرجى إرسال سيرتكم الذاتية إلى البريد الإلكتروني التالي.",
    send: "أرسل سيرتك الذاتية",
    areasTitle: "المجالات التي نعمل فيها",
    areasBody: "نخلق وظائف جديدة للسكان المحليين في مجالات متعددة، منها:",
    areas: ["التشغيل", "الصيانة", "التقنية", "المالية", "الموارد البشرية", "الصحة والسلامة والبيئة"],
  },
  contactPage: {
    title: "اتصل بنا",
    intro: "لأي استفسار عن منتجاتنا أو التوريد أو الشراكات، يسعدنا تواصلكم معنا.",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    address: "العنوان",
    hours: "ساعات العمل",
    directions: "احصل على الاتجاهات",
    mapTitle: "موقع بوادي كربلاء على الخريطة",
  },
  footer: {
    rights: "جميع الحقوق محفوظة.",
    explore: "تصفّح",
    reach: "تواصل معنا",
    group: "إحدى شركات مجموعة الاتحاد",
  },
  notFound: {
    title: "لم نجد هذه الصفحة",
    body: "ربما نُقلت عند إعادة بناء الموقع. جرّب الصفحة الرئيسية أو تصفّح منتجاتنا.",
    home: "العودة إلى الرئيسية",
  },
};

export type Dictionary = typeof ar;

const en: Dictionary = {
  meta: {
    title: "Bawadi Karbala — hatching eggs, broiler chicks and chicken meat",
    description:
      "Bawadi Karbala for Agricultural and Animal Production, an Etihad Group company, produces hatching eggs, broiler chicks and chicken meat in Karbala, Iraq.",
  },
  nav: {
    home: "Home",
    about: "About",
    products: "Products",
    careers: "Careers",
    contact: "Contact",
    switchLang: "عربي",
    switchLangLabel: "اقرأ الموقع بالعربية",
    menu: "Menu",
    close: "Close",
    main: "Main",
    skip: "Skip to content",
  },
  company: {
    name: "Bawadi Karbala",
    legal: "Bawadi Karbala for Agricultural and Animal Production",
    address: "Strategic Road, Karbala, Iraq",
    hours: "Saturday to Thursday, 7 am to 5 pm",
    tagline:
      "An integrated poultry project in Karbala, owned by Etihad Group, producing hatching eggs, broiler chicks and chicken meat to international specifications.",
  },
  capacity: [
    { value: "210M", label: "hatching eggs a year" },
    { value: "175M", label: "broiler chicks a year" },
    { value: "9", label: "breeding farms, each with 8 houses" },
    { value: "18", label: "production farms, each with 8 houses" },
  ],
  lines: {
    parent: {
      name: "Parent-stock chickens",
      body: "Breeder flocks raised on our farms to lay hatching eggs, the first link in the poultry chain.",
    },
    meat: {
      name: "Chicken meat",
      body: "Healthy poultry for the Iraqi market, produced to international specifications.",
    },
  },
  cycle: {
    title: "From parent flock to chicken meat",
    body: "Each stage feeds the next. We run the whole cycle in Karbala, with the latest machinery from leading international manufacturers and an integrated health system that protects product quality.",
    steps: [
      {
        title: "Parent flocks",
        figure: { value: "27", label: "farms" },
        body: "9 breeding farms and 18 production farms, each with 8 houses.",
      },
      {
        title: "Hatching eggs",
        figure: { value: "210,000,000", label: "eggs a year" },
        body: "Laid by our parent flocks to start each production cycle.",
      },
      {
        title: "Hatchery",
        body: "Eggs are incubated with machinery and technology from leading international manufacturers.",
      },
      {
        title: "Broiler chicks",
        figure: { value: "175,000,000", label: "chicks a year" },
        body: "Healthy chicks, ready for broiler farms.",
      },
      {
        title: "Chicken meat",
        body: "Healthy poultry for the local market, to international specifications.",
      },
    ],
  },
  home: {
    heroTitle: "Iraqi poultry, starting with the parent flock.",
    heroBody:
      "Bawadi Karbala produces hatching eggs, broiler chicks and chicken meat in Karbala. We are an Etihad Group company, supplying the Iraqi market with healthy poultry that meets international specifications.",
    heroCta: "See our products",
    heroSecondary: "About us",
    capacityTitle: "Design capacity",
    linesTitle: "Two product lines, one cycle",
    linesBody: "From the first egg to the product that reaches the market.",
    details: "Details",
    etihadTitle: "An Etihad Group company",
    etihadBody:
      "Bawadi Karbala was launched as an Etihad Group project to support Iraq's economy, lower the price of everyday food and create local jobs.",
    etihadCta: "Our story",
  },
  about: {
    title: "About us",
    intro: "Bawadi Karbala for Agricultural and Animal Production is an integrated poultry project in Karbala, owned by Etihad Group.",
    storyTitle: "Why Bawadi Karbala exists",
    story: [
      "Bawadi Karbala was launched as an Etihad Group project to support Iraq's economy and supply the local market with healthy poultry that meets international specifications. By developing Iraq's livestock sector and producing for local people, we aim to help bring down the price of everyday food.",
      "We are creating new jobs for local people, with the best qualifications and experience in operations, maintenance, engineering, finance, human resources, and health, safety and environment. We aim to put all the infrastructure, systems, rules and procedures in place on time and safely, for a smooth move into full operation.",
    ],
    missionTitle: "Our mission",
    mission:
      "We play a leading role in the Iraqi market. We are committed to environmental improvements that support a sustainable future and bring social and economic gains to our community, and we aim to be the first choice for Iraqi consumers.",
    visionTitle: "Our vision",
    vision:
      "A major new project producing parent-stock eggs, with a design capacity of 210 million eggs and 175 million broiler chicks a year, across 9 breeding farms and 18 production farms, each with 8 houses.",
    valuesTitle: "Our values",
    valuesBody: "Our values are our foundation.",
    values: [
      {
        title: "Quality for our customers",
        body: "We serve our customers with high quality, bringing Iraqi consumers products from the best sources around the world.",
      },
      {
        title: "Respect for the law",
        body: "We respect the law, support universal human rights and help advance the Iraqi economy.",
      },
      {
        title: "Care for the environment",
        body: "We follow environmental rules for poultry waste, with a modern, integrated disposal system that keeps the environment clean and our flocks safe.",
      },
      {
        title: "Our local community",
        body: "We keep close ties with the local community, renewing every day the social support our founders gave from the start.",
      },
    ],
    qualityTitle: "Technology and quality",
    quality:
      "Bawadi Karbala has contracted leading international manufacturers to supply the latest machinery and technology, and has built an integrated health system to ensure product quality.",
    etihadTitle: "Etihad Group",
    etihad:
      "Bawadi Karbala is owned by Etihad Group. Our parent company, Etihad Food Industries, is known for the quality of its oils and sugar and its commitment to health guidelines.",
    etihadCta: "Visit Etihad Group",
  },
  products: {
    title: "Our products",
    intro: "Two product lines from one integrated operation in Karbala: parent-stock chickens and chicken meat.",
    parent: {
      lead: "Everything starts with the parent flock. It lays the hatching eggs that are incubated into broiler chicks, and those chicks become chicken meat.",
      body: "We raise our parent flocks on breeding and production farms equipped with the latest machinery from leading international manufacturers, and monitor their health through an integrated health system.",
      facts: [
        { value: "210M", label: "hatching eggs a year" },
        { value: "9 breeding farms", label: "each with 8 houses" },
        { value: "18 production farms", label: "each with 8 houses" },
      ],
    },
    meat: {
      lead: "Our broiler chicks become chicken meat: healthy poultry for the Iraqi market, produced to international specifications.",
      body: "Our aim is to give Iraqi consumers high-quality local poultry at a fairer price, with an integrated health system checking quality at every stage.",
      facts: [
        { value: "175M", label: "broiler chicks a year" },
        { value: "International", label: "specifications we produce to" },
        { value: "Integrated", label: "health system for quality" },
      ],
    },
    inquire: "Ask about supply",
  },
  careers: {
    title: "Careers",
    intro: "Thank you for your interest in joining our company. Please send your CV to the email address below.",
    send: "Send your CV",
    areasTitle: "Where we work",
    areasBody: "We are creating new jobs for local people across many fields, including:",
    areas: ["Operations", "Maintenance", "Engineering", "Finance", "Human resources", "Health, safety and environment"],
  },
  contactPage: {
    title: "Contact us",
    intro: "Questions about our products, supply or partnerships? We're happy to help.",
    phone: "Phone",
    email: "Email",
    address: "Address",
    hours: "Working hours",
    directions: "Get directions",
    mapTitle: "Bawadi Karbala on the map",
  },
  footer: {
    rights: "All rights reserved.",
    explore: "Explore",
    reach: "Get in touch",
    group: "An Etihad Group company",
  },
  notFound: {
    title: "We couldn't find that page",
    body: "It may have moved when we rebuilt the site. Try the home page or browse our products.",
    home: "Go to the home page",
  },
};

const dictionaries: Record<Locale, Dictionary> = { ar, en };

export const getDictionary = (lang: Locale) => dictionaries[lang];
