const interacoes = {
    "Aciclovir": {
        "Tenofovir": {
            "efeitoClinico": "Tontura; diarreia; vômito; neuropatia",
            "recomendacao": "Monitorar aumento dos efeitos tóxicos do tenofovir (tontura; diarreia; neuropatia; vômito).",
            "gravidade": "Moderada"
        },
        "Zidovudina": {
            "efeitoClinico": "Letargia e fadiga grave",
            "recomendacao": "Observar a ocorrência de letargia e fadiga.",
            "gravidade": "Moderada"
        }
    },
    "Ácido épsilon aminocapróico": {
        "Tretinoína": {
            "efeitoClinico": "↑ risco de trombose",
            "recomendacao": "Monitorar paciente via hemograma, TAP e TTPA. Monitorar o paciente quanto aos sinais clínicos como dor no peito, falta de ar, hemoptise, hematúria, perda súbita da visão, dor, vermelhidão ou inchaço em uma extremidade.",
            "gravidade": "Grave"
        }
    },
    "Ácido fólico": {
        "Capecitabina": {
            "efeitoClinico": "Ocorrência de anorexia, ulceração da boca, diarreia com sangue, sangramento vaginal.",
            "recomendacao": "O uso concomitante deve ser evitado. Os doentes devem ser monitorizados atentamente quanto à toxicidade potencial da capecitabina, como neutropenia, trombocitopenia, estomatite, hemorragia gastrointestinal, diarreia grave, vômito, reações cutâneas, e neuropatia. Monitorar paciente via hemograma.",
            "gravidade": "Grave"
        }
    },
    "Amicacina": {
        "Diclofenaco": {
            "efeitoClinico": "↑ ocorrência de nefrotoxicidade",
            "recomendacao": "Monitorar aumento dos efeitos nefrotóxicos dos aminoglicosídeos (amicacina/gentamicina).",
            "gravidade": "Moderada"
        },
        "Ibuprofeno": {
            "efeitoClinico": "↑ ocorrência de nefrotoxicidade",
            "recomendacao": "Monitorar aumento dos efeitos nefrotóxicos dos aminoglicosídeos (amicacina/gentamicina).",
            "gravidade": "Moderada"
        },
        "Naproxeno": {
            "efeitoClinico": "↑ ocorrência de nefrotoxicidade",
            "recomendacao": "Monitorar aumento dos efeitos nefrotóxicos dos aminoglicosídeos (amicacina/gentamicina).",
            "gravidade": "Moderada"
        },
        "Cefalotina": {
            "efeitoClinico": "↑ ocorrência de nefrotoxicidade",
            "recomendacao": "Monitorar aumento dos efeitos nefrotóxicos dos aminoglicosídeos (amicacina/gentamicina).",
            "gravidade": "Moderada"
        }
    },
    "Gentamicina": {
        "Diclofenaco": {
            "efeitoClinico": "↑ ocorrência de nefrotoxicidade",
            "recomendacao": "Monitorar aumento dos efeitos nefrotóxicos dos aminoglicosídeos (amicacina/gentamicina).",
            "gravidade": "Moderada"
        },
        "Ibuprofeno": {
            "efeitoClinico": "↑ ocorrência de nefrotoxicidade",
            "recomendacao": "Monitorar aumento dos efeitos nefrotóxicos dos aminoglicosídeos (amicacina/gentamicina).",
            "gravidade": "Moderada"
        },
        "Naproxeno": {
            "efeitoClinico": "↑ ocorrência de nefrotoxicidade",
            "recomendacao": "Monitorar aumento dos efeitos nefrotóxicos dos aminoglicosídeos (amicacina/gentamicina).",
            "gravidade": "Moderada"
        },
        "Cefalotina": {
            "efeitoClinico": "↑ ocorrência de nefrotoxicidade",
            "recomendacao": "Monitorar aumento dos efeitos nefrotóxicos dos aminoglicosídeos (amicacina/gentamicina).",
            "gravidade": "Moderada"
        }
    },
    "Amiodarona": {
        "Diltiazem": {
            "efeitoClinico": "Bradicardia, parada sinusal e ↓ débito cardíaco",
            "recomendacao": "Considerar modificação da terapia. Monitorar aumento dos efeitos terapêuticos da Amiodarona e sinais de toxicidade.",
            "gravidade": "Grave"
        },
        "Verapamil": {
            "efeitoClinico": "Bradicardia, parada sinusal e ↓ débito cardíaco",
            "recomendacao": "Considerar modificação da terapia. Monitorar aumento dos efeitos terapêuticos da Amiodarona e sinais de toxicidade.",
            "gravidade": "Grave"
        },
        "Atazanavir": {
            "efeitoClinico": "Arritmias cardíacas potencialmente letais",
            "recomendacao": "Uso concomitante deve ser evitado.",
            "gravidade": "Grave"
        },
        "Lopinavir": {
            "efeitoClinico": "Arritmias cardíacas potencialmente letais",
            "recomendacao": "Uso concomitante deve ser evitado.",
            "gravidade": "Grave"
        },
        "Ritonavir": {
            "efeitoClinico": "Arritmias cardíacas potencialmente letais",
            "recomendacao": "Uso concomitante deve ser evitado.",
            "gravidade": "Grave"
        },
        "Propranolol": {
            "efeitoClinico": "Hipotensão arterial, bradicardia e parada cardíaca",
            "recomendacao": "Monitorar sinais e sintomas de bradicardia. Monitorar a pressão arterial. Exceção: Atenolol.",
            "gravidade": "Grave"
        },
        "Metoprolol": {
            "efeitoClinico": "Hipotensão arterial, bradicardia e parada cardíaca",
            "recomendacao": "Monitorar sinais e sintomas de bradicardia. Monitorar a pressão arterial. Exceção: Atenolol.",
            "gravidade": "Grave"
        },
        "Ciclosporina": {
            "efeitoClinico": "↑ efeito terapêutico da ciclosporina (imunossupressão)",
            "recomendacao": "Considerar modificação na terapia ou ajuste de dose.",
            "gravidade": "Moderada"
        },
        "Digoxina": {
            "efeitoClinico": "Náusea, vômito e arritmia (toxicidade pela digoxina)",
            "recomendacao": "Considerar modificação da terapia ou redução de um terço da dose da Digoxina. Monitorar efeitos tóxicos (náusea, vômito e arritmia).",
            "gravidade": "Moderada"
        },
        "Lidocaína": {
            "efeitoClinico": "Crises convulsivas",
            "recomendacao": "Monitorar aumento da toxicidade da Lidocaína (convulsões).",
            "gravidade": "Moderada"
        },
        "Amitriptilina": {
            "efeitoClinico": "Arritmias ventriculares",
            "recomendacao": "Uso concomitante deve ser feito com cautela. Observar risco-benefício. Monitorar ocorrência de arritmias.",
            "gravidade": "Grave"
        },
        "Levofloxacino": {
            "efeitoClinico": "Arritmias ventriculares",
            "recomendacao": "Uso concomitante deve ser feito com cautela. Observar risco-benefício. Monitorar ocorrência de arritmias.",
            "gravidade": "Grave"
        },
        "Moxifloxacino": {
            "efeitoClinico": "Arritmias ventriculares",
            "recomendacao": "Uso concomitante deve ser feito com cautela. Observar risco-benefício. Monitorar ocorrência de arritmias.",
            "gravidade": "Grave"
        },
        "Claritromicina": {
            "efeitoClinico": "Arritmias ventriculares",
            "recomendacao": "Uso concomitante deve ser feito com cautela. Observar risco-benefício. Monitorar ocorrência de arritmias.",
            "gravidade": "Grave"
        },
        "Clorpromazina": {
            "efeitoClinico": "Arritmias ventriculares",
            "recomendacao": "Uso concomitante deve ser feito com cautela. Observar risco-benefício. Monitorar ocorrência de arritmias.",
            "gravidade": "Grave"
        },
        "Domperidona": {
            "efeitoClinico": "Arritmias ventriculares",
            "recomendacao": "Uso concomitante deve ser feito com cautela. Observar risco-benefício. Monitorar ocorrência de arritmias.",
            "gravidade": "Grave"
        },
        "Octreotida": {
            "efeitoClinico": "Arritmias ventriculares",
            "recomendacao": "Uso concomitante deve ser feito com cautela. Observar risco-benefício. Monitorar ocorrência de arritmias.",
            "gravidade": "Grave"
        },
        "Voriconazol": {
            "efeitoClinico": "Arritmias ventriculares",
            "recomendacao": "Uso concomitante deve ser feito com cautela. Observar risco-benefício. Monitorar ocorrência de arritmias.",
            "gravidade": "Grave"
        },
        "Hidrocortisona": {
            "efeitoClinico": "Risco de arritmias; Hipocalemia; Hipomagnesemia",
            "recomendacao": "Monitorar frequência cardíaca e níveis séricos de potássio e magnésio.",
            "gravidade": "Grave"
        },
        "Ondansetrona": {
            "efeitoClinico": "Risco de arritmias; Hipocalemia; Hipomagnesemia",
            "recomendacao": "Monitorar frequência cardíaca e níveis séricos de potássio e magnésio.",
            "gravidade": "Grave"
        }
    },
    "Ampicilina": {
        "Alopurinol": {
            "efeitoClinico": "↑ ocorrência de hipersensibilidade cutânea à ampicilina",
            "recomendacao": "Monitorar o aumento da incidência de reações de hipersensibilidade.",
            "gravidade": "Moderada"
        },
        "Doxiciclina": {
            "efeitoClinico": "↓ efeitos terapêuticos da Ampicilina",
            "recomendacao": "Administrar os medicamentos com intervalo de pelo menos duas horas.",
            "gravidade": "Grave"
        }
    },
    "Anfoterecina B": {
        "Amicacina": {
            "efeitoClinico": "↑ efeito nefrotóxico dos aminoglicosídeos",
            "recomendacao": "Monitorar função renal.",
            "gravidade": "Moderada"
        },
        "Gentamicina": {
            "efeitoClinico": "↑ efeito nefrotóxico dos aminoglicosídeos",
            "recomendacao": "Monitorar função renal.",
            "gravidade": "Moderada"
        },
        "Ciclosporina": {
            "efeitoClinico": "↑ efeito nefrotóxico da ciclosporina",
            "recomendacao": "Monitorar função renal.",
            "gravidade": "Moderada"
        }
    },
    "Anlodipino": {
        "Ritonavir": {
            "efeitoClinico": "↑ efeitos terapêuticos e tóxicos do anlodipino",
            "recomendacao": "Monitorar o aumento dos efeitos terapêuticos (hipotensão arterial) e tóxicos (fadiga; edema; alterações do ritmo cardíaco).",
            "gravidade": "Moderada"
        },
        "Lopinavir": {
            "efeitoClinico": "↑ efeitos terapêuticos e tóxicos do anlodipino",
            "recomendacao": "Monitorar o aumento dos efeitos terapêuticos (hipotensão arterial) e tóxicos (fadiga; edema; alterações do ritmo cardíaco).",
            "gravidade": "Moderada"
        },
        "Atazanavir": {
            "efeitoClinico": "↑ efeitos terapêuticos e tóxicos do anlodipino",
            "recomendacao": "Monitorar o aumento dos efeitos terapêuticos (hipotensão arterial) e tóxicos (fadiga; edema; alterações do ritmo cardíaco).",
            "gravidade": "Moderada"
        },
        "Atenolol": {
            "efeitoClinico": "↑ Efeito hipotensor do anlodipino e ocorrência de bradicardia",
            "recomendacao": "Monitorar ocorrência de bradicardia, hipotensão arterial, ou sinais de insuficiência cardíaca.",
            "gravidade": "Moderada"
        },
        "Metoprolol": {
            "efeitoClinico": "↑ Efeito hipotensor do anlodipino e ocorrência de bradicardia",
            "recomendacao": "Monitorar ocorrência de bradicardia, hipotensão arterial, ou sinais de insuficiência cardíaca.",
            "gravidade": "Moderada"
        },
        "Propranolol": {
            "efeitoClinico": "↑ Efeito hipotensor do anlodipino e ocorrência de bradicardia",
            "recomendacao": "Monitorar ocorrência de bradicardia, hipotensão arterial, ou sinais de insuficiência cardíaca.",
            "gravidade": "Moderada"
        },
        "Carbamazepina": {
            "efeitoClinico": "↓ efeito terapêutico do anlodipino",
            "recomendacao": "Monitorar a pressão arterial.",
            "gravidade": "Moderada"
        },
        "Carbonato de Cálcio": {
            "efeitoClinico": "↓ efeito terapêutico do anlodipino",
            "recomendacao": "Monitorar a pressão arterial.",
            "gravidade": "Moderada"
        },
        "Ciclosporina": {
            "efeitoClinico": "↑ efeitos terapêuticos e tóxicos do anlodipino",
            "recomendacao": "Monitorar o aumento dos efeitos terapêuticos (hipotensão arterial) e tóxicos (fadiga; edema; alterações do ritmo cardíaco).",
            "gravidade": "Moderada"
        }
    },
    "Nifedipino": {
        "Cetoconazol": {
            "efeitoClinico": "↑ efeitos terapêuticos e tóxicos dos bloqueadores de canal de cálcio",
            "recomendacao": "Monitorar o aumento dos efeitos terapêuticos (hipotensão arterial) e tóxicos (fadiga; edema; alterações do ritmo cardíaco).",
            "gravidade": "Moderada"
        },
        "Itraconazol": {
            "efeitoClinico": "↑ efeitos terapêuticos e tóxicos dos bloqueadores de canal de cálcio",
            "recomendacao": "Monitorar o aumento dos efeitos terapêuticos (hipotensão arterial) e tóxicos (fadiga; edema; alterações do ritmo cardíaco).",
            "gravidade": "Moderada"
        },
        "Miconazol": {
            "efeitoClinico": "↑ efeitos terapêuticos e tóxicos dos bloqueadores de canal de cálcio",
            "recomendacao": "Monitorar o aumento dos efeitos terapêuticos (hipotensão arterial) e tóxicos (fadiga; edema; alterações do ritmo cardíaco).",
            "gravidade": "Moderada"
        }
    },
    "Nimodipino": {
        "Cetoconazol": {
            "efeitoClinico": "↑ efeitos terapêuticos e tóxicos dos bloqueadores de canal de cálcio",
            "recomendacao": "Monitorar o aumento dos efeitos terapêuticos (hipotensão arterial) e tóxicos (fadiga; edema; alterações do ritmo cardíaco).",
            "gravidade": "Moderada"
        },
        "Itraconazol": {
            "efeitoClinico": "↑ efeitos terapêuticos e tóxicos dos bloqueadores de canal de cálcio",
            "recomendacao": "Monitorar o aumento dos efeitos terapêuticos (hipotensão arterial) e tóxicos (fadiga; edema; alterações do ritmo cardíaco).",
            "gravidade": "Moderada"
        },
        "Miconazol": {
            "efeitoClinico": "↑ efeitos terapêuticos e tóxicos dos bloqueadores de canal de cálcio",
            "recomendacao": "Monitorar o aumento dos efeitos terapêuticos (hipotensão arterial) e tóxicos (fadiga; edema; alterações do ritmo cardíaco).",
            "gravidade": "Moderada"
        }
    },
    "Diltiazem": {
        "Cetoconazol": {
            "efeitoClinico": "↑ efeitos terapêuticos e tóxicos dos bloqueadores de canal de cálcio",
            "recomendacao": "Monitorar o aumento dos efeitos terapêuticos (hipotensão arterial) e tóxicos (fadiga; edema; alterações do ritmo cardíaco).",
            "gravidade": "Moderada"
        },
        "Itraconazol": {
            "efeitoClinico": "↑ efeitos terapêuticos e tóxicos dos bloqueadores de canal de cálcio",
            "recomendacao": "Monitorar o aumento dos efeitos terapêuticos (hipotensão arterial) e tóxicos (fadiga; edema; alterações do ritmo cardíaco).",
            "gravidade": "Moderada"
        },
        "Miconazol": {
            "efeitoClinico": "↑ efeitos terapêuticos e tóxicos dos bloqueadores de canal de cálcio",
            "recomendacao": "Monitorar o aumento dos efeitos terapêuticos (hipotensão arterial) e tóxicos (fadiga; edema; alterações do ritmo cardíaco).",
            "gravidade": "Moderada"
        }
    },
    "Verapamil": {
        "Cetoconazol": {
            "efeitoClinico": "↑ efeitos terapêuticos e tóxicos dos bloqueadores de canal de cálcio",
            "recomendacao": "Monitorar o aumento dos efeitos terapêuticos (hipotensão arterial) e tóxicos (fadiga; edema; alterações do ritmo cardíaco).",
            "gravidade": "Moderada"
        },
        "Itraconazol": {
            "efeitoClinico": "↑ efeitos terapêuticos e tóxicos dos bloqueadores de canal de cálcio",
            "recomendacao": "Monitorar o aumento dos efeitos terapêuticos (hipotensão arterial) e tóxicos (fadiga; edema; alterações do ritmo cardíaco).",
            "gravidade": "Moderada"
        },
        "Miconazol": {
            "efeitoClinico": "↑ efeitos terapêuticos e tóxicos dos bloqueadores de canal de cálcio",
            "recomendacao": "Monitorar o aumento dos efeitos terapêuticos (hipotensão arterial) e tóxicos (fadiga; edema; alterações do ritmo cardíaco).",
            "gravidade": "Moderada"
        }
    },
    "Atenolol": {
        "Ampicilina": {
            "efeitoClinico": "↓ efeito anti-hipertensivo do beta-bloqueador (atenolol)",
            "recomendacao": "Monitorar pressão arterial.",
            "gravidade": "Moderada"
        }
    },
    "Captopril": {
        "AAS": {
            "efeitoClinico": "↓ resposta anti-hipertensiva",
            "recomendacao": "Monitorar pressão arterial.",
            "gravidade": "Moderada"
        },
        "Trimetropima": {
            "efeitoClinico": "↑ hipercalemia",
            "recomendacao": "Monitorar níveis séricos de potássio.",
            "gravidade": "Moderada"
        },
        "Diclofenaco": {
            "efeitoClinico": "↓ resposta anti-hipertensiva; ↑ risco de disfunção renal",
            "recomendacao": "Monitorar pressão arterial. Considerar terapia antiinflamatória alternativa (principalmente pacientes com ICC).",
            "gravidade": "Moderada"
        },
        "Ibuprofeno": {
            "efeitoClinico": "↓ resposta anti-hipertensiva; ↑ risco de disfunção renal",
            "recomendacao": "Monitorar pressão arterial. Considerar terapia antiinflamatória alternativa (principalmente pacientes com ICC).",
            "gravidade": "Moderada"
        },
        "Naproxeno": {
            "efeitoClinico": "↓ resposta anti-hipertensiva; ↑ risco de disfunção renal",
            "recomendacao": "Monitorar pressão arterial. Considerar terapia antiinflamatória alternativa (principalmente pacientes com ICC).",
            "gravidade": "Moderada"
        },
        "Antiácidos (Carbonato de Cálcio)": {
            "efeitoClinico": "↓ resposta anti-hipertensiva",
            "recomendacao": "Monitorar pressão arterial. Administrar com intervalo de no mínimo 2 horas.",
            "gravidade": "Moderada"
        },
        "Bicarbonato de sódio": {
            "efeitoClinico": "↓ resposta anti-hipertensiva",
            "recomendacao": "Monitorar pressão arterial. Administrar com intervalo de no mínimo 2 horas.",
            "gravidade": "Moderada"
        },
        "Hidróxido de alumínio": {
            "efeitoClinico": "↓ resposta anti-hipertensiva",
            "recomendacao": "Monitorar pressão arterial. Administrar com intervalo de no mínimo 2 horas.",
            "gravidade": "Moderada"
        },
        "Alopurinol": {
            "efeitoClinico": "↑ risco de reações alérgicas ao alopurinol",
            "recomendacao": "Observar evidências de hipersensibilidade ao alopurinol por no mínimo 5 semanas.",
            "gravidade": "Grave"
        },
        "Azatioprina": {
            "efeitoClinico": "↑ efeito neutropênico da Azatioprina",
            "recomendacao": "Monitorar aumento de efeitos tóxicos da Azatioprina (neutropenia).",
            "gravidade": "Moderada"
        },
        "Ciclosporina": {
            "efeitoClinico": "↑ efeito nefrotóxico da ciclosporina",
            "recomendacao": "Monitorar função renal. Manter hidratação adequada (Cautela quanto ao uso de diuréticos).",
            "gravidade": "Grave"
        },
        "Espironolactona": {
            "efeitoClinico": "↑ efeito hipercalêmico dos IECA (Captopril/Enalapril)",
            "recomendacao": "Monitorar níveis séricos de potássio (principalmente na ICC).",
            "gravidade": "Moderada"
        },
        "Hidroclorotiazida": {
            "efeitoClinico": "Hipotensão postural; ↑ efeito nefrotóxico dos IECA (Captopril/Enalapril)",
            "recomendacao": "Observar evidências de hipotensão postural no início do tratamento. Observar sinais e sintomas de disfunção renal.",
            "gravidade": "Moderada"
        },
        "Hidróxido de ferro polimaltosado (Noripurum®)": {
            "efeitoClinico": "↑ efeitos adversos/tóxicos dos sais de ferro (náusea; vômito e hipotensão arterial)",
            "recomendacao": "Observar o desenvolvimento desses efeitos adversos durante administração intravenosa dos sais de ferro.",
            "gravidade": "Moderada"
        }
    },
    "Carbamazepina": {
        "Diltiazem": {
            "efeitoClinico": "↑ efeitos adversos/tóxicos da Carbamazepina",
            "recomendacao": "Monitorar efeitos tóxicos (ataxia, sonolência, fadiga, leucopenia, trombocitopenia, outros).",
            "gravidade": "Moderada"
        },
        "Verapamil": {
            "efeitoClinico": "↑ efeitos adversos/tóxicos da Carbamazepina",
            "recomendacao": "Monitorar efeitos tóxicos (ataxia, sonolência, fadiga, leucopenia, trombocitopenia, outros).",
            "gravidade": "Moderada"
        },
        "Cetoconazol": {
            "efeitoClinico": "↑ efeitos adversos/tóxicos da Carbamazepina",
            "recomendacao": "Monitorar efeitos tóxicos (ataxia, sonolência, fadiga, leucopenia, trombocitopenia, outros).",
            "gravidade": "Moderada"
        },
        "Miconazol": {
            "efeitoClinico": "↑ efeitos adversos/tóxicos da Carbamazepina",
            "recomendacao": "Monitorar efeitos tóxicos (ataxia, sonolência, fadiga, leucopenia, trombocitopenia, outros).",
            "gravidade": "Moderada"
        },
        "Itraconazol": {
            "efeitoClinico": "↑ efeitos adversos/tóxicos da Carbamazepina",
            "recomendacao": "Monitorar efeitos tóxicos (ataxia, sonolência, fadiga, leucopenia, trombocitopenia, outros).",
            "gravidade": "Moderada"
        },
        "Voriconazol": {
            "efeitoClinico": "↑ efeitos adversos/tóxicos da Carbamazepina",
            "recomendacao": "Monitorar efeitos tóxicos (ataxia, sonolência, fadiga, leucopenia, trombocitopenia, outros).",
            "gravidade": "Moderada"
        },
        "Alopurinol": {
            "efeitoClinico": "↑ efeitos adversos/tóxicos da Carbamazepina",
            "recomendacao": "Monitorar efeitos tóxicos (ataxia, sonolência, fadiga, leucopenia, trombocitopenia, outros).",
            "gravidade": "Moderada"
        },
        "Isoniazida": {
            "efeitoClinico": "↑ efeitos adversos/tóxicos da Carbamazepina",
            "recomendacao": "Monitorar efeitos tóxicos (ataxia, sonolência, fadiga, leucopenia, trombocitopenia, outros).",
            "gravidade": "Moderada"
        },
        "Atazanavir": {
            "efeitoClinico": "↑ efeitos adversos/tóxicos da Carbamazepina",
            "recomendacao": "Monitorar efeitos tóxicos (ataxia, sonolência, fadiga, leucopenia, trombocitopenia, outros).",
            "gravidade": "Moderada"
        },
        "Lopinavir": {
            "efeitoClinico": "↑ efeitos adversos/tóxicos da Carbamazepina",
            "recomendacao": "Monitorar efeitos tóxicos (ataxia, sonolência, fadiga, leucopenia, trombocitopenia, outros).",
            "gravidade": "Moderada"
        },
        "Ritonavir": {
            "efeitoClinico": "↑ efeitos adversos/tóxicos da Carbamazepina",
            "recomendacao": "Monitorar efeitos tóxicos (ataxia, sonolência, fadiga, leucopenia, trombocitopenia, outros).",
            "gravidade": "Moderada"
        },
        "Amitriptilina": {
            "efeitoClinico": "↓ efeito terapêutico da Amitriptilina (efeito antidepressivo e propriedades sedativas)",
            "recomendacao": "Monitorar a diminuição dos efeitos terapêuticos (efeito antidepressivo e propriedades sedativas).",
            "gravidade": "Moderada"
        },
        "Ciclosporina": {
            "efeitoClinico": "↓ efeito terapêutico da ciclosporina (imunossupressão)",
            "recomendacao": "Considerar ajuste de dose da ciclosporina.",
            "gravidade": "Moderada"
        },
        "Varfarina": {
            "efeitoClinico": "↑ risco de sangramento",
            "recomendacao": "Monitorar tempo de protrombina (TAP) e aumento das evidências de sangramento. Ajuste de dose da varfarina.",
            "gravidade": "Moderada"
        },
        "Doxiciclina": {
            "efeitoClinico": "↓ efeito terapêutico da doxiciclina",
            "recomendacao": "Monitorar diminuição dos efeitos terapêuticos. Considerar o aumento de dose da doxiciclina ou utilizar outro derivado de tetraciclina.",
            "gravidade": "Moderada"
        },
        "Haloperidol": {
            "efeitoClinico": "↓ efeito terapêutico do haloperidol",
            "recomendacao": "Monitorar diminuição dos efeitos terapêuticos. Considerar o aumento de dose do haloperidol ou utilizar outro antipsicótico alternativo.",
            "gravidade": "Moderada"
        },
        "Paracetamol": {
            "efeitoClinico": "↓ efeito terapêutico do paracetamol e aumenta risco de dano hepático",
            "recomendacao": "Monitorar diminuição dos efeitos terapêuticos e hepatotoxicidade.",
            "gravidade": "Moderada"
        }
    },
    "Caspofungina": {
        "Ciclosporina": {
            "efeitoClinico": "↑ ocorrência de hepatotoxicidade",
            "recomendacao": "Evitar uso concomitante. Caso seja extremamente necessário, monitorar aumento de transaminases (ALT/AST).",
            "gravidade": "Grave"
        }
    },
    "Cefepime": {
        "Amicacina": {
            "efeitoClinico": "↑ risco de nefrotoxicidade",
            "recomendacao": "A menor dose eficaz de aminoglicosídeos e cefalosporinas deve ser utilizada quando são prescritos em combinação. Monitorar função renal (ureia e creatinina).",
            "gravidade": "Moderada"
        },
        "Gentamicina": {
            "efeitoClinico": "↑ risco de nefrotoxicidade",
            "recomendacao": "A menor dose eficaz de aminoglicosídeos e cefalosporinas deve ser utilizada quando são prescritos em combinação. Monitorar função renal (ureia e creatinina).",
            "gravidade": "Moderada"
        }
    },
    "Ceftriaxona": {
        "Varfarina": {
            "efeitoClinico": "↑ risco hemorrágico",
            "recomendacao": "Monitorar tempo de protrombina (TAP) e aumento das evidências de sangramento.",
            "gravidade": "Moderada"
        },
        "Cefalotina": {
            "efeitoClinico": "↑ risco hemorrágico",
            "recomendacao": "Monitorar tempo de protrombina (TAP) e aumento das evidências de sangramento.",
            "gravidade": "Moderada"
        },
        "Cefoxitina": {
            "efeitoClinico": "↑ risco hemorrágico",
            "recomendacao": "Monitorar tempo de protrombina (TAP) e aumento das evidências de sangramento.",
            "gravidade": "Moderada"
        },
        "Cefazolina": {
            "efeitoClinico": "↑ risco hemorrágico",
            "recomendacao": "Monitorar tempo de protrombina (TAP) e aumento das evidências de sangramento.",
            "gravidade": "Moderada"
        }
    },
    "Cilostazol": {
        "AAS": {
            "efeitoClinico": "↑ do risco de sangramento",
            "recomendacao": "Monitorar aumento de evidências de redução da função plaquetária.",
            "gravidade": "Moderada"
        },
        "Diclofenaco": {
            "efeitoClinico": "↑ do risco de sangramento",
            "recomendacao": "Monitorar aumento de evidências de redução da função plaquetária.",
            "gravidade": "Moderada"
        },
        "Ibuprofeno": {
            "efeitoClinico": "↑ do risco de sangramento",
            "recomendacao": "Monitorar aumento de evidências de redução da função plaquetária.",
            "gravidade": "Moderada"
        },
        "Naproxeno": {
            "efeitoClinico": "↑ do risco de sangramento",
            "recomendacao": "Monitorar aumento de evidências de redução da função plaquetária.",
            "gravidade": "Moderada"
        }
    },
    "Ciprofloxacino": {
        "Oligoelementos (magnésio, alumínio, cálcio, ferro e zinco)": {
            "efeitoClinico": "↓ absorção e efeitos terapêuticos da ciprofloxacino (e outras quinolonas)",
            "recomendacao": "Quando a co-administração não puder ser evitada, quinolonas devem ser administradas ou 4 horas antes ou 6 horas depois de cátions polivalentes.",
            "gravidade": "Moderada"
        },
        "Metilprednisolona": {
            "efeitoClinico": "↑ risco de tendinite e ruptura do tendão",
            "recomendacao": "Uso concomitante deve ser evitado. Monitorar paciente para sinais de dor, inchaço ou inflamação de um tendão.",
            "gravidade": "Grave"
        },
        "Hidrocortisona": {
            "efeitoClinico": "↑ risco de tendinite e ruptura do tendão",
            "recomendacao": "Uso concomitante deve ser evitado. Monitorar paciente para sinais de dor, inchaço ou inflamação de um tendão.",
            "gravidade": "Grave"
        },
        "Dexametasona": {
            "efeitoClinico": "↑ risco de tendinite e ruptura do tendão",
            "recomendacao": "Uso concomitante deve ser evitado. Monitorar paciente para sinais de dor, inchaço ou inflamação de um tendão.",
            "gravidade": "Grave"
        },
        "Betametasona": {
            "efeitoClinico": "↑ risco de tendinite e ruptura do tendão",
            "recomendacao": "Uso concomitante deve ser evitado. Monitorar paciente para sinais de dor, inchaço ou inflamação de um tendão.",
            "gravidade": "Grave"
        },
        "Prednisona": {
            "efeitoClinico": "↑ risco de tendinite e ruptura do tendão",
            "recomendacao": "Uso concomitante deve ser evitado. Monitorar paciente para sinais de dor, inchaço ou inflamação de um tendão.",
            "gravidade": "Grave"
        }
    }
};
