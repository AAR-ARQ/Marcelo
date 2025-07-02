/**
 * TRILHA DE APRENDIZAGEM GAMIFICADA - JORNADA DO CAMPEÃO
 * CONTENT DATA STRUCTURE
 * Auto Arremate & Arremaq
 */

// ======================
// CORE CONTENT DATA
// ======================

const CONTENT_DATA = {
    // Application Metadata
    app: {
        title: "Jornada do Campeão",
        subtitle: "Trilha de Aprendizagem Gamificada",
        version: "3.0",
        brands: {
            autoArremate: "Auto Arremate",
            arremaq: "Arremaq"
        }
    },

    // Menu Principal Items
    menuItems: [
        {
            id: "playbook",
            title: "📚 Manual do Pit Stop",
            subtitle: "Guia Estratégico Completo",
            description: "Domine todas as estratégias, ferramentas e técnicas para se tornar um verdadeiro campeão de vendas.",
            icon: "fas fa-book",
            color: "aa-green",
            xpReward: 50,
            estimatedTime: "2-3 horas",
            difficulty: "Intermediário",
            prerequisite: null
        },
        {
            id: "jornada",
            title: "🗺️ Jornada do Cliente",
            subtitle: "Mapeamento de Experiências",
            description: "Compreenda profundamente cada etapa da experiência dos clientes e conduza negócios de sucesso.",
            icon: "fas fa-route",
            color: "arremaq-orange",
            xpReward: 75,
            estimatedTime: "1-2 horas",
            difficulty: "Avançado",
            prerequisite: "playbook"
        },
        {
            id: "brand",
            title: "🎨 Identidade de Marca",
            subtitle: "Guia de Comunicação Visual",
            description: "Aprenda a comunicar com a força e consistência das marcas Auto Arremate e Arremaq.",
            icon: "fas fa-palette",
            color: "aa-green",
            xpReward: 40,
            estimatedTime: "30-45 min",
            difficulty: "Básico",
            prerequisite: null
        },
        {
            id: "academia",
            title: "🎓 Academia de Repassadores",
            subtitle: "Centro de Excelência & IA",
            description: "Acesse ferramentas avançadas de IA e simule cenários reais de negociação.",
            icon: "fas fa-graduation-cap",
            color: "arremaq-orange",
            xpReward: 100,
            estimatedTime: "Flexível",
            difficulty: "Avançado",
            prerequisite: "jornada"
        },
        {
            id: "quiz",
            title: "🏅 Desafio do Conhecimento",
            subtitle: "Quiz Gamificado Interativo",
            description: "Teste seus conhecimentos e compete com outros campeões em desafios épicos.",
            icon: "fas fa-trophy",
            color: "warning",
            xpReward: 150,
            estimatedTime: "15-30 min",
            difficulty: "Variável",
            prerequisite: "playbook"
        }
    ],

    // Playbook Content Structure
    playbook: {
        title: "Manual do Pit Stop - Guia Estratégico",
        subtitle: "Seu GPS para o Sucesso no Universo Auto Arremate & Arremaq",
        chapters: [
            {
                id: "historia-valores",
                title: "🚀 Nossa Pista de Decolagem",
                subtitle: "História, Valores e Força da Equipe",
                icon: "fas fa-flag-checkered",
                estimatedTime: "15 min",
                xpReward: 25,
                content: {
                    introduction: "Bem-vindo ao coração da Auto Arremate & Arremaq, nobre piloto! Aqui, cada linha de código e cada estratégia são impulsionadas por um propósito maior: revolucionar a forma como o mercado acelera seus negócios.",
                    sections: [
                        {
                            title: "🧭 A Nascente da Nossa Jornada",
                            content: [
                                "Somos mais que uma plataforma; somos o seu copiloto na jornada rumo à máxima performance, equipados com a mais alta tecnologia e uma paixão contagiante por inovação.",
                                "Nossa cultura é um pit stop de ideias brilhantes, onde a colaboração e a busca incessante pela excelência abastecem nosso motor diariamente.",
                                "Nossa jornada começou com a visão de criar um ecossistema onde concessionárias, locadoras, financeiras e montadoras pudessem não apenas vender e comprar ativos, mas também otimizar cada etapa do processo."
                            ]
                        },
                        {
                            title: "🏆 Nossos Mentores Lendários",
                            content: [
                                "Nascemos com pedigree de campeão! Fazemos parte do Grupo Superbid, o 'Rei da Pista' dos repasses online na América Latina desde 1999.",
                                "Essa herança nos deu um motor potente de expertise, credibilidade e acesso a um grid de largada com milhares de compradores e vendedores.",
                                "E para garantir que estejamos sempre com o 'nitro' ligado na inovação, contamos com a Action Labs, o laboratório de ideias turbinadas do Grupo Superbid."
                            ]
                        },
                        {
                            title: "💖 O Combustível da Nossa Alma",
                            content: [
                                "🎯 Cliente no Pódio: Entregamos um carro que supera todas as expectativas na pista!",
                                "🤝 Jogo Limpo e Pista Transparente: Negócios e amizades na base da confiança e clareza total.",
                                "🚀 Coragem para Acelerar: Bravura para desbravar novas rotas e buscar o crescimento turbo!",
                                "✨ Pit Stop de Inovação: Buscamos incessantemente por tecnologias e ajustes que otimizem cada segundo na pista.",
                                "🌳 Corrida Consciente: Geramos valor pensando no meio ambiente e no impacto social.",
                                "⚙️ Engenharia de Alta Performance: Eficiência e qualidade de campeão em cada peça e estratégia.",
                                "😊 Equipe Unida, Vitória Garantida: Valorizamos nossos talentos, criando um ambiente de camaradagem e colaboração."
                            ]
                        }
                    ]
                }
            },
            {
                id: "auto-arremate-pole",
                title: "🚗 Auto Arremate na Pole Position",
                subtitle: "Dominando o Universo dos Veículos Leves",
                icon: "fas fa-car",
                estimatedTime: "20 min",
                xpReward: 35,
                content: {
                    introduction: "Prepare-se para entrar na pista de alta velocidade da Auto Arremate, onde cada veículo leve encontra seu destino de forma ágil, inteligente e lucrativa!",
                    sections: [
                        {
                            title: "🌟 A Garagem dos Campeões",
                            content: [
                                "Nossa plataforma é o seu box de ferramentas completo, projetado para concessionárias, locadoras e todos os ases do volante que buscam dominar o universo da comercialização de carros, SUVs, e utilitários.",
                                "Desde a avaliação precisa com o nosso RaioX, que enxerga cada detalhe do veículo como um mecânico experiente, até a publicação em nosso Marketplace B2B, a maior vitrine de oportunidades do Brasil.",
                                "Com nossos Dashboards, você tem o painel de controle para decisões na velocidade da luz, transformando dados em ultrapassagens estratégicas!"
                            ]
                        },
                        {
                            title: "✨ Nossos Pilares Mágicos (PDGC)",
                            pdgc: [
                                {
                                    letter: "P",
                                    title: "Precificação Inteligente",
                                    description: "Use nossos dados de mercado para calibrar seus preços como um campeão, maximizando sua margem em cada negociação!"
                                },
                                {
                                    letter: "D",
                                    title: "Divulgação Turbinada",
                                    description: "Seu veículo na vitrine certa! Alcance nacional em nosso Marketplace B2B e outros canais para vender mais rápido."
                                },
                                {
                                    letter: "G",
                                    title: "Gestão Eficiente",
                                    description: "Controle total do seu estoque, vistorias digitais com RaioX e dashboards para decisões ágeis. Seu pit stop de comando!"
                                },
                                {
                                    letter: "C",
                                    title: "Comercialização Vencedora",
                                    description: "Ferramentas e estratégias para fechar negócios mais rápido, com mais lucro e menos dor de cabeça. A bandeirada final!"
                                }
                            ]
                        },
                        {
                            title: "🦸 Os Superpoderes da Nossa Plataforma",
                            superpowers: [
                                {
                                    title: "Tudo Conectado: A Plataforma Integrada!",
                                    description: "Imagine um ecossistema digital onde todas as ferramentas que você precisa estão interligadas, funcionando em perfeita harmonia para uma visão 360º do seu negócio."
                                },
                                {
                                    title: "RaioX: A Visão de Raio-X Digital!",
                                    description: "Nossa ferramenta de inspeção digital permite um levantamento completo do estado do veículo, da lataria aos detalhes internos, garantindo a confiança para fechar negócios."
                                },
                                {
                                    title: "RaioX+: O Histórico Completo!",
                                    description: "Mergulhe fundo no passado do veículo, trazendo à tona informações cruciais como histórico de roubo, débitos, multas e sinistros para proteger seus negócios."
                                },
                                {
                                    title: "Dashboards: Decisões na Velocidade da Luz!",
                                    description: "Acompanhe em tempo real os indicadores chave do seu negócio: giro de estoque, performance de vendas, precificação e muito mais, para decisões rápidas e inteligentes."
                                },
                                {
                                    title: "Marketplace B2B: O Grande Ponto de Encontro!",
                                    description: "Conecte-se ao maior universo de oportunidades B2B do Brasil. Publique seus veículos para uma audiência qualificada ou encontre o estoque que você precisa."
                                },
                                {
                                    title: "Cotação Rápida: Agilidade Pura!",
                                    description: "Precisa avaliar um veículo para compra ou trade-in? Obtenha uma estimativa precisa e baseada em dados de mercado em questão de segundos."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                id: "arremaq-poder",
                title: "🚜 Arremaq: O Poder das Máquinas Pesadas",
                subtitle: "Dominando o Reino dos Equipamentos Industriais",
                icon: "fas fa-cogs",
                estimatedTime: "20 min",
                xpReward: 35,
                content: {
                    introduction: "Entre no universo poderoso da Arremaq, onde máquinas pesadas encontram seu destino através de tecnologia de ponta e expertise incomparável!",
                    sections: [
                        {
                            title: "⚡ O Reino dos Gigantes de Ferro",
                            content: [
                                "A Arremaq foi desenvolvida para facilitar a venda e o repasse de máquinas de diversos segmentos, desde escavadeiras até tratores agrícolas.",
                                "Permite que você anuncie seus ativos parados para compradores do Brasil inteiro, expandindo seu número de parceiros e aumentando seu potencial de venda e receita.",
                                "Tudo isso com governança e controle do início ao fim, garantindo transações seguras e eficientes."
                            ]
                        },
                        {
                            title: "🔧 Ferramentas Especializadas",
                            tools: [
                                {
                                    title: "Avaliação Técnica Especializada",
                                    description: "Sistema de avaliação específico para máquinas pesadas, considerando horas de uso, estado de conservação e mercado específico."
                                },
                                {
                                    title: "Rede de Parceiros Qualificados",
                                    description: "Acesso direto a compradores especializados em diferentes segmentos: construção, agronegócio, mineração e logística."
                                },
                                {
                                    title: "Documentação e Compliance",
                                    description: "Gestão completa de documentação técnica, certificações e compliance regulatório para máquinas pesadas."
                                },
                                {
                                    title: "Logística Especializada",
                                    description: "Coordenação de transporte e logística específica para equipamentos de grande porte e alta complexidade."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                id: "icps-personas",
                title: "🎯 Mapeando os Campeões",
                subtitle: "Nossos Clientes Ideais (ICPs & Personas)",
                icon: "fas fa-users",
                estimatedTime: "25 min",
                xpReward: 40,
                content: {
                    introduction: "No vasto universo das vendas, conhecer profundamente quem você almeja alcançar é a fundação sobre a qual se erguem os mais gloriosos impérios comerciais!",
                    sections: [
                        {
                            title: "🔑 O Mapa da Alma do Cliente",
                            content: [
                                "Compreender as dores latentes que afligem seus prospects, os desejos flamejantes que os impulsionam, os desafios hercúleos que enfrentam diariamente e as motivações arcanas que moldam suas decisões permite que você forje conexões genuínas e indestrutíveis.",
                                "Com este saber, suas ofertas ressoarão como um chamado irresistível ao destino, e você celebrará inúmeras conquistas, ouvindo o doce som do 'SIM!' triunfante ecoar pelos seus salões."
                            ]
                        },
                        {
                            title: "🌟 O Arquétipo do Cliente Ideal (ICP)",
                            icps: [
                                {
                                    brand: "Auto Arremate",
                                    focus: "Veículos Leves",
                                    firmographics: [
                                        "Indústria: Automotiva",
                                        "Tipo: Concessionárias, Locadoras, Agentes Financeiros, Revendedores",
                                        "Operação: Nacional",
                                        "Estoque: Empresas com estoque significativo de veículos usados ou frotas"
                                    ],
                                    environmental: [
                                        "Necessidade de acelerar a revenda de usados",
                                        "Abertura à transformação digital",
                                        "Foco em conformidade e governança"
                                    ],
                                    behavioral: [
                                        "Orientados a valor (foco em lucro e rentabilidade)",
                                        "Buscadores de otimização operacional",
                                        "Orientados ao crescimento",
                                        "Informados por dados"
                                    ]
                                },
                                {
                                    brand: "Arremaq",
                                    focus: "Máquinas Pesadas",
                                    firmographics: [
                                        "Indústria: Máquinas Pesadas, Agrícolas, Equipamentos Industriais",
                                        "Tipo: Concessionárias, Locadoras, Revendedores de Máquinas Pesadas",
                                        "Alcance: Nacional",
                                        "Ativos: Empresas com estoque significativo ou ativos ociosos"
                                    ],
                                    environmental: [
                                        "Necessidade de revender ativos de alto valor",
                                        "Adoção de soluções digitais para avaliação e gestão",
                                        "Foco em conformidade e governança"
                                    ],
                                    behavioral: [
                                        "Orientados a ROI",
                                        "Buscadores de agilidade e praticidade",
                                        "Valorizam acesso a rede ampla de compradores",
                                        "Informados por dados"
                                    ]
                                }
                            ]
                        },
                        {
                            title: "👥 Personas Detalhadas",
                            personas: [
                                {
                                    id: "gerente-seminovos",
                                    name: "Paulo Garcia",
                                    title: "Gerente de Seminovos",
                                    company: "Concessionária Premium",
                                    avatar: "👨‍💼",
                                    brand: "Auto Arremate",
                                    demographics: {
                                        age: "35-45 anos",
                                        education: "Superior em Administração ou Engenharia",
                                        experience: "8-15 anos no setor automotivo"
                                    },
                                    goals: [
                                        "Aumentar a rotatividade do estoque de seminovos",
                                        "Melhorar a margem de lucro nas vendas",
                                        "Reduzir o tempo de permanência dos veículos no pátio",
                                        "Otimizar o processo de precificação"
                                    ],
                                    painPoints: [
                                        "Dificuldade em precificar corretamente os veículos",
                                        "Estoque parado gerando custos",
                                        "Falta de visibilidade para compradores qualificados",
                                        "Processo manual e demorado de gestão"
                                    ],
                                    motivations: [
                                        "Atingir metas de vendas e rentabilidade",
                                        "Reconhecimento profissional",
                                        "Eficiência operacional",
                                        "Crescimento da carteira de clientes"
                                    ]
                                },
                                {
                                    id: "gerente-frota",
                                    name: "Ana Carolina Ferreira",
                                    title: "Gerente de Desmobilização de Frota",
                                    company: "Locadora Nacional",
                                    avatar: "👩‍💼",
                                    brand: "Auto Arremate",
                                    demographics: {
                                        age: "30-40 anos",
                                        education: "Superior em Administração, Economia ou Engenharia",
                                        experience: "5-12 anos em gestão de frotas"
                                    },
                                    goals: [
                                        "Maximizar o valor de revenda da frota",
                                        "Acelerar o processo de desmobilização",
                                        "Reduzir custos operacionais",
                                        "Manter alta taxa de ocupação da frota ativa"
                                    ],
                                    painPoints: [
                                        "Grandes volumes de veículos para desmobilizar",
                                        "Pressão por resultados financeiros",
                                        "Complexidade na gestão de diferentes modelos e idades",
                                        "Necessidade de rapidez sem perder rentabilidade"
                                    ],
                                    motivations: [
                                        "Otimização do ROI da frota",
                                        "Eficiência nos processos",
                                        "Reconhecimento por resultados",
                                        "Inovação em gestão de ativos"
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        ]
    },

    // Jornada do Cliente Data
    jornadas: [
        {
            id: "inbound-30-dias",
            title: "Jornada Inbound Marketing (0-30 dias)",
            brand: "Auto Arremate",
            description: "Conduzir leads qualificados através de conteúdo relevante até a assinatura do contrato",
            icon: "fas fa-magnet",
            duration: "30 dias",
            stages: [
                {
                    id: "atracao-conscientizacao",
                    title: "Atração e Conscientização",
                    duration: "Dias 1-7",
                    objective: "Atrair potenciais clientes através de conteúdo relevante e identificar aqueles prontos para conversa",
                    interactions: [
                        {
                            title: "Consumo de Conteúdo Relevante",
                            channel: "Blog, LinkedIn, Webinars, Materiais Ricos",
                            responsible: "Marketing",
                            description: "Cliente descobre a Auto Arremate através de conteúdo educacional sobre gestão de seminovos"
                        },
                        {
                            title: "Levantada de Mão",
                            channel: "Formulário no site, CTA em e-mails",
                            responsible: "Marketing, SDR/BDR",
                            description: "Cliente solicita contato ou demonstração após consumir conteúdo"
                        }
                    ]
                },
                {
                    id: "qualificacao-interesse",
                    title: "Qualificação e Demonstração de Interesse",
                    duration: "Dias 8-14",
                    objective: "Qualificar o lead e demonstrar valor através de apresentações personalizadas",
                    interactions: [
                        {
                            title: "Primeira Qualificação (BANT)",
                            channel: "Telefone, E-mail",
                            responsible: "SDR/BDR",
                            description: "Verificação de Budget, Authority, Need e Timeline"
                        },
                        {
                            title: "Demonstração Personalizada",
                            channel: "Videoconferência",
                            responsible: "Account Executive",
                            description: "Apresentação da plataforma focada nas necessidades específicas identificadas"
                        }
                    ]
                }
            ]
        },
        {
            id: "outbound-45-dias",
            title: "Jornada Outbound Sales (0-45 dias)",
            brand: "Auto Arremate",
            description: "Prospecção ativa de clientes através de abordagem direta e personalizada",
            icon: "fas fa-phone",
            duration: "45 dias",
            stages: [
                {
                    id: "prospeccao-ativa",
                    title: "Prospecção e Primeiro Contato",
                    duration: "Dias 1-10",
                    objective: "Identificar e fazer primeiro contato com prospects qualificados",
                    interactions: [
                        {
                            title: "Pesquisa e Mapeamento",
                            channel: "LinkedIn, Sites, Bases de dados",
                            responsible: "SDR/BDR",
                            description: "Identificação de empresas e contatos-chave no segmento alvo"
                        },
                        {
                            title: "Sequência de Outbound",
                            channel: "LinkedIn, E-mail, Telefone",
                            responsible: "SDR/BDR",
                            description: "Abordagem multicanal personalizada para gerar interesse"
                        }
                    ]
                }
            ]
        },
        {
            id: "maquinas-pesadas-60-dias",
            title: "Jornada Máquinas Pesadas (0-60 dias)",
            brand: "Arremaq",
            description: "Processo especializado para comercialização de equipamentos de grande porte",
            icon: "fas fa-truck",
            duration: "60 dias",
            stages: [
                {
                    id: "avaliacao-tecnica",
                    title: "Avaliação Técnica Especializada",
                    duration: "Dias 1-15",
                    objective: "Realizar avaliação completa e especializada do equipamento",
                    interactions: [
                        {
                            title: "Inspeção Técnica Presencial",
                            channel: "Visita técnica",
                            responsible: "Especialista Técnico",
                            description: "Avaliação detalhada de estado, funcionamento e documentação"
                        },
                        {
                            title: "Relatório de Avaliação",
                            channel: "Plataforma digital",
                            responsible: "Equipe Técnica",
                            description: "Documento completo com fotos, especificações e valor estimado"
                        }
                    ]
                }
            ]
        }
    ],

    // Quiz Questions Database
    quizQuestions: [
        {
            id: "q001",
            category: "Auto Arremate Básico",
            difficulty: "easy",
            question: "O que significa a sigla PDGC na metodologia da Auto Arremate?",
            options: [
                "Precificação, Divulgação, Gestão, Comercialização",
                "Produto, Design, Garantia, Comunicação",
                "Planejamento, Desenvolvimento, Gestão, Controle",
                "Preço, Distribuição, Governo, Cliente"
            ],
            correct: 0,
            explanation: "PDGC representa os quatro pilares da Auto Arremate: Precificação inteligente, Divulgação turbinada, Gestão eficiente e Comercialização vencedora.",
            xpReward: 10
        },
        {
            id: "q002",
            category: "Jornada do Cliente",
            difficulty: "medium",
            question: "Qual é o principal objetivo da etapa de 'Atração e Conscientização' na jornada inbound?",
            options: [
                "Fechar contratos imediatamente",
                "Atrair potenciais clientes e identificar interesse",
                "Cobrar pagamentos pendentes",
                "Fazer pesquisa de mercado"
            ],
            correct: 1,
            explanation: "A etapa de Atração e Conscientização visa atrair potenciais clientes através de conteúdo relevante e identificar aqueles que demonstram interesse em uma conversa.",
            xpReward: 15
        },
        {
            id: "q003",
            category: "Arremaq Especializado",
            difficulty: "hard",
            question: "Qual ferramenta da Arremaq é específica para avaliação de máquinas pesadas?",
            options: [
                "RaioX tradicional",
                "Avaliação Técnica Especializada",
                "Cotação Rápida apenas",
                "Dashboard básico"
            ],
            correct: 1,
            explanation: "A Arremaq possui um sistema de Avaliação Técnica Especializada específico para máquinas pesadas, considerando horas de uso, estado de conservação e mercado específico.",
            xpReward: 25
        },
        {
            id: "q004",
            category: "ICPs e Personas",
            difficulty: "medium",
            question: "Quais são os principais segmentos de clientes da Auto Arremate?",
            options: [
                "Apenas concessionárias",
                "Concessionárias, Locadoras, Agentes Financeiros e Revendedores",
                "Somente pessoas físicas",
                "Apenas montadoras"
            ],
            correct: 1,
            explanation: "A Auto Arremate atende diversos segmentos: Concessionárias, Locadoras, Agentes Financeiros e Revendedores, todos focados no mercado de veículos leves.",
            xpReward: 15
        },
        {
            id: "q005",
            category: "Ferramentas e Tecnologia",
            difficulty: "easy",
            question: "O que é o RaioX na plataforma Auto Arremate?",
            options: [
                "Um exame médico",
                "Ferramenta de inspeção digital de veículos",
                "Sistema de pagamento",
                "Aplicativo de mensagens"
            ],
            correct: 1,
            explanation: "O RaioX é nossa ferramenta de inspeção digital que permite um levantamento completo do estado do veículo, garantindo confiança nas negociações.",
            xpReward: 10
        }
    ],

    // Gamification System
    gamification: {
        levels: [
            { level: 1, name: "Novato da Pista", xpRequired: 0, badge: "🏁", color: "#94a3b8" },
            { level: 2, name: "Piloto Iniciante", xpRequired: 100, badge: "🚗", color: "#3b82f6" },
            { level: 3, name: "Condutor Experiente", xpRequired: 250, badge: "🏎️", color: "#16B097" },
            { level: 4, name: "Piloto Profissional", xpRequired: 500, badge: "🏆", color: "#FF8C00" },
            { level: 5, name: "Campeão da Pista", xpRequired: 1000, badge: "👑", color: "#fbbf24" },
            { level: 6, name: "Lenda das Pistas", xpRequired: 2000, badge: "⭐", color: "#a855f7" }
        ],
        achievements: [
            {
                id: "first_login",
                name: "Bem-vindo à Jornada",
                description: "Faça seu primeiro login na plataforma",
                icon: "fas fa-door-open",
                xpReward: 25,
                type: "milestone"
            },
            {
                id: "complete_playbook",
                name: "Mestre do Manual",
                description: "Complete todo o Manual do Pit Stop",
                icon: "fas fa-book-open",
                xpReward: 100,
                type: "completion"
            },
            {
                id: "quiz_master",
                name: "Gênio dos Quizzes",
                description: "Acerte 10 perguntas consecutivas no quiz",
                icon: "fas fa-brain",
                xpReward: 75,
                type: "performance"
            },
            {
                id: "speed_learner",
                name: "Aprendiz Veloz",
                description: "Complete um módulo em menos de 30 minutos",
                icon: "fas fa-tachometer-alt",
                xpReward: 50,
                type: "performance"
            },
            {
                id: "social_sharer",
                name: "Embaixador do Conhecimento",
                description: "Compartilhe seu progresso nas redes sociais",
                icon: "fas fa-share-alt",
                xpReward: 30,
                type: "social"
            }
        ],
        badges: [
            {
                id: "auto_arremate_expert",
                name: "Especialista Auto Arremate",
                description: "Domina todas as funcionalidades da Auto Arremate",
                icon: "🚗",
                requirements: ["complete_auto_arremate_modules"]
            },
            {
                id: "arremaq_master",
                name: "Mestre Arremaq",
                description: "Conhece profundamente o universo das máquinas pesadas",
                icon: "🚜",
                requirements: ["complete_arremaq_modules"]
            },
            {
                id: "journey_mapper",
                name: "Mapeador de Jornadas",
                description: "Especialista em jornadas do cliente",
                icon: "🗺️",
                requirements: ["complete_customer_journey"]
            }
        ]
    },

    // AI Tools Configuration
    aiTools: [
        {
            id: "objection_handler",
            name: "Simulador de Objeções",
            description: "Pratique respostas para objeções comuns de clientes",
            icon: "fas fa-shield-alt",
            category: "Sales Training",
            difficulty: "Intermediate"
        },
        {
            id: "pitch_optimizer",
            name: "Otimizador de Pitch",
            description: "Melhore sua apresentação de vendas com IA",
            icon: "fas fa-presentation",
            category: "Sales Training",
            difficulty: "Advanced"
        },
        {
            id: "negotiation_simulator",
            name: "Simulador de Negociação",
            description: "Simule cenários de negociação realistas",
            icon: "fas fa-handshake",
            category: "Negotiation",
            difficulty: "Advanced"
        },
        {
            id: "customer_analyzer",
            name: "Analisador de Perfil",
            description: "Analise o perfil e necessidades do cliente",
            icon: "fas fa-user-cog",
            category: "Customer Analysis",
            difficulty: "Intermediate"
        }
    ],

    // Spaced Repetition Configuration
    spacedRepetition: {
        intervals: [1, 3, 7, 14, 30, 90], // days
        difficultyMultipliers: {
            easy: 1.3,
            medium: 1.0,
            hard: 0.7
        }
    }
};

// ======================
// UTILITY FUNCTIONS
// ======================

const ContentManager = {
    // Get menu items
    getMenuItems() {
        return CONTENT_DATA.menuItems;
    },

    // Get playbook chapters
    getPlaybookChapters() {
        return CONTENT_DATA.playbook.chapters;
    },

    // Get specific chapter
    getChapter(chapterId) {
        return CONTENT_DATA.playbook.chapters.find(chapter => chapter.id === chapterId);
    },

    // Get jornadas
    getJornadas() {
        return CONTENT_DATA.jornadas;
    },

    // Get specific jornada
    getJornada(jornadaId) {
        return CONTENT_DATA.jornadas.find(jornada => jornada.id === jornadaId);
    },

    // Get quiz questions by category/difficulty
    getQuizQuestions(category = null, difficulty = null, limit = null) {
        let questions = CONTENT_DATA.quizQuestions;
        
        if (category) {
            questions = questions.filter(q => q.category === category);
        }
        
        if (difficulty) {
            questions = questions.filter(q => q.difficulty === difficulty);
        }
        
        if (limit) {
            questions = questions.slice(0, limit);
        }
        
        return questions;
    },

    // Get gamification data
    getGamificationData() {
        return CONTENT_DATA.gamification;
    },

    // Get AI tools
    getAITools() {
        return CONTENT_DATA.aiTools;
    },

    // Calculate user level based on XP
    calculateLevel(xp) {
        const levels = CONTENT_DATA.gamification.levels;
        let currentLevel = levels[0];
        
        for (let level of levels) {
            if (xp >= level.xpRequired) {
                currentLevel = level;
            } else {
                break;
            }
        }
        
        return currentLevel;
    },

    // Get next level info
    getNextLevel(xp) {
        const levels = CONTENT_DATA.gamification.levels;
        const currentLevel = this.calculateLevel(xp);
        const currentLevelIndex = levels.findIndex(l => l.level === currentLevel.level);
        
        if (currentLevelIndex < levels.length - 1) {
            return levels[currentLevelIndex + 1];
        }
        
        return null; // Max level reached
    },

    // Progress calculation
    calculateProgress(xp) {
        const currentLevel = this.calculateLevel(xp);
        const nextLevel = this.getNextLevel(xp);
        
        if (!nextLevel) {
            return 100; // Max level
        }
        
        const currentLevelXP = currentLevel.xpRequired;
        const nextLevelXP = nextLevel.xpRequired;
        const progressXP = xp - currentLevelXP;
        const totalXPNeeded = nextLevelXP - currentLevelXP;
        
        return Math.round((progressXP / totalXPNeeded) * 100);
    }
};

// Export for use in main application
window.ContentManager = ContentManager;
window.CONTENT_DATA = CONTENT_DATA;