// ACCA F4 Comprehensive Quiz Question Bank
// 100+ Questions covering all chapters (Chapters 1-5 fully populated, more to follow)

const quizData = [
  // ============================================
  // CHAPTER 1 - Business, Political and Legal Systems
  // ============================================
  {
    id: 1,
    chapter: 1,
    question: { 
      en: "Which of the following is NOT a characteristic of common law systems?",
      bg: "Кое от следните НЕ е характеристика на системите на общото право?" 
    },
    options: [
      { en: "Based on judicial precedent", bg: "Основава се на съдебен прецедент" },
      { en: "Originated in England", bg: "Произхожда от Англия" },
      { en: "Based on comprehensive written codes", bg: "Основава се на обстойни писани кодекси" },
      { en: "Adversarial court system", bg: "Състезателна съдебна система" }
    ],
    correctIndex: 2,
    explanation: { 
      en: "Common law is based on precedent (case law), not comprehensive written codes. Civil law systems use comprehensive codes. Common law originated in England, uses adversarial system where parties present cases and judge acts as neutral referee.",
      bg: "Общото право се основава на прецедент, не на писани кодекси. Гражданското право използва кодекси." 
    }
  },
  {
    id: 2,
    chapter: 1,
    question: { 
      en: "In a criminal law case, what is the burden of proof?",
      bg: "В наказателно дело какъв е стандартът за доказване?" 
    },
    options: [
      { en: "Balance of probabilities", bg: "Баланс на вероятностите" },
      { en: "Beyond reasonable doubt", bg: "Извън разумно съмнение" },
      { en: "Clear and convincing evidence", bg: "Ясни и убедителни доказателства" },
      { en: "Preponderance of evidence", bg: "Превес на доказателствата" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "'Beyond reasonable doubt' is the criminal law standard—prosecution must prove guilt to very high standard. 'Balance of probabilities' (more likely than not) is civil law standard. This high standard protects accused from wrongful conviction.",
      bg: "'Извън разумно съмнение' е стандартът в наказателното право. 'Баланс на вероятностите' е за граждански дела." 
    }
  },
  {
    id: 3,
    chapter: 1,
    question: { 
      en: "What is the primary purpose of separation of powers?",
      bg: "Каква е основната цел на разделението на властите?" 
    },
    options: [
      { en: "To make government more efficient", bg: "Да направи правителството по-ефективно" },
      { en: "To prevent abuse of power", bg: "Да предотврати злоупотреба с власт" },
      { en: "To increase number of government jobs", bg: "Да увеличи броя на правителствените работни места" },
      { en: "To reduce government costs", bg: "Да намали правителствените разходи" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Separation of powers divides government into legislature, executive, and judiciary to prevent concentration of power in one body. This prevents tyranny and protects individual rights. Key principle of democratic governance established by Montesquieu.",
      bg: "Разделението на властите предотвратява концентрация на власт и тирания, защитава правата." 
    }
  },

  // ============================================
  // CHAPTER 2 - International Trade
  // ============================================
  {
    id: 4,
    chapter: 2,
    question: { 
      en: "Which organization represents 97% of international trade?",
      bg: "Коя организация представлява 97% от международната търговия?" 
    },
    options: [
      { en: "United Nations (UN)", bg: "Обединени нации (ООН)" },
      { en: "World Trade Organization (WTO)", bg: "Световна търговска организация (WTO)" },
      { en: "International Chamber of Commerce (ICC)", bg: "Международна търговска камара (ICC)" },
      { en: "UNCITRAL", bg: "UNCITRAL" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "WTO represents 97% of international trade. Formed 1995 from GATT, administers trade agreements, settles disputes through Dispute Settlement Body. UN is broader organization. ICC is private business organization. UNCITRAL harmonizes trade law but doesn't administer trade.",
      bg: "WTO представлява 97% от международната търговия, образувана 1995 от GATT." 
    }
  },
  {
    id: 5,
    chapter: 2,
    question: { 
      en: "What did the New York Convention 1958 establish?",
      bg: "Какво установи Нюйоркската конвенция 1958?" 
    },
    options: [
      { en: "International trade rules", bg: "Правила за международна търговия" },
      { en: "Recognition and enforcement of arbitration awards", bg: "Признаване и изпълнение на арбитражни решения" },
      { en: "Formation of WTO", bg: "Образуване на WTO" },
      { en: "Consumer protection laws", bg: "Закони за защита на потребителите" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "New York Convention 1958 ensures arbitration awards made in one state are recognized and enforced in 150+ other states. Makes international arbitration effective. Initiated by ICC. Critical for international dispute resolution—without it, arbitration would be ineffective across borders.",
      bg: "Нюйоркската конвенция осигурява признаване на арбитражни решения в 150+ държави." 
    }
  },
  {
    id: 6,
    chapter: 2,
    question: { 
      en: "UNCITRAL was established in which year?",
      bg: "UNCITRAL е създадена през коя година?" 
    },
    options: [
      { en: "1945", bg: "1945" },
      { en: "1958", bg: "1958" },
      { en: "1966", bg: "1966" },
      { en: "1995", bg: "1995" }
    ],
    correctIndex: 2,
    explanation: { 
      en: "UNCITRAL established 1966 by UN General Assembly to harmonize international trade law. Not 1945 (UN formed), not 1958 (New York Convention), not 1995 (WTO formed). Created CISG, Model Law on Arbitration, Model Law on Electronic Commerce.",
      bg: "UNCITRAL е създадена 1966 от Общото събрание на ООН." 
    }
  },

  // ============================================
  // CHAPTER 3 - ADR and Arbitration
  // ============================================
  {
    id: 7,
    chapter: 3,
    question: { 
      en: "An arbitration agreement must be:",
      bg: "Арбитражното споразумение трябва да бъде:" 
    },
    options: [
      { en: "Oral only", bg: "Само устно" },
      { en: "In writing or recorded", bg: "В писмена форма или записано" },
      { en: "Notarized", bg: "Нотариално заверено" },
      { en: "Registered with government", bg: "Регистрирано в правителството" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Article 7 UNCITRAL Model Law: Arbitration agreement must be IN WRITING or RECORDED. Writing includes agreement contained in document, exchange of letters/telegrams/telexes, electronic communications, reference to arbitration clause. Oral agreements not valid. No need for notarization or registration.",
      bg: "Член 7: Арбитражното споразумение трябва да е в писмена форма или записано." 
    }
  },
  {
    id: 8,
    chapter: 3,
    question: { 
      en: "How many arbitrators typically compose an arbitral tribunal?",
      bg: "Колко арбитри обикновено съставят арбитражен състав?" 
    },
    options: [
      { en: "1 or 3 (odd number)", bg: "1 или 3 (нечетно число)" },
      { en: "2 or 4 (even number)", bg: "2 или 4 (четно число)" },
      { en: "Always 5", bg: "Винаги 5" },
      { en: "Minimum 7", bg: "Минимум 7" }
    ],
    correctIndex: 0,
    explanation: { 
      en: "Arbitral tribunal must have ODD number of arbitrators (Article 10). Usually 1 (simpler, cheaper, faster) or 3 (complex cases, multiple perspectives). If parties don't agree on number, DEFAULT = 3. Odd number prevents tied votes. Even numbers problematic if arbitrators disagree equally.",
      bg: "Нечетно число (обикновено 1 или 3); по подразбиране 3 ако не се договорят." 
    }
  },
  {
    id: 9,
    chapter: 3,
    question: { 
      en: "Which of the following is NOT an advantage of arbitration over litigation?",
      bg: "Кое от следните НЕ е предимство на арбитража пред съдебното производство?" 
    },
    options: [
      { en: "Privacy and confidentiality", bg: "Поверителност" },
      { en: "Expert decision-makers", bg: "Експертни решаващи" },
      { en: "Creates binding precedent", bg: "Създава обвързващ прецедент" },
      { en: "Internationally enforceable", bg: "Международно изпълнимо" }
    ],
    correctIndex: 2,
    explanation: { 
      en: "Arbitration does NOT create binding precedent—awards apply only to specific case. This is ADVANTAGE (confidentiality) and DISADVANTAGE (no guidance for future). Litigation creates precedent in common law systems. Other options are genuine advantages of arbitration.",
      bg: "Арбитражът НЕ създава обвързващ прецедент—решенията се прилагат само за конкретния случай." 
    }
  },
  {
    id: 10,
    chapter: 3,
    question: { 
      en: "What is difference between mediation and arbitration?",
      bg: "Каква е разликата между медиация и арбитраж?" 
    },
    options: [
      { en: "Mediation is binding, arbitration is not", bg: "Медиацията е обвързваща, арбитражът не" },
      { en: "Arbitration is binding, mediation is not", bg: "Арбитражът е обвързващ, медиацията не" },
      { en: "Both are binding", bg: "И двете са обвързващи" },
      { en: "Neither is binding", bg: "Нито едно не е обвързващо" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Arbitration produces BINDING decision (arbitral award)—like court judgment. Mediation produces NON-BINDING agreement—mediator facilitates, parties reach own solution, not legally enforceable unless formalized in separate contract. Key distinction: arbitrator decides, mediator facilitates.",
      bg: "Арбитражът е обвързващ (решение), медиацията не е (улеснява споразумение)." 
    }
  },

  // ============================================
  // CHAPTER 4 - International Sale of Goods
  // ============================================
  {
    id: 11,
    chapter: 4,
    question: { 
      en: "CISG does NOT apply to which of the following?",
      bg: "CISG НЕ се прилага за кое от следните?" 
    },
    options: [
      { en: "Sale of machinery between companies in different states", bg: "Продажба на машини между компании в различни държави" },
      { en: "Sale of consumer goods for personal use", bg: "Продажба на потребителски стоки за лична употреба" },
      { en: "Sale of raw materials for manufacturing", bg: "Продажба на суровини за производство" },
      { en: "Sale of equipment for business use", bg: "Продажба на оборудване за бизнес употреба" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Article 2(a): CISG does NOT apply to goods bought for PERSONAL, FAMILY or HOUSEHOLD use (consumer goods)—UNLESS seller didn't know and had no reason to know such use. CISG is for COMMERCIAL sales between businesses, not B2C consumer transactions. Other options are commercial—CISG applies.",
      bg: "CISG НЕ се прилага за стоки купени за лична, семейна или домакинска употреба." 
    }
  },
  {
    id: 12,
    chapter: 4,
    question: { 
      en: "When does an offer become effective under CISG?",
      bg: "Кога офертата влиза в сила по CISG?" 
    },
    options: [
      { en: "When offeror dispatches it", bg: "Когато офериращият я изпрати" },
      { en: "When offer reaches the offeree", bg: "Когато офертата достигне оферирания" },
      { en: "When offeree reads it", bg: "Когато оферираният я прочете" },
      { en: "When offeree accepts it", bg: "Когато оферираният я приеме" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Article 15: Offer becomes effective when it REACHES the offeree (delivered to place of business or mailing address). NOT when dispatched, NOT when read, NOT when accepted. 'Reaches' = physical delivery. Can be withdrawn if withdrawal reaches before/at same time as offer.",
      bg: "Член 15: Офертата влиза в сила когато ДОСТИГНЕ оферирания." 
    }
  },
  {
    id: 13,
    chapter: 4,
    question: { 
      en: "Which of the following alterations would make a reply a counter-offer (rejection)?",
      bg: "Коя промяна би направила отговора насрещна оферта?" 
    },
    options: [
      { en: "Change in delivery address formatting", bg: "Промяна във форматирането на адреса за доставка" },
      { en: "Change in payment terms from 30 days to 60 days", bg: "Промяна в условията за плащане от 30 на 60 дни" },
      { en: "Adding a courtesy thank you phrase", bg: "Добавяне на учтива благодарствена фраза" },
      { en: "Correcting a typo in product name", bg: "Поправяне на печатна грешка в името на продукта" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Article 19: Material alterations = counter-offer. Payment terms are MATERIAL (listed in Article 19(3)). Reply with additional/different payment terms REJECTS original offer. Non-material alterations (typos, courtesy phrases, address formatting) may be accepted unless offeror objects. Material: price, payment, quality, quantity, delivery, liability, dispute settlement.",
      bg: "Член 19: Промени в условията за плащане са СЪЩЕСТВЕНИ—насрещна оферта." 
    }
  },
  {
    id: 14,
    chapter: 4,
    question: { 
      en: "Under the 'battle of forms', whose terms prevail?",
      bg: "При 'битката на формите' чии условия преобладават?" 
    },
    options: [
      { en: "The buyer's terms", bg: "Условията на купувача" },
      { en: "The seller's terms", bg: "Условията на продавача" },
      { en: "Terms in the last communication before performance", bg: "Условията в последната комуникация преди изпълнение" },
      { en: "Terms negotiated at contract formation", bg: "Условията договорени при сключване" }
    ],
    correctIndex: 2,
    explanation: { 
      en: "LAST SHOT RULE: When each party uses standard forms, terms in LAST communication before performance begins prevail (unless other party objects without delay). Not first shot, not buyer's, not seller's—whoever sends terms last (before performance) wins. Practical rule for common commercial situation.",
      bg: "ПРАВИЛО НА ПОСЛЕДНИЯ ИЗСТРЕЛ: Условията в последната комуникация преди изпълнение преобладават." 
    }
  },
  {
    id: 15,
    chapter: 4,
    question: { 
      en: "Can parties opt out of CISG?",
      bg: "Могат ли страните да се откажат от CISG?" 
    },
    options: [
      { en: "No, CISG is mandatory", bg: "Не, CISG е задължителна" },
      { en: "Yes, under Article 6", bg: "Да, по член 6" },
      { en: "Only with court approval", bg: "Само с одобрение на съда" },
      { en: "Only if both are in same state", bg: "Само ако и двете са в една държава" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Article 6 (freedom of contract): Parties may EXCLUDE application of CISG or DEROGATE FROM/VARY any provisions. Just include clause like 'CISG does not apply; English law governs.' Common practice. CISG applies by DEFAULT but parties have full freedom to opt out.",
      bg: "Член 6: Страните могат да изключат или променят CISG—свобода на договора." 
    }
  },

  // ============================================
  // CHAPTER 5 - Obligations and Risk
  // ============================================
  {
    id: 16,
    chapter: 5,
    question: { 
      en: "Where must seller deliver goods if contract involves carriage?",
      bg: "Къде трябва продавачът да достави стоките ако договорът включва превоз?" 
    },
    options: [
      { en: "To buyer's place of business", bg: "До мястото на дейност на купувача" },
      { en: "To the first carrier", bg: "До първия превозвач" },
      { en: "To final destination", bg: "До крайната дестинация" },
      { en: "To seller's place of business", bg: "До мястото на дейност на продавача" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Article 31(a): If contract involves CARRIAGE, seller delivers by handing goods to FIRST CARRIER for transmission to buyer. NOT final destination! Once handed to first carrier, delivery obligation fulfilled (but risk passes then too). Buyer arranges further transport unless otherwise agreed.",
      bg: "Член 31(a): Ако включва превоз—до ПЪРВИЯ превозвач, не крайната дестинация!" 
    }
  },
  {
    id: 17,
    chapter: 5,
    question: { 
      en: "Within what period must buyer give notice of non-conformity?",
      bg: "В какъв срок купувачът трябва да уведоми за несъответствие?" 
    },
    options: [
      { en: "Within 7 days of delivery", bg: "В рамките на 7 дни от доставката" },
      { en: "Within 30 days of delivery", bg: "В рамките на 30 дни от доставката" },
      { en: "Within reasonable time, max 2 years", bg: "В разумен срок, максимум 2 години" },
      { en: "No time limit", bg: "Няма срок" }
    ],
    correctIndex: 2,
    explanation: { 
      en: "Article 39: Notice within REASONABLE TIME of discovery. LOSES RIGHT if no notice within 2 YEARS of actual delivery (absolute cut-off). EXCEPTION: Seller KNEW or should have known of non-conformity—buyer keeps rights. 'Reasonable time' depends on circumstances (perishable goods = shorter, complex machinery = longer).",
      bg: "Член 39: Разумен срок, загубва право ако не уведоми в 2 ГОДИНИ; освен ако продавачът знаеше." 
    }
  },
  {
    id: 18,
    chapter: 5,
    question: { 
      en: "What constitutes a fundamental breach?",
      bg: "Какво представлява съществено нарушение?" 
    },
    options: [
      { en: "Any breach of contract", bg: "Всяко нарушение на договора" },
      { en: "Breach that substantially deprives party of what entitled to expect", bg: "Нарушение, което съществено лишава страната от очакваното" },
      { en: "Breach causing any financial loss", bg: "Нарушение причиняващо финансова загуба" },
      { en: "Breach of payment terms", bg: "Нарушение на условията за плащане" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Article 25: Fundamental breach = results in such DETRIMENT to other party as SUBSTANTIALLY to DEPRIVE them of what ENTITLED TO EXPECT under contract—UNLESS not foreseeable. More serious than ordinary breach. Allows avoidance of contract, substitute goods. Test: did it deprive of substantial expectation?",
      bg: "Член 25: Съществено нарушение = съществено лишава от очакваното по договора." 
    }
  },
  {
    id: 19,
    chapter: 5,
    question: { 
      en: "When does risk of loss pass if contract involves carriage?",
      bg: "Кога рискът преминава ако договорът включва превоз?" 
    },
    options: [
      { en: "When goods reach destination", bg: "Когато стоките достигнат дестинацията" },
      { en: "When goods handed to first carrier", bg: "Когато стоките са предадени на първия превозвач" },
      { en: "When payment is made", bg: "Когато плащането е направено" },
      { en: "When buyer examines goods", bg: "Когато купувачът прегледа стоките" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Article 67: If contract involves carriage, risk passes when goods HANDED TO FIRST CARRIER (not final destination!). Buyer bears risk during transit even though seller arranged transport. Once risk passes, buyer must pay even if goods destroyed. Unless seller in breach—risk passage may be delayed.",
      bg: "Член 67: Рискът преминава при предаване на ПЪРВИЯ превозвач, не дестинацията!" 
    }
  },
  {
    id: 20,
    chapter: 5,
    question: { 
      en: "What is anticipatory breach?",
      bg: "Какво е предварително нарушение?" 
    },
    options: [
      { en: "Breach that occurs before contract is formed", bg: "Нарушение преди образуване на договора" },
      { en: "Clear indication before performance due that party will commit fundamental breach", bg: "Ясна индикация преди изпълнение че страна ще извърши съществено нарушение" },
      { en: "Breach of preliminary agreement", bg: "Нарушение на предварително споразумение" },
      { en: "Breach during negotiation stage", bg: "Нарушение по време на преговори" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Article 72: If CLEAR before performance due that party will commit fundamental breach, other party may AVOID contract IN ADVANCE. Don't have to wait for actual breach. Must give reasonable notice unless party declared won't perform. Gives certainty and allows planning for alternative arrangements.",
      bg: "Член 72: Ако е ясно преди изпълнение че ще има съществено нарушение—може предварително да избегне." 
    }
  },

  // Continue with more questions from all chapters (will reach 100+ with Chapters 6-19)
  {
    id: 21,
    chapter: 1,
    question: { 
      en: "Which court is the highest in the UK?",
      bg: "Кой съд е най-висок във Великобритания?" 
    },
    options: [
      { en: "High Court", bg: "Висш съд" },
      { en: "Court of Appeal", bg: "Апелативен съд" },
      { en: "Supreme Court", bg: "Върховен съд" },
      { en: "Crown Court", bg: "Кралски съд" }
    ],
    correctIndex: 2,
    explanation: { 
      en: "Supreme Court is highest court in UK for cases with significant legal impact. Replaced House of Lords as final court of appeal in 2009. Below it: Court of Appeal (civil and criminal divisions), then High Court/Crown Court, then County Courts/Magistrates' Courts.",
      bg: "Върховният съд е най-висок във Великобритания." 
    }
  },
  {
    id: 22,
    chapter: 2,
    question: { 
      en: "What is the main achievement of UNCITRAL?",
      bg: "Какво е основното постижение на UNCITRAL?" 
    },
    options: [
      { en: "Formation of WTO", bg: "Образуване на WTO" },
      { en: "CISG and Model Law on Arbitration", bg: "CISG и Модел за арбитраж" },
      { en: "New York Convention", bg: "Нюйоркска конвенция" },
      { en: "Creation of ICC", bg: "Създаване на ICC" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "UNCITRAL's key achievements: UN Convention on Contracts for International Sale of Goods (CISG), Model Law on International Commercial Arbitration, Model Law on Electronic Commerce. These harmonize international trade law. WTO formed from GATT. New York Convention initiated by ICC. ICC formed by business leaders.",
      bg: "UNCITRAL създаде CISG и Модел за арбитраж—хармонизира търговското право." 
    }
  },
  {
    id: 23,
    chapter: 3,
    question: { 
      en: "Arbitral award can be set aside if:",
      bg: "Арбитражно решение може да се отмени ако:" 
    },
    options: [
      { en: "Party simply disagrees with decision", bg: "Страната не е съгласна с решението" },
      { en: "Award is contrary to public policy", bg: "Решението противоречи на публичния ред" },
      { en: "Arbitrator made factual error", bg: "Арбитърът направи фактическа грешка" },
      { en: "Party wants different result", bg: "Страната иска различен резултат" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Article 34: Very LIMITED grounds to set aside—includes 'award contrary to PUBLIC POLICY of that country.' Not: simple disagreement, factual error (arbitrator decides facts), wanting different result. Other grounds: procedural irregularity, beyond scope, agreement invalid. Strong finality to arbitral awards.",
      bg: "Член 34: Много ОГРАНИЧЕНИ основания—включва противоречие на публичния ред." 
    }
  },
  {
    id: 24,
    chapter: 4,
    question: { 
      en: "Does silence constitute acceptance under CISG?",
      bg: "Представлява ли мълчанието приемане по CISG?" 
    },
    options: [
      { en: "Yes, always", bg: "Да, винаги" },
      { en: "No, silence does not constitute acceptance", bg: "Не, мълчанието не представлява приемане" },
      { en: "Yes, if parties have prior course of dealing", bg: "Да, ако страните са имали предишни сделки" },
      { en: "Yes, after 30 days", bg: "Да, след 30 дни" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Article 18(1): Silence or inactivity does NOT in itself amount to acceptance. Must be active indication of assent (statement or conduct). Different from some national laws where silence after prior dealings may = acceptance. CISG requires positive act. Protects parties from being bound unintentionally.",
      bg: "Член 18(1): Мълчанието или бездействието НЕ представлява приемане само по себе си." 
    }
  },
  {
    id: 25,
    chapter: 5,
    question: { 
      en: "If buyer rightfully avoids contract, must they return the goods?",
      bg: "Ако купувачът правомерно избегне договора, трябва ли да върне стоките?" 
    },
    options: [
      { en: "No, buyer keeps goods as compensation", bg: "Не, купувачът запазва стоките като компенсация" },
      { en: "Yes, in substantially the same condition", bg: "Да, в същественоto същото състояние" },
      { en: "Yes, but can deduct damages first", bg: "Да, но може да приспадне обезщетения" },
      { en: "Only if seller requests return", bg: "Само ако продавачът поиска връщане" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Article 82: Buyer loses right to avoid contract or require substitute goods if cannot make restitution of goods in SUBSTANTIALLY SAME CONDITION. Exception: if impossibility not due to buyer's act/omission, goods/part deteriorated due to examination (Article 38), or sold/consumed in normal use before discovered non-conformity.",
      bg: "Член 82: Купувачът губи право да избегне ако не може да върне в същественото същото състояние." 
    }
  },

  // ============================================
  // More Questions from Chapters 1-5
  // ============================================
  {
    id: 26,
    chapter: 1,
    question: { 
      en: "In civil law proceedings, who initiates the action?",
      bg: "В гражданско производство кой инициира делото?" 
    },
    options: [
      { en: "The state", bg: "Държавата" },
      { en: "The police", bg: "Полицията" },
      { en: "The claimant (injured party)", bg: "Ищецът (увредената страна)" },
      { en: "The prosecutor", bg: "Прокурорът" }
    ],
    correctIndex: 2,
    explanation: { 
      en: "Civil law: CLAIMANT (injured party) sues DEFENDANT. Private dispute between individuals/organizations. Claimant must prove case on balance of probabilities. Contrast criminal: STATE prosecutes accused, beyond reasonable doubt. Civil seeks compensation; criminal seeks punishment.",
      bg: "В гражданско дело: ИЩЕЦЪТ съди ОТВЕТНИКА. В наказателно: ДЪРЖАВАТА преследва обвиняемия." 
    }
  },
  {
    id: 27,
    chapter: 2,
    question: { 
      en: "How many member states does WTO have approximately?",
      bg: "Колко държави членки има WTO приблизително?" 
    },
    options: [
      { en: "50", bg: "50" },
      { en: "100", bg: "100" },
      { en: "164", bg: "164" },
      { en: "200", bg: "200" }
    ],
    correctIndex: 2,
    explanation: { 
      en: "WTO has 164 member states representing 97% of international trade. Successor to GATT (formed 1995). Administers trade agreements covering goods, services, intellectual property. Dispute Settlement Body resolves trade quarrels. Helps developing countries. Reviews national trade policies.",
      bg: "WTO има 164 държави членки, представляващи 97% от международната търговия." 
    }
  },

  // ============================================
  // CHAPTER 6 - Transportation and Payment
  // ============================================
  {
    id: 28,
    chapter: 6,
    question: { 
      en: "Which of the following is NOT a function of a bill of lading?",
      bg: "Кое от следните НЕ е функция на коносамента?" 
    },
    options: [
      { en: "Receipt for goods", bg: "Разписка за стоки" },
      { en: "Evidence of contract of carriage", bg: "Доказателство за договор за превоз" },
      { en: "Document of title", bg: "Документ за собственост" },
      { en: "Insurance policy", bg: "Застрахователна полица" }
    ],
    correctIndex: 3,
    explanation: { 
      en: "Bill of lading has THREE functions: (1) Receipt, (2) Evidence of contract of carriage, (3) Document of title (if negotiable). It is NOT an insurance policy—insurance is separate document. Bill of lading evidences goods shipped and risk transferred.",
      bg: "Коносаментът има три функции: разписка, доказателство, документ за собственост. НЕ е застрахователна полица." 
    }
  },
  {
    id: 29,
    chapter: 6,
    question: { 
      en: "All airway bills are:",
      bg: "Всички въздушни коносаменти са:" 
    },
    options: [
      { en: "Negotiable", bg: "Преносими" },
      { en: "Non-negotiable", bg: "Непреносими" },
      { en: "Sometimes negotiable", bg: "Понякога преносими" },
      { en: "Transferable", bg: "Прехвърляеми" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "ALL airway bills are NON-NEGOTIABLE. They name specific recipient; carrier must deliver to that named party. Cannot be transferred like ocean bills of lading. This is standard for air transport. Negotiable bills only for sea transport (ocean bills).",
      bg: "ВСИЧКИ въздушни коносаменти са НЕПРЕНОСИМИ—наименован получател." 
    }
  },
  {
    id: 30,
    chapter: 6,
    question: { 
      en: "What is most secure payment method for international sales?",
      bg: "Кой е най-сигурният начин на плащане за международни продажби?" 
    },
    options: [
      { en: "Cash in advance", bg: "Пари предварително" },
      { en: "Letter of credit", bg: "Акредитив" },
      { en: "Open account", bg: "Отворена сметка" },
      { en: "Bill of exchange", bg: "Запис на заповед" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Letter of credit is MOST SECURE for international sales. Bank guarantees payment if seller presents compliant documents. Protects seller (assured payment) AND buyer (assured goods shipped per documents). Documentary and irrevocable letters of credit standard in international trade.",
      bg: "Акредитив е НАЙ-СИГУРЕН—банка гарантира плащане при документи." 
    }
  },

  // ============================================
  // CHAPTER 7 - Agency Law
  // ============================================
  {
    id: 31,
    chapter: 7,
    question: { 
      en: "Which case established apparent authority by holding out?",
      bg: "Кой случай установи привидно пълномощие чрез холдинг аут?" 
    },
    options: [
      { en: "Salomon v Salomon", bg: "Salomon v Salomon" },
      { en: "Freeman & Lockyer v Buckhurst Park", bg: "Freeman & Lockyer v Buckhurst Park" },
      { en: "Erlanger v New Sombrero Phosphate", bg: "Erlanger v New Sombrero Phosphate" },
      { en: "Adams v Cape Industries", bg: "Adams v Cape Industries" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Freeman & Lockyer v Buckhurst Park (1964): Director acted as MD without appointment; board acquiesced; company bound by apparent authority. Established four conditions for holding out: (1) Representation of authority, (2) By person with actual authority, (3) Third party relied, (4) Articles don't prevent.",
      bg: "Freeman & Lockyer: директор действа като МД; компанията обвързана чрез привидно пълномощие." 
    }
  },
  {
    id: 32,
    chapter: 7,
    question: { 
      en: "Can principal ratify agent's unauthorized act?",
      bg: "Може ли принципалът да ратифицира неупълномощено действие на агента?" 
    },
    options: [
      { en: "No, never", bg: "Не, никога" },
      { en: "Yes, if principal existed and had capacity at time", bg: "Да, ако принципалът съществуваше и имаше право" },
      { en: "Only with court approval", bg: "Само с одобрение на съда" },
      { en: "Only if in writing", bg: "Само ако е писмено" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "YES, principal can ratify creating agency retrospectively. Requirements: (1) Principal EXISTED at time, (2) Principal had CAPACITY, (3) Within reasonable time, (4) Not illegal, (5) Aware of material facts. BUT company CANNOT ratify pre-incorporation contracts (didn't exist). Ratification makes it as if had authority from start.",
      bg: "ДА—ако принципалът съществуваше и имаше правоспособност; ретроактивно." 
    }
  },

  // ============================================
  // CHAPTER 8 - Partnerships
  // ============================================
  {
    id: 33,
    chapter: 8,
    question: { 
      en: "Is partnership a separate legal person?",
      bg: "Съдружието е ли отделно юридическо лице?" 
    },
    options: [
      { en: "Yes, always", bg: "Да, винаги" },
      { en: "No, it's just a relation between persons", bg: "Не, само отношение между лица" },
      { en: "Only if registered", bg: "Само ако е регистрирано" },
      { en: "Only LLPs are separate persons", bg: "Само LLP са отделни лица" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Traditional partnership (PA 1890) is NOT separate legal person—just 'relation between persons.' Partners ARE the business. Partner debts = partnership debts. BUT LLPs (Limited Liability Partnerships) ARE separate legal persons. Key distinction: traditional partnership no separate personality; LLP has separate personality.",
      bg: "Традиционно съдружие НЕ е отделна личност—само отношение. LLP Е отделна личност." 
    }
  },
  {
    id: 34,
    chapter: 8,
    question: { 
      en: "How many partners minimum required for partnership?",
      bg: "Колко минимум съдружници се изискват?" 
    },
    options: [
      { en: "1", bg: "1" },
      { en: "2", bg: "2" },
      { en: "3", bg: "3" },
      { en: "5", bg: "5" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Minimum 2 partners required (definition: 'relation between PERSONS'—plural). If reduced to 1 (e.g., other dies), no longer partnership—becomes sole trader. No maximum (but >20 partners may require incorporation as LLP or company in some jurisdictions). 'Person' includes individuals AND corporations.",
      bg: "Минимум 2 съдружници; ако стане 1—вече не е съдружие." 
    }
  },
  {
    id: 35,
    chapter: 8,
    question: { 
      en: "Partners are liable for partnership debts:",
      bg: "Съдружниците отговарят за дълговете:" 
    },
    options: [
      { en: "Up to amount of capital contributed", bg: "До размера на вложения капитал" },
      { en: "Unlimited personal liability for ALL debts", bg: "Неограничена лична отговорност за ВСИЧКИ дългове" },
      { en: "Not liable at all", bg: "Не отговарят" },
      { en: "Only for debts they personally created", bg: "Само за дългове които лично са създали" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Each partner has UNLIMITED PERSONAL LIABILITY for ALL partnership debts (even debts created by other partners). Personal assets at risk. This is MAJOR risk of partnership form. Contrast: company members have LIMITED liability. LLPs combine partnership with limited liability.",
      bg: "Всеки съдружник има НЕОГРАНИЧЕНА ЛИЧНА ОТГОВОРНОСТ за ВСИЧКИ дългове." 
    }
  },

  // ============================================
  // CHAPTER 9 - Legal Personality
  // ============================================
  {
    id: 36,
    chapter: 9,
    question: { 
      en: "In Salomon v Salomon, the House of Lords held:",
      bg: "В Salomon v Salomon, Камарата на лордовете реши:" 
    },
    options: [
      { en: "Salomon personally liable for company debts", bg: "Salomon лично отговорен за дългове на компанията" },
      { en: "Company separate person from Salomon", bg: "Компанията отделна личност от Salomon" },
      { en: "Company and Salomon are the same", bg: "Компанията и Salomon са едно и също" },
      { en: "Veil should be lifted", bg: "Булото трябва да се отмята" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Company is SEPARATE PERSON from Mr. Salomon (even though owned 20,001/20,007 shares). Company's debts are COMPANY'S not Salomon's personal debts. Established fundamental principle of separate legal personality. Most important case in company law. Creditors could not pursue Salomon personally.",
      bg: "Компанията е ОТДЕЛНА ЛИЧНОСТ от Salomon; дълговете са на компанията." 
    }
  },
  {
    id: 37,
    chapter: 9,
    question: { 
      en: "What is minimum share capital for public company (plc)?",
      bg: "Какъв е минималният капитал за публична компания (plc)?" 
    },
    options: [
      { en: "No minimum", bg: "Няма минимум" },
      { en: "£10,000", bg: "£10,000" },
      { en: "£50,000", bg: "£50,000" },
      { en: "£100,000", bg: "£100,000" }
    ],
    correctIndex: 2,
    explanation: { 
      en: "Public company (plc) minimum £50,000 share capital (£12,500 must be paid up). Private company has NO minimum capital. This higher capital requirement for public companies reflects their ability to raise funds from public and stricter regulations. Companies Act 2006 requirement.",
      bg: "Публична компания минимум £50,000 (£12,500 платен капитал). Частна няма минимум." 
    }
  },
  {
    id: 38,
    chapter: 9,
    question: { 
      en: "Lifting the veil of incorporation means:",
      bg: "Отмятане на булото означава:" 
    },
    options: [
      { en: "Company loses separate personality automatically", bg: "Компанията губи отделна личност автоматично" },
      { en: "Court ignores separate personality and holds members/directors personally liable", bg: "Съдът игнорира отделната личност и държи членове/директори лично отговорни" },
      { en: "Company must pay higher taxes", bg: "Компанията трябва да плати по-високи данъци" },
      { en: "Company can sue members", bg: "Компанията може да съди членовете" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "EXCEPTIONAL circumstances where courts ignore separate personality and hold members/directors PERSONALLY LIABLE. Grounds: fraud, agency, groups (facade), concealing facts. NORMALLY separate personality respected. Lifting veil is rare exception to fundamental Salomon principle. Adams v Cape: not lifted just because subsidiary.",
      bg: "Изключителни обстоятелства където се игнорира отделната личност и се държат лично отговорни." 
    }
  },

  // ============================================
  // CHAPTER 10 - Company Formation
  // ============================================
  {
    id: 39,
    chapter: 10,
    question: { 
      en: "Can a company ratify a pre-incorporation contract?",
      bg: "Може ли компанията да ратифицира предучредителен договор?" 
    },
    options: [
      { en: "Yes, after incorporation", bg: "Да, след учредяване" },
      { en: "No, because company didn't exist when contract made", bg: "Не, защото компанията не е съществувала" },
      { en: "Yes, with Registrar approval", bg: "Да, с одобрение на Регистъра" },
      { en: "Yes, if all parties agree", bg: "Да, ако всички страни се съгласят" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "NO—company CANNOT RATIFY because company DIDN'T EXIST when contract made (cannot be party to contract before existing). Person making contract PERSONALLY LIABLE (s.51 CA 2006). Solution: NOVATION (new contract after incorporation). Critical issue in company formation—must wait until incorporated before company can contract.",
      bg: "НЕ—компанията не може да ратифицира защото не е съществувала; лицето лично отговорно." 
    }
  },
  {
    id: 40,
    chapter: 10,
    question: { 
      en: "What document proves a company exists?",
      bg: "Кой документ доказва че компанията съществува?" 
    },
    options: [
      { en: "Partnership agreement", bg: "Съдружно споразумение" },
      { en: "Certificate of incorporation", bg: "Сертификат за учредяване" },
      { en: "Articles of association", bg: "Устав" },
      { en: "Memorandum of association", bg: "Учредителен акт" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Certificate of incorporation issued by Registrar is CONCLUSIVE EVIDENCE company exists from date stated. Company validly registered; requirements complied with. Registrar's decision CANNOT BE CHALLENGED. Company has legal personality from certificate date. Like birth certificate for company.",
      bg: "Сертификатът за учредяване е окончателно доказателство че компанията съществува." 
    }
  },
  {
    id: 41,
    chapter: 10,
    question: { 
      en: "Promoter's secret profit from forming company:",
      bg: "Тайна печалба на промоутъра от образуване на компания:" 
    },
    options: [
      { en: "Always permitted", bg: "Винаги позволена" },
      { en: "Breach of fiduciary duty unless disclosed", bg: "Нарушение на фидуциарно задължение освен ако разкрита" },
      { en: "Never permitted", bg: "Никога не е позволена" },
      { en: "Only permitted if small amount", bg: "Позволена само ако малка сума" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "BREACH of fiduciary duty unless DISCLOSED to independent board or all members. Promoter can profit if: (1) Acquired property BEFORE promoting, (2) Discloses profit to company. Without disclosure = breach. Remedy: rescission (Erlanger case) or recover profit. Similar to agent's duty to account for benefits.",
      bg: "НАРУШЕНИЕ освен ако РАЗКРИЕ на независим борд или всички членове." 
    }
  },

  // ============================================
  // CHAPTER 11 - Constitution
  // ============================================
  {
    id: 42,
    chapter: 11,
    question: { 
      en: "How can articles of association be altered?",
      bg: "Как може уставът да се променя?" 
    },
    options: [
      { en: "By ordinary resolution", bg: "С обикновено решение" },
      { en: "By special resolution (75%)", bg: "Със специално решение (75%)" },
      { en: "By directors' decision", bg: "С решение на директорите" },
      { en: "Cannot be altered", bg: "Не може да се променя" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Articles altered by SPECIAL RESOLUTION (75% majority). Members have ultimate control over company's internal governance. Must file with Registrar within 15 days. Cannot alter to increase member's liability without their consent. Subject to CA 2006 restrictions.",
      bg: "Промяна със СПЕЦИАЛНО РЕШЕНИЕ (75%). Подава се в Регистъра в 15 дни." 
    }
  },
  {
    id: 43,
    chapter: 11,
    question: { 
      en: "Under s.39 CA 2006, company capacity is:",
      bg: "По чл.39 от CA 2006, правоспособността на компанията е:" 
    },
    options: [
      { en: "Limited by articles", bg: "Ограничена от устава" },
      { en: "Unlimited (unrestricted objects)", bg: "Неограничена (неограничени цели)" },
      { en: "Limited by memorandum", bg: "Ограничена от учредителния акт" },
      { en: "Requires court approval", bg: "Изисква одобрение на съда" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "S.39: Company capacity NOT limited by constitution. Companies have UNRESTRICTED objects unless articles specifically restrict. Third parties protected—transaction valid even if beyond objects/powers. Ultra vires doctrine abolished for third parties. Major CA 2006 reform—simplified company law.",
      bg: "Чл.39: правоспособност НЕ ограничена от устройството; неограничени цели." 
    }
  },

  // ============================================
  // CHAPTER 12 - Share Capital
  // ============================================
  {
    id: 44,
    chapter: 12,
    question: { 
      en: "What is nominal value of a share?",
      bg: "Какво е номинална стойност на акция?" 
    },
    options: [
      { en: "Market price", bg: "Пазарна цена" },
      { en: "Face value stated in articles", bg: "Номинална стойност посочена в устава" },
      { en: "Amount paid for share", bg: "Сума платена за акция" },
      { en: "Dividend per share", bg: "Дивидент на акция" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Nominal value = FACE VALUE stated in articles (e.g., '£1 ordinary share'). Different from: market value (what share trades for), issue price (what paid on allotment), amount paid (if partly paid). Cannot issue below nominal—breach of capital maintenance. Nominal value is base price.",
      bg: "Номинална стойност = ЛИЦЕВА стойност посочена в устава; различна от пазарна." 
    }
  },
  {
    id: 45,
    chapter: 12,
    question: { 
      en: "Are preference dividends cumulative by default?",
      bg: "Привилегированите дивиденти кумулативни ли са по подразбиране?" 
    },
    options: [
      { en: "No, non-cumulative unless stated", bg: "Не, некумулативни освен ако не е посочено" },
      { en: "Yes, cumulative unless stated non-cumulative", bg: "Да, кумулативни освен ако е посочено некумулативни" },
      { en: "Depends on articles", bg: "Зависи от устава" },
      { en: "Never cumulative", bg: "Никога кумулативни" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "YES—preference shares deemed CUMULATIVE unless stated 'non-cumulative.' If 6% not paid Year 1, arrears carried forward. Year 2 entitled to 12% before ordinary. BUT arrears lost if company goes into liquidation (unless declared or articles provide). Default = cumulative protects preference shareholders.",
      bg: "ДА—кумулативни освен ако е посочено 'некумулативни'; недоимъци пренесени." 
    }
  },

  // ============================================
  // CHAPTER 13 - Loan Capital
  // ============================================
  {
    id: 46,
    chapter: 13,
    question: { 
      en: "Within how many days must charge be registered with Registrar?",
      bg: "В колко дни тежестта трябва да се регистрира?" 
    },
    options: [
      { en: "7 days", bg: "7 дни" },
      { en: "14 days", bg: "14 дни" },
      { en: "21 days", bg: "21 дни" },
      { en: "28 days", bg: "28 дни" }
    ],
    correctIndex: 2,
    explanation: { 
      en: "21 DAYS from creation of charge or charge is VOID against liquidator/creditors (not void between parties). Critical timing. Company also keeps own register. Registration gives notice to subsequent creditors. Failure to register = charge unenforceable in insolvency—major risk for lender.",
      bg: "21 ДНИ или тежестта е НИЩОЖНА срещу ликвидатор/кредитори." 
    }
  },
  {
    id: 47,
    chapter: 13,
    question: { 
      en: "Which type of charge crystallizes upon trigger event?",
      bg: "Кой тип тежест кристализира при събитие?" 
    },
    options: [
      { en: "Fixed charge", bg: "Фиксирана тежест" },
      { en: "Floating charge", bg: "Плаваща тежест" },
      { en: "Both types", bg: "И двата типа" },
      { en: "Neither type", bg: "Нито един тип" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "FLOATING charge crystallizes (converts to fixed) on trigger events: cessation of business, receiver appointment, liquidation, chargeholder notice, court order. Fixed charges already crystallized from creation (over specific asset). Crystallization important—floating becomes fixed, priority changes, company cannot deal.",
      bg: "ПЛАВАЩАТА тежест кристализира при събитие; фиксираната вече е кристализирана." 
    }
  },

  // ============================================
  // CHAPTER 14 - Capital Maintenance
  // ============================================
  {
    id: 48,
    chapter: 14,
    question: { 
      en: "What is solvency statement for capital reduction?",
      bg: "Какво е декларация за платежоспособност?" 
    },
    options: [
      { en: "Required for all companies", bg: "Изисквана за всички компании" },
      { en: "Private companies only; directors declare can pay debts 12 months", bg: "Само частни; директори декларират могат да платят дългове 12 месеца" },
      { en: "Public companies only", bg: "Само публични компании" },
      { en: "Optional statement", bg: "Незадължително изявление" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "PRIVATE COMPANIES ONLY alternative to court confirmation. Directors declare no ground to suspect company unable to pay debts for next 12 MONTHS. Given 15 days before meeting. Criminal offense if false. Faster and cheaper than court. Public companies MUST use court.",
      bg: "САМО ЧАСТНИ; директори декларират 12 месеца; престъпление ако фалшива; избягва съд." 
    }
  },
  {
    id: 49,
    chapter: 14,
    question: { 
      en: "Can company ignore previous years' losses when calculating distributable profits?",
      bg: "Може ли да игнорира минали загуби при изчисляване на разпределяеми печалби?" 
    },
    options: [
      { en: "Yes, only current year matters", bg: "Да, само текущата година е важна" },
      { en: "No, must include accumulated (past) losses", bg: "Не, трябва да включи натрупани (минали) загуби" },
      { en: "Only if losses over 5 years old", bg: "Само ако загубите са над 5 години" },
      { en: "Depends on articles", bg: "Зависи от устава" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "NO—'Accumulated' means must include ALL PAST LOSSES. Cannot wipe slate clean except by capital reduction. Distributable = accumulated realised profits LESS accumulated realised losses. Example: Year 1 profit £100k, Year 2 loss (£60k), Year 3 profit £80k = distributable £120k (not just £80k).",
      bg: "НЕ—'натрупани' означава ВСИЧКИ минали загуби; не може да изтрие." 
    }
  },

  // ============================================
  // CHAPTER 15 - Directors
  // ============================================
  {
    id: 50,
    chapter: 15,
    question: { 
      en: "How many statutory duties do directors owe?",
      bg: "Колко законови задължения дължат директорите?" 
    },
    options: [
      { en: "Three", bg: "Три" },
      { en: "Five", bg: "Пет" },
      { en: "Seven", bg: "Седем" },
      { en: "Ten", bg: "Десет" }
    ],
    correctIndex: 2,
    explanation: { 
      en: "SEVEN statutory duties (CA 2006 ss.171-177): (1) Act within powers, (2) Promote success, (3) Independent judgment, (4) Skill/care, (5) Avoid conflicts, (6) No benefits, (7) Declare interest. Must know all seven perfectly! Owed to company not members. Cumulative—all apply.",
      bg: "СЕДЕМ задължения (чл.171-177): трябва да знаете всичките седем!" 
    }
  },
  {
    id: 51,
    chapter: 15,
    question: { 
      en: "Directors' duties are owed to:",
      bg: "Задълженията на директорите са към:" 
    },
    options: [
      { en: "The members (shareholders)", bg: "Членовете (акционери)" },
      { en: "The company", bg: "Компанията" },
      { en: "The creditors", bg: "Кредиторите" },
      { en: "The public", bg: "Обществото" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Duties owed to THE COMPANY (not members) (s.170). Only company can sue for breach (or member bringing derivative claim on company's behalf). Directors are company's agents, not members' agents. Fundamental principle—company is separate person.",
      bg: "Към КОМПАНИЯТА (не членовете); само компанията може да съди." 
    }
  },
  {
    id: 52,
    chapter: 15,
    question: { 
      en: "Which case involved director taking opportunity for themselves?",
      bg: "Кой случай включваше директор взимащ възможност за себе си?" 
    },
    options: [
      { en: "Salomon v Salomon", bg: "Salomon v Salomon" },
      { en: "Industrial Development v Cooley", bg: "Industrial Development v Cooley" },
      { en: "Freeman & Lockyer", bg: "Freeman & Lockyer" },
      { en: "Adams v Cape", bg: "Adams v Cape" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Industrial Development v Cooley (1972): MD told board he was ill; persuaded them to release him; left and obtained contract personally that company unlikely to get. Held: ACCOUNTABLE for profit—opportunity came while director. Breach of s.175 (avoid conflicts). Cannot divert opportunities to self.",
      bg: "Industrial Development v Cooley: МД взе договор за себе си; отговорен за печалбата." 
    }
  },

  // ============================================
  // CHAPTER 16 - Secretary & Auditor
  // ============================================
  {
    id: 53,
    chapter: 16,
    question: { 
      en: "Small company exempt from audit if meets which criteria?",
      bg: "Малка компания освободена от одит ако отговаря на кои критерии?" 
    },
    options: [
      { en: "All three criteria", bg: "И трите критерия" },
      { en: "Any one criterion", bg: "Някой от критериите" },
      { en: "Two out of three criteria", bg: "Два от трите критерия" },
      { en: "Turnover only", bg: "Само оборот" }
    ],
    correctIndex: 2,
    explanation: { 
      en: "TWO out of THREE: (1) Turnover <£10.2m, (2) Balance sheet <£5.1m, (3) ≤50 employees. NOT public/banking/insurance. 10%+ members can veto exemption. Designed to reduce burden on genuinely small companies. Most companies in UK are small and exempt.",
      bg: "ДВА от ТРИ: оборот, баланс, служители; НЕ публични/банки/застраховки." 
    }
  },
  {
    id: 54,
    chapter: 16,
    question: { 
      en: "Auditor who loses independence during term must:",
      bg: "Одитор който загуби независимост трябва да:" 
    },
    options: [
      { en: "Continue but disclose", bg: "Продължи но разкрие" },
      { en: "Resign immediately and notify client", bg: "Подаде оставка незабавно и уведоми клиента" },
      { en: "Wait until term ends", bg: "Изчака края на мандата" },
      { en: "Seek court permission", bg: "Търси разрешение от съда" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Must RESIGN IMMEDIATELY and NOTIFY client with reason if lose independence/become ineligible. Continuing to act = fine (defense if unaware). Example: auditor becomes officer/employee of client company—must resign. Independence crucial for audit credibility.",
      bg: "Трябва да подаде ОСТАВКА НЕЗАБАВНО и УВЕДОМИ клиента; продължаване = глоба." 
    }
  },

  // ============================================
  // More comprehensive questions from Ch 11-16
  // ============================================
  {
    id: 55,
    chapter: 12,
    question: { 
      en: "Directors need authority to allot shares from:",
      bg: "Директорите нуждаят упълномощаване да издават акции от:" 
    },
    options: [
      { en: "Registrar of Companies", bg: "Регистър на компаниите" },
      { en: "Articles or ordinary resolution of members", bg: "Устав или обикновено решение на членовете" },
      { en: "Court order", bg: "Съдебна заповед" },
      { en: "No authority needed", bg: "Не се нуждае от упълномощаване" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Directors need authority from ARTICLES or ORDINARY RESOLUTION of members. Authority can be general or specific; max 5 years; renewable. Without authority = criminal offense. Exception: private company with one class shares—no authority needed. Controls directors' power to change shareholding structure.",
      bg: "От УСТАВ или ОБИКНОВЕНО РЕШЕНИЕ; максимум 5 години; престъпление без упълномощаване." 
    }
  },
  {
    id: 56,
    chapter: 13,
    question: { 
      en: "What is pari passu ranking?",
      bg: "Какво е pari passu класиране?" 
    },
    options: [
      { en: "First in priority", bg: "Първи по приоритет" },
      { en: "Equal ranking", bg: "Равно класиране" },
      { en: "Last in priority", bg: "Последни по приоритет" },
      { en: "No priority at all", bg: "Без приоритет" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Pari passu = EQUAL RANKING. Used in debentures issued as series—different lenders on different dates but all rank equally in right to repayment and security. Fair treatment of all debentureholders in same series. Latin for 'with equal step.'",
      bg: "Pari passu = РАВНО КЛАСИРАНЕ; различни кредитори третирани еднакво." 
    }
  },
  {
    id: 57,
    chapter: 14,
    question: { 
      en: "Revaluation gains are:",
      bg: "Печалбите от преоценка са:" 
    },
    options: [
      { en: "Realised (can distribute)", bg: "Реализирани (могат да се разпределят)" },
      { en: "Unrealised (cannot distribute)", bg: "Нереализирани (не могат да се разпределят)" },
      { en: "Distributable if approved", bg: "Разпределяеми ако одобрени" },
      { en: "Part of paid-up capital", bg: "Част от платения капитал" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "UNREALISED—cannot distribute. Example: Land bought £100k, revalued £200k (not sold) = £100k unrealised gain (paper profit). Cannot distribute until SOLD (then realised). Protects capital—prevents distributing gains that may not materialize. Revaluation reserve = undistributable.",
      bg: "НЕРЕАЛИЗИРАНИ—не могат да се разпределят до продажба; защитава капитал." 
    }
  },
  {
    id: 58,
    chapter: 15,
    question: { 
      en: "Minimum number of directors for private and public companies:",
      bg: "Минимален брой директори за частни и публични компании:" 
    },
    options: [
      { en: "Private: 1, Public: 1", bg: "Частни: 1, Публични: 1" },
      { en: "Private: 1, Public: 2", bg: "Частни: 1, Публични: 2" },
      { en: "Private: 2, Public: 2", bg: "Частни: 2, Публични: 2" },
      { en: "Private: 2, Public: 3", bg: "Частни: 2, Публични: 3" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Private: minimum 1 director. Public: minimum 2 directors. No statutory maximum (articles may impose). All must be natural persons (NOT body corporate). CA 2006 relaxed requirements for private companies (previously required 2).",
      bg: "Частни: минимум 1; Публични: минимум 2; трябва да са физически лица." 
    }
  },
  {
    id: 59,
    chapter: 15,
    question: { 
      en: "What did Regal Hastings case establish?",
      bg: "Какво установи Regal Hastings?" 
    },
    options: [
      { en: "Separate legal personality", bg: "Отделна правна личност" },
      { en: "Directors accountable for profit from opportunity", bg: "Директори отговорни за печалба от възможност" },
      { en: "Limited liability", bg: "Ограничена отговорност" },
      { en: "Ultra vires doctrine", bg: "Доктрина ултра вирес" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Regal (Hastings) v Gulliver (1942): Directors invested personally in subsidiary (company couldn't afford full £5k); made £2.80/share profit. Held: ACCOUNTABLE—obtained from opportunity as directors. Immaterial company lost nothing (couldn't take opportunity itself). Could have kept if members approved. S.175 conflict of interest.",
      bg: "Директорите отговорни за печалба от възможност като директори; неважно че компанията не можеше." 
    }
  },

  // ============================================
  // CHAPTER 17 - Meetings and Resolutions
  // ============================================
  {
    id: 60,
    chapter: 17,
    question: { 
      en: "Which resolution type requires 75% majority?",
      bg: "Кой тип решение изисква 75% мнозинство?" 
    },
    options: [
      { en: "Ordinary resolution", bg: "Обикновено решение" },
      { en: "Special resolution", bg: "Специално решение" },
      { en: "Written resolution", bg: "Писмено решение" },
      { en: "Emergency resolution", bg: "Спешно решение" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "SPECIAL RESOLUTION requires 75% majority of votes CAST (not total shares). Used for major changes: name, articles, capital reduction, winding up. Text must be IN FULL in notice. ALL special resolutions filed with Registrar. 14 days notice (same as ordinary, but higher majority).",
      bg: "СПЕЦИАЛНО РЕШЕНИЕ изисква 75% от гласуващите; за важни промени." 
    }
  },
  {
    id: 61,
    chapter: 17,
    question: { 
      en: "Can private company use written resolution to remove director?",
      bg: "Може ли частна компания да използва писмено решение за отстраняване на директор?" 
    },
    options: [
      { en: "Yes, for any business", bg: "Да, за всяка дейност" },
      { en: "No, director has right to speak at meeting", bg: "Не, директорът има право да говори на среща" },
      { en: "Yes, if 90% agree", bg: "Да, ако 90% се съгласят" },
      { en: "Only with court approval", bg: "Само с одобрение на съда" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "NO—written resolution CANNOT be used to remove director or auditor before term expires. They have statutory right to SPEAK AT MEETING to defend themselves. MEETING must be held. Exception to general rule that private companies can use written resolutions. Ordinary resolution + special notice (28 days) required.",
      bg: "НЕ—директорът има право да говори на среща; писмено НЕ МОЖЕ." 
    }
  },
  {
    id: 62,
    chapter: 17,
    question: { 
      en: "What is quorum for general meeting?",
      bg: "Какъв е кворумът за общо събрание?" 
    },
    options: [
      { en: "One person", bg: "Едно лице" },
      { en: "Two persons (in person or by proxy)", bg: "Две лица (лично или чрез пълномощник)" },
      { en: "Five persons", bg: "Пет лица" },
      { en: "Majority of members", bg: "Мнозинство от членовете" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Usually TWO persons (in person or by proxy). One person alone NOT meeting (principle: 'meeting = coming together of more than one'). Exceptions: class meeting one member, court fixes quorum of one (deadlock), single-member private company. Proxies count toward quorum.",
      bg: "Обикновено ДВЕ ЛИЦА (лично или чрез пълномощник); едно лице НЕ е събрание." 
    }
  },
  {
    id: 63,
    chapter: 17,
    question: { 
      en: "How long must company keep minutes of meetings?",
      bg: "Колко време трябва компанията да пази протоколите?" 
    },
    options: [
      { en: "1 year", bg: "1 година" },
      { en: "5 years", bg: "5 години" },
      { en: "10 years", bg: "10 години" },
      { en: "Permanently", bg: "Завинаги" }
    ],
    correctIndex: 2,
    explanation: { 
      en: "10 YEARS for all general, directors', and management meetings. Usually book form. Chairman signs—admissible evidence (but can be contradicted). Members may inspect GENERAL meeting minutes (at registered office/SAIL). Cannot inspect directors' meeting minutes. Regulatory requirement.",
      bg: "10 ГОДИНИ за всички срещи; членовете могат да прегледат общите срещи." 
    }
  },

  // ============================================
  // CHAPTER 18 - Insolvency
  // ============================================
  {
    id: 64,
    chapter: 18,
    question: { 
      en: "Declaration of solvency states company can pay debts within:",
      bg: "Декларацията за платежоспособност заявява компанията може да плати дългове в рамките на:" 
    },
    options: [
      { en: "6 months", bg: "6 месеца" },
      { en: "9 months", bg: "9 месеца" },
      { en: "12 months", bg: "12 месеца" },
      { en: "24 months", bg: "24 месеца" }
    ],
    correctIndex: 2,
    explanation: { 
      en: "Specified period NOT EXCEEDING 12 MONTHS. Directors declare company can pay debts within this period. Made ≤5 weeks before resolution, filed within 15 days. Criminal offense if made without reasonable grounds. If company proves insolvent, directors must justify declaration or be punished. Key for members' voluntary liquidation.",
      bg: "НЕ ПРЕВИШАВАЩ 12 МЕСЕЦА; престъпление ако без разумни основания." 
    }
  },
  {
    id: 65,
    chapter: 18,
    question: { 
      en: "Creditor owed how much minimum to petition for winding up?",
      bg: "Кредитор дължащ колко минимум може да подаде молба за ликвидация?" 
    },
    options: [
      { en: "£500", bg: "£500" },
      { en: "£750", bg: "£750" },
      { en: "£1,000", bg: "£1,000" },
      { en: "£5,000", bg: "£5,000" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "£750 or more. Serves written demand at registered office; company fails to pay or offer security within 21 DAYS. One of three ways to prove unable to pay debts (others: judgment unsatisfied, balance sheet/commercial insolvency). Statutory demand common first step in compulsory liquidation.",
      bg: "£750 или повече; писмена покана; не плати в 21 ДНИ." 
    }
  },
  {
    id: 66,
    chapter: 18,
    question: { 
      en: "Administration can last up to:",
      bg: "Администрацията може да продължи до:" 
    },
    options: [
      { en: "6 months", bg: "6 месеца" },
      { en: "9 months", bg: "9 месеца" },
      { en: "12 months", bg: "12 месеца" },
      { en: "18 months", bg: "18 месеца" }
    ],
    correctIndex: 2,
    explanation: { 
      en: "12 MONTHS maximum. Administrator automatically vacates after 12 months. Can be extended by court order or creditor consent. Proposals within 8 weeks; creditors' meeting within 10 weeks. Moratorium protects from creditors. Purpose: rescue company as going concern or achieve better result than immediate liquidation.",
      bg: "12 МЕСЕЦА максимум; може да се удължи от съд или кредитори." 
    }
  },

  // ============================================
  // CHAPTER 19 - Financial Crime
  // ============================================
  {
    id: 67,
    chapter: 19,
    question: { 
      en: "Insider dealing is a:",
      bg: "Вътрешната търговия е:" 
    },
    options: [
      { en: "Civil offense prosecuted by FCA", bg: "Граждански деликт преследван от FCA" },
      { en: "Criminal offense prosecuted by state", bg: "Престъпление преследвано от държавата" },
      { en: "Administrative violation", bg: "Административно нарушение" },
      { en: "Regulatory breach", bg: "Регулаторно нарушение" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "CRIMINAL OFFENSE (Criminal Justice Act 1993). Prosecution by STATE. Max 7 years imprisonment and/or unlimited fine. Contrast: MARKET ABUSE = CIVIL (FCA fines, no prison). MOST IMPORTANT DISTINCTION in Chapter 19: INSIDER DEALING = CRIMINAL, MARKET ABUSE = CIVIL. Write this 10 times!!",
      bg: "ПРЕСТЪПЛЕНИЕ преследвано от държавата; 7 години затвор. Пазарна злоупотреба = граждански." 
    }
  },
  {
    id: 68,
    chapter: 19,
    question: { 
      en: "How long must money laundering records be kept?",
      bg: "Колко време трябва да се пазят записи за изпиране на пари?" 
    },
    options: [
      { en: "1 year", bg: "1 година" },
      { en: "3 years", bg: "3 години" },
      { en: "5 years", bg: "5 години" },
      { en: "10 years", bg: "10 години" }
    ],
    correctIndex: 2,
    explanation: { 
      en: "5 YEARS. Customer identification records: 5 years after relationship ENDS. Transaction records: 5 years after transaction COMPLETED. Must be sufficient to reconstruct transactions. Money Laundering Regulations 2017 requirement. Longer than general document retention (helps investigations).",
      bg: "5 ГОДИНИ след края на връзката/сделката; трябва да позволява реконструкция." 
    }
  },
  {
    id: 69,
    chapter: 19,
    question: { 
      en: "What is PEP in CDD context?",
      bg: "Какво е PEP в контекста на CDD?" 
    },
    options: [
      { en: "Public Exchange Person", bg: "Лице на публична борса" },
      { en: "Politically Exposed Person", bg: "Политически експонирано лице" },
      { en: "Private Equity Partner", bg: "Партньор на частен капитал" },
      { en: "Professional Executive Person", bg: "Професионално изпълнително лице" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Politically Exposed Person—individual entrusted with prominent public function (head of state, senior politician, senior government/judicial/military official). High risk for money laundering. Requires ENHANCED CDD (additional measures beyond standard). Family members/close associates also PEPs. International standards requirement.",
      bg: "Политически експонирано лице—висш публичен служител; висок риск; ЗАСИЛЕН CDD." 
    }
  },
  {
    id: 70,
    chapter: 19,
    question: { 
      en: "Corporate failure to prevent bribery—what is the defense?",
      bg: "Корпоративно неуспение да предотврати подкуп—каква е защитата?" 
    },
    options: [
      { en: "No defense available", bg: "Няма защита" },
      { en: "Adequate procedures in place to prevent bribery", bg: "Адекватни процедури за предотвратяване" },
      { en: "Didn't know about bribery", bg: "Не са знаели за подкупа" },
      { en: "Small amount involved", bg: "Малка сума" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Defense = ADEQUATE PROCEDURES in place to prevent bribery. Six principles: (1) Proportionate procedures, (2) Top-level commitment, (3) Risk assessment, (4) Due diligence, (5) Communication/training, (6) Monitoring/review. Burden on organization to prove procedures adequate. Bribery Act 2010 s.7.",
      bg: "Защита = АДЕКВАТНИ ПРОЦЕДУРИ; шест принципа; организацията доказва." 
    }
  },

  // ============================================
  // Additional Comprehensive Questions (Ch 17-19)
  // ============================================
  {
    id: 71,
    chapter: 17,
    question: { 
      en: "Members can requisition general meeting if hold:",
      bg: "Членовете могат да заявят общо събрание ако притежават:" 
    },
    options: [
      { en: "1% voting rights", bg: "1% гласове" },
      { en: "5% voting rights", bg: "5% гласове" },
      { en: "10% voting rights", bg: "10% гласове" },
      { en: "25% voting rights", bg: "25% гласове" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "5% of PAID-UP SHARE CAPITAL with voting rights. Signed requisition stating objects/resolutions. Directors must call meeting within 21 DAYS; meeting held within 28 DAYS of notice. If directors don't call, members may convene within 3 MONTHS. Minority protection mechanism.",
      bg: "5% от платен капитал с гласове; директори свикват в 21 дни; среща в 28 дни." 
    }
  },
  {
    id: 72,
    chapter: 17,
    question: { 
      en: "Proxy appointment notice must be given:",
      bg: "Уведомление за назначаване на пълномощник трябва да се даде:" 
    },
    options: [
      { en: "24 hours before meeting", bg: "24 часа преди срещата" },
      { en: "48 hours before meeting", bg: "48 часа преди срещата" },
      { en: "7 days before meeting", bg: "7 дни преди срещата" },
      { en: "14 days before meeting", bg: "14 дни преди срещата" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "48 HOURS before meeting (excluding weekends and bank holidays). Gives company time to verify and prepare. Every notice of meeting must state member's right to appoint proxy. Proxy need not be member. Can speak, vote (show of hands + poll), demand poll. Statutory right (CA 2006).",
      bg: "48 ЧАСА преди срещата (без уикенди); пълномощникът може да говори, гласува." 
    }
  },
  {
    id: 73,
    chapter: 18,
    question: { 
      en: "When does compulsory liquidation commence?",
      bg: "Кога започва принудителната ликвидация?" 
    },
    options: [
      { en: "When court makes order", bg: "Когато съдът издаде заповед" },
      { en: "When petition presented (retrospective)", bg: "Когато молбата е подадена (ретроактивно)" },
      { en: "When liquidator appointed", bg: "Когато ликвидаторът е назначен" },
      { en: "When creditors vote", bg: "Когато кредиторите гласуват" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Deemed to commence on date PETITION PRESENTED (RETROSPECTIVE). Important for: dispositions after commencement = VOID, legal proceedings halted, floating charges crystallize. Contrast voluntary liquidation: commences on resolution (not retrospective). Critical timing difference between compulsory and voluntary.",
      bg: "Започва на датата на ПОДАВАНЕ НА МОЛБАТА (ретроактивно); сделки след това нищожни." 
    }
  },
  {
    id: 74,
    chapter: 18,
    question: { 
      en: "First priority in liquidation payment order:",
      bg: "Първи приоритет в реда на плащания при ликвидация:" 
    },
    options: [
      { en: "Fixed charges", bg: "Фиксирани тежести" },
      { en: "Costs of liquidation", bg: "Разходи на ликвидацията" },
      { en: "Preferential creditors", bg: "Преференциални кредитори" },
      { en: "Floating charges", bg: "Плаващи тежести" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "COSTS first: selling assets, liquidator remuneration, incidental costs. Then: (2) Preferential (employees), (3) Floating charges, (4) Unsecured (prescribed part), (5) Deferred, (6) Members. Fixed charges outside this order (secured creditor appoints receiver, surplus to liquidator, shortfall = unsecured).",
      bg: "РАЗХОДИ първи; след това преференциални, плаващи, необезпечени, членове." 
    }
  },
  {
    id: 75,
    chapter: 19,
    question: { 
      en: "Three ways to commit insider dealing offense:",
      bg: "Три начина да се извърши престъпление вътрешна търговия:" 
    },
    options: [
      { en: "Buying, selling, holding", bg: "Купуване, продаване, държане" },
      { en: "Dealing, encouraging another to deal, disclosing", bg: "Търговия, насърчаване на друг, разкриване" },
      { en: "Trading, reporting, analyzing", bg: "Търгуване, докладване, анализ" },
      { en: "Acquiring, transferring, hiding", bg: "Придобиване, прехвърляне, крие" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Three ways (CJA 1993): (1) DEALING in price-affected securities while possessing inside info, (2) ENCOURAGING ANOTHER to deal (even if no dealing occurs—offense at encouragement), (3) DISCLOSING information (other than proper performance of job). All three are criminal with same penalties (7 years/unlimited fine).",
      bg: "Търговия, Насърчаване на друг, Разкриване; всички престъпления." 
    }
  },
  {
    id: 76,
    chapter: 19,
    question: { 
      en: "Market abuse is enforced by:",
      bg: "Пазарната злоупотреба се налага от:" 
    },
    options: [
      { en: "Police and criminal courts", bg: "Полиция и наказателни съдилища" },
      { en: "FCA (Financial Conduct Authority)", bg: "FCA (Управление за финансово поведение)" },
      { en: "Company directors", bg: "Директори на компании" },
      { en: "Shareholders", bg: "Акционери" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "FCA (Financial Conduct Authority) enforces market abuse (FSMA 2000). Civil powers: UNLIMITED FINES, require information, require cooperation. No need to prove INTENT. Complements insider dealing (criminal) by providing civil alternative. FCA Code of Market Conduct applies to recognized exchanges.",
      bg: "FCA налага пазарна злоупотреба; граждански; неограничени глоби; без намерение." 
    }
  },
  {
    id: 77,
    chapter: 19,
    question: { 
      en: "Wrongful trading requires:",
      bg: "Неправомерната търговия изисква:" 
    },
    options: [
      { en: "Intent to defraud", bg: "Намерение да измами" },
      { en: "Director knew or ought to have concluded insolvency imminent", bg: "Директорът знаеше или трябваше да заключи че несъстоятелност предстои" },
      { en: "Criminal prosecution", bg: "Наказателно преследване" },
      { en: "Fraud on creditors", bg: "Измама срещу кредитори" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Director knew or OUGHT TO HAVE CONCLUDED no reasonable prospect avoiding insolvent liquidation, yet continued trading. CIVIL only (not criminal). Test: facts director knew/ought to have known; conclusions reasonably diligent person would reach. Defense: took every step to MINIMIZE loss to creditors. Negligence (not intent like fraudulent).",
      bg: "Трябваше да заключи несъстоятелност; ГРАЖДАНСКИ; защита = минимизира загуба." 
    }
  },
  {
    id: 78,
    chapter: 19,
    question: { 
      en: "Maximum penalty for bribery (individuals):",
      bg: "Максимално наказание за подкуп (физически лица):" 
    },
    options: [
      { en: "5 years imprisonment", bg: "5 години затвор" },
      { en: "7 years imprisonment", bg: "7 години затвор" },
      { en: "10 years imprisonment", bg: "10 години затвор" },
      { en: "14 years imprisonment", bg: "14 години затвор" }
    ],
    correctIndex: 2,
    explanation: { 
      en: "10 YEARS imprisonment and/or UNLIMITED FINE for individuals. Organizations: unlimited fine. Bribery Act 2010. Applies to: offering, receiving, foreign public officials, corporate failure to prevent. Compare: insider dealing max 7 years. Bribery taken very seriously—longer sentence reflects seriousness.",
      bg: "10 ГОДИНИ затвор и/или неограничена глоба; организации: неограничена глоба." 
    }
  },
  {
    id: 79,
    chapter: 19,
    question: { 
      en: "What is tipping off in money laundering context?",
      bg: "Какво е 'tipping off' в контекста на изпиране на пари?" 
    },
    options: [
      { en: "Reporting suspicious transactions", bg: "Докладване на подозрителни сделки" },
      { en: "Disclosing that SAR filed or investigation underway", bg: "Разкриване че SAR е подаден или разследване тече" },
      { en: "Filing tax returns", bg: "Подаване на данъчни декларации" },
      { en: "Training employees", bg: "Обучение на служители" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "CRIMINAL OFFENSE to disclose that Suspicious Activity Report (SAR) has been filed or investigation underway. Could prejudice investigation (money launderer might flee, hide assets). Must report to MLRO (internally) then NCA but CANNOT tell customer. Protects integrity of investigations.",
      bg: "ПРЕСТЪПЛЕНИЕ да разкриеш че SAR подаден или разследване; може да попречи." 
    }
  },

  // ============================================
  // BONUS QUESTIONS - High-Yield Exam Topics
  // ============================================
  {
    id: 80,
    chapter: 17,
    question: { 
      en: "What does 'clear days' rule mean?",
      bg: "Какво означава правилото за 'чисти дни'?" 
    },
    options: [
      { en: "Include day of meeting and day notice given", bg: "Включва деня на срещата и деня на уведомлението" },
      { en: "Exclude day of meeting and day notice given", bg: "Изключва деня на срещата и деня на уведомлението" },
      { en: "Only count business days", bg: "Само работни дни" },
      { en: "Add 2 extra days", bg: "Добави 2 допълнителни дни" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Day of meeting AND day notice given are EXCLUDED from notice period. Ensures members have FULL notice period. Example: 14 days notice—count 14 CLEAR days BETWEEN notice day and meeting day (both excluded). Prevents disputes about whether notice sufficient.",
      bg: "Деня на срещата И деня на уведомлението ИЗКЛЮЧЕНИ; осигурява пълен период." 
    }
  },
  {
    id: 81,
    chapter: 18,
    question: { 
      en: "In Ebrahimi v Westbourne Galleries, what was the ground for winding up?",
      bg: "В Ebrahimi v Westbourne Galleries какво беше основанието за ликвидация?" 
    },
    options: [
      { en: "Unable to pay debts", bg: "Не може да плати дългове" },
      { en: "Just and equitable", bg: "Справедливо и равноправно" },
      { en: "Trading certificate not obtained", bg: "Търговски сертификат не е получен" },
      { en: "Special resolution", bg: "Специално решение" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "JUST AND EQUITABLE ground. Facts: Partners 25 years; formed company; shared profits as directors' remuneration; N's son joined; N + son removed E from directorship using votes (600 v 400). Held: Within legal rights BUT past relationship made 'unjust/inequitable' to insist on strict legal rights. Understandings unfairly breached. Court ordered liquidation.",
      bg: "СПРАВЕДЛИВО И РАВНОПРАВНО; миналата връзка направи неравноправно настояването за права." 
    }
  },
  {
    id: 82,
    chapter: 19,
    question: { 
      en: "Beneficial owner in CDD means:",
      bg: "Бенефициент в CDD означава:" 
    },
    options: [
      { en: "Any shareholder", bg: "Всеки акционер" },
      { en: "Ultimate owner/controller (25%+ shares/voting)", bg: "Краен собственик/контролер (25%+ акции/гласове)" },
      { en: "Company director", bg: "Директор на компания" },
      { en: "Bank account holder", bg: "Титуляр на банкова сметка" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Ultimate owner or controller: person owning 25%+ of shares or voting rights. Must identify in CDD to prevent money laundering through corporate structures. Looks THROUGH companies to find real person in control. Prevents hiding behind nominees or shell companies. Key anti-money laundering measure.",
      bg: "Краен собственик/контролер: 25%+ акции/гласове; предотвратява укриване." 
    }
  },
  {
    id: 83,
    chapter: 17,
    question: { 
      en: "Public company AGM must be held within:",
      bg: "Общото събрание на публична компания трябва да се проведе в рамките на:" 
    },
    options: [
      { en: "3 months of year end", bg: "3 месеца от края на годината" },
      { en: "6 months of year end", bg: "6 месеца от края на годината" },
      { en: "9 months of year end", bg: "9 месеца от края на годината" },
      { en: "12 months of year end", bg: "12 месеца от края на годината" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "6 MONTHS of financial year end. 21 days notice minimum (shorter only if ALL members agree). Private companies NOT required to hold AGM. Business: consider accounts, receive reports, dividends, elect directors, appoint auditors. Gives members regular opportunity to question directors on stewardship.",
      bg: "6 МЕСЕЦА от края на годината; 21 дни уведомление; частни НЕ изискват ОГС." 
    }
  },
  {
    id: 84,
    chapter: 18,
    question: { 
      en: "What is moratorium in administration?",
      bg: "Какъв е мораториум при администрация?" 
    },
    options: [
      { en: "Temporary halt to all business", bg: "Временен спиране на бизнеса" },
      { en: "No creditor can enforce debt without court permission", bg: "Кредиторите не могат да изпълняват без съд" },
      { en: "Company must pay all debts", bg: "Компанията трябва да плати всички дългове" },
      { en: "Directors lose all powers", bg: "Директорите губят всички правомощия" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "MORATORIUM = no creditor can enforce debt during administration period without COURT PERMISSION. Court permission needed for: enforce security, repossess hire purchase, landlord forfeiture, commence/continue legal process. ADVANTAGEOUS aspect—gives breathing space. Company can trade and restructure without creditor pressure.",
      bg: "Кредиторите НЕ могат да изпълняват без РАЗРЕШЕНИЕ НА СЪДА; почивка за реструктуриране." 
    }
  },
  {
    id: 85,
    chapter: 19,
    question: { 
      en: "Market abuse includes which of the following?",
      bg: "Пазарната злоупотреба включва кое от следното?" 
    },
    options: [
      { en: "Only insider trading", bg: "Само вътрешна търговия" },
      { en: "Misuse of information, manipulating transactions, market distortion", bg: "Злоупотреба с информация, манипулиране на сделки, изкривяване на пазара" },
      { en: "Only bribery", bg: "Само подкуп" },
      { en: "Tax evasion only", bg: "Само данъчно укриване" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "FIVE TYPES of market abuse (FSMA 2000): (1) Misuse of information (not public but would influence), (2) Manipulating transactions (misleading supply/demand), (3) Manipulating devices (trading + false statements), (4) Market distortion (interfere with prices), (5) Dissemination of false information. All CIVIL—FCA unlimited fines.",
      bg: "ПЕТ ВИДА: злоупотреба с информация, манипулиране, изкривяване, разпространение; граждански." 
    }
  },
  {
    id: 86,
    chapter: 19,
    question: { 
      en: "MLRO stands for:",
      bg: "MLRO означава:" 
    },
    options: [
      { en: "Money Laundering Reporting Officer", bg: "Служител за докладване на изпиране на пари" },
      { en: "Money Lending Regulatory Office", bg: "Офис за регулиране на заемане на пари" },
      { en: "Market Listing Registration Officer", bg: "Служител за регистрация на пазарно листване" },
      { en: "Member Liability Reporting Officer", bg: "Служител за докладване на отговорност на членове" }
    ],
    correctIndex: 0,
    explanation: { 
      en: "Money Laundering Reporting Officer—appointed under Money Laundering Regulations 2017. Receives suspicious activity reports internally; reports to NCA (National Crime Agency). Required for regulated sector firms. Part of internal controls requirement. Key role in preventing money laundering.",
      bg: "Служител за докладване на изпиране на пари; получава вътрешни доклади; докладва към NCA." 
    }
  },

  // ============================================
  // FINAL BONUS COMPREHENSIVE QUESTIONS
  // ============================================
  {
    id: 87,
    chapter: 17,
    question: { 
      en: "Written resolution default agreement period:",
      bg: "Период по подразбиране за съгласие с писмено решение:" 
    },
    options: [
      { en: "14 days", bg: "14 дни" },
      { en: "21 days", bg: "21 дни" },
      { en: "28 days", bg: "28 дни" },
      { en: "30 days", bg: "30 дни" }
    ],
    correctIndex: 2,
    explanation: { 
      en: "28 DAYS from circulation if articles don't specify different period. Agreement after 28 days ineffective. Once agreed, CANNOT REVOKE. Private companies only. Can be 50%+ or 75% majority depending on business. Efficient alternative to meetings for private companies.",
      bg: "28 ДНИ от разпространение; след това неефективно; не може да се отмени." 
    }
  },
  {
    id: 88,
    chapter: 18,
    question: { 
      en: "Prescribed part for unsecured creditors is:",
      bg: "Предписана част за необезпечени кредитори е:" 
    },
    options: [
      { en: "All floating charge realizations", bg: "Всички реализации от плаващи тежести" },
      { en: "50% of first £10k floating charge realizations + 20% thereafter", bg: "50% от първите £10k + 20% след това" },
      { en: "100% of assets", bg: "100% от активите" },
      { en: "No prescribed part", bg: "Няма предписана част" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "50% of first £10,000 of floating charge realizations + 20% of realizations thereafter (subject to prescribed maximum £600k). 'Ring-fenced' for unsecured ordinary creditors. Taken from floating charge assets before floating chargeholder paid. Protects unsecured creditors who otherwise get nothing.",
      bg: "50% от първите £10k + 20% след това (макс £600k); защитава необезпечени." 
    }
  },
  {
    id: 89,
    chapter: 19,
    question: { 
      en: "Six principles of adequate procedures to prevent bribery:",
      bg: "Шест принципа на адекватни процедури за предотвратяване на подкуп:" 
    },
    options: [
      { en: "Only top-level commitment needed", bg: "Само ангажимент на върха" },
      { en: "Proportionate, top-level commitment, risk assessment, due diligence, communication, monitoring", bg: "Пропорционални, ангажимент, риск, дю дилиджънс, комуникация, мониторинг" },
      { en: "Just training required", bg: "Само обучение" },
      { en: "No specific principles", bg: "Няма конкретни принципи" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "SIX PRINCIPLES for adequate procedures defense (corporate failure to prevent bribery): (1) PROPORTIONATE procedures (risk-based), (2) TOP-LEVEL COMMITMENT (board/senior), (3) RISK ASSESSMENT (nature/extent), (4) DUE DILIGENCE (know who representing), (5) COMMUNICATION/TRAINING, (6) MONITORING/REVIEW. All six important. Same principles for tax evasion prevention.",
      bg: "ШЕСТ ПРИНЦИПА: пропорционални, ангажимент, риск, дилиджънс, комуникация, мониторинг." 
    }
  },
  {
    id: 90,
    chapter: 17,
    question: { 
      en: "Poll can be demanded by:",
      bg: "Поименно гласуване може да се изиска от:" 
    },
    options: [
      { en: "Any single member", bg: "Всеки член" },
      { en: "5+ members OR 1/10 voting rights OR 1/10 paid-up capital", bg: "5+ членове ИЛИ 1/10 гласове ИЛИ 1/10 платен капитал" },
      { en: "Only the chairman", bg: "Само председателят" },
      { en: "Directors only", bg: "Само директорите" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "NOT less than 5 MEMBERS OR member(s) with 1/10 total VOTING RIGHTS OR member(s) with shares = 1/10 PAID-UP CAPITAL. Any provision excluding this right is VOID (except election of chairman or adjournment). Poll is real test of strength—full votes per shareholding. Previous show of hands disregarded.",
      bg: "5+ членове ИЛИ 1/10 гласове ИЛИ 1/10 платен капитал; реален тест на сила." 
    }
  },
  {
    id: 91,
    chapter: 18,
    question: { 
      en: "Re Yenidje Tobacco case involved:",
      bg: "Re Yenidje Tobacco включваше:" 
    },
    options: [
      { en: "Separate legal personality", bg: "Отделна правна личност" },
      { en: "Complete deadlock justifying winding up", bg: "Пълна задънена улица оправдаваща ликвидация" },
      { en: "Share capital reduction", bg: "Намаляване на акционерен капитал" },
      { en: "Director duties", bg: "Задължения на директори" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Two sole traders merged into company; only directors/shareholders; quarrelled bitterly; refused to speak; conducted board meetings by PASSING NOTES through secretary. Held: In substance like partners; by analogy with partnership law (dissolution if unable to work together), just and equitable to wind up. Complete deadlock example.",
      bg: "Задънена улица: двама директори не говорят, преминават бележки; справедливо да се ликвидира." 
    }
  },
  {
    id: 92,
    chapter: 19,
    question: { 
      en: "Criminal Finances Act 2017 covers:",
      bg: "Законът за престъпни финанси 2017 обхваща:" 
    },
    options: [
      { en: "Only insider dealing", bg: "Само вътрешна търговия" },
      { en: "Failure to prevent facilitation of tax evasion", bg: "Неуспех да предотврати улесняване на данъчно укриване" },
      { en: "Only money laundering", bg: "Само изпиране на пари" },
      { en: "Corporate governance", bg: "Корпоративно управление" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Corporate offense: FAILURE TO PREVENT FACILITATION OF TAX EVASION (UK and foreign). Relevant body (company/partnership/body corporate) fails to prevent associated person from facilitating tax evasion. Defense: REASONABLE PREVENTION PROCEDURES (same six principles as bribery). Associated person = employee/agent/service provider.",
      bg: "Корпоративно престъпление: неуспех да предотврати улесняване на данъчно укриване; защита = процедури." 
    }
  },

  // ============================================
  // TOTAL: 92 QUIZ QUESTIONS (CHAPTERS 1-19) ✅ APPROACHING 100!
  // Adding final 8+ to exceed 100
  // ============================================
  {
    id: 93,
    chapter: 17,
    question: { 
      en: "Class meeting quorum (first meeting):",
      bg: "Кворум за класова среща (първа):" 
    },
    options: [
      { en: "1 person", bg: "1 лице" },
      { en: "2 persons with 1/3+ nominal value of class", bg: "2 лица с 1/3+ номинална стойност на класа" },
      { en: "Majority of class", bg: "Мнозинство от класа" },
      { en: "All class members", bg: "Всички членове на класа" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "2 PERSONS holding/representing by proxy at least 1/3 NOMINAL VALUE of issued shares of class (unless class has single member). If adjourned for lack of quorum: 1 person with 1/3+ shares. Class meetings held for variation of class rights or compromise/arrangement affecting classes differently.",
      bg: "2 ЛИЦА с 1/3+ номинална стойност; ако отложена: 1 лице с 1/3+." 
    }
  },
  {
    id: 94,
    chapter: 18,
    question: { 
      en: "Official receiver investigates:",
      bg: "Служебният приемник разследва:" 
    },
    options: [
      { en: "Only current directors", bg: "Само настоящи директори" },
      { en: "Causes of failure, promotion, formation, business dealings", bg: "Причини за провал, промоция, образуване, бизнес сделки" },
      { en: "Only fraud", bg: "Само измама" },
      { en: "Only employees", bg: "Само служители" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Official receiver MUST investigate: CAUSES OF FAILURE and generally PROMOTION, FORMATION, BUSINESS DEALINGS, AFFAIRS of company. May report to court; may require PUBLIC EXAMINATION (much-feared sanction). Half creditors or 3/4 shareholders can request examination. Failure to attend = arrest/detention. Unfit directors reported to Secretary of State for disqualification.",
      bg: "Разследва причини за провал, промоция, образуване, сделки; публично разследване." 
    }
  },
  {
    id: 95,
    chapter: 19,
    question: { 
      en: "What is 'relevant body' for corporate offenses?",
      bg: "Какво е 'относимо образувание' за корпоративни престъпления?" 
    },
    options: [
      { en: "Only companies", bg: "Само компании" },
      { en: "Company, partnership, or body corporate", bg: "Компания, съдружие или юридическо лице" },
      { en: "Only public companies", bg: "Само публични компании" },
      { en: "Only listed companies", bg: "Само листвани компании" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "COMPANY, PARTNERSHIP, or BODY CORPORATE that can commit corporate offenses (failure to prevent bribery, failure to prevent tax evasion facilitation). Broader than just companies. Includes: limited companies, LLPs, partnerships, unincorporated associations acting as corporate bodies. Key term for corporate criminal liability.",
      bg: "Компания, съдружие или юридическо лице; може да извърши корпоративни престъпления." 
    }
  },
  {
    id: 96,
    chapter: 17,
    question: { 
      en: "Short notice for general meeting (private company) requires:",
      bg: "Кратко уведомление за общо събрание (частна) изисква:" 
    },
    options: [
      { en: "51% agree", bg: "51% съгласни" },
      { en: "75% agree", bg: "75% съгласни" },
      { en: "90% agree", bg: "90% съгласни" },
      { en: "100% agree", bg: "100% съгласни" }
    ],
    correctIndex: 2,
    explanation: { 
      en: "90% of issued shares for general meeting (private). 95% for public company general meeting. AGM (public): ALL (100%) must agree. Short notice is waiver of 14 days clear notice. Rarely used—difficult to get unanimous/near-unanimous consent. Protects minority from rushed decisions.",
      bg: "90% за общо събрание (частна); 95% (публична); 100% за ОГС." 
    }
  },
  {
    id: 97,
    chapter: 18,
    question: { 
      en: "Centrebinding refers to:",
      bg: "Центрбиндинг се отнася до:" 
    },
    options: [
      { en: "Type of debenture", bg: "Вид облигация" },
      { en: "Abuse where members' liquidator disposes assets before creditors appoint", bg: "Злоупотреба където ликвидатор на членове разпорежда с активи преди кредитори назначат" },
      { en: "Share capital reduction", bg: "Намаляване на акционерен капитал" },
      { en: "Dividend payment", bg: "Плащане на дивидент" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Historic ABUSE in creditors' voluntary liquidation. Members' nominee liquidator disposed of assets (often to new company formed by same members) before creditors could appoint liquidator. Re Centrebind Ltd (1966). NOW: members' liquidator powers RESTRICTED during interim—only control property, dispose perishable, protect assets; other acts need court leave.",
      bg: "Злоупотреба: ликвидатор продава активи преди кредиторите; сега ограничени правомощия." 
    }
  },
  {
    id: 98,
    chapter: 19,
    question: { 
      en: "Encouraging another to deal in insider dealing—offense committed when:",
      bg: "Насърчаване на друг при вътрешна търговия—престъпление извършено кога:" 
    },
    options: [
      { en: "When dealing actually occurs", bg: "Когато сделката действително се случи" },
      { en: "At time of encouragement (even if no dealing)", bg: "При насърчаването (дори без сделка)" },
      { en: "When profit is made", bg: "Когато се направи печалба" },
      { en: "When discovered", bg: "Когато се открие" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "Offense committed AT TIME OF ENCOURAGEMENT—even if NO DEALING actually takes place. Example: 'I can't tell you why, but buy ABC plc shares now' = offense immediately. Irrelevant whether: person encouraged realizes price-affected, inside info given to them, any dealing occurs. Catching preparatory conduct.",
      bg: "При НАСЪРЧАВАНЕТО—дори без сделка; улавя подготвително поведение." 
    }
  },
  {
    id: 99,
    chapter: 17,
    question: { 
      en: "Members holding 5%+ can requisition resolution at AGM if delivered:",
      bg: "Членове с 5%+ могат да заявят решение на ОГС ако доставят:" 
    },
    options: [
      { en: "1 week before", bg: "1 седмица преди" },
      { en: "2 weeks before", bg: "2 седмици преди" },
      { en: "4 weeks before", bg: "4 седмици преди" },
      { en: "6 weeks before", bg: "6 седмици преди" }
    ],
    correctIndex: 3,
    explanation: { 
      en: "6 WEEKS before AGM/general meeting. Qualifying holding: 5% voting rights OR 100+ members with average £100 paid-up. Can include statement <1,000 words. Company sends with notice. Requisitionists bear costs unless company resolves otherwise. Allows minority to propose matters for AGM consideration.",
      bg: "6 СЕДМИЦИ преди; 5% гласове ИЛИ 100+ с £100; <1,000 думи изявление." 
    }
  },
  {
    id: 100,
    chapter: 19,
    question: { 
      en: "Fraudulent trading maximum penalty:",
      bg: "Максимално наказание за измамна търговия:" 
    },
    options: [
      { en: "5 years imprisonment", bg: "5 години затвор" },
      { en: "7 years imprisonment", bg: "7 години затвор" },
      { en: "10 years imprisonment and/or unlimited fine", bg: "10 години затвор и/или неограничена глоба" },
      { en: "Unlimited fine only", bg: "Само неограничена глоба" }
    ],
    correctIndex: 2,
    explanation: { 
      en: "10 YEARS IMPRISONMENT and/or UNLIMITED FINE (criminal penalty) + contribution to company assets (civil liability). Requires INTENT TO DEFRAUD. Most serious corporate offense. Compare: wrongful trading CIVIL only (no imprisonment). Fraudulent = intent; wrongful = negligence. Both can be during operation, management, OR liquidation.",
      bg: "10 ГОДИНИ затвор и/или неограничена глоба + принос към активи; изисква НАМЕРЕНИЕ." 
    }
  },
  {
    id: 101,
    chapter: 18,
    question: { 
      en: "Administrator must propose rescue plan within:",
      bg: "Администраторът трябва да предложи план за спасяване в рамките на:" 
    },
    options: [
      { en: "4 weeks", bg: "4 седмици" },
      { en: "8 weeks", bg: "8 седмици" },
      { en: "10 weeks", bg: "10 седмици" },
      { en: "12 weeks", bg: "12 седмици" }
    ],
    correctIndex: 1,
    explanation: { 
      en: "8 WEEKS (extendable) to set out proposals OR state why cannot be rescued. Then creditors' meeting within 10 WEEKS to approve. Total administration max 12 MONTHS. Proposals sent to Registrar, creditors, members. Must not: affect secured creditor rights, pay non-preferential before preferential, pay preferentials unequally.",
      bg: "8 СЕДМИЦИ за предложения; среща с кредитори 10 седмици; общо 12 МЕСЕЦА." 
    }
  },
  {
    id: 102,
    chapter: 19,
    question: { 
      en: "Which is NOT a type of market abuse?",
      bg: "Кое НЕ е вид пазарна злоупотреба?" 
    },
    options: [
      { en: "Misuse of information", bg: "Злоупотреба с информация" },
      { en: "Manipulating transactions", bg: "Манипулиране на сделки" },
      { en: "Tax evasion", bg: "Данъчно укриване" },
      { en: "Market distortion", bg: "Изкривяване на пазара" }
    ],
    correctIndex: 2,
    explanation: { 
      en: "Tax evasion is SEPARATE offense (Criminal Finances Act 2017), NOT market abuse. FIVE types of market abuse (FSMA 2000): (1) Misuse of information, (2) Manipulating transactions, (3) Manipulating devices, (4) Market distortion, (5) Dissemination of false information. All CIVIL—FCA enforces with unlimited fines.",
      bg: "Данъчно укриване е ОТДЕЛНО; пет вида пазарна злоупотреба: информация, манипулация, изкривяване." 
    }
  },

  // ============================================
  // TOTAL: 102 QUIZ QUESTIONS ✅✅ EXCEEDED 100!
  // CHAPTERS 1-19 FULLY COVERED
  // ============================================

];

export const getAllQuestions = () => quizData;

export const getQuestionsByChapter = (chapterNum) => {
  return quizData.filter(q => q.chapter === chapterNum);
};

export const getRandomQuestions = (count) => {
  const shuffled = [...quizData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

