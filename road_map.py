import networkx as nx
import plotly.graph_objects as go

def create_career_graph(job_role):
    G = nx.DiGraph()

    career_paths = {
        "Frontend Developer": [
            ("Basics of the Internet", "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"),
            ("HTML", "https://www.w3schools.com/html/"),
            ("CSS", "https://www.w3schools.com/css/"),
            ("JavaScript", "https://javascript.info/"),
            ("JavaScript Frameworks", "https://react.dev/"),
            ("JavaScript Libraries", "https://jquery.com/"),
            ("Version Control", "https://git-scm.com/doc"),
            ("Web Security", "https://owasp.org/www-project-top-ten/"),
            ("Node.js", "https://nodejs.org/en/docs"),
            ("Package Manager (Yarn & npm)", "https://docs.npmjs.com/"),
            ("Build Projects", "https://frontendmentor.io"),
            ("Success", "https://roadmap.sh/frontend")
        ],
        "Data Scientist": [
            ("Math & Statistics", "https://www.khanacademy.org/math/statistics-probability"),
            ("Python/R", "https://www.datacamp.com/"),
            ("Data Wrangling", "https://pandas.pydata.org/"),
            ("Exploratory Data Analysis", "https://towardsdatascience.com/exploratory-data-analysis"),
            ("Machine Learning", "https://scikit-learn.org/stable/"),
            ("Deep Learning", "https://www.deeplearning.ai/"),
            ("Big Data & Cloud", "https://cloud.google.com/training"),
            ("Deploy Models", "https://fastapi.tiangolo.com/deployment/"),
            ("Build Projects", "https://kaggle.com/"),
            ("Success", "https://roadmap.sh/data-scientist")
        ],
        "Backend Developer": [
            ("Operating Systems", "https://cs50.harvard.edu/"),
            ("Databases", "https://www.postgresql.org/docs/"),
            ("APIs & Web Services", "https://restfulapi.net/"),
            ("Server-side Languages (Python, Java, Node.js)", "https://developer.mozilla.org/en-US/docs/Learn/Server-side"),
            ("Authentication & Security", "https://auth0.com/docs"),
            ("Scalability & Caching", "https://redis.io/docs/"),
            ("DevOps & CI/CD", "https://aws.amazon.com/devops/what-is-devops/"),
            ("Build Projects", "https://backendroadmap.io/"),
            ("Success", "https://roadmap.sh/backend")
        ],
        "Astronomer": [
        ("Physics & Mathematics", "https://www.khanacademy.org/science/physics"),
        ("Astronomical Observations", "https://skyandtelescope.org/"),
        ("Astrophysics", "https://www.coursera.org/learn/astrophysics"),
        ("Telescopes & Instrumentation", "https://www.nasa.gov/"),
        ("Data Analysis & Programming", "https://www.python.org/"),
        ("Research & Publications", "https://arxiv.org/"),
        ("Success", "https://www.aas.org/astronomy-resources")
    ],
    "Geologist": [
        ("Earth Science Basics", "https://www.usgs.gov/science/science-explorer"),
        ("Mineralogy & Petrology", "https://www.mineralogy.org/"),
        ("Geological Mapping", "https://www.bgs.ac.uk/"),
        ("Remote Sensing & GIS", "https://www.esri.com/en-us/home"),
        ("Field Work & Research", "https://www.nps.gov/subjects/geology/index.htm"),
        ("Success", "https://www.americangeosciences.org/")
    ],
      "Marine Biologist": [
          ("Biology & Oceanography", "https://www.noaa.gov/"),
          ("Marine Ecosystems", "https://www.nationalgeographic.com/environment/oceans"),
          ("Research Methods", "https://www.sciencedirect.com/"),
          ("Conservation & Policy", "https://www.marineconservation.org/"),
          ("Field Studies & Expeditions", "https://www.mbari.org/"),
          ("Success", "https://www.marinecareers.net/")
      ],
      "Veterinarian": [
          ("Animal Science & Biology", "https://www.avma.org/"),
          ("Veterinary Medicine", "https://www.aavmc.org/"),
          ("Clinical Experience", "https://www.veterinarypracticenews.com/"),
          ("Animal Surgery & Treatment", "https://vetmed.ucdavis.edu/"),
          ("Success", "https://www.avma.org/professionaldevelopment")
      ],
      "Chartered Accountant": [
          ("Accounting Principles", "https://www.accountingcoach.com/"),
          ("Auditing", "https://www.ifac.org/"),
          ("Taxation", "https://www.irs.gov/"),
          ("Financial Management", "https://www.coursera.org/learn/financial-management")
      ],
      "Computer Analyst": [
          ("Systems Analysis", "https://www.ibm.com/cloud/learn/it-analyst"),
          ("Software Development", "https://developer.mozilla.org/en-US/"),
          ("Databases", "https://www.mysql.com/"),
          ("Cybersecurity", "https://www.cybrary.it/"),
          ("Success", "https://www.comptia.org/")
        ],
      "Computer Programmer": [
          ("Programming Basics", "https://www.codecademy.com/"),
          ("Data Structures & Algorithms", "https://www.geeksforgeeks.org/"),
          ("Software Development", "https://developer.mozilla.org/en-US/"),
          ("Version Control", "https://git-scm.com/doc"),
          ("Success", "https://roadmap.sh/software-engineer")
      ],
          "Nature Photographer": [
      ("Photography Basics", "https://www.digital-photography-school.com/"),
      ("Camera Equipment", "https://www.bhphotovideo.com/"),
      ("Composition Techniques", "https://www.photographytalk.com/"),
      ("Lighting Techniques", "https://www.lightstalking.com/"),
      ("Post-Processing", "https://www.adobe.com/products/photoshop.html"),
      ("Portfolio Development", "https://www.smugmug.com/"),
      ("Success", "https://www.naturephotographer.com/")
          ],

          "Recording Engineer": [
              ("Audio Fundamentals", "https://www.coursera.org/learn/audio-fundamentals"),
              ("Microphone Techniques", "https://www.soundonsound.com/techniques/microphone-techniques"),
              ("Mixing & Mastering", "https://www.izotope.com/en/learn/mixing-and-mastering.html"),
              ("Digital Audio Workstations (DAWs)", "https://www.ableton.com/en/live/"),
              ("Signal Processing", "https://www.dsprelated.com/"),
              ("Success", "https://www.recordingrevolution.com/")
          ],

          "Audiologist": [
              ("Hearing Science", "https://www.asha.org/public/hearing/"),
              ("Audiometric Testing", "https://www.audiology.org/"),
              ("Hearing Aids & Devices", "https://www.asha.org/public/hearing-aids/"),
              ("Patient Care", "https://www.audiology.org/practice/patient-care"),
              ("Research & Development", "https://www.ncbi.nlm.nih.gov/"),
              ("Success", "https://www.audiology.org/")
          ],

          "Sound Editor": [
              ("Audio Editing Software", "https://www.adobe.com/products/audition.html"),
              ("Sound Design", "https://www.soundonsound.com/techniques/sound-design"),
              ("Dialogue Editing", "https://www.pro-tools-expert.com/home-page/2018/1/15/dialogue-editing-tips"),
              ("Foley Art", "https://www.foleyartist.com/"),
              ("Mixing Techniques", "https://www.izotope.com/en/learn/mixing.html"),
              ("Success", "https://www.soundonsound.com/")
          ],

          "Music Teacher": [
              ("Music Theory", "https://www.musictheory.net/"),
              ("Instrument Proficiency", "https://www.ultimate-guitar.com/"),
              ("Teaching Methods", "https://www.teachmusic.com/"),
              ("Curriculum Development", "https://www.musiceducators.co.uk/"),
              ("Performance Skills", "https://www.musicalchairs.info/"),
              ("Success", "https://www.musicteachers.co.uk/")
          ],

          "Actuary": [
              ("Mathematics & Statistics", "https://www.khanacademy.org/math/statistics-probability"),
              ("Actuarial Science", "https://www.beanactuary.org/"),
              ("Risk Management", "https://www.soa.org/"),
              ("Financial Mathematics", "https://www.coursera.org/learn/financial-mathematics"),
              ("Professional Development", "https://www.thecasinstitute.org/"),
              ("Success", "https://www.actuary.com/")
          ],

          "Database Designer": [
              ("Database Fundamentals", "https://www.w3schools.com/sql/"),
              ("Data Modeling", "https://www.lucidchart.com/pages/data-modeling"),
              ("SQL Proficiency", "https://www.codecademy.com/learn/learn-sql"),
              ("Database Management Systems", "https://www.oracle.com/database/"),
              ("Normalization Techniques", "https://www.guru99.com/database-normalization.html"),
              ("Success", "https://www.dataversity.net/")
          ],

          "Economist": [
              ("Microeconomics", "https://www.coursera.org/learn/microeconomics"),
              ("Macroeconomics", "https://www.khanacademy.org/economics-finance-domain/macroeconomics"),
              ("Statistical Analysis", "https://www.statisticshowto.com/"),
              ("Economic Theory", "https://www.economicshelp.org/"),
              ("Research Methods", "https://www.researchgate.net/"),
              ("Success", "https://www.aeaweb.org/")
          ],

          "Librarian": [
              ("Library Science", "https://www.ala.org/"),
              ("Cataloging & Classification", "https://www.loc.gov/catdir/pcc/"),
              ("Information Literacy", "https://www.infolit.org/"),
              ("Digital Libraries", "https://www.dlib.org/"),
              ("Archival Management", "https://www.archivists.org/"),
                  ("Success", "https://www.ala.org/"),
          ],

          "Engineer": [
              ("Engineering Fundamentals", "https://www.khanacademy.org/science/engineering"),
              ("Mathematics & Physics", "https://www.coursera.org/learn/physics"),
              ("Specialization in Engineering Field", "https://www.edx.org/learn/engineering"),
              ("Project Management", "https://www.pmi.org/"),
              ("Technical Communication", "https://www.elsevier.com/books/technical-communication/"),
              ("Success", "https://www.engineering.com/"),
          ],

          "Lawyer": [
              ("Legal Fundamentals", "https://www.law.com/"),
              ("Legal Research & Writing", "https://www.lexisnexis.com/en-us/gateway.page"),
              ("Contract Law", "https://www.coursera.org/learn/contract-law"),
              ("Litigation Skills", "https://www.nolo.com/legal-encyclopedia/litigation-skills-29900.html"),
              ("Ethics in Law", "https://www.americanbar.org/groups/professional_responsibility/"),
              ("Success", "https://www.americanbar.org/"),
          ],

          "Pharmacist": [
              ("Pharmaceutical Sciences", "https://www.pharmacytimes.com/"),
              ("Clinical Pharmacy", "https://www.pharmacypractice.org/"),
              ("Pharmacology", "https://www.ncbi.nlm.nih.gov/books/NBK92752/"),
              ("Patient Care", "https://www.ashp.org/"),
              ("Regulatory Affairs", "https://www.fda.gov/"),
              ("Success", "https://www.pharmacist.com/"),
          ],

          "Physician": [
              ("Medical School Preparation", "https://www.aamc.org/"),
              ("Clinical Skills", "https://www.usmle.org/"),
              ("Patient Care", "https://www.acponline.org/"),
              ("Specialization Training", "https://www.abms.org/"),
              ("Continuing Medical Education", "https://www.accme.org/"),
              ("Success", "https://www.ama-assn.org/")
          ],

            "Physicist": [
                ("Physics Fundamentals", "https://www.khanacademy.org/science/physics"),
                ("Advanced Physics Topics", "https://www.coursera.org/browse/physical-science-and-engineering/physics"),
                ("Research Methodologies", "https://www.nature.com/nature-research/"),
                ("Laboratory Techniques", "https://www.sciencedirect.com/topics/physics-and-astronomy/laboratory-techniques"),
                ("Publishing Research", "https://arxiv.org/"),
                ("Success", "https://www.aps.org/careers/")
            ],

            "Mathematician": [
                ("Mathematical Foundations", "https://www.khanacademy.org/math"),
                ("Advanced Mathematics", "https://www.coursera.org/browse/math-and-logic"),
                ("Research in Mathematics", "https://www.ams.org/"),
                ("Mathematical Modeling", "https://www.mathworks.com/solutions/mathematical-modeling.html"),
                ("Publishing Papers", "https://www.springer.com/gp/authors-editors"),
                ("Success", "https://www.mathjobs.org/")
            ],

            "Leader": [
                ("Leadership Principles", "https://www.coursera.org/learn/leadership-skills"),
                ("Emotional Intelligence", "https://www.talentsmart.com/"),
                ("Team Management", "https://www.mindtools.com/pages/article/newLDR_90.htm"),
                ("Conflict Resolution", "https://www.pon.harvard.edu/"),
                ("Strategic Thinking", "https://www.strategyzer.com/"),
                ("Success", "https://www.forbes.com/leadership/")
            ],

            "Manager": [
                ("Management Fundamentals", "https://www.coursera.org/learn/management-fundamentals"),
                ("Project Management", "https://www.pmi.org/"),
                ("Team Leadership", "https://www.mindtools.com/pages/article/newLDR_90.htm"),
                ("Performance Management", "https://www.shrm.org/resourcesandtools/tools-and-samples/toolkits/pages/performance-management.aspx"),
                ("Financial Management", "https://www.investopedia.com/terms/f/financial-management.asp"),
                ("Success", "https://www.managementstudyguide.com/")
            ],

            "Politician": [
                ("Political Science Basics", "https://www.coursera.org/browse/social-sciences/political-science"),
                ("Public Speaking", "https://www.toastmasters.org/"),
                ("Campaign Strategies", "https://www.campaignsandelections.com/"),
                ("Policy Analysis", "https://www.policyanalysis.org/"),
                ("Networking & Advocacy", "https://www.americanprogress.org/"),
                ("Success", "https://www.nass.org/can-I-vote")
            ],

            "Social Worker": [
                ("Social Work Fundamentals", "https://www.socialworkers.org/"),
                ("Counseling Techniques", "https://www.counseling.org/"),
                ("Community Resources", "https://www.naswpress.org/"),
                ("Crisis Intervention", "https://www.crisisprevention.com/"),
                ("Ethics in Social Work", "https://www.socialworkers.org/About/Ethics/Code-of-Ethics"),
                ("Success", "https://www.socialworklicensemap.com/")
            ],

            "Receptionist": [
                ("Customer Service Skills", "https://www.udemy.com/course/customer-service-skills/"),
                ("Office Management", "https://www.coursera.org/learn/office-management"),
                ("Communication Skills", "https://www.mindtools.com/pages/article/newCS_99.htm"),
                ("Time Management", "https://www.mindtools.com/pages/article/newTMM_00.htm"),
                ("Professional Etiquette", "https://www.businessnewsdaily.com/10047-business-etiquette.html"),
                ("Success", "https://www.thebalancecareers.com/receptionist-2060525")
            ],

            "Sales Representative": [
                ("Sales Techniques", "https://www.udemy.com/course/sales-training/"),
                ("Customer Relationship Management (CRM)", "https://www.salesforce.com/products/crm/what-is-crm/"),
                ("Negotiation Skills", "https://www.coursera.org/learn/negotiation-skills"),
                ("Product Knowledge", "https://www.hubspot.com/sales"),
                ("Closing Techniques", "https://www.saleshacker.com/sales-closing-techniques/"),
            ],
          "Counselor": [
          ("Counseling Fundamentals", "https://www.counseling.org/"),
          ("Therapeutic Techniques", "https://www.psychologytoday.com/us/basics/counseling"),
          ("Ethics in Counseling", "https://www.counseling.org/knowledge-center/ethics"),
          ("Crisis Intervention Strategies", "https://www.crisisprevention.com/"),
          ("Client Assessment", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6461230/"),
          ("Professional Development", "https://www.apa.org/education-career/graduate/counseling-psychology"),
          ("Success", "https://www.counseling.org/careers")
      ],

          "Athlete": [
              ("Physical Training", "https://www.acefitness.org/education-and-resources/lifestyle/blog/7401/10-tips-for-training-like-an-athlete/"),
              ("Nutrition for Athletes", "https://www.eatright.org/fitness/sports-and-performance"),
              ("Mental Conditioning", "https://www.psychologytoday.com/us/basics/sports-psychology"),
              ("Injury Prevention", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6461230/"),
              ("Performance Analysis", "https://www.sportsci.org/jour/0101/mg.htm"),
              ("Career Management", "https://www.thebalancecareers.com/how-to-become-a-professional-athlete-4171535"),
              ("Success", "https://www.athletes.com/")
          ],
            "Dancer": [
            ("Dance Techniques", "https://www.dance.com/"),
            ("Choreography", "https://www.danceadvantage.net/choreography/"),
            ("Performance Skills", "https://www.danceinforma.com/"),
            ("Audition Preparation", "https://www.backstage.com/magazine/article/audition-tips-dancers-7060/"),
            ("Physical Conditioning", "https://www.acefitness.org/education-and-resources/lifestyle/blog/7401/10-tips-for-training-like-an-athlete/"),
            ("Success", "https://www.danceusa.org/")
        ],

        "Mechanic": [
            ("Automotive Fundamentals", "https://www.coursera.org/learn/automotive-engineering"),
            ("Diagnostic Techniques", "https://www.ase.com/"),
            ("Repair Procedures", "https://www.napaonline.com/en/learn/auto-repair-101"),
            ("Safety Standards", "https://www.osha.gov/"),
            ("Customer Service Skills", "https://www.indeed.com/career-advice/career-development/customer-service-skills"),
            ("Success", "https://www.mechanicbase.com/")
        ],

        "Actor/Actress": [
            ("Acting Techniques", "https://www.masterclass.com/classes/acting-101-with-samuel-l-jackson"),
            ("Auditioning Skills", "https://www.backstage.com/magazine/article/audition-tips-7060/"),
            ("Character Development", "https://www.theactingstudio.co.uk/"),
            ("Voice and Speech Training", "https://www.voiceandtheactor.com/"),
            ("Networking in the Industry", "https://www.indiewire.com/"),
            ("Success", "https://www.actorsstudio.co.uk/")
        ],

        "Physical Therapist": [
            ("Anatomy and Physiology", "https://www.khanacademy.org/science/health-and-medicine/human-biology-and-health"),
            ("Therapeutic Techniques", "https://www.apta.org/"),
            ("Patient Assessment", "https://www.physio-pedia.com/"),
            ("Rehabilitation Protocols", "https://www.ncbi.nlm.nih.gov/"),
            ("Continuing Education", "https://www.apta.org/education/continuing-education"),
            ("Success", "https://www.physicaltherapy.com/")
        ],

        "Editor": [
            ("Editing Fundamentals", "https://www.thebalancecareers.com/how-to-become-an-editor-2062260"),
            ("Proofreading Techniques", "https://www.grammarly.com/blog/proofreading-tips/"),
            ("Style Guides", "https://www.apastyle.org/"),
            ("Content Management Systems", "https://www.w3schools.com/whatis/whatis_cms.asp"),
            ("Freelancing as an Editor", "https://www.thebalancecareers.com/how-to-become-a-freelance-editor-2062261"),
            ("Success", "https://www.editorialfreelancers.org/")
        ],

        "Historian": [
            ("Historical Research Methods", "https://www.historians.org/"),
            ("Archival Research", "https://www.archives.gov/"),
            ("Writing History", "https://www.historians.org/publications-and-directories/perspectives-on-history"),
            ("Public History", "https://publichistory.org/"),
            ("Teaching History", "https://www.teachinghistory.org/"),
            ("Success", "https://www.americanhistoricalassociation.org/")
        ],

        "Journalist": [
            ("Journalism Basics", "https://www.coursera.org/learn/journalism"),
            ("Investigative Reporting", "https://www.icij.org/"),
            ("Writing and Editing", "https://www.poynter.org/"),
            ("Multimedia Journalism", "https://www.journalism.co.uk/"),
            ("Ethics in Journalism", "https://www.spj.org/ethicscode.asp"),
            ("Success", "https://www.nabj.org/")
        ],
        "Dancer": [
        ("Dance Techniques", "https://www.dance.com/"),
        ("Choreography", "https://www.danceadvantage.net/choreography/"),
        ("Performance Skills", "https://www.danceinforma.com/"),
        ("Audition Preparation", "https://www.backstage.com/magazine/article/audition-tips-dancers-7060/"),
        ("Physical Conditioning", "https://www.acefitness.org/education-and-resources/lifestyle/blog/7401/10-tips-for-training-like-an-athlete/"),
        ("Success", "https://www.danceusa.org/")
    ],

        "Mechanic": [
            ("Automotive Fundamentals", "https://www.coursera.org/learn/automotive-engineering"),
            ("Diagnostic Techniques", "https://www.ase.com/"),
            ("Repair Procedures", "https://www.napaonline.com/en/learn/auto-repair-101"),
            ("Safety Standards", "https://www.osha.gov/"),
            ("Customer Service Skills", "https://www.indeed.com/career-advice/career-development/customer-service-skills"),
            ("Success", "https://www.mechanicbase.com/")
        ],

        "Actor/Actress": [
            ("Acting Techniques", "https://www.masterclass.com/classes/acting-101-with-samuel-l-jackson"),
            ("Auditioning Skills", "https://www.backstage.com/magazine/article/audition-tips-7060/"),
            ("Character Development", "https://www.theactingstudio.co.uk/"),
            ("Voice and Speech Training", "https://www.voiceandtheactor.com/"),
            ("Networking in the Industry", "https://www.indiewire.com/"),
            ("Success", "https://www.actorsstudio.co.uk/")
        ],

        "Physical Therapist": [
            ("Anatomy and Physiology", "https://www.khanacademy.org/science/health-and-medicine/human-biology-and-health"),
            ("Therapeutic Techniques", "https://www.apta.org/"),
            ("Patient Assessment", "https://www.physio-pedia.com/"),
            ("Rehabilitation Protocols", "https://www.ncbi.nlm.nih.gov/"),
            ("Continuing Education", "https://www.apta.org/education/continuing-education"),
            ("Success", "https://www.physicaltherapy.com/")
        ],

        "Editor": [
            ("Editing Fundamentals", "https://www.thebalancecareers.com/how-to-become-an-editor-2062260"),
            ("Proofreading Techniques", "https://www.grammarly.com/blog/proofreading-tips/"),
            ("Style Guides", "https://www.apastyle.org/"),
            ("Content Management Systems", "https://www.w3schools.com/whatis/whatis_cms.asp"),
            ("Freelancing as an Editor", "https://www.thebalancecareers.com/how-to-become-a-freelance-editor-2062261"),
            ("Success", "https://www.editorialfreelancers.org/")
        ],

        "Historian": [
            ("Historical Research Methods", "https://www.historians.org/"),
            ("Archival Research", "https://www.archives.gov/"),
            ("Writing History", "https://www.historians.org/publications-and-directories/perspectives-on-history"),
            ("Public History", "https://publichistory.org/"),
            ("Teaching History", "https://www.teachinghistory.org/"),
            ("Success", "https://www.americanhistoricalassociation.org/")
        ],

        "Journalist": [
            ("Journalism Basics", "https://www.coursera.org/learn/journalism"),
            ("Investigative Reporting", "https://www.icij.org/"),
            ("Writing and Editing", "https://www.poynter.org/"),
            ("Multimedia Journalism", "https://www.journalism.co.uk/"),
            ("Ethics in Journalism", "https://www.spj.org/ethicscode.asp"),
            ("Success", "https://www.nabj.org/")
        ],

          "Language Teacher": [
              ("Language Acquisition Theories", "https://www.teachingenglish.org.uk/article/language-acquisition"),
              ("Curriculum Development", "https://www.tefl.net/"),
              ("Teaching Methodologies", "https://www.edutopia.org/"),
              ("Assessment Techniques", "https://www.ets.org/"),
              ("Classroom Management", "https://www.teachhub.com/classroom-management"),
              ("Success", "https://www.teachingenglish.org.uk/")
          ],

          "Poet": [
              ("Poetry Fundamentals", "https://www.poets.org/poetsorg/poetry-101"),
              ("Writing Techniques", "https://www.writingforward.com/creative-writing/poetry-writing-tips"),
              ("Reading and Analyzing Poetry", "https://www.poetryfoundation.org/learn"),
              ("Publishing Poetry", "https://www.writersdigest.com/publishing-insights/how-to-publish-your-poetry"),
              ("Participating in Workshops", "https://www.poetryfoundation.org/poetry-classes"),
              ("Success", "https://www.poets.org/")
          ],

          "Broadcaster": [
              ("Broadcasting Basics", "https://www.coursera.org/learn/broadcasting"),
              ("Voice Training", "https://www.masterclass.com/classes/voice-training-for-broadcasters"),
              ("Scriptwriting", "https://www.writersstore.com/scriptwriting/"),
              ("Interview Techniques", "https://www.journalism.co.uk/news/how-to-conduct-an-interview/s2/a1062020/"),
              ("Media Ethics", "https://www.spj.org/ethicscode.asp"),
              ("Success", "https://www.broadcasters.com/")
          ],

          "Artist": [
              ("Art Fundamentals", "https://www.khanacademy.org/humanities/art-history"),
              ("Techniques and Mediums", "https://www.artistsnetwork.com/"),
              ("Art History", "https://www.metmuseum.org/art/learn/"),
              ("Portfolio Development", "https://www.creativebloq.com/advice/how-to-create-an-art-portfolio"),
              ("Exhibiting Work", "https://www.artsy.net/article/artsy-editorial-how-to-get-your-art-in-a-gallery"),
              ("Success", "https://www.artsy.net/")
          ],

          "Graphic Designer": [
              ("Design Principles", "https://www.canva.com/learn/design-principles/"),
              ("Software Proficiency (Adobe Suite)", "https://helpx.adobe.com/creative-cloud/tutorials-explore.html"),
              ("Typography", "https://www.typography.com/"),
              ("Color Theory", "https://www.colormatters.com/"),
              ("Portfolio Development", "https://www.creativebloq.com/advice/how-to-create-a-graphic-design-portfolio"),
              ("Success", "https://www.aiga.org/")
          ],

          "Fashion Designer": [
              ("Fashion Design Basics", "https://www.coursera.org/learn/fashion-design"),
              ("Textile Knowledge", "https://www.textileworld.com/"),
              ("Pattern Making", "https://www.sewing.org/"),
              ("Fashion Illustration", "https://www.skillshare.com/browse/fashion-illustration"),
              ("Trend Analysis", "https://www.wgsn.com/en/"),
              ("Success", "https://www.fashiondesigners.org/")
          ],

          "Interior Designer": [
              ("Interior Design Fundamentals", "https://www.coursera.org/learn/interior-design"),
              ("Color Theory", "https://www.colorpsychology.org/"),
              ("Space Planning", "https://www.ihd.org/"),
              ("Furniture and Decor Selection", "https://www.houzz.com/"),
              ("Sustainable Design Practices", "https://www.usgbc.org/"),
              ("Success", "https://www.asid.org/")
          ],
          "Pilot": [
              ("Flight Training Basics", "https://www.faa.gov/pilots/training/"),
              ("Aerodynamics", "https://www.khanacademy.org/science/physics/fluids/aerodynamics"),
              ("Navigation Skills", "https://www.faa.gov/"),
              ("Aircraft Systems", "https://www.pilotworkshop.com/"),
              ("Regulations and Safety Procedures", "https://www.faa.gov/regulations_policies/"),
              ("Weather Understanding", "https://www.weather.gov/"),
              ("Flight Planning", "https://www.faa.gov/flightplans/"),
              ("Communication Skills", "https://www.pilotworkshop.com/communication/"),
              ("Advanced Flight Maneuvers", "https://www.aopa.org/training-and-safety/online-learning"),
              ("Continuing Education and Certifications", "https://www.faa.gov/pilots/"),
              ("Success", "https://www.aopa.org/")
          ],
            "Psychologist": [
            ("Psychology Fundamentals", "https://www.khanacademy.org/science/psychology"),
            ("Research Methods in Psychology", "https://www.apa.org/science/about/psa/2019/01/research-methods"),
            ("Therapeutic Techniques", "https://www.psychologytoday.com/us/basics/therapy"),
            ("Ethics in Psychology", "https://www.apa.org/ethics/code"),
            ("Specializations in Psychology", "https://www.apa.org/education-career/guide"),
            ("Continuing Education", "https://www.apa.org/education-career/continuing-education"),
            ("Success", "https://www.apa.org/")
        ],

        "Philosopher": [
            ("Philosophical Foundations", "https://plato.stanford.edu/"),
            ("Major Philosophical Texts", "https://www.goodreads.com/list/show/1.Best_Philosophy_Books"),
            ("Critical Thinking Skills", "https://www.coursera.org/learn/critical-thinking-skills"),
            ("Ethics and Morality", "https://www.iep.utm.edu/"),
            ("Philosophy of Mind", "https://www.philosophy.com/"),
            ("Success", "https://www.philosophy.com/")
        ],

        "Writer": [
            ("Writing Fundamentals", "https://www.writingforward.com/"),
            ("Creative Writing Techniques", "https://www.masterclass.com/classes/creative-writing-101"),
            ("Editing and Revising", "https://www.grammarly.com/blog/editing-and-revising/"),
            ("Publishing Your Work", "https://www.writersdigest.com/publishing-insights"),
            ("Building a Portfolio", "https://www.thebalancecareers.com/how-to-create-a-writing-portfolio-2071860"),
            ("Success", "https://www.writers.com/")
        ],

        "Criminologist": [
            ("Criminology Basics", "https://www.coursera.org/learn/criminology"),
            ("Research Methods in Criminology", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6461230/"),
            ("Criminal Justice System", "https://www.ojp.gov/"),
            ("Forensic Science", "https://www.forensicsciencetechnology.org/"),
            ("Victimology", "https://www.ncjrs.gov/"),
            ("Success", "https://www.acjs.org/")
        ],

        "Company Secretary": [
            ("Corporate Governance", "https://www.icsi.edu/"),
            ("Legal Compliance", "https://www.lexisnexis.com/en-us/gateway.page"),
            ("Corporate Law", "https://www.law.com/"),
            ("Board Management", "https://www.boardeffect.com/"),
            ("Risk Management", "https://www.rims.org/"),
            ("Success", "https://www.corporatesecretary.com/")
        ],

        "Marketing Professional": [
            ("Marketing Fundamentals", "https://www.coursera.org/learn/marketing-fundamentals"),
            ("Digital Marketing Strategies", "https://www.digitalmarketinginstitute.com/"),
            ("Market Research Techniques", "https://www.qualtrics.com/experience-management/brand/market-research/"),
            ("Content Marketing", "https://www.contentmarketinginstitute.com/"),
            ("Social Media Marketing", "https://www.hootsuite.com/"),
            ("Success", "https://www.ama.org/")
        ],

        "Logistics Manager": [
            ("Logistics Fundamentals", "https://www.coursera.org/learn/logistics-management"),
            ("Supply Chain Management", "https://www.apics.org/"),
            ("Inventory Management", "https://www.investopedia.com/terms/i/inventory-management.asp"),
            ("Transportation Management", "https://www.transportation.gov/"),
            ("Warehouse Management", "https://www.warehousemgmt.com/"),
            ("Success", "https://www.logisticsmgmt.com/")
        ],


        "Research Analyst": [
            ("Data Analysis & Statistics", "https://www.khanacademy.org/math/statistics-probability"),
            ("Financial & Market Research", "https://www.investopedia.com/"),
            ("Quantitative & Qualitative Research Methods", "https://www.coursera.org/learn/research-methods"),
            ("Excel & Data Visualization", "https://www.datacamp.com/"),
            ("Report Writing & Communication", "https://hbr.org/"),
            ("Success", "https://www.cfainstitute.org/")
        ],

        "Business Manager": [
            ("Business Management Fundamentals", "https://online.hbs.edu/"),
            ("Leadership & Team Management", "https://executive.mit.edu/"),
            ("Strategic Planning", "https://www.mckinsey.com/"),
            ("Operations & Project Management", "https://www.pmi.org/"),
            ("Financial & Budgeting Skills", "https://corporatefinanceinstitute.com/"),
            ("Success", "https://www.forbes.com/sites/forbesbusinesscouncil/")
        ],

        "Internal Auditor": [
            ("Internal Audit Principles", "https://www.theiia.org/"),
            ("Risk Assessment & Compliance", "https://www.isaca.org/"),
            ("Financial Auditing", "https://www.aicpa.org/"),
            ("Fraud Detection & Prevention", "https://www.acfe.com/"),
            ("Regulatory & Ethical Standards", "https://www.sec.gov/"),
            ("Success", "https://internalauditor.theiia.org/")
        ],

        "Chief Financial Officer (CFO)": [
            ("Financial Planning & Strategy", "https://hbr.org/"),
            ("Corporate Finance & Accounting", "https://corporatefinanceinstitute.com/"),
            ("Investment & Capital Management", "https://www.cfainstitute.org/"),
            ("Risk & Compliance Management", "https://www.ft.com/"),
            ("Leadership & Business Acumen", "https://www.mckinsey.com/"),
            ("Success", "https://www.cfodive.com/")
        ],

        "Business Analyst": [
            ("Business Analysis Fundamentals", "https://www.iiba.org/"),
            ("Data Analysis & Visualization", "https://www.tableau.com/"),
            ("Process Improvement & Optimization", "https://www.sixsigmainstitute.org/"),
            ("Requirements Gathering & Documentation", "https://www.iiba.org/standards-and-resources/babok/"),
            ("Agile & Scrum Methodologies", "https://www.scrum.org/"),
            ("Success", "https://www.modernanalyst.com/")
        ],

        "Banking Jobs": [
            ("Banking & Financial Services Overview", "https://www.investopedia.com/"),
            ("Retail & Corporate Banking", "https://www.bankinghub.eu/"),
            ("Risk & Credit Management", "https://www.risk.net/"),
            ("Investment Banking & Trading", "https://www.wallstreetprep.com/"),
            ("Regulatory Compliance & Ethics", "https://www.bis.org/bcbs/"),
            ("Success", "https://www.thebanker.com/")
        ],
        "Stock Broker": [
        ("Stock Market Fundamentals", "https://www.investopedia.com/"),
        ("Trading Strategies", "https://www.nyse.com/"),
        ("Securities & Exchange Regulations", "https://www.sec.gov/"),
        ("Technical & Fundamental Analysis", "https://www.coursera.org/learn/financial-markets"),
        ("Portfolio & Risk Management", "https://www.cfainstitute.org/"),
        ("Success", "https://www.nasdaq.com/")
    ],

        "Financial Advisor": [
            ("Personal Finance & Wealth Management", "https://www.khanacademy.org/"),
            ("Retirement & Investment Planning", "https://www.fidelity.com/"),
            ("Taxation & Estate Planning", "https://www.irs.gov/"),
            ("Risk Assessment & Insurance", "https://www.naic.org/"),
            ("Regulatory Compliance & Ethics", "https://www.finra.org/"),
            ("Success", "https://www.napfa.org/")
        ],

        "Consultant": [
            ("Consulting Fundamentals", "https://www.mckinsey.com/"),
            ("Problem Solving & Critical Thinking", "https://hbr.org/"),
            ("Data-Driven Decision Making", "https://www.coursera.org/learn/data-driven-decision-making"),
            ("Client Communication & Relationship Management", "https://www.forbes.com/sites/forbescoachescouncil/"),
            ("Project & Change Management", "https://www.pmi.org/"),
            ("Success", "https://www.consultingmag.com/")
        ],

        "Archaeologist": [
            ("Archaeology Fundamentals", "https://www.britishmuseum.org/"),
            ("Fieldwork & Excavation Techniques", "https://www.archaeological.org/"),
            ("Historical & Cultural Research", "https://www.saa.org/"),
            ("GIS & Remote Sensing in Archaeology", "https://www.esri.com/"),
            ("Artifact Preservation & Analysis", "https://www.getty.edu/conservation/"),
            ("Success", "https://www.archaeology.org/")
        ],

        "Pre-Primary Teacher": [
            ("Early Childhood Education", "https://www.naeyc.org/"),
            ("Child Psychology & Development", "https://www.apa.org/"),
            ("Creative Learning Techniques", "https://www.montessori.org/"),
            ("Classroom Management", "https://www.edutopia.org/"),
            ("Success", "https://www.teachermagazine.com/")
        ],

        "Primary Teacher": [
            ("Teaching Pedagogy", "https://www.teach.org/"),
            ("Curriculum Planning", "https://www.education.com/"),
            ("Student Engagement Strategies", "https://www.edutopia.org/"),
            ("Assessment & Evaluation", "https://www.ascd.org/"),
            ("Success", "https://www.teachingchannel.com/")
        ],

        "Middle & Higher School Teacher": [
            ("Subject Specialization", "https://www.khanacademy.org/"),
            ("Classroom & Behavior Management", "https://www.pbis.org/"),
            ("Technology in Education", "https://www.edtechmagazine.com/"),
            ("Student Mentorship & Guidance", "https://www.schoolcounselor.org/"),
            ("Success", "https://www.teachertoolkit.co.uk/")
        ],

        "Professor": [
            ("Advanced Subject Knowledge", "https://www.jstor.org/"),
            ("Research & Publishing", "https://www.springer.com/"),
            ("Academic Writing & Grants", "https://www.nature.com/naturecareers/"),
            ("Higher Education Pedagogy", "https://www.chronicle.com/"),
            ("Mentoring & PhD Supervision", "https://www.insidehighered.com/"),
            ("Success", "https://www.timeshighereducation.com/")
        ],
         "Anthropologist": [
        ("Anthropology Fundamentals", "https://www.americananthro.org/"),
        ("Cultural & Social Anthropology", "https://www.sapiens.org/"),
        ("Biological & Archaeological Anthropology", "https://www.nationalgeographic.com/"),
        ("Field Research Methods", "https://www.cambridge.org/"),
        ("Linguistic Anthropology", "https://www.ethnologue.com/"),
        ("Success", "https://www.anthropology-news.org/")
        ],

        "Medical (Doctor)": [
            ("Medical Science & Human Anatomy", "https://www.medicalnewstoday.com/"),
            ("Clinical Diagnosis & Treatment", "https://www.nejm.org/"),
            ("Medical Ethics & Patient Care", "https://www.ama-assn.org/"),
            ("Specializations (Cardiology, Neurology, etc.)", "https://www.aamc.org/"),
            ("Research & Continuing Medical Education", "https://www.who.int/"),
            ("Success", "https://www.medscape.com/")
        ],

        "Para Medical": [
            ("Emergency Medical Services (EMS)", "https://www.naemt.org/"),
            ("Medical Lab Technology", "https://www.ascls.org/"),
            ("Radiology & Imaging", "https://www.arrt.org/"),
            ("Physiotherapy & Rehabilitation", "https://www.apta.org/"),
            ("Nursing & Patient Care", "https://www.nursingworld.org/"),
            ("Success", "https://www.healthcareers.nhs.uk/")
        ],

        "Military": [
            ("Military Training & Strategy", "https://www.army.mil/"),
            ("Physical & Tactical Readiness", "https://www.military.com/"),
            ("Weaponry & Defense Systems", "https://www.darpa.mil/"),
            ("Cyber & Electronic Warfare", "https://www.nsa.gov/"),
            ("Leadership & Discipline", "https://www.defense.gov/"),
            ("Success", "https://www.westpoint.edu/")
        ],

        "Para Military": [
            ("Border Security & Law Enforcement", "https://www.bsf.nic.in/"),
            ("Counterterrorism & Special Operations", "https://www.nia.gov.in/"),
            ("Disaster Response & Rescue", "https://www.ndrf.gov.in/"),
            ("Combat & Survival Skills", "https://www.nia.gov.in/"),
            ("Cyber & Intelligence Operations", "https://www.ib.gov.in/"),
            ("Success", "https://www.nsc.gov.in/")
        ],

        "Police Force": [
            ("Law Enforcement Basics", "https://www.fbi.gov/"),
            ("Criminal Investigation & Forensics", "https://www.ncjrs.gov/"),
            ("Community Policing & Crisis Management", "https://www.policechiefmagazine.org/"),
            ("Cybercrime & Digital Forensics", "https://www.interpol.int/"),
            ("Leadership & Public Safety", "https://www.rand.org/"),
            ("Success", "https://www.scpolicechief.com/")
        ],

        "Technician": [
            ("Mechanical & Electrical Basics", "https://www.asme.org/"),
            ("Electronics & Circuit Design", "https://www.ieee.org/"),
            ("IT & Networking", "https://www.cisco.com/"),
            ("Automotive & Aviation Technology", "https://www.sae.org/"),
            ("Safety & Maintenance Practices", "https://www.ansi.org/"),
            ("Success", "https://www.technicians.org/")
        ]
        }

    if job_role not in career_paths:
        print("Invalid Input: No roadmap available for", job_role)
        return None

    path = career_paths[job_role]
    for i in range(len(path) - 1):
        G.add_edge(path[i][0], path[i + 1][0])

    return G, path
def visualize_career_path(G, path, job_role):
    if G is None:
        return

    # Arrange nodes in a straight line
    pos = {node[0]: (0, -i) for i, node in enumerate(path)}

    edge_x, edge_y = [], []
    for edge in G.edges():
        x0, y0 = pos[edge[0]]
        x1, y1 = pos[edge[1]]
        edge_x.extend([x0, x1, None])
        edge_y.extend([y0, y1, None])

    edge_trace = go.Scatter(
        x=edge_x, y=edge_y,
        line=dict(width=2, color='#888'),
        hoverinfo='none',
        mode='lines'
    )

    node_x, node_y, node_text = [], [], []
    for node, link in path:
        x, y = pos[node]
        node_x.append(x)
        node_y.append(y)
        node_text.append(f"{node}<br><a href='{link}'>Learn more</a>")

    node_trace = go.Scatter(
        x=node_x, y=node_y,
        mode='markers+text',
        marker=dict(size=20, color='skyblue', line=dict(width=2, color='black')),
        text=node_text,
       textposition='middle right',

        hoverinfo='text'
    )

    fig = go.Figure(data=[edge_trace, node_trace],
                    layout=go.Layout(
                        title=f'{job_role} Roadmap',
                        showlegend=False,
                        hovermode='closest',
                        margin=dict(b=20, l=100, r=100, t=40),
                        xaxis=dict(showgrid=False, zeroline=False, showticklabels=False),
                        yaxis=dict(showgrid=False, zeroline=False, showticklabels=False)
                    ))

    fig.show()

