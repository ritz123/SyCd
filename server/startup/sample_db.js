samplePdb = 
{
  "db": {
    "version" : 1,
    "content": {
      "inf": {
        "content": {
          "relation": {
            "content": {
              "Ri_100": {
                "name": "IsA_I_Area--Cross_Section",
                "desc": "IsA_I_Area--Cross_Section",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q96",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q10",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_101": {
                "name": "Thermo Electric Effect",
                "desc": "Thermo Electric Effect",
                "condName": "C39",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q98",
                    "symbol": "\\nabla  {T}",
                    "mSymbol": "nabla_T"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q24",
                    "symbol": "I",
                    "mSymbol": "I"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q97",
                    "symbol": "S",
                    "mSymbol": "S"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q18",
                    "symbol": "R",
                    "mSymbol": "R"
                  },
                  "4": {
                    "quantity": "/inf/quantity/Q49",
                    "symbol": "Q_i",
                    "mSymbol": "Q_i"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_101_1",
                    "quantity": "/inf/quantity/Q49",
                    "symbol": "Q_o",
                    "mSymbol": "Q_o"
                  }
                }
              },
              "Ri_102": {
                "name": "Seeback Effect",
                "desc": "Seeback Effect",
                "condName": "C39",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q97",
                    "symbol": "S",
                    "mSymbol": "S"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q98",
                    "symbol": "\\nabla T",
                    "mSymbol": "nabla_T"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_102_1",
                    "quantity": "/inf/quantity/Q25",
                    "symbol": "E",
                    "mSymbol": "E"
                  }
                }
              },
              "Ri_104": {
                "name": "IsA_I_Area--Enclosed",
                "desc": "IsA_I_Area--Enclosed",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q100",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q10",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_105": {
                "name": "Sagnac Effect",
                "desc": "Sagnac Effect",
                "condName": "C20",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q31",
                    "symbol": "\\omega",
                    "mSymbol": "omega"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q99",
                    "symbol": "p_{i}",
                    "mSymbol": "p_i"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q100",
                    "symbol": "A",
                    "mSymbol": "A"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_105_1",
                    "quantity": "/inf/quantity/Q99",
                    "symbol": "p_{o}",
                    "mSymbol": "p_o"
                  }
                }
              },
              "Ri_108": {
                "name": "Bragg Wave Length Def",
                "desc": "Bragg Wavelength",
                "condName": "C12",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q42",
                    "symbol": "n",
                    "mSymbol": "n"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q102",
                    "symbol": "\\Lambda",
                    "mSymbol": "Lambda"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_108_1",
                    "quantity": "/inf/quantity/Q101",
                    "symbol": "\\lambda_B",
                    "mSymbol": "lambda_B"
                  }
                }
              },
              "Ri_109": {
                "name": "Bragg wavelength shift",
                "desc": "Bragg wavelength shift",
                "condName": "C12",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "2": {
                    "quantity": "/inf/quantity/Q35",
                    "symbol": "\\epsilon",
                    "mSymbol": "epsilon"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q103",
                    "symbol": "P_e",
                    "mSymbol": "P_e"
                  },
                  "4": {
                    "quantity": "/inf/quantity/Q101",
                    "symbol": "\\lambda_i",
                    "mSymbol": "lambda_i"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_109_1",
                    "quantity": "/inf/quantity/Q101",
                    "symbol": "\\lambda_o",
                    "mSymbol": "lambda_o"
                  }
                }
              },
              "Ri_110": {
                "name": "Angular freq Def",
                "desc": "Angular freq Def",
                "condName": "C35",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q19",
                    "symbol": "f",
                    "mSymbol": "f"
                  }
                },
                "outputs": {
                  "1": {
                    "quantity": "/inf/quantity/Q145",
                    "eqn": "eq_Ri_110_1",
                    "symbol": "\\omega",
                    "mSymbol": "omega"
                  }
                }
              },
              "Ri_111": {
                "name": "Angular Velocity Def_0",
                "desc": "Angular Velocity Def",
                "condName": "C35",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q31",
                    "symbol": "\\omega",
                    "mSymbol": "omega"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_111_1",
                    "quantity": "/inf/quantity/Q19",
                    "symbol": "f",
                    "mSymbol": "f"
                  }
                }
              },
              "Ri_112": {
                "name": "d/dt(Electrical_Resistance)",
                "desc": "d/dt(Electrical_Resistance)",
                "condName": "",
                "relType": 2,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q18",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_derivative",
                    "quantity": "/inf/quantity/Q46",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_113": {
                "name": "Int(D(Electrical_Resistance))",
                "desc": "Int(D(Electrical_Resistance))",
                "condName": "",
                "relType": 3,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q46",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q17",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_integral",
                    "quantity": "/inf/quantity/Q18",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_114": {
                "name": "IsA_I_Frequency--Wave",
                "desc": "IsA_I_Frequency--Wave",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q106",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q19",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_115": {
                "name": "Wave Relation",
                "desc": "Wave Relation",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q106",
                    "symbol": "f",
                    "mSymbol": "f"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q88",
                    "symbol": "\\lambda",
                    "mSymbol": "lambda"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_115_1",
                    "quantity": "/inf/quantity/Q63",
                    "symbol": "v",
                    "mSymbol": "v"
                  }
                }
              },
              "Ri_117": {
                "name": "d/dt(Temperature)",
                "desc": "d/dt(Temperature)",
                "condName": "",
                "relType": 2,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q38",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_derivative",
                    "quantity": "/inf/quantity/Q47",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_118": {
                "name": "Int(D(Temperature))",
                "desc": "Int(D(Temperature))",
                "condName": "",
                "relType": 3,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q47",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q17",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_integral",
                    "quantity": "/inf/quantity/Q38",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_120": {
                "name": "Linear expansion",
                "desc": "Linear expansion",
                "condName": "C0",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q47",
                    "symbol": "{dT}/{dt}",
                    "mSymbol": "dT_dt"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q104",
                    "symbol": "\\alpha",
                    "mSymbol": "alpha"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q84",
                    "symbol": "L",
                    "mSymbol": "L"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_120_1",
                    "quantity": "/inf/quantity/Q107",
                    "symbol": "{dL}/{dt}",
                    "mSymbol": "dL_dt"
                  }
                }
              },
              "Ri_121": {
                "name": "IsA_I_Energy--Mechanical",
                "desc": "IsA_I_Energy--Mechanical",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q108",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q69",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_122": {
                "name": "d/dt(Heat)",
                "desc": "d/dt(Heat)",
                "condName": "",
                "relType": 2,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q39",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_derivative",
                    "quantity": "/inf/quantity/Q49",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_123": {
                "name": "IsA_I_Energy--Chemical",
                "desc": "IsA_I_Energy--Chemical",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q109",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q69",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_125": {
                "name": "IsA_I_Energy--Magnetic",
                "desc": "IsA_I_Energy--Magnetic",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q111",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q69",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_126": {
                "name": "Int(D(Heat))",
                "desc": "Int(D(Heat))",
                "condName": "",
                "relType": 3,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q49",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q17",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_integral",
                    "quantity": "/inf/quantity/Q39",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_127": {
                "name": "IsA_I_Energy--Radiation",
                "desc": "IsA_I_Energy--Radiation",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q112",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q69",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_128": {
                "name": "IsA_I_Energy--Nuclear",
                "desc": "IsA_I_Energy--Nuclear",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q113",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q69",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_129": {
                "name": "IsA_I_Energy--Thermal",
                "desc": "IsA_I_Energy--Thermal",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q114",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q69",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_130": {
                "name": "d/dt(Pressure)",
                "desc": "d/dt(Pressure)",
                "condName": "",
                "relType": 2,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q26",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_derivative",
                    "quantity": "/inf/quantity/Q51",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_131": {
                "name": "Int(D(Pressure))",
                "desc": "Int(D(Pressure))",
                "condName": "",
                "relType": 3,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q51",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q17",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_integral",
                    "quantity": "/inf/quantity/Q26",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_132": {
                "name": "EM Wave Energy_0",
                "desc": "EM Wave Energy",
                "condName": "C34",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q112",
                    "symbol": "E",
                    "mSymbol": "E"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_132_1",
                    "quantity": "/inf/quantity/Q85",
                    "symbol": "\\nu",
                    "mSymbol": "nu"
                  }
                }
              },
              "Ri_133": {
                "name": "IsA_I_Energy--Intrinsic",
                "desc": "IsA_I_Energy--Intrinsic",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q115",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q17",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q69",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_134": {
                "name": "Mass Energy Equi",
                "desc": "Einstein's Mass Energy equivalence",
                "condName": "C30",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q1",
                    "symbol": "m",
                    "mSymbol": "m"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_134_1",
                    "quantity": "/inf/quantity/Q115",
                    "symbol": "E",
                    "mSymbol": "E"
                  }
                }
              },
              "Ri_135": {
                "name": "Mass Energy Equi_0",
                "desc": "Einstein's Mass Energy equivalence",
                "condName": "C30",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q115",
                    "symbol": "E",
                    "mSymbol": "E"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_135_1",
                    "quantity": "/inf/quantity/Q1",
                    "symbol": "m",
                    "mSymbol": "m"
                  }
                }
              },
              "Ri_136": {
                "name": "IsA_I_Energy--Gravitational",
                "desc": "IsA_I_Energy--Gravitational",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q116",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q69",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_149": {
                "name": "Capacitance Def",
                "desc": "Capacitance Def",
                "condName": "C2",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 1,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q50",
                    "symbol": "a",
                    "mSymbol": "a"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q14",
                    "symbol": "d",
                    "mSymbol": "d"
                  },
                  "2": {
                    "body": 1,
                    "quantity": "/body/quantity/Q12",
                    "symbol": "\\epsilon",
                    "mSymbol": "epsilon"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_149_1",
                    "quantity": "/inf/quantity/Q6",
                    "symbol": "C",
                    "mSymbol": "C"
                  }
                }
              },
              "Ri_156": {
                "name": "Impedence Def",
                "desc": "Impedence Definition",
                "condName": "C2",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q57",
                    "symbol": "V(s)",
                    "mSymbol": "V"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q6",
                    "symbol": "X(s)",
                    "mSymbol": "X"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_156_1",
                    "quantity": "/inf/quantity/Q58",
                    "symbol": "I(s)",
                    "mSymbol": "I"
                  }
                }
              },
              "Ri_163": {
                "name": "d/dt(Density_(volume_mass))",
                "desc": "d/dt(Density_(volume_mass))",
                "condName": "",
                "relType": 2,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q59",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_derivative",
                    "quantity": "/inf/quantity/Q60",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_164": {
                "name": "Int(D(Density_(volume_mass)))",
                "desc": "Int(D(Density_(volume_mass)))",
                "condName": "",
                "relType": 3,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q60",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q17",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_integral",
                    "quantity": "/inf/quantity/Q59",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_171": {
                "name": "d/dt(Density_(volume_mass)--fluid)",
                "desc": "d/dt(Density_(volume_mass)--fluid)",
                "condName": "",
                "relType": 2,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q61",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_derivative",
                    "quantity": "/inf/quantity/Q62",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_172": {
                "name": "Int(D(Density_(volume_mass)--fluid))",
                "desc": "Int(D(Density_(volume_mass)--fluid))",
                "condName": "",
                "relType": 3,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q62",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q17",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_integral",
                    "quantity": "/inf/quantity/Q61",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_185": {
                "name": "d/dt(Electric_Charge_Density)",
                "desc": "d/dt(Electric_Charge_Density)",
                "condName": "",
                "relType": 2,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q65",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_derivative",
                    "quantity": "/inf/quantity/Q66",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_186": {
                "name": "Int(D(Electric_Charge_Density))",
                "desc": "Int(D(Electric_Charge_Density))",
                "condName": "",
                "relType": 3,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q66",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q17",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_integral",
                    "quantity": "/inf/quantity/Q65",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_22": {
                "name": "IsA_I_Area--Overlapping",
                "desc": "IsA_I_Area--Overlapping",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q50",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q10",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_23": {
                "name": "IsA_I_Stress--longitudinal",
                "desc": "IsA_I_Stress--longitudinal",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q53",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q36",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_24": {
                "name": "IsA_I_Electric_Potential_Diff--AC",
                "desc": "IsA_I_Electric_Potential_Diff--AC",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q57",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q25",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_25": {
                "name": "IsA_I_Electric_Current_--_AC",
                "desc": "IsA_I_Electric_Current_--_AC",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q58",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q24",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_26": {
                "name": "IsA_I_Density_(volume_mass)--fluid",
                "desc": "IsA_I_Density_(volume_mass)--fluid",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q61",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q59",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_27": {
                "name": "IsA_I_Velocity_(Linear)--fluid",
                "desc": "IsA_I_Velocity_(Linear)--fluid",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q64",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q63",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_28": {
                "name": "IsA_I_Speed--Light",
                "desc": "IsA_I_Speed--Light",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q73",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q72",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_29": {
                "name": "IsA_I_Area--Heat_transfer",
                "desc": "IsA_I_Area--Heat_transfer",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q76",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q10",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_30": {
                "name": "IsA_I_Energy--Potential",
                "desc": "IsA_I_Energy--Potential",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q78",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q69",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_32": {
                "name": "Heat Flux def",
                "desc": "Thermal Power flow per unit area",
                "condName": "C30",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q76",
                    "symbol": "a",
                    "mSymbol": "a"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q49",
                    "symbol": "dQ/dt",
                    "mSymbol": "dQ_dt"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_32_1",
                    "quantity": "/inf/quantity/Q75",
                    "symbol": "q",
                    "mSymbol": "q"
                  }
                }
              },
              "Ri_33": {
                "name": "Ideal Gas Law",
                "desc": "Ideal Gas Law",
                "condName": "C16",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q26",
                    "symbol": "P",
                    "mSymbol": "P"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q68",
                    "symbol": "V",
                    "mSymbol": "V"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q122",
                    "symbol": "n",
                    "mSymbol": "n"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_33_1",
                    "quantity": "/inf/quantity/Q38",
                    "symbol": "T",
                    "mSymbol": "T"
                  }
                }
              },
              "Ri_36": {
                "name": "Thermistor Def",
                "desc": "Temperature dependent electrical resistor",
                "condName": "C32",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q18",
                    "symbol": "R_t",
                    "mSymbol": "R"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q45",
                    "symbol": "\\alpha",
                    "mSymbol": "alpha"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q47",
                    "symbol": "{dT_t}/{dt}",
                    "mSymbol": "dT_dt"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_36_1",
                    "quantity": "/inf/quantity/Q46",
                    "symbol": "{dR_t}/{dt}",
                    "mSymbol": "dR_dt"
                  }
                }
              },
              "Ri_37": {
                "name": "Heat-Temp Def",
                "desc": "Heat-Temperature of body definition",
                "condName": "C30",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q1",
                    "symbol": "m",
                    "mSymbol": "m"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q41",
                    "symbol": "\\alpha",
                    "mSymbol": "alpha"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q47",
                    "symbol": "{dT}/{dt}",
                    "mSymbol": "dT_dt"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_37_1",
                    "quantity": "/inf/quantity/Q49",
                    "symbol": "{dQ}/{dt}",
                    "mSymbol": "dQ_dt"
                  }
                }
              },
              "Ri_38": {
                "name": "Law of Elasticity",
                "desc": "Linear Elasticity",
                "condName": "C28",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q36",
                    "symbol": "\\sigma",
                    "mSymbol": "sigma"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q37",
                    "symbol": "E",
                    "mSymbol": "E"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_38_1",
                    "quantity": "/inf/quantity/Q35",
                    "symbol": "\\varepsilon",
                    "mSymbol": "varepsilon"
                  }
                }
              },
              "Ri_39": {
                "name": "Ohm's law",
                "desc": "Ohm's law",
                "condName": "C9",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q25",
                    "symbol": "v_t",
                    "mSymbol": "vt"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q18",
                    "symbol": "r_t",
                    "mSymbol": "rt"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_39_1",
                    "quantity": "/inf/quantity/Q24",
                    "symbol": "i_t",
                    "mSymbol": "it"
                  }
                }
              },
              "Ri_40": {
                "name": "Piezo Resistive Effect (SemiCond)",
                "desc": "For semiconductors only",
                "condName": "C26",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q52",
                    "symbol": "\\rho",
                    "mSymbol": "rho"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q18",
                    "symbol": "R",
                    "mSymbol": "R"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q164",
                    "symbol": "d(\\varepsilon)/dt",
                    "mSymbol": "d_dt_epsilon"
                  }
                },
                "outputs": {
                  "1": {
                    "quantity": "/inf/quantity/Q46",
                    "eqn": "eq_Ri_40_1",
                    "symbol": "dR/dt",
                    "mSymbol": "dR_dt"
                  }
                }
              },
              "Ri_41": {
                "name": "Reactive Force",
                "desc": "Reactive force induced in the body due to external pressure",
                "condName": "C28",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q26",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_41_1",
                    "quantity": "/inf/quantity/Q53",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_42": {
                "name": "Ohmic Heating",
                "desc": "Heat produced by Ohmic loss",
                "condName": "C9",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q24",
                    "symbol": "i_t",
                    "mSymbol": "i_t"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q18",
                    "symbol": "R_t",
                    "mSymbol": "R_t"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_42_1",
                    "quantity": "/inf/quantity/Q39",
                    "symbol": "Q_t",
                    "mSymbol": "Q_t"
                  }
                }
              },
              "Ri_44": {
                "name": "Newton's 2nd Law of motion",
                "desc": "Newton's 2nd Law of motion",
                "condName": "C28",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q1",
                    "symbol": "m",
                    "mSymbol": "m"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q2",
                    "symbol": "a",
                    "mSymbol": "a"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_44_1",
                    "quantity": "/inf/quantity/Q33",
                    "symbol": "f",
                    "mSymbol": "f"
                  }
                }
              },
              "Ri_45": {
                "name": "Spring Action",
                "desc": "Spring Action",
                "condName": "C1",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q33",
                    "symbol": "f",
                    "mSymbol": "f"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q7",
                    "symbol": "k",
                    "mSymbol": "k"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_45_1",
                    "quantity": "/inf/quantity/Q5",
                    "symbol": "x",
                    "mSymbol": "x"
                  }
                }
              },
              "Ri_46": {
                "name": "Movement",
                "desc": "Movement of body",
                "condName": "C28",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q5",
                    "symbol": "\\vec d",
                    "mSymbol": "d"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q20",
                    "symbol": "\\vec p_0",
                    "mSymbol": "p_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_46_1",
                    "quantity": "/inf/quantity/Q20",
                    "symbol": "\\vec p_1",
                    "mSymbol": "p_1"
                  }
                }
              },
              "Ri_50": {
                "name": "Density Def",
                "desc": "Definition of Density",
                "condName": "C30",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q68",
                    "symbol": "v",
                    "mSymbol": "v"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q1",
                    "symbol": "m",
                    "mSymbol": "m"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_50_1",
                    "quantity": "/inf/quantity/Q59",
                    "symbol": "\\rho",
                    "mSymbol": "rho"
                  }
                }
              },
              "Ri_51": {
                "name": "Electric Charge Density Def",
                "desc": "Electric Charge Density Definition",
                "condName": "C3",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q55",
                    "symbol": "q",
                    "mSymbol": "q"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q68",
                    "symbol": "v",
                    "mSymbol": "v"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_51_1",
                    "quantity": "/inf/quantity/Q65",
                    "symbol": "\\rho",
                    "mSymbol": "rho"
                  }
                }
              },
              "Ri_54": {
                "name": "Momentum Def",
                "desc": "Momentum definition",
                "condName": "C30",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q1",
                    "symbol": "m",
                    "mSymbol": "m"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q63",
                    "symbol": "v",
                    "mSymbol": "v"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_54_1",
                    "quantity": "/inf/quantity/Q74",
                    "symbol": "p",
                    "mSymbol": "p"
                  }
                }
              },
              "Ri_57": {
                "name": "IsA_I_Density_(volume_mass)--dry_density_of_soil",
                "desc": "IsA_I_Density_(volume_mass)--dry_density_of_soil",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q80",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q59",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_58": {
                "name": "Elec Conductivity Def",
                "desc": "Electrical Conductivity Definition",
                "condName": "C9",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q82",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_58_1",
                    "quantity": "/inf/quantity/Q83",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_59": {
                "name": "Soil Conductivity",
                "desc": "Empirical  relation between electrical properties of soil in the presence of water",
                "condName": "C5",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "1": {
                    "quantity": "/inf/quantity/Q81",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q79",
                    "symbol": "I_{1}",
                    "mSymbol": "I_1"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q80",
                    "symbol": "I_{2}",
                    "mSymbol": "I_2"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_59_1",
                    "quantity": "/inf/quantity/Q83",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_60": {
                "name": "Resistance Def",
                "desc": "Resistance Def",
                "condName": "C9",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q84",
                    "symbol": "L",
                    "mSymbol": "L"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q82",
                    "symbol": "\\rho",
                    "mSymbol": "rho"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q96",
                    "symbol": "A",
                    "mSymbol": "A"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_60_1",
                    "quantity": "/inf/quantity/Q18",
                    "symbol": "R",
                    "mSymbol": "R"
                  }
                }
              },
              "Ri_63": {
                "name": "Elec Conductivity Def_0",
                "desc": "Electrical Conductivity Definition",
                "condName": "C9",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q83",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_63_1",
                    "quantity": "/inf/quantity/Q82",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                }
              },
              "Ri_69": {
                "name": "Ideal Gas Law_0",
                "desc": "Ideal Gas Law",
                "condName": "C16",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q38",
                    "symbol": "T",
                    "mSymbol": "T"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q68",
                    "symbol": "V",
                    "mSymbol": "V"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_69_1",
                    "quantity": "/inf/quantity/Q26",
                    "symbol": "P",
                    "mSymbol": "P"
                  }
                }
              },
              "Ri_71": {
                "name": "Heat-Temp Def_2",
                "desc": "Heat-Temperature of body definition",
                "condName": "C30",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q1",
                    "symbol": "m",
                    "mSymbol": "m"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q41",
                    "symbol": "\\alpha",
                    "mSymbol": "alpha"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q49",
                    "symbol": "{dQ}/{dt}",
                    "mSymbol": "dQ_dt"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_71_1",
                    "quantity": "/inf/quantity/Q47",
                    "symbol": "{dT}/{dt}",
                    "mSymbol": "dT_dt"
                  }
                }
              },
              "Ri_72": {
                "name": "Impedence Def_0",
                "desc": "Impedence Definition",
                "condName": "C2",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q58",
                    "symbol": "I(s)",
                    "mSymbol": "I"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q6",
                    "symbol": "X(s)",
                    "mSymbol": "X"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_72_1",
                    "quantity": "/inf/quantity/Q57",
                    "symbol": "V(s)",
                    "mSymbol": "V"
                  }
                }
              },
              "Ri_73": {
                "name": "Law of Elasticity_0",
                "desc": "Linear Elasticity",
                "condName": "C28",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q35",
                    "symbol": "\\varepsilon",
                    "mSymbol": "varepsilon"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q37",
                    "symbol": "E",
                    "mSymbol": "E"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_73_1",
                    "quantity": "/inf/quantity/Q36",
                    "symbol": "\\sigma",
                    "mSymbol": "sigma"
                  }
                }
              },
              "Ri_75": {
                "name": "Ohm's law_0",
                "desc": "Ohm's law",
                "condName": "C9",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q24",
                    "symbol": "i_t",
                    "mSymbol": "it"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q18",
                    "symbol": "r_t",
                    "mSymbol": "rt"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_75_1",
                    "quantity": "/inf/quantity/Q25",
                    "symbol": "v_t",
                    "mSymbol": "vt"
                  }
                }
              },
              "Ri_76": {
                "name": "Momentum Def_1",
                "desc": "Momentum definition",
                "condName": "C30",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q1",
                    "symbol": "m",
                    "mSymbol": "m"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q74",
                    "symbol": "p",
                    "mSymbol": "p"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_76_1",
                    "quantity": "/inf/quantity/Q63",
                    "symbol": "v",
                    "mSymbol": "v"
                  }
                }
              },
              "Ri_77": {
                "name": "Newton's 2nd Law of motion_1",
                "desc": "Newton's 2nd Law of motion",
                "condName": "C28",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q1",
                    "symbol": "m",
                    "mSymbol": "m"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q33",
                    "symbol": "f",
                    "mSymbol": "f"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_77_1",
                    "quantity": "/inf/quantity/Q2",
                    "symbol": "a",
                    "mSymbol": "a"
                  }
                }
              },
              "Ri_81": {
                "name": "Reactive Force_0",
                "desc": "Reactive force induced in the body due to external pressure",
                "condName": "C28",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q53",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_81_1",
                    "quantity": "/inf/quantity/Q26",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                }
              },
              "Ri_83": {
                "name": "IsA_I_Frequency--EM_wave",
                "desc": "IsA_I_Frequency--EM_wave",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q85",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q19",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_84": {
                "name": "Soil Conductivity_1",
                "desc": "Empirical  relation between electrical properties of soil in the presence of water",
                "condName": "C5",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "1": {
                    "quantity": "/inf/quantity/Q83",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q79",
                    "symbol": "I_{1}",
                    "mSymbol": "I_1"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q80",
                    "symbol": "I_{2}",
                    "mSymbol": "I_2"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_84_1",
                    "quantity": "/inf/quantity/Q81",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                }
              },
              "Ri_85": {
                "name": "Soil Conductivity_2",
                "desc": "Empirical  relation between electrical properties of soil in the presence of water",
                "condName": "C5",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "1": {
                    "quantity": "/inf/quantity/Q81",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q83",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q80",
                    "symbol": "I_{2}",
                    "mSymbol": "I_2"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_85_1",
                    "quantity": "/inf/quantity/Q79",
                    "symbol": "I_{1}",
                    "mSymbol": "I_1"
                  }
                }
              },
              "Ri_86": {
                "name": "EM Wave Energy",
                "desc": "EM Wave Energy",
                "condName": "C34",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q85",
                    "symbol": "\\nu",
                    "mSymbol": "nu"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_86_1",
                    "quantity": "/inf/quantity/Q112",
                    "symbol": "E",
                    "mSymbol": "E"
                  }
                }
              },
              "Ri_87": {
                "name": "IsA_I_Velocity_(Linear)--Wave_Group",
                "desc": "IsA_I_Velocity_(Linear)--Wave_Group",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q86",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q63",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_88": {
                "name": "IsA_I_Angular_Velocity--Wave",
                "desc": "IsA_I_Angular_Velocity--Wave",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q87",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q31",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_90": {
                "name": "Wave Velocity Def",
                "desc": "Wave Velocity Def",
                "condName": "C35",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q88",
                    "symbol": "\\lambda",
                    "mSymbol": "lambda"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q19",
                    "symbol": "f",
                    "mSymbol": "f"
                  }
                },
                "outputs": {
                  "1": {
                    "quantity": "/inf/quantity/Q144",
                    "eqn": "eq_Ri_90_1",
                    "symbol": "v_p",
                    "mSymbol": "v_p"
                  }
                }
              },
              "Ri_91": {
                "name": "IsA_I_Energy--Kinetic",
                "desc": "IsA_I_Energy--Kinetic",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q89",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "quantity": "/inf/quantity/Q69",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_92": {
                "name": "Kinetic Energy Def",
                "desc": "Kinetic Energy Def",
                "condName": "C30",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q63",
                    "symbol": "v",
                    "mSymbol": "v"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q74",
                    "symbol": "p",
                    "mSymbol": "p"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_92_1",
                    "quantity": "/inf/quantity/Q89",
                    "symbol": "E",
                    "mSymbol": "E"
                  }
                }
              },
              "Ri_93": {
                "name": "Kinetic Energy Def_0",
                "desc": "Kinetic Energy Def",
                "condName": "C30",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q89",
                    "symbol": "E",
                    "mSymbol": "E"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q74",
                    "symbol": "p",
                    "mSymbol": "p"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_93_1",
                    "quantity": "/inf/quantity/Q63",
                    "symbol": "v",
                    "mSymbol": "v"
                  }
                }
              },
              "Ri_94": {
                "name": "Kinetic Energy Def_1",
                "desc": "Kinetic Energy Def",
                "condName": "C30",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q63",
                    "symbol": "v",
                    "mSymbol": "v"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q89",
                    "symbol": "E",
                    "mSymbol": "E"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_94_1",
                    "quantity": "/inf/quantity/Q74",
                    "symbol": "p",
                    "mSymbol": "p"
                  }
                }
              },
              "Ri_96": {
                "name": "Magnetic flux -- def",
                "desc": "Magnetic flux -- definition",
                "condName": "C36",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q150",
                    "symbol": "B",
                    "mSymbol": "B"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q10",
                    "symbol": "A",
                    "mSymbol": "A"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_96_1",
                    "quantity": "/inf/quantity/Q93",
                    "symbol": "\\phi_B",
                    "mSymbol": "phi_B"
                  }
                }
              },
              "Ri_97": {
                "name": "Faraday's Law",
                "desc": "Faraday's Law of electro-magnetism",
                "condName": "C37",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q151",
                    "symbol": "{d\\phi_b}/{dt}",
                    "mSymbol": "diff_phi_b"
                  }
                },
                "outputs": {
                  "1": {
                    "quantity": "/inf/quantity/Q163",
                    "eqn": "eq_Ri_97_1",
                    "symbol": "E",
                    "mSymbol": "E"
                  }
                }
              },
              "Ri_140": {
                "name": "Notch Filter",
                "desc": "Notch Filter with Bragg Grating",
                "condName": "C12",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q117",
                    "symbol": "f_n",
                    "mSymbol": "f_n"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q101",
                    "symbol": "f_B",
                    "mSymbol": "f_B"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q85",
                    "eqn": "eq_Ri_140_1",
                    "symbol": "f",
                    "mSymbol": "f"
                  }
                }
              },
              "Ri_142": {
                "name": "Elec Potential Def",
                "desc": "Elec Potential Def",
                "condName": "C42",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "1": {
                    "quantity": "/inf/quantity/Q25",
                    "symbol": "V",
                    "mSymbol": "V"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q110",
                    "eqn": "eq_Ri_142_1",
                    "symbol": "E",
                    "mSymbol": "E"
                  }
                }
              },
              "Ri_143": {
                "name": "Laser Heating",
                "desc": "Laser Heating",
                "condName": "C43",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q112",
                    "symbol": "E_i",
                    "mSymbol": "E_i"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q114",
                    "eqn": "eq_Ri_143_1",
                    "symbol": "E_o",
                    "mSymbol": "E_o"
                  }
                }
              },
              "Ri_145": {
                "name": "Coulomb's Law",
                "desc": "Coulomb's Law",
                "condName": "C3",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 1,
                "inputs": {
                  "0": {
                    "quantity": "/body/quantity/Q55",
                    "body": 1,
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q55",
                    "symbol": "I_{1}",
                    "mSymbol": "I_1"
                  },
                  "2": {
                    "quantity": "/body/quantity/Q30",
                    "body": 1,
                    "symbol": "I_{2}",
                    "mSymbol": "I_2"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q30",
                    "symbol": "I_{3}",
                    "mSymbol": "I_3"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q33",
                    "eqn": "eq_Ri_145_1",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_150": {
                "name": "Newton's Law of Gavity",
                "desc": "Newton's Law of Gavity",
                "condName": "C33",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 1,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q1",
                    "symbol": "m_1",
                    "mSymbol": "m_1"
                  },
                  "1": {
                    "quantity": "/body/quantity/Q1",
                    "body": 1,
                    "symbol": "m_2",
                    "mSymbol": "m_2"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q30",
                    "symbol": "\\vec r_1",
                    "mSymbol": "r_1"
                  },
                  "3": {
                    "quantity": "/body/quantity/Q30",
                    "body": 1,
                    "symbol": "\\vec r_2",
                    "mSymbol": "r_2"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q33",
                    "eqn": "eq_Ri_150_1",
                    "symbol": "F",
                    "mSymbol": "F"
                  }
                }
              },
              "Ri_148": {
                "name": "Distance",
                "desc": "Distance definition",
                "condName": "C23",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 1,
                "inputs": {
                  "0": {
                    "quantity": "/body/quantity/Q20",
                    "body": 1,
                    "symbol": "\\vec I_{0}",
                    "mSymbol": "I_0"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q20",
                    "symbol": "\\vec I_{1}",
                    "mSymbol": "I_1"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q14",
                    "eqn": "eq_Ri_148_1",
                    "symbol": "\\vec O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_147": {
                "name": "Overlapping Area",
                "desc": "Over lapping area assuming parallel plates",
                "condName": "C23",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 1,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q10",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  },
                  "1": {
                    "quantity": "/body/quantity/Q10",
                    "body": 1,
                    "symbol": "I_{1}",
                    "mSymbol": "I_1"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q50",
                    "eqn": "eq_Ri_147_1",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_151": {
                "name": "IsA_I_Angle_of_Incidence--Light",
                "desc": "IsA_I_Angle_of_Incidence--Light",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q118",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q43",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_152": {
                "name": "IsA_I_Angle_of_reflection--Light",
                "desc": "IsA_I_Angle_of_reflection--Light",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q120",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q44",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_153": {
                "name": "IsA_I_Angle_of_refraction--Light",
                "desc": "IsA_I_Angle_of_refraction--Light",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q121",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q119",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_154": {
                "name": "Snell's Law",
                "desc": "Law of refraction",
                "condName": "C44",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 1,
                "inputs": {
                  "0": {
                    "quantity": "/body/quantity/Q118",
                    "body": 1,
                    "symbol": "\\theta_i",
                    "mSymbol": "theta_i"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q42",
                    "symbol": "n_i",
                    "mSymbol": "n_i"
                  },
                  "2": {
                    "quantity": "/body/quantity/Q42",
                    "body": 1,
                    "symbol": "n_r",
                    "mSymbol": "n_r"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q121",
                    "eqn": "eq_Ri_154_1",
                    "symbol": "\\theta_r",
                    "mSymbol": "theta_r"
                  }
                }
              },
              "Ri_157": {
                "name": "Heat Transfer",
                "desc": "Newton's Heat transfer relation",
                "condName": "C15",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 1,
                "inputs": {
                  "0": {
                    "quantity": "/body/quantity/Q38",
                    "body": 1,
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q38",
                    "symbol": "T",
                    "mSymbol": "T"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q76",
                    "symbol": "A",
                    "mSymbol": "A"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q77",
                    "symbol": "h",
                    "mSymbol": "h"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q49",
                    "eqn": "eq_Ri_157_1",
                    "symbol": "dQ/dt",
                    "mSymbol": "dQ_dt"
                  }
                }
              },
              "Ri_158": {
                "name": "Heat Transfer_1",
                "desc": "Newton's Heat transfer relation",
                "condName": "C15",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 1,
                "inputs": {
                  "0": {
                    "quantity": "/body/quantity/Q38",
                    "body": 1,
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q49",
                    "symbol": "dQ/dt",
                    "mSymbol": "dQ_dt"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q76",
                    "symbol": "A",
                    "mSymbol": "A"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q77",
                    "symbol": "h",
                    "mSymbol": "h"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q38",
                    "symbol": "T",
                    "eqn": "eq_Ri_158_1",
                    "mSymbol": "T"
                  }
                }
              },
              "Ri_160": {
                "name": "Electrostatic force",
                "desc": "Electrostatic force due to electric field",
                "condName": "C3",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 1,
                "inputs": {
                  "0": {
                    "quantity": "/body/quantity/Q95",
                    "body": 1,
                    "symbol": "E",
                    "mSymbol": "E"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q55",
                    "symbol": "q",
                    "mSymbol": "q"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q33",
                    "eqn": "eq_Ri_160_1",
                    "symbol": "F",
                    "mSymbol": "F"
                  }
                }
              },
              "Ri_155": {
                "name": "Lorentz Force",
                "desc": "A charge moving in an magnetic field experiences a force",
                "condName": "C38",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 1,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q55",
                    "symbol": "q",
                    "mSymbol": "q"
                  },
                  "2": {
                    "quantity": "/body/quantity/Q150",
                    "body": 1,
                    "symbol": "B",
                    "mSymbol": "B"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q63",
                    "symbol": "v",
                    "mSymbol": "v"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q162",
                    "eqn": "eq_Ri_155_1",
                    "symbol": "F",
                    "mSymbol": "F"
                  }
                }
              },
              "Ri_161": {
                "name": "Gauss's Law",
                "desc": "Gauss's Law of electricity",
                "condName": "C3",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 1,
                "inputs": {
                  "0": {
                    "quantity": "/body/quantity/Q55",
                    "body": 1,
                    "symbol": "\\rho",
                    "mSymbol": "rho"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q12",
                    "symbol": "\\epsilon_r",
                    "mSymbol": "epsilon_r"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q95",
                    "eqn": "eq_Ri_161_1",
                    "symbol": "E",
                    "mSymbol": "E"
                  }
                }
              },
              "Ri_167": {
                "name": "Lenz's Law_0",
                "desc": "An induced electromotive force (emf) always gives rise to a current whose magnetic field opposes the original change in magnetic flux.",
                "condName": "C58",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "1": {
                    "quantity": "/inf/quantity/Q163",
                    "symbol": "E",
                    "mSymbol": "E"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q151",
                    "symbol": "\\partial \\phi/\\partial t",
                    "eqn": "eq_Ri_167_1",
                    "mSymbol": "d_phi_dt"
                  }
                }
              },
              "Ri_166": {
                "name": "Law of Gravity",
                "desc": "Law of Gravity",
                "condName": "C46",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 1,
                "inputs": {
                  "0": {
                    "quantity": "/body/quantity/Q1",
                    "body": 1,
                    "symbol": "m_1",
                    "mSymbol": "m_1"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q1",
                    "symbol": "m_2",
                    "mSymbol": "m_2"
                  },
                  "2": {
                    "quantity": "/body/quantity/Q30",
                    "body": 1,
                    "symbol": "\\vec r_1",
                    "mSymbol": "r_1"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q30",
                    "symbol": "\\vec r_2",
                    "mSymbol": "r_2"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q33",
                    "eqn": "eq_Ri_166_1",
                    "symbol": "F",
                    "mSymbol": "F"
                  }
                }
              },
              "Ri_168": {
                "name": "IsA_I_Speed--Sound",
                "desc": "IsA_I_Speed--Sound",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q127",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q72",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_169": {
                "name": "IsA_I_Mass--Atomic",
                "desc": "IsA_I_Mass--Atomic",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q128",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q1",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_170": {
                "name": "IsA_I_Stress--Tensile",
                "desc": "IsA_I_Stress--Tensile",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q140",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q36",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_173": {
                "name": "Alias_Q140_Q53",
                "desc": "Alias_Q140_Q53",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q140",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q53",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_174": {
                "name": "Alias_Q53_Q140",
                "desc": "Alias_Q53_Q140",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q53",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q140",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_175": {
                "name": "Alias_Q141_Q37",
                "desc": "Alias_Q141_Q37",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q141",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q37",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_176": {
                "name": "Alias_Q37_Q141",
                "desc": "Alias_Q37_Q141",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q37",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q141",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_177": {
                "name": "d/dt(Angular_Displacement)",
                "desc": "d/dt(Angular_Displacement)",
                "condName": "",
                "relType": 2,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q142",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_derivative",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q143",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_178": {
                "name": "Int(D(Angular_Displacement))",
                "desc": "Int(D(Angular_Displacement))",
                "condName": "",
                "relType": 3,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q143",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q17",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_integral",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q142",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_179": {
                "name": "Alias_Q143_Q31",
                "desc": "Alias_Q143_Q31",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q143",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q31",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_180": {
                "name": "Alias_Q31_Q143",
                "desc": "Alias_Q31_Q143",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q31",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q143",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_181": {
                "name": "Piezo Electric Effect",
                "desc": "Piezo Electric Effect",
                "condName": "C25",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 1,
                "inputs": {
                  "0": {
                    "quantity": "/body/quantity/Q33",
                    "body": 1,
                    "symbol": "F",
                    "mSymbol": "F"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q10",
                    "symbol": "A",
                    "mSymbol": "A"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q56",
                    "symbol": "w",
                    "mSymbol": "w"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q12",
                    "symbol": "ϵ33",
                    "mSymbol": "e33"
                  },
                  "4": {
                    "quantity": "/inf/quantity/Q54",
                    "symbol": "d33",
                    "mSymbol": "d33"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q55",
                    "eqn": "eq_Ri_181_1",
                    "symbol": "Q",
                    "mSymbol": "Q"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q25",
                    "eqn": "eq_Ri_181_2",
                    "symbol": "V",
                    "mSymbol": "V"
                  }
                }
              },
              "Ri_184": {
                "name": "Angular Velocity Def_0_v",
                "desc": "Angular Velocity Def",
                "condName": "C35",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 1,
                "inputs": {
                  "0": {
                    "quantity": "/body/quantity/Q31",
                    "symbol": "\\omega",
                    "body": 1,
                    "mSymbol": "omega"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_184_1",
                    "quantity": "/inf/quantity/Q19",
                    "symbol": "f",
                    "mSymbol": "f"
                  }
                }
              },
              "Ri_187": {
                "name": "Spring Action_v",
                "desc": "Spring Action",
                "condName": "C1",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 1,
                "inputs": {
                  "0": {
                    "quantity": "/body/quantity/Q33",
                    "symbol": "f",
                    "body": 1,
                    "mSymbol": "f"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q7",
                    "symbol": "k",
                    "mSymbol": "k"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_187_1",
                    "quantity": "/inf/quantity/Q5",
                    "symbol": "x",
                    "mSymbol": "x"
                  }
                }
              },
              "Ri_188": {
                "name": "Spring Action_0",
                "desc": "Spring Action",
                "condName": "C1",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q5",
                    "symbol": "x",
                    "mSymbol": "x"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q7",
                    "symbol": "k",
                    "mSymbol": "k"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q33",
                    "symbol": "f",
                    "eqn": "eq_Ri_188_1",
                    "mSymbol": "f"
                  }
                }
              },
              "Ri_189": {
                "name": "Spring Action_0_v",
                "desc": "Spring Action",
                "condName": "C1",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 1,
                "inputs": {
                  "0": {
                    "quantity": "/body/quantity/Q5",
                    "symbol": "x",
                    "body": 1,
                    "mSymbol": "x"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q7",
                    "symbol": "k",
                    "mSymbol": "k"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q33",
                    "symbol": "f",
                    "eqn": "eq_Ri_189_1",
                    "mSymbol": "f"
                  }
                }
              },
              "Ri_190": {
                "name": "Piezo Electric Effect_i",
                "desc": "Piezo Electric Effect",
                "condName": "C25",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q33",
                    "symbol": "F",
                    "mSymbol": "F"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q10",
                    "symbol": "A",
                    "mSymbol": "A"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q56",
                    "symbol": "w",
                    "mSymbol": "w"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q12",
                    "symbol": "ϵ33",
                    "mSymbol": "e33"
                  },
                  "4": {
                    "quantity": "/inf/quantity/Q54",
                    "symbol": "d33",
                    "mSymbol": "d33"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q55",
                    "eqn": "eq_Ri_190_1",
                    "symbol": "Q",
                    "mSymbol": "Q"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q25",
                    "eqn": "eq_Ri_190_2",
                    "symbol": "V",
                    "mSymbol": "V"
                  }
                }
              },
              "Ri_193": {
                "name": "Reactive Force_v",
                "desc": "Reactive force induced in the body due to external pressure",
                "condName": "C28",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 1,
                "inputs": {
                  "0": {
                    "quantity": "/body/quantity/Q26",
                    "symbol": "I_{0}",
                    "body": 1,
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_193_1",
                    "quantity": "/inf/quantity/Q53",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_198": {
                "name": "Sagnac Effect_1_v",
                "desc": "Sagnac Effect",
                "condName": "C20",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 1,
                "inputs": {
                  "0": {
                    "quantity": "/body/quantity/Q31",
                    "symbol": "\\omega",
                    "body": 1,
                    "mSymbol": "omega"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q99",
                    "symbol": "p_{o}",
                    "mSymbol": "p_o"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q100",
                    "symbol": "A",
                    "mSymbol": "A"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q99",
                    "symbol": "p_{i}",
                    "eqn": "eq_Ri_198_1",
                    "mSymbol": "p_i"
                  }
                }
              },
              "Ri_194": {
                "name": "Capacitance Relation",
                "desc": "Capacitance Relation",
                "condName": "C2",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q25",
                    "symbol": "V",
                    "mSymbol": "V"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q6",
                    "symbol": "C",
                    "mSymbol": "C"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q55",
                    "eqn": "eq_Ri_194_1",
                    "symbol": "Q",
                    "mSymbol": "Q"
                  }
                }
              },
              "Ri_195": {
                "name": "Capacitance Relation_0",
                "desc": "Capacitance Relation",
                "condName": "C2",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q55",
                    "symbol": "Q",
                    "mSymbol": "Q"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q6",
                    "symbol": "C",
                    "mSymbol": "C"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q25",
                    "symbol": "V",
                    "eqn": "eq_Ri_195_1",
                    "mSymbol": "V"
                  }
                }
              },
              "Ri_197": {
                "name": "IsA_I_Velocity_(Linear)--Phase_velocity",
                "desc": "IsA_I_Velocity_(Linear)--Phase_velocity",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q144",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q63",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_199": {
                "name": "IsA_I_Displacement--radius",
                "desc": "IsA_I_Displacement--radius",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q146",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q5",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_200": {
                "name": "IsA_I_Force_(Body)--Centrifugal",
                "desc": "IsA_I_Force_(Body)--Centrifugal",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q147",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q33",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_201": {
                "name": "Centrifugal force",
                "desc": "Centrifugal force",
                "condName": "C47",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q31",
                    "symbol": "\\omega",
                    "mSymbol": "omega"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q146",
                    "symbol": "r",
                    "mSymbol": "r"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q147",
                    "eqn": "eq_Ri_201_1",
                    "symbol": "F",
                    "mSymbol": "F"
                  }
                }
              },
              "Ri_202": {
                "name": "Changing Magnetic Field",
                "desc": "Changing Magnetic Field",
                "condName": "C48",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "1": {
                    "quantity": "/surr/quantity/Q148",
                    "symbol": "{dB}/{dx}",
                    "mSymbol": "dB_dx"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q63",
                    "symbol": "{dx}/{dt}",
                    "mSymbol": "dx_dt"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q151",
                    "eqn": "eq_Ri_202_1",
                    "symbol": "{dB}/{dt}",
                    "mSymbol": "dB_dt"
                  }
                }
              },
              "Ri_204": {
                "name": "d/dt(Displacement)",
                "desc": "d/dt(Displacement)",
                "condName": "",
                "relType": 2,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q5",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_derivative",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q149",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_205": {
                "name": "Int(D(Displacement))",
                "desc": "Int(D(Displacement))",
                "condName": "",
                "relType": 3,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q149",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q17",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_integral",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q5",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_206": {
                "name": "Alias_Q149_Q63",
                "desc": "Alias_Q149_Q63",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q149",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q63",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_207": {
                "name": "Alias_Q63_Q149",
                "desc": "Alias_Q63_Q149",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q63",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q149",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_209": {
                "name": "d/dt(Magnetic_Flux_density--B)",
                "desc": "d/dt(Magnetic_Flux_density--B)",
                "condName": "",
                "relType": 2,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q150",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_derivative",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q151",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_210": {
                "name": "Int(D(Magnetic_Flux_density--B))",
                "desc": "Int(D(Magnetic_Flux_density--B))",
                "condName": "",
                "relType": 3,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q151",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q17",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_integral",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q150",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_208": {
                "name": "d/dt(Velocity_(Linear))",
                "desc": "d/dt(Velocity_(Linear))",
                "condName": "",
                "relType": 2,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q63",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_derivative",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q152",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_211": {
                "name": "Int(D(Velocity_(Linear)))",
                "desc": "Int(D(Velocity_(Linear)))",
                "condName": "",
                "relType": 3,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q152",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q17",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_integral",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q63",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_212": {
                "name": "Alias_Q152_Q2",
                "desc": "Alias_Q152_Q2",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q152",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q2",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_213": {
                "name": "Alias_Q2_Q152",
                "desc": "Alias_Q2_Q152",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q2",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q152",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_214": {
                "name": "IsA_I_Acceleration--Gravity",
                "desc": "IsA_I_Acceleration--Gravity",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q153",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q2",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_215": {
                "name": "Gravitational Potential energy",
                "desc": "Gravitational Potential energy",
                "condName": "C49",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q153",
                    "symbol": "g",
                    "mSymbol": "g"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q1",
                    "symbol": "m",
                    "mSymbol": "m"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q5",
                    "symbol": "h",
                    "mSymbol": "h"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q116",
                    "eqn": "eq_Ri_215_1",
                    "symbol": "E",
                    "mSymbol": "E"
                  }
                }
              },
              "Ri_218": {
                "name": "Gravitational Potential energy_0_v",
                "desc": "Gravitational Potential energy",
                "condName": "C49",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 1,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q116",
                    "symbol": "E",
                    "mSymbol": "E"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q1",
                    "symbol": "m",
                    "mSymbol": "m"
                  },
                  "2": {
                    "quantity": "/body/quantity/Q5",
                    "symbol": "h",
                    "body": 1,
                    "mSymbol": "h"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q153",
                    "symbol": "g",
                    "eqn": "eq_Ri_218_1",
                    "mSymbol": "g"
                  }
                }
              },
              "Ri_221": {
                "name": "Gravitational Potential energy_2",
                "desc": "Gravitational Potential energy",
                "condName": "C49",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q153",
                    "symbol": "g",
                    "mSymbol": "g"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q1",
                    "symbol": "m",
                    "mSymbol": "m"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q116",
                    "symbol": "E",
                    "mSymbol": "E"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q5",
                    "symbol": "h",
                    "eqn": "eq_Ri_221_1",
                    "mSymbol": "h"
                  }
                }
              },
              "Ri_222": {
                "name": "Gravitational Potential energy_2_v",
                "desc": "Gravitational Potential energy",
                "condName": "C49",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 1,
                "inputs": {
                  "0": {
                    "quantity": "/body/quantity/Q153",
                    "symbol": "g",
                    "body": 1,
                    "mSymbol": "g"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q1",
                    "symbol": "m",
                    "mSymbol": "m"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q116",
                    "symbol": "E",
                    "mSymbol": "E"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q5",
                    "symbol": "h",
                    "eqn": "eq_Ri_222_1",
                    "mSymbol": "h"
                  }
                }
              },
              "Ri_182": {
                "name": "Pressure Def",
                "desc": "Pressure Definition",
                "condName": "C30",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q33",
                    "symbol": "F",
                    "mSymbol": "F"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q96",
                    "symbol": "A",
                    "mSymbol": "A"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q26",
                    "eqn": "eq_Ri_182_1",
                    "symbol": "P",
                    "mSymbol": "P"
                  }
                }
              },
              "Ri_191": {
                "name": "Pressure Def_v",
                "desc": "Pressure Definition",
                "condName": "C30",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 1,
                "inputs": {
                  "0": {
                    "quantity": "/body/quantity/Q33",
                    "symbol": "F",
                    "body": 1,
                    "mSymbol": "F"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q96",
                    "symbol": "A",
                    "mSymbol": "A"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q26",
                    "eqn": "eq_Ri_191_1",
                    "symbol": "P",
                    "mSymbol": "P"
                  }
                }
              },
              "Ri_192": {
                "name": "Pressure Def_0",
                "desc": "Pressure Definition",
                "condName": "C30",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q26",
                    "symbol": "P",
                    "mSymbol": "P"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q96",
                    "symbol": "A",
                    "mSymbol": "A"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q33",
                    "symbol": "F",
                    "eqn": "eq_Ri_192_1",
                    "mSymbol": "F"
                  }
                }
              },
              "Ri_196": {
                "name": "Pressure Def_0_v",
                "desc": "Pressure Definition",
                "condName": "C30",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 1,
                "inputs": {
                  "0": {
                    "quantity": "/body/quantity/Q26",
                    "symbol": "P",
                    "body": 1,
                    "mSymbol": "P"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q96",
                    "symbol": "A",
                    "mSymbol": "A"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q33",
                    "symbol": "F",
                    "eqn": "eq_Ri_196_1",
                    "mSymbol": "F"
                  }
                }
              },
              "Ri_216": {
                "name": "Hall Effect",
                "desc": "Hall Effect",
                "condName": "C50",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q150",
                    "symbol": "B",
                    "mSymbol": "B"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q65",
                    "symbol": "n",
                    "mSymbol": "n"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q56",
                    "symbol": "w",
                    "mSymbol": "w"
                  },
                  "4": {
                    "quantity": "/inf/quantity/Q160",
                    "symbol": "I_{0}",
                    "mSymbol": "I"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q157",
                    "eqn": "eq_Ri_216_1",
                    "symbol": "V_H",
                    "mSymbol": "V_H"
                  }
                }
              },
              "Ri_217": {
                "name": "Potentiometer BlkBox",
                "desc": "Variable electrical resistance Potentiometer",
                "condName": "C51",
                "relType": 0,
                "cost": 1,
                "isBlkBox": true,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q149",
                    "symbol": "{dL}/{dt}",
                    "mSymbol": "dL_dt"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q46",
                    "eqn": "eq_Ri_217_1",
                    "symbol": "{dR}/{dt}",
                    "mSymbol": "dR_dt"
                  }
                }
              },
              "Ri_219": {
                "name": "Screw BlkBox",
                "desc": "Model of a Screw mechanism",
                "condName": "C52",
                "relType": 0,
                "cost": 1,
                "isBlkBox": true,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q142",
                    "symbol": "\\phi",
                    "mSymbol": "phi"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q5",
                    "eqn": "eq_Ri_219_1",
                    "symbol": "l",
                    "mSymbol": "l"
                  }
                }
              },
              "Ri_220": {
                "name": "Motor BlkBox",
                "desc": "An electrical Motor mechanism",
                "condName": "C53",
                "relType": 0,
                "cost": 1,
                "isBlkBox": true,
                "numBody": 0,
                "inputs": {
                  "1": {
                    "quantity": "/inf/quantity/Q24",
                    "symbol": "I",
                    "mSymbol": "I"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q25",
                    "symbol": "V",
                    "mSymbol": "V"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q143",
                    "eqn": "eq_Ri_220_1",
                    "symbol": "\\omega",
                    "mSymbol": "omega"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q154",
                    "eqn": "eq_Ri_220_2",
                    "symbol": "T",
                    "mSymbol": "T"
                  }
                }
              },
              "Ri_223": {
                "name": "Torque def",
                "desc": "Torque def",
                "condName": "C54",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q33",
                    "symbol": "\\vec F",
                    "mSymbol": "F"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q146",
                    "symbol": "\\vec r",
                    "mSymbol": "r"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q154",
                    "eqn": "eq_Ri_223_1",
                    "symbol": "\\vec T",
                    "mSymbol": "T"
                  }
                }
              },
              "Ri_224": {
                "name": "Strain Gauge BlkBox",
                "desc": "Strain Gauge -- Generic",
                "condName": "C55",
                "relType": 0,
                "cost": 1,
                "isBlkBox": true,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q35",
                    "symbol": "\\epsilon",
                    "mSymbol": "epsilon"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q25",
                    "eqn": "eq_Ri_224_1",
                    "symbol": "v",
                    "mSymbol": "v"
                  }
                }
              },
              "Ri_225": {
                "name": "Strain Gauge--Interferometric",
                "desc": "Strain Gauge--Interferometric",
                "condName": "C20",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q35",
                    "symbol": "\\epsilon",
                    "mSymbol": "epsilon"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q32",
                    "eqn": "eq_Ri_225_1",
                    "symbol": "\\delta \\phi",
                    "mSymbol": "delta_phi"
                  }
                }
              },
              "Ri_226": {
                "name": "Optical Beat Detector BlkBox",
                "desc": "Optical Beat Detector",
                "condName": "C56",
                "relType": 0,
                "cost": 1,
                "isBlkBox": true,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q32",
                    "symbol": "\\delta \\phi",
                    "mSymbol": "delta_phi"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q25",
                    "eqn": "eq_Ri_226_1",
                    "symbol": "v",
                    "mSymbol": "v"
                  }
                }
              },
              "Ri_227": {
                "name": "Phase shifter BlkBox",
                "desc": "Phase shifter BlkBox",
                "condName": "C57",
                "relType": 0,
                "cost": 1,
                "isBlkBox": true,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q25",
                    "symbol": "v",
                    "mSymbol": "v"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q32",
                    "eqn": "eq_Ri_227_1",
                    "symbol": "\\delta \\phi",
                    "mSymbol": "delta_phi"
                  }
                }
              },
              "Ri_228": {
                "name": "d/dt(Electric_Current_)",
                "desc": "d/dt(Electric_Current_)",
                "condName": "",
                "relType": 2,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q24",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_derivative",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q156",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_229": {
                "name": "Int(D(Electric_Current_))",
                "desc": "Int(D(Electric_Current_))",
                "condName": "",
                "relType": 3,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q156",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q17",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_integral",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q24",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_230": {
                "name": "Inductance def",
                "desc": "Inductance",
                "condName": "C37",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q156",
                    "symbol": "{di}/{dt}",
                    "mSymbol": "di_dt"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q155",
                    "symbol": "L",
                    "mSymbol": "L"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q25",
                    "eqn": "eq_Ri_230_1",
                    "symbol": "v(t)",
                    "mSymbol": "v"
                  }
                }
              },
              "Ri_233": {
                "name": "Heat Flux def_1",
                "desc": "Thermal Power flow per unit area",
                "condName": "C30",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q76",
                    "symbol": "a",
                    "mSymbol": "a"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q75",
                    "symbol": "q",
                    "mSymbol": "q"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q49",
                    "symbol": "{dQ}/{dt}",
                    "eqn": "eq_Ri_233_1",
                    "mSymbol": "dQ_dt"
                  }
                }
              },
              "Ri_232": {
                "name": "Electric Current Density Def",
                "desc": "Electric Current Density Def",
                "condName": "C7",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q24",
                    "mSymbol": "I",
                    "symbol": "I"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q96",
                    "mSymbol": "A",
                    "symbol": "A"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q67",
                    "mSymbol": "J",
                    "eqn": "eq_Ri_232_1",
                    "symbol": "J"
                  }
                }
              },
              "Ri_231": {
                "name": "Electric Current Density Def_0",
                "desc": "Electric Current Density Def",
                "condName": "C7",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q67",
                    "mSymbol": "J",
                    "symbol": "J"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q96",
                    "mSymbol": "A",
                    "symbol": "A"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q24",
                    "mSymbol": "I",
                    "symbol": "I",
                    "eqn": "eq_Ri_231_1"
                  }
                }
              },
              "Ri_234": {
                "name": "D(B)/dx",
                "desc": "Magnetic flux density gradient",
                "condName": "C38",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q150",
                    "mSymbol": "B",
                    "symbol": "B"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q148",
                    "mSymbol": "B_x",
                    "eqn": "eq_Ri_234_1",
                    "symbol": "B_x"
                  }
                }
              },
              "Ri_203": {
                "name": "Capacitance Def_u",
                "desc": "Capacitance Def",
                "condName": "C2",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q50",
                    "symbol": "a",
                    "mSymbol": "a"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q14",
                    "symbol": "d",
                    "mSymbol": "d"
                  },
                  "2": {
                    "quantity": "/surr/quantity/Q12",
                    "symbol": "\\epsilon",
                    "mSymbol": "epsilon"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_203_1",
                    "quantity": "/inf/quantity/Q6",
                    "symbol": "C",
                    "mSymbol": "C"
                  }
                }
              },
              "Ri_236": {
                "name": "Coulomb's Law_u",
                "desc": "Coulomb's Law",
                "condName": "C3",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/surr/quantity/Q55",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q55",
                    "symbol": "I_{1}",
                    "mSymbol": "I_1"
                  },
                  "2": {
                    "quantity": "/surr/quantity/Q30",
                    "symbol": "I_{2}",
                    "mSymbol": "I_2"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q30",
                    "symbol": "I_{3}",
                    "mSymbol": "I_3"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q33",
                    "eqn": "eq_Ri_236_1",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_237": {
                "name": "Newton's Law of Gavity_u",
                "desc": "Newton's Law of Gavity",
                "condName": "C33",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q1",
                    "symbol": "m_1",
                    "mSymbol": "m_1"
                  },
                  "1": {
                    "quantity": "/surr/quantity/Q1",
                    "symbol": "m_2",
                    "mSymbol": "m_2"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q30",
                    "symbol": "\\vec r_1",
                    "mSymbol": "r_1"
                  },
                  "3": {
                    "quantity": "/surr/quantity/Q30",
                    "symbol": "\\vec r_2",
                    "mSymbol": "r_2"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q33",
                    "eqn": "eq_Ri_237_1",
                    "symbol": "F",
                    "mSymbol": "F"
                  }
                }
              },
              "Ri_238": {
                "name": "Distance_u",
                "desc": "Distance definition",
                "condName": "C23",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/surr/quantity/Q20",
                    "symbol": "\\vec I_{0}",
                    "mSymbol": "I_0"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q20",
                    "symbol": "\\vec I_{1}",
                    "mSymbol": "I_1"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q14",
                    "eqn": "eq_Ri_238_1",
                    "symbol": "\\vec O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_239": {
                "name": "Overlapping Area_u",
                "desc": "Over lapping area assuming parallel plates",
                "condName": "C23",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q10",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  },
                  "1": {
                    "quantity": "/surr/quantity/Q10",
                    "symbol": "I_{1}",
                    "mSymbol": "I_1"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q50",
                    "eqn": "eq_Ri_239_1",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_240": {
                "name": "Snell's Law_u",
                "desc": "Law of refraction",
                "condName": "C44",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/surr/quantity/Q118",
                    "symbol": "\\theta_i",
                    "mSymbol": "theta_i"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q42",
                    "symbol": "n_i",
                    "mSymbol": "n_i"
                  },
                  "2": {
                    "quantity": "/surr/quantity/Q42",
                    "symbol": "n_r",
                    "mSymbol": "n_r"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q121",
                    "eqn": "eq_Ri_240_1",
                    "symbol": "\\theta_r",
                    "mSymbol": "theta_r"
                  }
                }
              },
              "Ri_241": {
                "name": "Heat Transfer_u",
                "desc": "Newton's Heat transfer relation",
                "condName": "C15",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/surr/quantity/Q38",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q38",
                    "symbol": "T",
                    "mSymbol": "T"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q76",
                    "symbol": "A",
                    "mSymbol": "A"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q77",
                    "symbol": "h",
                    "mSymbol": "h"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q49",
                    "eqn": "eq_Ri_241_1",
                    "symbol": "{dQ}/{dt}",
                    "mSymbol": "dQ_dt"
                  }
                }
              },
              "Ri_242": {
                "name": "Heat Transfer_1_u",
                "desc": "Newton's Heat transfer relation",
                "condName": "C15",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/surr/quantity/Q38",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q49",
                    "symbol": "{dQ}/{dt}",
                    "mSymbol": "dQ_dt"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q76",
                    "symbol": "A",
                    "mSymbol": "A"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q77",
                    "symbol": "h",
                    "mSymbol": "h"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q38",
                    "symbol": "T",
                    "eqn": "eq_Ri_242_1",
                    "mSymbol": "T"
                  }
                }
              },
              "Ri_243": {
                "name": "Electrostatic force_u",
                "desc": "Electrostatic force due to electric field",
                "condName": "C3",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/surr/quantity/Q95",
                    "symbol": "E",
                    "mSymbol": "E"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q55",
                    "symbol": "q",
                    "mSymbol": "q"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q33",
                    "eqn": "eq_Ri_243_1",
                    "symbol": "F",
                    "mSymbol": "F"
                  }
                }
              },
              "Ri_245": {
                "name": "Gauss's Law_u",
                "desc": "Gauss's Law of electricity",
                "condName": "C3",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/surr/quantity/Q55",
                    "symbol": "\\rho",
                    "mSymbol": "rho"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q12",
                    "symbol": "\\epsilon_r",
                    "mSymbol": "epsilon_r"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q95",
                    "eqn": "eq_Ri_245_1",
                    "symbol": "E",
                    "mSymbol": "E"
                  }
                }
              },
              "Ri_247": {
                "name": "Law of Gravity_u",
                "desc": "Law of Gravity",
                "condName": "C46",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/surr/quantity/Q1",
                    "symbol": "m_1",
                    "mSymbol": "m_1"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q1",
                    "symbol": "m_2",
                    "mSymbol": "m_2"
                  },
                  "2": {
                    "quantity": "/surr/quantity/Q30",
                    "symbol": "\\vec r_1",
                    "mSymbol": "r_1"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q30",
                    "symbol": "\\vec r_2",
                    "mSymbol": "r_2"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q33",
                    "eqn": "eq_Ri_247_1",
                    "symbol": "F",
                    "mSymbol": "F"
                  }
                }
              },
              "Ri_248": {
                "name": "Piezo Electric Effect_u",
                "desc": "Piezo Electric Effect",
                "condName": "C25",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/surr/quantity/Q33",
                    "symbol": "F",
                    "mSymbol": "F"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q10",
                    "symbol": "A",
                    "mSymbol": "A"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q56",
                    "symbol": "w",
                    "mSymbol": "w"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q12",
                    "symbol": "ϵ33",
                    "mSymbol": "e33"
                  },
                  "4": {
                    "quantity": "/inf/quantity/Q54",
                    "symbol": "d33",
                    "mSymbol": "d33"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q55",
                    "eqn": "eq_Ri_248_1",
                    "symbol": "Q",
                    "mSymbol": "Q"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q25",
                    "eqn": "eq_Ri_248_2",
                    "symbol": "V",
                    "mSymbol": "V"
                  }
                }
              },
              "Ri_250": {
                "name": "Angular Velocity Def_0_v_u",
                "desc": "Angular Velocity Def",
                "condName": "C35",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/surr/quantity/Q31",
                    "symbol": "\\omega",
                    "mSymbol": "omega"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_250_1",
                    "quantity": "/inf/quantity/Q19",
                    "symbol": "f",
                    "mSymbol": "f"
                  }
                }
              },
              "Ri_251": {
                "name": "Spring Action_v_u",
                "desc": "Spring Action",
                "condName": "C1",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/surr/quantity/Q33",
                    "symbol": "f",
                    "mSymbol": "f"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q7",
                    "symbol": "k",
                    "mSymbol": "k"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_251_1",
                    "quantity": "/inf/quantity/Q5",
                    "symbol": "x",
                    "mSymbol": "x"
                  }
                }
              },
              "Ri_252": {
                "name": "Spring Action_0_v_u",
                "desc": "Spring Action",
                "condName": "C1",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/surr/quantity/Q5",
                    "symbol": "x",
                    "mSymbol": "x"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q7",
                    "symbol": "k",
                    "mSymbol": "k"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q33",
                    "symbol": "f",
                    "eqn": "eq_Ri_252_1",
                    "mSymbol": "f"
                  }
                }
              },
              "Ri_253": {
                "name": "Reactive Force_v_u",
                "desc": "Reactive force induced in the body due to external pressure",
                "condName": "C28",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/surr/quantity/Q26",
                    "symbol": "I_{0}",
                    "mSymbol": "I_0"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_Ri_253_1",
                    "quantity": "/inf/quantity/Q53",
                    "symbol": "O_{0}",
                    "mSymbol": "O_0"
                  }
                }
              },
              "Ri_254": {
                "name": "Sagnac Effect_1_v_u",
                "desc": "Sagnac Effect",
                "condName": "C20",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/surr/quantity/Q31",
                    "symbol": "\\omega",
                    "mSymbol": "omega"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q99",
                    "symbol": "p_{o}",
                    "mSymbol": "p_o"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q100",
                    "symbol": "A",
                    "mSymbol": "A"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q99",
                    "symbol": "p_{i}",
                    "eqn": "eq_Ri_254_1",
                    "mSymbol": "p_i"
                  }
                }
              },
              "Ri_255": {
                "name": "Gravitational Potential energy_0_v_u",
                "desc": "Gravitational Potential energy",
                "condName": "C49",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q116",
                    "symbol": "E",
                    "mSymbol": "E"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q1",
                    "symbol": "m",
                    "mSymbol": "m"
                  },
                  "2": {
                    "quantity": "/surr/quantity/Q5",
                    "symbol": "h",
                    "mSymbol": "h"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q153",
                    "symbol": "g",
                    "eqn": "eq_Ri_255_1",
                    "mSymbol": "g"
                  }
                }
              },
              "Ri_256": {
                "name": "Gravitational Potential energy_2_v_u",
                "desc": "Gravitational Potential energy",
                "condName": "C49",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/surr/quantity/Q153",
                    "symbol": "g",
                    "mSymbol": "g"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q1",
                    "symbol": "m",
                    "mSymbol": "m"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q116",
                    "symbol": "E",
                    "mSymbol": "E"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q5",
                    "symbol": "h",
                    "eqn": "eq_Ri_256_1",
                    "mSymbol": "h"
                  }
                }
              },
              "Ri_257": {
                "name": "Pressure Def_v_u",
                "desc": "Pressure Definition",
                "condName": "C30",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/surr/quantity/Q33",
                    "symbol": "F",
                    "mSymbol": "F"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q96",
                    "symbol": "A",
                    "mSymbol": "A"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q26",
                    "eqn": "eq_Ri_257_1",
                    "symbol": "P",
                    "mSymbol": "P"
                  }
                }
              },
              "Ri_258": {
                "name": "Pressure Def_0_v_u",
                "desc": "Pressure Definition",
                "condName": "C30",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/surr/quantity/Q26",
                    "symbol": "P",
                    "mSymbol": "P"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q96",
                    "symbol": "A",
                    "mSymbol": "A"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q33",
                    "symbol": "F",
                    "eqn": "eq_Ri_258_1",
                    "mSymbol": "F"
                  }
                }
              },
              "Ri_235": {
                "name": "IsA_I_Electric_Potential_Diff--Tranverse",
                "desc": "IsA_I_Electric_Potential_Diff--Tranverse",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q157",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q25"
                  }
                }
              },
              "Ri_259": {
                "name": "IsA_I_Electric_Potential_Diff--Longitudinal",
                "desc": "IsA_I_Electric_Potential_Diff--Longitudinal",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q158",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q25"
                  }
                }
              },
              "Ri_260": {
                "name": "IsA_I_Electric_Current_--Transverse",
                "desc": "IsA_I_Electric_Current_--Transverse",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q159",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q24"
                  }
                }
              },
              "Ri_261": {
                "name": "IsA_I_Electric_Current_--Longitudinal",
                "desc": "IsA_I_Electric_Current_--Longitudinal",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q160",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q24"
                  }
                }
              },
              "Ri_262": {
                "name": "IsA_I_Force_(Body)--Longitudinal",
                "desc": "IsA_I_Force_(Body)--Longitudinal",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q161",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q33"
                  }
                }
              },
              "Ri_263": {
                "name": "IsA_I_Force_(Body)--Orthogonal",
                "desc": "IsA_I_Force_(Body)--Orthogonal",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q162",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q33"
                  }
                }
              },
              "Ri_264": {
                "name": "Lorentz Force_i",
                "desc": "A charge moving in an magnetic field experiences a force",
                "condName": "C38",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q55",
                    "symbol": "q",
                    "mSymbol": "q"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q150",
                    "symbol": "B",
                    "mSymbol": "B"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q63",
                    "symbol": "v",
                    "mSymbol": "v"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q162",
                    "eqn": "eq_Ri_264_1",
                    "symbol": "F",
                    "mSymbol": "F"
                  }
                }
              },
              "Ri_265": {
                "name": "Lorentz Force_u",
                "desc": "A charge moving in an magnetic field experiences a force",
                "condName": "C38",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q55",
                    "symbol": "q",
                    "mSymbol": "q"
                  },
                  "2": {
                    "quantity": "/surr/quantity/Q150",
                    "symbol": "B",
                    "mSymbol": "B"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q63",
                    "symbol": "v",
                    "mSymbol": "v"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q162",
                    "eqn": "eq_Ri_265_1",
                    "symbol": "F",
                    "mSymbol": "F"
                  }
                }
              },
              "Ri_244": {
                "name": "IsA_I_Electro_Motive_Force",
                "desc": "IsA_I_Electro_Motive_Force",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q163",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q25"
                  }
                }
              },
              "Ri_266": {
                "name": "d/dt(Strain)",
                "desc": "d/dt(Strain)",
                "condName": "",
                "relType": 2,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q35",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_derivative",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q164"
                  }
                }
              },
              "Ri_267": {
                "name": "Int(D(Strain))",
                "desc": "Int(D(Strain))",
                "condName": "",
                "relType": 3,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q164",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q17",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_integral",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q35"
                  }
                }
              },
              "Ri_246": {
                "name": "Ampere's Law",
                "desc": "Ampere's Law for a solenoid",
                "condName": "C37",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 1,
                "inputs": {
                  "1": {
                    "quantity": "/body/quantity/Q84",
                    "mSymbol": "L",
                    "symbol": "L"
                  },
                  "2": {
                    "quantity": "/body/quantity/Q24",
                    "mSymbol": "i",
                    "symbol": "i"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q123",
                    "mSymbol": "mu",
                    "symbol": "\\mu"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q150",
                    "mSymbol": "B",
                    "eqn": "eq_Ri_246_1",
                    "symbol": "B"
                  }
                }
              },
              "Ri_249": {
                "name": "Alias_Q14_Q5",
                "desc": "Alias_Q14_Q5",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q14",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q5"
                  }
                }
              },
              "Ri_268": {
                "name": "Alias_Q5_Q14",
                "desc": "Alias_Q5_Q14",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q5",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q14"
                  }
                }
              },
              "Ri_269": {
                "name": "Electroscope BBox",
                "desc": "A gold leaf electroscope",
                "condName": "C59",
                "relType": 0,
                "cost": 1,
                "isBlkBox": true,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q55",
                    "mSymbol": "q",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q5",
                    "mSymbol": "d",
                    "eqn": "eq_Ri_269_1",
                    "symbol": "O_{0}"
                  }
                }
              },
              "Ri_271": {
                "name": "Magnetostrictive Effect",
                "desc": "Strain in magnetic field",
                "condName": "C60",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q91",
                    "mSymbol": "B",
                    "symbol": "B"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q35",
                    "eqn": "eq_Ri_271_1",
                    "symbol": "s",
                    "mSymbol": "s"
                  }
                }
              },
              "Ri_272": {
                "name": "d/dt(Force_(Body))",
                "desc": "d/dt(Force_(Body))",
                "condName": "",
                "relType": 2,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q33",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_derivative",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q165"
                  }
                }
              },
              "Ri_273": {
                "name": "Int(D(Force_(Body)))",
                "desc": "Int(D(Force_(Body)))",
                "condName": "",
                "relType": 3,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q165",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q17",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_integral",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q33"
                  }
                }
              },
              "Ri_274": {
                "name": "Piezo Resistive Effect",
                "desc": "Force causes change in electrical resistance and not the potential diff",
                "condName": "C26",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q165",
                    "mSymbol": "df_t",
                    "symbol": "df/dt"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q46",
                    "mSymbol": "dR_t",
                    "eqn": "eq_Ri_274_1",
                    "symbol": "dR/dt"
                  }
                }
              },
              "Ri_275": {
                "name": "d/dt(Electrical_conductivity)",
                "desc": "d/dt(Electrical_conductivity)",
                "condName": "",
                "relType": 2,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q83",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_derivative",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q166"
                  }
                }
              },
              "Ri_276": {
                "name": "Int(D(Electrical_conductivity))",
                "desc": "Int(D(Electrical_conductivity))",
                "condName": "",
                "relType": 3,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q166",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q17",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_integral",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q83"
                  }
                }
              },
              "Ri_277": {
                "name": "d/dt(Frequency--EM_wave)",
                "desc": "d/dt(Frequency--EM_wave)",
                "condName": "",
                "relType": 2,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q85",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_derivative",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q167"
                  }
                }
              },
              "Ri_278": {
                "name": "Int(D(Frequency--EM_wave))",
                "desc": "Int(D(Frequency--EM_wave))",
                "condName": "",
                "relType": 3,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q167",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q17",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_integral",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q85"
                  }
                }
              },
              "Ri_279": {
                "name": "Photoconductivity",
                "desc": "Photoconductivity effect",
                "condName": "C61",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q167",
                    "mSymbol": "df_dt",
                    "symbol": "df/dt"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q166",
                    "mSymbol": "dc_dt",
                    "eqn": "eq_Ri_279_1",
                    "symbol": "d\\sigma/dt"
                  }
                }
              },
              "Ri_280": {
                "name": "d/dt(Mole)",
                "desc": "d/dt(Mole)",
                "condName": "",
                "relType": 2,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q122",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_derivative",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q168"
                  }
                }
              },
              "Ri_281": {
                "name": "Int(D(Mole))",
                "desc": "Int(D(Mole))",
                "condName": "",
                "relType": 3,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q168",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q17",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_integral",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q122"
                  }
                }
              },
              "Ri_282": {
                "name": "d/dt(Capacitance)",
                "desc": "d/dt(Capacitance)",
                "condName": "",
                "relType": 2,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q6",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_derivative",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q169"
                  }
                }
              },
              "Ri_283": {
                "name": "Int(D(Capacitance))",
                "desc": "Int(D(Capacitance))",
                "condName": "",
                "relType": 3,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q169",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q17",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_integral",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q6"
                  }
                }
              },
              "Ri_284": {
                "name": "Chemo-resistor-capacitor",
                "desc": "A chemical resistor and a capacitor",
                "condName": "C62",
                "relType": 0,
                "cost": 1,
                "isBlkBox": true,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q168",
                    "mSymbol": "N",
                    "symbol": "N"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q169",
                    "mSymbol": "dC_dt",
                    "eqn": "eq_Ri_284_1",
                    "symbol": "dC/dt"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q46",
                    "mSymbol": "dR_dt",
                    "eqn": "eq_Ri_284_2",
                    "symbol": "dR/dt"
                  }
                }
              },
              "Ri_285": {
                "name": "Photo Voltaic Effect",
                "desc": "Photo Voltaic Effect",
                "condName": "C41",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q170",
                    "mSymbol": "I",
                    "symbol": "I_{0}"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q10",
                    "mSymbol": "A",
                    "symbol": "A"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q24",
                    "mSymbol": "i",
                    "eqn": "eq_Ri_285_1",
                    "symbol": "i"
                  }
                }
              },
              "Ri_270": {
                "name": "Photo Diode",
                "desc": "Photo Diode",
                "condName": "C41",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q24",
                    "mSymbol": "i",
                    "symbol": "i"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q10",
                    "mSymbol": "A",
                    "symbol": "A"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q170",
                    "mSymbol": "I",
                    "symbol": "I_{0}",
                    "eqn": "eq_Ri_270_1"
                  }
                }
              },
              "Ri_286": {
                "name": "Heat Source",
                "desc": "Heat Source",
                "condName": "C63",
                "relType": 0,
                "cost": 1,
                "isBlkBox": true,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q114",
                    "mSymbol": "I",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q49",
                    "mSymbol": "O",
                    "eqn": "eq_Ri_286_1",
                    "symbol": "O_{0}"
                  }
                }
              },
              "Ri_287": {
                "name": "Nuclear Thermal Power",
                "desc": "Nuclear Thermal Power",
                "condName": "C64",
                "relType": 0,
                "cost": 1,
                "isBlkBox": true,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q115",
                    "mSymbol": "I",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q114",
                    "mSymbol": "O",
                    "eqn": "eq_Ri_287_1",
                    "symbol": "O_{0}"
                  }
                }
              },
              "Ri_288": {
                "name": "Frictional Heating",
                "desc": "Frictional Heating",
                "condName": "C65",
                "relType": 0,
                "cost": 1,
                "isBlkBox": true,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q33",
                    "mSymbol": "I",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q39",
                    "mSymbol": "O",
                    "eqn": "eq_Ri_288_1",
                    "symbol": "O_{0}"
                  }
                }
              },
              "Ri_289": {
                "name": "Stefan–Boltzmann law",
                "desc": "Stefan–Boltzmann law",
                "condName": "C34",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q38",
                    "mSymbol": "T",
                    "symbol": "T"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q170",
                    "mSymbol": "j",
                    "eqn": "eq_Ri_289_1",
                    "symbol": "j"
                  }
                }
              },
              "Ri_290": {
                "name": "d/dt(Mass)",
                "desc": "d/dt(Mass)",
                "condName": "",
                "relType": 2,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q1",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_derivative",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q171"
                  }
                }
              },
              "Ri_291": {
                "name": "Int(D(Mass))",
                "desc": "Int(D(Mass))",
                "condName": "",
                "relType": 3,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q171",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q17",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_integral",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q1"
                  }
                }
              },
              "Ri_292": {
                "name": "d/dt(Permittivity)",
                "desc": "d/dt(Permittivity)",
                "condName": "",
                "relType": 2,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q12",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_derivative",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q172"
                  }
                }
              },
              "Ri_293": {
                "name": "Int(D(Permittivity))",
                "desc": "Int(D(Permittivity))",
                "condName": "",
                "relType": 3,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q172",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q17",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_integral",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q12"
                  }
                }
              },
              "Ri_294": {
                "name": "d/dt(Area)",
                "desc": "d/dt(Area)",
                "condName": "",
                "relType": 2,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q10",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_derivative",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q173"
                  }
                }
              },
              "Ri_295": {
                "name": "Int(D(Area))",
                "desc": "Int(D(Area))",
                "condName": "",
                "relType": 3,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q173",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q17",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_integral",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q10"
                  }
                }
              },
              "Ri_296": {
                "name": "Area Thermal Expansion",
                "desc": "Expansion of area due to heat",
                "condName": "C27",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q174",
                    "mSymbol": "a",
                    "symbol": "\\alpha"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q10",
                    "mSymbol": "A",
                    "symbol": "A"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q47",
                    "mSymbol": "dT",
                    "symbol": "dT"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q173",
                    "mSymbol": "aA",
                    "eqn": "eq_Ri_296_1",
                    "symbol": "dA"
                  }
                }
              },
              "Ri_297": {
                "name": "IsA_I_Force_(Surface)--Drag",
                "desc": "IsA_I_Force_(Surface)--Drag",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q175",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q34"
                  }
                }
              },
              "Ri_298": {
                "name": "IsA_I_Velocity_(Linear)--Relative",
                "desc": "IsA_I_Velocity_(Linear)--Relative",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q177",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q63"
                  }
                }
              },
              "Ri_299": {
                "name": "Drag in Fluid",
                "desc": "Drag in Fluid",
                "condName": "C66",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q177",
                    "mSymbol": "v",
                    "symbol": "v"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q61",
                    "mSymbol": "rho",
                    "symbol": "\\rho"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q96",
                    "mSymbol": "A",
                    "symbol": "A"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q176",
                    "mSymbol": "C_d",
                    "symbol": "C_d"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q175",
                    "mSymbol": "F_d",
                    "eqn": "eq_Ri_299_1",
                    "symbol": "F_d"
                  }
                }
              },
              "Ri_300": {
                "name": "Drag Coeff rel",
                "desc": "Drag Coeff relationship with Reynold's number",
                "condName": "C14",
                "relType": 0,
                "cost": 1,
                "isBlkBox": true,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q178",
                    "mSymbol": "R_e",
                    "symbol": "R_e"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q176",
                    "mSymbol": "C_d",
                    "eqn": "eq_Ri_300_1",
                    "symbol": "C_d"
                  }
                }
              },
              "Ri_301": {
                "name": "Reynolds Number Def",
                "desc": "Reynolds Number Def",
                "condName": "C14",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q62",
                    "mSymbol": "rho",
                    "symbol": "\\rho"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q177",
                    "mSymbol": "v",
                    "symbol": "v"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q84",
                    "mSymbol": "L",
                    "symbol": "L"
                  },
                  "3": {
                    "quantity": "/inf/quantity/Q179",
                    "mSymbol": "nu",
                    "symbol": "\\nu"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q178",
                    "mSymbol": "R_e",
                    "eqn": "eq_Ri_301_1",
                    "symbol": "R_e"
                  }
                }
              },
              "Ri_302": {
                "name": "d/dt(Time)",
                "desc": "d/dt(Time)",
                "condName": "",
                "relType": 2,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q17",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_derivative",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q180"
                  }
                }
              },
              "Ri_303": {
                "name": "Int(D(Time))",
                "desc": "Int(D(Time))",
                "condName": "",
                "relType": 3,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q180",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q17",
                    "symbol": "T_s",
                    "mSymbol": "T_s"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_integral",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q17"
                  }
                }
              },
              "Ri_304": {
                "name": "IsA_I_Time--Period",
                "desc": "IsA_I_Time--Period",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q181",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q17"
                  }
                }
              },
              "Ri_305": {
                "name": "Oscillatory Motion",
                "desc": "Oscillatory Motion",
                "condName": "C22",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q7",
                    "mSymbol": "k",
                    "symbol": "k"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q1",
                    "mSymbol": "m",
                    "symbol": "m"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q182",
                    "symbol": "c",
                    "mSymbol": "c"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q181",
                    "mSymbol": "T",
                    "eqn": "eq_Ri_305_1",
                    "symbol": "T"
                  }
                }
              },
              "Ri_306": {
                "name": "Gyroscope BBox",
                "desc": "Vibrational Gyroscope BBox",
                "condName": "C67",
                "relType": 0,
                "cost": 1,
                "isBlkBox": true,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q143",
                    "mSymbol": "I",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q169",
                    "mSymbol": "O",
                    "eqn": "eq_Ri_306_1",
                    "symbol": "O_{0}"
                  }
                }
              },
              "Ri_307": {
                "name": "IsA_I_Damping_Coefficient--(Viscous)",
                "desc": "IsA_I_Damping_Coefficient--(Viscous)",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q183",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q182"
                  }
                }
              },
              "Ri_308": {
                "name": "Alias_Q184_Q107",
                "desc": "Alias_Q184_Q107",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q184",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q107"
                  }
                }
              },
              "Ri_309": {
                "name": "Alias_Q107_Q184",
                "desc": "Alias_Q107_Q184",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q107",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q184"
                  }
                }
              },
              "Ri_310": {
                "name": "Alias_Q184_Q84",
                "desc": "Alias_Q184_Q84",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q184",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q84"
                  }
                }
              },
              "Ri_311": {
                "name": "Alias_Q84_Q184",
                "desc": "Alias_Q84_Q184",
                "condName": "",
                "relType": 1,
                "cost": 0,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q84",
                    "mSymbol": "I_{0}",
                    "symbol": "I_{0}"
                  }
                },
                "outputs": {
                  "0": {
                    "eqn": "eq_conn",
                    "mSymbol": "O_{0}",
                    "symbol": "O_{0}",
                    "quantity": "/inf/quantity/Q184"
                  }
                }
              },
              "Ri_312": {
                "name": "Viscous Damping",
                "desc": "Viscous Damping",
                "condName": "C68",
                "relType": 0,
                "cost": 1,
                "isBlkBox": false,
                "numBody": 0,
                "inputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q10",
                    "mSymbol": "A",
                    "symbol": "A"
                  },
                  "1": {
                    "quantity": "/inf/quantity/Q184",
                    "mSymbol": "h",
                    "symbol": "h"
                  },
                  "2": {
                    "quantity": "/inf/quantity/Q179",
                    "mSymbol": "mu",
                    "symbol": "\\mu"
                  }
                },
                "outputs": {
                  "0": {
                    "quantity": "/inf/quantity/Q183",
                    "mSymbol": "c",
                    "eqn": "eq_Ri_312_1",
                    "symbol": "c"
                  }
                }
              }
            }
          }
        }
      },
      "qdb": {
        "content": {
          "Q1": {
            "name": "Mass",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q1"
          },
          "Q10": {
            "name": "Area",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q10"
          },
          "Q100": {
            "name": "Area--Enclosed",
            "desc": "Enclosed area",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "Q10",
            "aliasGrp": "Q100"
          },
          "Q101": {
            "name": "Length--wave--bragg",
            "desc": "Bragg's Wave length",
            "domain": "Optical",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q101"
          },
          "Q102": {
            "name": "Grating period",
            "desc": "Distance between slots of a Grated OFC",
            "domain": "Optical",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q102"
          },
          "Q103": {
            "name": "Strain optic coefficient",
            "desc": "Strain optic coefficient (P) or Photo elastic coefficient",
            "domain": "Optical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q103"
          },
          "Q104": {
            "name": "Thermal expansion coefficient",
            "desc": "Thermal expansion coefficient",
            "domain": "Thermal",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q104"
          },
          "Q105": {
            "name": "Thermo-optic coefficient",
            "desc": "Thermo-optic coefficient dn/dT",
            "domain": "Optical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q105"
          },
          "Q106": {
            "name": "Frequency--Wave",
            "desc": "Number of occurrence per unit of time",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "Q19",
            "aliasGrp": "Q106"
          },
          "Q107": {
            "name": "D(Length)",
            "desc": "Length",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q107"
          },
          "Q108": {
            "name": "Energy--Mechanical",
            "desc": "Energy",
            "domain": "Mechanical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q69",
            "aliasGrp": "Q108"
          },
          "Q109": {
            "name": "Energy--Chemical",
            "desc": "Energy",
            "domain": "Chemical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q69",
            "aliasGrp": "Q109"
          },
          "Q110": {
            "name": "Energy--Electric",
            "desc": "Energy",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q69",
            "aliasGrp": "Q110"
          },
          "Q111": {
            "name": "Energy--Magnetic",
            "desc": "Energy",
            "domain": "Magnetic",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q69",
            "aliasGrp": "Q111"
          },
          "Q112": {
            "name": "Energy--Radiation",
            "desc": "Energy",
            "domain": "Radiant",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q69",
            "aliasGrp": "Q112"
          },
          "Q113": {
            "name": "Energy--Nuclear",
            "desc": "Energy",
            "domain": "Nuclear",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q69",
            "aliasGrp": "Q113"
          },
          "Q114": {
            "name": "Energy--Thermal",
            "desc": "Energy",
            "domain": "Thermal",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q69",
            "aliasGrp": "Q114"
          },
          "Q115": {
            "name": "Energy--Intrinsic",
            "desc": "Energy",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q69",
            "aliasGrp": "Q115"
          },
          "Q116": {
            "name": "Energy--Gravitational",
            "desc": "Energy",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q69",
            "aliasGrp": "Q116"
          },
          "Q12": {
            "name": "Permittivity",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q12"
          },
          "Q14": {
            "name": "Distance",
            "desc": "Distance between multiple bodies",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q5"
          },
          "Q17": {
            "name": "Time",
            "desc": "Time as perceived by a body",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q17"
          },
          "Q18": {
            "name": "Electrical Resistance",
            "desc": "Resists flow of electricity",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q18"
          },
          "Q19": {
            "name": "Frequency",
            "desc": "Number of occurrence per unit of time",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q19"
          },
          "Q2": {
            "name": "Acceleration",
            "desc": "Acceleration",
            "domain": "Mechanical",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q2"
          },
          "Q20": {
            "name": "Position (Mean)",
            "desc": "Mean position of the body",
            "domain": "General",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q20"
          },
          "Q24": {
            "name": "Electric Current ",
            "desc": "Flow of charge between bodies",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q24"
          },
          "Q25": {
            "name": "Electric Potential Diff",
            "desc": "Potential difference between bodies",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q25"
          },
          "Q26": {
            "name": "Pressure",
            "desc": "Force per area",
            "domain": "Mechanical",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q26"
          },
          "Q30": {
            "name": "Position (Vector)",
            "desc": "Position (Vector) with respect to an origin",
            "domain": "General",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q30"
          },
          "Q31": {
            "name": "Angular Velocity",
            "desc": "Angular Velocity - rad/sec",
            "domain": "General",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q31"
          },
          "Q32": {
            "name": "Phase shift",
            "desc": "Change of phase over time",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q32"
          },
          "Q33": {
            "name": "Force (Body)",
            "desc": "Body force",
            "domain": "Mechanical",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q33"
          },
          "Q34": {
            "name": "Force (Surface)",
            "desc": "Surface force between bodies",
            "domain": "Mechanical",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q34"
          },
          "Q35": {
            "name": "Strain",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q35"
          },
          "Q36": {
            "name": "Stress",
            "domain": "Mechanical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q36"
          },
          "Q37": {
            "name": "Elasticity Coefficient",
            "desc": "Coefficient of elasticity",
            "domain": "Mechanical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q37"
          },
          "Q38": {
            "name": "Temperature",
            "domain": "Thermal",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q38"
          },
          "Q39": {
            "name": "Heat",
            "domain": "Thermal",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q39"
          },
          "Q40": {
            "name": "Heat Capacity",
            "domain": "Thermal",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q40"
          },
          "Q41": {
            "name": "Specific Heat Capacity",
            "domain": "Thermal",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q41"
          },
          "Q42": {
            "name": "Refractive index",
            "domain": "Optical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q42"
          },
          "Q43": {
            "name": "Angle of Incidence",
            "desc": "Angle of incidence of an wave",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q43"
          },
          "Q44": {
            "name": "Angle of reflection",
            "desc": "Angle of reflected wave",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q44"
          },
          "Q45": {
            "name": "Thermal Coefficient of Resistance",
            "desc": "Thermal coefficient of electrical resistance",
            "domain": "Thermal",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q45"
          },
          "Q46": {
            "name": "D(Electrical Resistance)",
            "desc": "Resists flow of electricity",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q46"
          },
          "Q47": {
            "name": "D(Temperature)",
            "domain": "Thermal",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q47"
          },
          "Q48": {
            "name": "Electric Potential",
            "desc": "Electromotive force",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q48"
          },
          "Q49": {
            "name": "D(Heat)",
            "domain": "Thermal",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q49"
          },
          "Q5": {
            "name": "Displacement",
            "desc": "Change in position of a body",
            "domain": "General",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q5"
          },
          "Q50": {
            "name": "Area--Overlapping",
            "desc": "Overlapping area between two surfaces",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "Q10",
            "aliasGrp": "Q50"
          },
          "Q51": {
            "name": "D(Pressure)",
            "desc": "Force per area",
            "domain": "Mechanical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q51"
          },
          "Q52": {
            "name": "PiezoResistive Coeffcient",
            "desc": "For Semiconductors",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q52"
          },
          "Q53": {
            "name": "Stress--Normal",
            "desc": "Stress generated in the body due to external pressure(orthogonal to surface).",
            "domain": "Mechanical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q36",
            "aliasGrp": "Q53"
          },
          "Q54": {
            "name": "Piezo elec coeff",
            "desc": "Piezo electric coefficient (m/V)",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q54"
          },
          "Q55": {
            "name": "Electric Charge",
            "desc": "Elec Charge",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q55"
          },
          "Q56": {
            "name": "Width",
            "desc": "Width of a body",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q56"
          },
          "Q57": {
            "name": "Electric Potential Diff--AC",
            "desc": "Potential difference between bodies",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q25",
            "aliasGrp": "Q57"
          },
          "Q58": {
            "name": "Electric Current -- AC",
            "desc": "Flow of charge between bodies",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q24",
            "aliasGrp": "Q58"
          },
          "Q59": {
            "name": "Density (volume mass)",
            "desc": "Volume mass density of a body",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q59"
          },
          "Q6": {
            "name": "Capacitance",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q6"
          },
          "Q60": {
            "name": "D(Density (volume mass))",
            "desc": "Volume mass density of a body",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q60"
          },
          "Q61": {
            "name": "Density (volume mass)--fluid",
            "desc": "Volume mass density of fluids",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "Q59",
            "aliasGrp": "Q61"
          },
          "Q62": {
            "name": "D(Density (volume mass)--fluid)",
            "desc": "Volume mass density of fluids",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q62"
          },
          "Q63": {
            "name": "Velocity (Linear)",
            "desc": "Linear velocity",
            "domain": "General",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q63"
          },
          "Q64": {
            "name": "Velocity (Linear)--fluid",
            "desc": "Linear velocity field for fluids",
            "domain": "General",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "Q63",
            "aliasGrp": "Q64"
          },
          "Q65": {
            "name": "Electric Charge Density",
            "desc": "Electric Charge per unit volume",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q65"
          },
          "Q66": {
            "name": "D(Electric Charge Density)",
            "desc": "Electric Charge per unit volume",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q66"
          },
          "Q67": {
            "name": "Electric Current Density",
            "desc": "Electric Current Density",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q67"
          },
          "Q68": {
            "name": "Volume",
            "desc": "Volume",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q68"
          },
          "Q69": {
            "name": "Energy",
            "desc": "Energy",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q69"
          },
          "Q7": {
            "name": "Stiffness-k",
            "domain": "Mechanical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q7"
          },
          "Q72": {
            "name": "Speed",
            "desc": "Speed",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q72"
          },
          "Q73": {
            "name": "Speed--Light",
            "desc": "Speed",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q72",
            "aliasGrp": "Q73"
          },
          "Q74": {
            "name": "Momentum",
            "desc": "Momemtum",
            "domain": "Mechanical",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q74"
          },
          "Q75": {
            "name": "Heat Flux",
            "desc": "Thermal power flowing per unit area",
            "domain": "Thermal",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q75"
          },
          "Q76": {
            "name": "Area--Heat transfer",
            "desc": "Area of heat transfer",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "Q10",
            "aliasGrp": "Q76"
          },
          "Q77": {
            "name": "Heat Transfer Coeff",
            "desc": "Heat Transfer Coefficient",
            "domain": "Thermal",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q77"
          },
          "Q78": {
            "name": "Energy--Potential",
            "desc": "Energy",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q69",
            "aliasGrp": "Q78"
          },
          "Q79": {
            "name": "Water content",
            "desc": "Percentage Water content of soil",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q79"
          },
          "Q80": {
            "name": "Density (volume mass)--dry density of soil",
            "desc": "Dry density of soil",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "Q59",
            "aliasGrp": "Q80"
          },
          "Q81": {
            "name": "Degree of Saturation",
            "desc": "Degree of Saturation of water in soil",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q81"
          },
          "Q82": {
            "name": "Electrical resistivity",
            "desc": "Electrical resistivity",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q82"
          },
          "Q83": {
            "name": "Electrical conductivity",
            "desc": "Electrical conductivity",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q83"
          },
          "Q84": {
            "name": "Length",
            "desc": "Length",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q84"
          },
          "Q85": {
            "name": "Frequency--EM wave",
            "desc": "Number of occurrence per unit of time",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "Q19",
            "aliasGrp": "Q85"
          },
          "Q86": {
            "name": "Velocity (Linear)--Wave Group",
            "desc": "Linear velocity of the wave envelope",
            "domain": "General",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "Q63",
            "aliasGrp": "Q86"
          },
          "Q87": {
            "name": "Angular Velocity--Wave",
            "desc": "Wave's angular velocity",
            "domain": "General",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "Q31",
            "aliasGrp": "Q87"
          },
          "Q88": {
            "name": "Wave Length",
            "desc": "Wave length",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q88"
          },
          "Q89": {
            "name": "Energy--Kinetic",
            "desc": "Energy",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q69",
            "aliasGrp": "Q89"
          },
          "Q91": {
            "name": "Magnetic Field",
            "desc": "Magnetic Field H",
            "domain": "Magnetic",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q91"
          },
          "Q92": {
            "name": "Magnetization field",
            "desc": "Magnetization vector field M",
            "domain": "Magnetic",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q92"
          },
          "Q93": {
            "name": "Magnetic Flux",
            "desc": "Magnetic Flux",
            "domain": "Magnetic",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q93"
          },
          "Q95": {
            "name": "Electric Field",
            "desc": "Electric Field",
            "domain": "Electrical",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q95"
          },
          "Q96": {
            "name": "Area--Cross Section",
            "desc": "Area of cross section of a body",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "Q10",
            "aliasGrp": "Q96"
          },
          "Q97": {
            "name": "Seebeck Coefficient",
            "domain": "Thermal",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q97"
          },
          "Q98": {
            "name": "Temperature--Gradient",
            "desc": "A spatial temperature gradient",
            "domain": "Thermal",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q98"
          },
          "Q99": {
            "name": "Phase",
            "desc": "Phase of a wave",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q99"
          },
          "Q117": {
            "name": "Noise--white",
            "desc": "White noise",
            "domain": "Radiant",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q117"
          },
          "Q119": {
            "name": "Angle of refraction",
            "desc": "Angle of refraction",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q119"
          },
          "Q118": {
            "name": "Angle of Incidence--Light",
            "desc": "Angle of incidence of Light wave",
            "domain": "Optical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q43",
            "aliasGrp": "Q118"
          },
          "Q120": {
            "name": "Angle of reflection--Light",
            "desc": "Angle of reflected light wave",
            "domain": "Optical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q44",
            "aliasGrp": "Q120"
          },
          "Q121": {
            "name": "Angle of refraction--Light",
            "desc": "Angle of refraction of light wave",
            "domain": "Optical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q119",
            "aliasGrp": "Q121"
          },
          "Q122": {
            "name": "Mole",
            "desc": "An SI unit of chemical substance",
            "domain": "Chemical",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q122"
          },
          "Q123": {
            "name": "Permeability",
            "desc": "Permeability is the measure of the ability of a material to support the formation of a magnetic field within itself",
            "domain": "Magnetic",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q123"
          },
          "Q124": {
            "name": "D(Electric Field)",
            "desc": "Electric Field",
            "domain": "Electrical",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q95"
          },
          "Q125": {
            "name": "D(Magnetic Field)",
            "desc": "Magnetic Field H",
            "domain": "Magnetic",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q91"
          },
          "Q126": {
            "name": "Acoustical absorption",
            "desc": "Acoustical absorption",
            "domain": "Acoustic",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q126"
          },
          "Q127": {
            "name": "Speed--Sound",
            "desc": "Speed of sound in a medium",
            "domain": "Acoustic",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q72",
            "aliasGrp": "Q127"
          },
          "Q128": {
            "name": "Mass--Atomic",
            "desc": "Atomic mass",
            "domain": "Nuclear",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "Q1",
            "aliasGrp": "Q128"
          },
          "Q129": {
            "name": "Atomic number",
            "desc": "Atomic number - applies to pure elements only",
            "domain": "Nuclear",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q129"
          },
          "Q130": {
            "name": "Atomic weight",
            "desc": "Atomic weight - applies to individual isotopes or specific mixtures of isotopes of a given element.",
            "domain": "Nuclear",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q130"
          },
          "Q131": {
            "name": "Corrosion resistance",
            "desc": "Corrosion resistance",
            "domain": "Chemical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q131"
          },
          "Q132": {
            "name": "Hygroscopy",
            "desc": "Hygroscopy",
            "domain": "Chemical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q132"
          },
          "Q133": {
            "name": "PH",
            "desc": "PH",
            "domain": "Chemical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q133"
          },
          "Q134": {
            "name": "Reactivity",
            "desc": "Reactivity",
            "domain": "Chemical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q134"
          },
          "Q135": {
            "name": "Specific internal surface area",
            "desc": "Specific internal surface area",
            "domain": "Chemical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q135"
          },
          "Q136": {
            "name": "Surface energy",
            "desc": "Surface energy",
            "domain": "Chemical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q136"
          },
          "Q137": {
            "name": "Surface tension",
            "desc": "Surface tension",
            "domain": "Chemical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q137"
          },
          "Q138": {
            "name": "Coefficient of restitution",
            "desc": "The ratio of speeds after and before an impact, taken along the line of the impact",
            "domain": "Mechanical",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q138"
          },
          "Q139": {
            "name": "Coefficient of friction",
            "desc": "The ratio of the force of friction between two bodies and the force pressing them together.",
            "domain": "Mechanical",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q139"
          },
          "Q140": {
            "name": "Stress--Tensile",
            "desc": "Stress due to axial force",
            "domain": "Mechanical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q36",
            "aliasGrp": "Q53"
          },
          "Q141": {
            "name": "Young's Modulus",
            "desc": "Young's Modulus of elasticity",
            "domain": "Mechanical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q37"
          },
          "Q142": {
            "name": "Angular Displacement",
            "desc": "Angular Displacement",
            "domain": "General",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q142"
          },
          "Q143": {
            "name": "D(Angular Displacement)",
            "desc": "Angular Displacement",
            "domain": "General",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q31"
          },
          "Q145": {
            "name": "Angular frequency",
            "desc": "Angular frequency rad/sec",
            "domain": "Mechanical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q145"
          },
          "Q144": {
            "name": "Velocity (Linear)--Phase velocity",
            "desc": "Phase velocity",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q63",
            "aliasGrp": "Q144"
          },
          "Q146": {
            "name": "Displacement--radius",
            "desc": "Radius",
            "domain": "General",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "Q5",
            "aliasGrp": "Q146"
          },
          "Q147": {
            "name": "Force (Body)--Centrifugal",
            "desc": "Centrifugal force",
            "domain": "Mechanical",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "Q33",
            "aliasGrp": "Q147"
          },
          "Q148": {
            "name": "Magnetic Flux density--Non uniform",
            "desc": "Magnetic Flux density non uniform",
            "domain": "Magnetic",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q148"
          },
          "Q149": {
            "name": "D(Displacement)",
            "desc": "Change in position of a body",
            "domain": "General",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q63"
          },
          "Q150": {
            "name": "Magnetic Flux density--B",
            "desc": "Magnetic Flux density B",
            "domain": "Magnetic",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q150"
          },
          "Q151": {
            "name": "D(Magnetic Flux density--B)",
            "desc": "Magnetic Flux density B",
            "domain": "Magnetic",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q151"
          },
          "Q152": {
            "name": "D(Velocity (Linear))",
            "desc": "Linear velocity",
            "domain": "General",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q2"
          },
          "Q153": {
            "name": "Acceleration--Gravity",
            "desc": "Acceleration due to gravitational field",
            "domain": "Mechanical",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "Q2",
            "aliasGrp": "Q153"
          },
          "Q154": {
            "name": "Torque",
            "desc": "Moment of force",
            "domain": "Mechanical",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q154"
          },
          "Q155": {
            "name": "Inductance",
            "desc": "Inductance of coil",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q155"
          },
          "Q156": {
            "name": "D(Electric Current )",
            "desc": "Flow of charge between bodies",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q156"
          },
          "Q157": {
            "name": "Electric Potential Diff--Tranverse",
            "desc": "Potential difference in transverse direction of a body",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q25",
            "aliasGrp": "Q157"
          },
          "Q158": {
            "name": "Electric Potential Diff--Longitudinal",
            "desc": "Potential difference in longitudinal direction of a body",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q25",
            "aliasGrp": "Q158"
          },
          "Q159": {
            "name": "Electric Current --Transverse",
            "desc": "Flow of charge in transverse direction of a body",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q24",
            "aliasGrp": "Q159"
          },
          "Q160": {
            "name": "Electric Current --Longitudinal",
            "desc": "Flow of charge in longitudinal direction of a body",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q24",
            "aliasGrp": "Q160"
          },
          "Q161": {
            "name": "Force (Body)--Longitudinal",
            "desc": "Body force Longitudinal",
            "domain": "Mechanical",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "Q33",
            "aliasGrp": "Q161"
          },
          "Q162": {
            "name": "Force (Body)--Orthogonal",
            "desc": "Body force Orthogonal",
            "domain": "Mechanical",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "Q33",
            "aliasGrp": "Q162"
          },
          "Q163": {
            "name": "Electro Motive Force",
            "desc": "Induced Potential difference",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q25",
            "aliasGrp": "Q163"
          },
          "Q164": {
            "name": "D(Strain)",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q164"
          },
          "Q165": {
            "name": "D(Force (Body))",
            "desc": "Body force",
            "domain": "Mechanical",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q165"
          },
          "Q166": {
            "name": "D(Electrical conductivity)",
            "desc": "Electrical conductivity",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q166"
          },
          "Q167": {
            "name": "D(Frequency--EM wave)",
            "desc": "Number of occurrence per unit of time",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q167"
          },
          "Q168": {
            "name": "D(Mole)",
            "desc": "An SI unit of chemical substance",
            "domain": "Chemical",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q168"
          },
          "Q169": {
            "name": "D(Capacitance)",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q169"
          },
          "Q170": {
            "name": "Radiant exitance -- EM wave",
            "desc": "Power intensity of EM wave per unit area W/m^2",
            "domain": "Optical",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q170"
          },
          "Q171": {
            "name": "D(Mass)",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q171"
          },
          "Q172": {
            "name": "D(Permittivity)",
            "domain": "Electrical",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q172"
          },
          "Q173": {
            "name": "D(Area)",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q173"
          },
          "Q174": {
            "name": "Area Thermal Expansion Coefficient",
            "domain": "Thermal",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q174"
          },
          "Q175": {
            "name": "Force (Surface)--Drag",
            "desc": "Surface force between a solid and a fluid",
            "domain": "Mechanical--Liquid",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "Q34",
            "aliasGrp": "Q175"
          },
          "Q176": {
            "name": "Coefficient of Drag",
            "desc": "A dimension-less number",
            "domain": "Mechanical--Liquid",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q176"
          },
          "Q177": {
            "name": "Velocity (Linear)--Relative",
            "desc": "Relative velocity",
            "domain": "General",
            "isVector": "true",
            "isNonNeg": "false",
            "isA": "Q63",
            "aliasGrp": "Q177"
          },
          "Q178": {
            "name": "Reynolds Number",
            "desc": "Dimensionless Ratio of interial force to viscous force of a liquid",
            "domain": "Mechanical--Liquid",
            "isVector": "true",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q178"
          },
          "Q179": {
            "name": "Viscosity (Kinematic)",
            "desc": "Kinematic Viscosity",
            "domain": "Mechanical--Liquid",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q179"
          },
          "Q180": {
            "name": "D(Time)",
            "desc": "Time as perceived by a body",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "",
            "aliasGrp": "Q180"
          },
          "Q181": {
            "name": "Time--Period",
            "desc": "Time period (Interval)",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "false",
            "isA": "Q17",
            "aliasGrp": "Q181"
          },
          "Q182": {
            "name": "Damping Coefficient",
            "desc": "Damping Coefficient",
            "domain": "Mechanical",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q182"
          },
          "Q183": {
            "name": "Damping Coefficient--(Viscous)",
            "desc": "Viscous Damping Coefficient",
            "domain": "Mechanical",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "Q182",
            "aliasGrp": "Q183"
          },
          "Q184": {
            "name": "Depth",
            "desc": "Depth",
            "domain": "General",
            "isVector": "false",
            "isNonNeg": "true",
            "isA": "",
            "aliasGrp": "Q84"
          }
        }
      },
      "eqnDb": {
        "content": {
          "eq_Ri_101_1": "Q_o - Q_i - I^2 R - IS\\nabla  {T} = 0",
          "eq_Ri_102_1": "E - S \\nabla {T} = 0",
          "eq_Ri_105_1": "p_{o} - p_{i} - 4A\\omega/c^2 = 0",
          "eq_Ri_108_1": "\\lambda_B - 2n \\Lambda = 0",
          "eq_Ri_111_1": "2 \\pi f - \\omega = 0",
          "eq_Ri_115_1": "f \\lambda - v = 0",
          "eq_Ri_120_1": "{dL}/{dt}- \\alpha  L  dT/dt = 0",
          "eq_Ri_132_1": "E - h \\nu = 0",
          "eq_Ri_134_1": "E - mc^2 = 0",
          "eq_Ri_135_1": "E - mc^2 = 0",
          "eq_Ri_149_1": "C - \\epsilon a/d = 0",
          "eq_Ri_156_1": "V(s) - X(s)I(s) = 0",
          "eq_Ri_32_1": "q - ({dQ}/{dt})/a = 0",
          "eq_Ri_36_1": "{dR_t}/{dt} - R_t \\alpha {dT_t}/{dt} = 0",
          "eq_Ri_37_1": "{dQ}/{dt} - m \\alpha {dT}/{dt} = 0",
          "eq_Ri_38_1": "\\sigma/\\varepsilon - E = 0",
          "eq_Ri_39_1": "i_t - v_t/  r_t = 0",
          "eq_Ri_41_1": "O_{0} - I_{0} = 0",
          "eq_Ri_42_1": "Q_t - i_t^2 R_t = 0",
          "eq_Ri_44_1": "f - ma = 0",
          "eq_Ri_46_1": "\\vec p_1 - \\vec p_0 - \\vec d = 0",
          "eq_Ri_50_1": "\\rho - m/v = 0",
          "eq_Ri_51_1": "q - v \\rho = 0",
          "eq_Ri_54_1": "p - m v = 0",
          "eq_Ri_58_1": "I_{0} - 1/O_{0} = 0",
          "eq_Ri_59_1": "f(I_{0},I_{1},I_{2},O_{0}) = 0",
          "eq_Ri_60_1": "R - \\rho L /A= 0",
          "eq_Ri_63_1": "I_{0} - 1/O_{0} = 0",
          "eq_Ri_69_1": "PV - nRT = 0",
          "eq_Ri_71_1": "{dQ}/{dt} - m \\alpha {dT}/{dt} = 0",
          "eq_Ri_72_1": "V(s) - X(s)I(s) = 0",
          "eq_Ri_73_1": "\\sigma/\\varepsilon - E = 0",
          "eq_Ri_75_1": "i_t - v_t/  r_t = 0",
          "eq_Ri_76_1": "p - m v = 0",
          "eq_Ri_77_1": "f - ma = 0",
          "eq_Ri_81_1": "O_{0} - I_{0} = 0",
          "eq_Ri_84_1": "f(I_{0},I_{1},I_{2},O_{0}) = 0",
          "eq_Ri_85_1": "f(I_{0},I_{1},I_{2},O_{0}) = 0",
          "eq_Ri_86_1": "E - h \\nu = 0",
          "eq_Ri_92_1": "E - pv/2 = 0",
          "eq_Ri_93_1": "E - pv/2 = 0",
          "eq_Ri_94_1": "E - pv/2 = 0",
          "eq_Ri_96_1": "\\phi_B - B.A = 0",
          "eq_conn": "O_{0} - I_{0} = 0",
          "eq_derivative": "O_{0} - {dI_{0}}/{dt} = 0",
          "eq_integral": "O_{0} - \\int_{0}^{T_s} I_{0} dt = 0",
          "eq_Ri_109_1": "(\\lambda_o - \\lambda_i)/\\lambda_i - \\epsilon (1 - p_e) = 0",
          "eq_Ri_140_1": "f_n\\delta (f_n - f_B)  - f = 0",
          "eq_Ri_143_1": "E_o - E_i = 0",
          "eq_Ri_145_1": "f(I_{0},I_{1},I_{2},I_{3},O_{0}) = 0",
          "eq_Ri_142_1": "E - qV = 0",
          "eq_Ri_150_1": "F - Gm_1 m_2 (\\vec r_2 - \\vec r_1)/|\\vec r_2 - \\vec r_1|^3 = 0",
          "eq_Ri_148_1": "\\vec  I_{0} - \\vec I_{1} - \\vec O_{0} = 0",
          "eq_Ri_147_1": "f(I_{0},I_{1},O_{0}) = 0",
          "eq_Ri_154_1": "sin(\\theta_i)/sin(\\theta_r) - n_r/n_r = 0",
          "eq_Ri_157_1": "{dQ}/{dt}-hA(T-Ts) =0",
          "eq_Ri_158_1": "{dQ}/{dt}-hA(T-Ts) =0",
          "eq_Ri_160_1": "F-qE=0",
          "eq_Ri_33_1": "PV-nRT=0",
          "eq_Ri_161_1": "\\nabla.E - \\rho/\\epsilon_r = 0",
          "eq_Ri_166_1": "F - G m_1 m_2 (\\vec r_1 - \\vec r_2)/|\\vec  r_1 - \\vec r_2|^3",
          "eq_Ri_181_1": "Q - d33  F = 0",
          "eq_Ri_181_2": "V-(d33Fw)/(ϵ33A)=0",
          "eq_Ri_184_1": "2 \\pi f - \\omega = 0",
          "eq_Ri_190_1": "Q-d33F=0",
          "eq_Ri_190_2": "V-(d33Fw)/(ϵ33A)=0",
          "eq_Ri_193_1": "O_{0} - I_{0} = 0",
          "eq_Ri_198_1": "p_{o} - p_{i} - 4A\\omega/c^2 = 0",
          "eq_Ri_194_1": "Q - CV = 0",
          "eq_Ri_195_1": "Q - CV = 0",
          "eq_Ri_90_1": "v_p - f \\lambda = 0",
          "eq_Ri_110_1": "\\omega - 2 \\pi f = 0",
          "eq_Ri_201_1": "F - \\omega^{2} r = 0",
          "eq_Ri_45_1": "f - kx = 0",
          "eq_Ri_188_1": "f - kx = 0",
          "eq_Ri_189_1": "f - kx = 0",
          "eq_Ri_187_1": "f - kx = 0",
          "eq_Ri_215_1": "E - mgh = 0",
          "eq_Ri_218_1": "E - mgh = 0",
          "eq_Ri_221_1": "E - mgh = 0",
          "eq_Ri_222_1": "E - mgh = 0",
          "eq_Ri_182_1": "P - F/A = 0",
          "eq_Ri_191_1": "P - F/A = 0",
          "eq_Ri_192_1": "P - F/A = 0",
          "eq_Ri_196_1": "P - F/A = 0",
          "eq_Ri_217_1": "{dR}/{dt} - {\\rho}/{A} {dL}/{dt}) = 0",
          "eq_Ri_219_1": "l - k \\phi = 0",
          "eq_Ri_220_1": "VI - T \\omega = 0",
          "eq_Ri_220_2": "VI - T \\omega = 0",
          "eq_Ri_223_1": "\\vec T - \\vec F \\times \\vec r = 0",
          "eq_Ri_224_1": "v - K \\epsilon = 0",
          "eq_Ri_225_1": "\\delta \\phi - k \\epsilon = 0",
          "eq_Ri_226_1": "v - k \\delta \\phi = 0",
          "eq_Ri_227_1": "\\delta \\phi - k V = 0",
          "eq_Ri_230_1": "v(t) - L {di}/{dt} = 0",
          "eq_Ri_233_1": "q - ({dQ}/{dt})/a = 0",
          "eq_Ri_232_1": "J - I/A = 0",
          "eq_Ri_231_1": "J - I/A = 0",
          "eq_Ri_234_1": "B_x - {dB}/{dx} = 0",
          "eq_Ri_202_1": "{dB}/{dt} - ({dB}/{dx})({dx}/{dt}) = 0",
          "eq_Ri_203_1": "C - \\epsilon {a}/{d} = 0",
          "eq_Ri_236_1": "f(I_{0},I_{1},I_{2},I_{3},O_{0}) = 0",
          "eq_Ri_237_1": "F - Gm_1 m_2 (\\vec r_2 - \\vec r_1)/|\\vec r_2 - \\vec r_1|^3 = 0",
          "eq_Ri_238_1": "\\vec  I_{0} - \\vec I_{1} - \\vec O_{0} = 0",
          "eq_Ri_239_1": "f(I_{0},I_{1},O_{0}) = 0",
          "eq_Ri_240_1": "sin(\\theta_i)/sin(\\theta_r) - n_r/n_r = 0",
          "eq_Ri_241_1": "{dQ}/{dt}-hA(T-Ts) =0",
          "eq_Ri_242_1": "{dQ}/{dt}-hA(T-Ts) =0",
          "eq_Ri_243_1": "F-qE=0",
          "eq_Ri_245_1": "\\nabla.E - \\rho/\\epsilon_r = 0",
          "eq_Ri_247_1": "F - G m_1 m_2 (\\vec r_1 - \\vec r_2)/|\\vec  r_1 - \\vec r_2|^3",
          "eq_Ri_248_1": "Q - d33  F = 0",
          "eq_Ri_248_2": "V-(d33Fw)/(ϵ33A)=0",
          "eq_Ri_250_1": "2 \\pi f - \\omega = 0",
          "eq_Ri_251_1": "f - kx = 0",
          "eq_Ri_252_1": "f - kx = 0",
          "eq_Ri_253_1": "O_{0} - I_{0} = 0",
          "eq_Ri_254_1": "p_{o} - p_{i} - 4A\\omega/c^2 = 0",
          "eq_Ri_255_1": "E - mgh = 0",
          "eq_Ri_256_1": "E - mgh = 0",
          "eq_Ri_257_1": "P - F/A = 0",
          "eq_Ri_258_1": "P - F/A = 0",
          "eq_Ri_216_1": "V_H + IB/nwq = 0",
          "eq_Ri_155_1": "F - q(v \\times B) = 0",
          "eq_Ri_264_1": "F - q(v \\times B) = 0",
          "eq_Ri_265_1": "F - q(v \\times B) = 0",
          "eq_Ri_167_1": "E + \\partial \\phi/\\partial t = 0",
          "eq_Ri_97_1": "E + {d\\phi_b}/{dt} = 0",
          "eq_Ri_40_1": "dR/dt + R \\rho d(\\varepsilon)/dt = 0",
          "eq_Ri_246_1": "B - \\mu i N/L = 0",
          "eq_Ri_269_1": "O_{0} - K I_{0} = 0",
          "eq_Ri_271_1": "B - K s = 0",
          "eq_Ri_274_1": "df/dt - K dR/dt = 0",
          "eq_Ri_279_1": "d\\sigma/dt - K df/dt = 0",
          "eq_Ri_284_1": "dC/dt - KN = 0",
          "eq_Ri_284_2": "dR/dt - K N = 0",
          "eq_Ri_285_1": "I_{0} A - Vi = 0",
          "eq_Ri_270_1": "I_{0} A - Vi = 0",
          "eq_Ri_286_1": "I_{0} - O_{0} = 0",
          "eq_Ri_287_1": "I_{0} - O_{0} = 0",
          "eq_Ri_288_1": "O_{0} - K I_{0} = 0",
          "eq_Ri_289_1": "j - \\sigma T^4 = 0",
          "eq_Ri_296_1": "dA - A \\alpha dT = 0",
          "eq_Ri_299_1": "F_d - C_d \\rho v^2 A /2 = 0",
          "eq_Ri_300_1": "C_d R_e - 1 = 0",
          "eq_Ri_301_1": "R_e - \\rho v L / \\nu = 0",
          "eq_Ri_306_1": "O_{0} - k I_{0} = 0",
          "eq_Ri_312_1": "c - \\mu A/h = 0",
          "eq_Ri_305_1": "T - 2\\pi  (-c  \\pm \\sqrt {c^2 - 4mk})/2m = 0"
        }
      },
      "eqnDbMatlab": {
        "content": {
          "eq_Ri_101_1": "Q_o - Q_i - I^2 * R - I * S * nabla_T = 0",
          "eq_Ri_102_1": "E - S * nabla_T = 0",
          "eq_Ri_105_1": "p_o - p_i - 4 * A * omega/c^2 = 0",
          "eq_Ri_108_1": "lambda_B - 2 * n * Lambda = 0",
          "eq_Ri_111_1": "2 * pi * f - omega = 0",
          "eq_Ri_115_1": "f * lambda - v = 0",
          "eq_Ri_120_1": "diff(L)- alpha * L * diff(T) = 0",
          "eq_Ri_132_1": "E - h * nu = 0",
          "eq_Ri_134_1": "E - m * c^2 = 0",
          "eq_Ri_135_1": "E - m * c^2 = 0",
          "eq_Ri_149_1": "C - epsilon * a/d = 0",
          "eq_Ri_156_1": "V - X * I = 0",
          "eq_Ri_32_1": "q - dQ_dt/a = 0",
          "eq_Ri_36_1": "dR_dt - R_t * alpha * dT_dt = 0",
          "eq_Ri_37_1": "dQ_dt - m * alpha * dT_dt = 0",
          "eq_Ri_38_1": "sigma/varepsilon - E = 0",
          "eq_Ri_39_1": "it - vt/  rt = 0",
          "eq_Ri_41_1": "O_0 - I_0 = 0",
          "eq_Ri_42_1": "Q_t - (i_t^2) * R_t = 0",
          "eq_Ri_44_1": "f - m * a = 0",
          "eq_Ri_46_1": "p_1 - p_0 - d = 0",
          "eq_Ri_50_1": "rho - m/v = 0",
          "eq_Ri_51_1": "q - v * rho = 0",
          "eq_Ri_54_1": "p - m * v = 0",
          "eq_Ri_58_1": "I_0 - 1/O_0 = 0",
          "eq_Ri_59_1": "f(I_0,I_1,I_2,O_0) = 0",
          "eq_Ri_60_1": "R - rho * L /A= 0",
          "eq_Ri_63_1": "I_0 - 1/O_0 = 0",
          "eq_Ri_69_1": "P * V - n * R * T = 0",
          "eq_Ri_71_1": "dQ_dt - m * alpha * dT_dt = 0",
          "eq_Ri_72_1": "V - X * I = 0",
          "eq_Ri_73_1": "sigma/varepsilon - E = 0",
          "eq_Ri_75_1": "it - vt/  rt = 0",
          "eq_Ri_76_1": "p - m * v = 0",
          "eq_Ri_77_1": "f - m * a = 0",
          "eq_Ri_81_1": "O_0 - I_0 = 0",
          "eq_Ri_84_1": "f(I_0,I_1,I_2,O_0) = 0",
          "eq_Ri_85_1": "f(I_0,I_1,I_2,O_0) = 0",
          "eq_Ri_86_1": "E - h * nu = 0",
          "eq_Ri_92_1": "E - p * v/2 = 0",
          "eq_Ri_93_1": "E - p * v/2 = 0",
          "eq_Ri_94_1": "E - p * v/2 = 0",
          "eq_Ri_96_1": "phi_B - B.A = 0",
          "eq_conn": "O_0 - I_0 = 0",
          "eq_derivative": "O_0 - diff(I_0) = 0",
          "eq_integral": "O_0 - int(I_0, t = 0..T) = 0",
          "eq_Ri_109_1": "(lambda_o - lambda_i)/lambda_i - epsilon * (1 - p_e) = 0",
          "eq_Ri_140_1": "f_n delta (f_n - f_B)  - f = 0",
          "eq_Ri_143_1": "E_o - E_i = 0",
          "eq_Ri_145_1": "f(I_0,I_1,I_2,I_3,O_0) = 0",
          "eq_Ri_142_1": "E - q * V = 0",
          "eq_Ri_150_1": "F - G * m_1 * m_2 * (r_2 - r_1)/|r_2 - r_1|^3 = 0",
          "eq_Ri_148_1": "I_0 - I_1 - O_0 = 0",
          "eq_Ri_147_1": "f(I_0,I_1,O_0) = 0",
          "eq_Ri_154_1": "sin(theta_i)/sin(theta_r) - n_r/n_r = 0",
          "eq_Ri_157_1": "dQ_dt - h * A * (T - Ts) = 0",
          "eq_Ri_158_1": "dQ_dt - h * A * (T - Ts) = 0",
          "eq_Ri_160_1": "F - q * E = 0",
          "eq_Ri_33_1": "P * V - n * R * T=0",
          "eq_Ri_161_1": "divergence(E) - rho/epsilon_r = 0",
          "eq_Ri_166_1": "F - G * m_1 * m_2 * (r_1 - r_2)/|r_1 - r_2|^3",
          "eq_Ri_181_1": "Q - d33 * F = 0",
          "eq_Ri_181_2": "V - (d33 * F  * w)/(e33 * A) = 0",
          "eq_Ri_184_1": "2 * pi * f - omega = 0",
          "eq_Ri_190_1": "Q - d33 * F = 0",
          "eq_Ri_190_2": "V - (d33 * F * w)/(e33 * A) = 0",
          "eq_Ri_193_1": "O_0 - I_0 = 0",
          "eq_Ri_198_1": "p_o - p_i - 4 * A * omega/c^2 = 0",
          "eq_Ri_194_1": "Q - C * V = 0",
          "eq_Ri_195_1": "Q - C * V = 0",
          "eq_Ri_90_1": "v_p - f * lambda = 0",
          "eq_Ri_110_1": "omega - 2 * pi * f = 0",
          "eq_Ri_201_1": "F - omega^{2} * r = 0",
          "eq_Ri_45_1": "f - k * x = 0",
          "eq_Ri_188_1": "f - k * x = 0",
          "eq_Ri_189_1": "f - k * x = 0",
          "eq_Ri_187_1": "f - k * x = 0",
          "eq_Ri_215_1": "E - m * g * h = 0",
          "eq_Ri_218_1": "E - m * g * h = 0",
          "eq_Ri_221_1": "E - m * g * h = 0",
          "eq_Ri_222_1": "E - m * g * h = 0",
          "eq_Ri_182_1": "P - F/A = 0",
          "eq_Ri_191_1": "P - F/A = 0",
          "eq_Ri_192_1": "P - F/A = 0",
          "eq_Ri_196_1": "P - F/A = 0",
          "eq_Ri_217_1": "dR_dt - (rho/A) * dL_dt = 0",
          "eq_Ri_219_1": "l - k * phi = 0",
          "eq_Ri_220_1": "V * I - T * omega = 0",
          "eq_Ri_220_2": "V * I - T * omega = 0",
          "eq_Ri_223_1": "T - F * r = 0",
          "eq_Ri_224_1": "v - K * epsilon = 0",
          "eq_Ri_225_1": "delta_phi - k * epsilon = 0",
          "eq_Ri_226_1": "v - k * delta_phi = 0",
          "eq_Ri_227_1": "delta_phi - k * V = 0",
          "eq_Ri_230_1": "v - L * di_dt = 0",
          "eq_Ri_233_1": "q - dQ_dt/a = 0",
          "eq_Ri_232_1": "J - I/A = 0",
          "eq_Ri_231_1": "J - I/A = 0",
          "eq_Ri_234_1": "B_x - diff(B,x) = 0",
          "eq_Ri_202_1": "dB_dt - dB_dx * dx_dt = 0",
          "eq_Ri_203_1": "C - epsilon * a/d = 0",
          "eq_Ri_236_1": "f(I_0,I_1,I_2,I_3,O_0) = 0",
          "eq_Ri_237_1": "F - G * m_1 * m_2 * (r_2 - r_1)/|r_2 - r_1|^3 = 0",
          "eq_Ri_238_1": "I_0 - I_1 - O_0 = 0",
          "eq_Ri_239_1": "f(I_0,I_1,O_0) = 0",
          "eq_Ri_240_1": "sin(theta_i)/sin(theta_r) - n_r/n_r = 0",
          "eq_Ri_241_1": "dQ_dt - h * A * (T - Ts) = 0",
          "eq_Ri_242_1": "dQ_dt - h * A * (T - Ts) = 0",
          "eq_Ri_243_1": "F - q * E = 0",
          "eq_Ri_245_1": "divergence(E) - rho/epsilon_r = 0",
          "eq_Ri_247_1": "F - G * m_1 * m_2 * (r_1 - r_2)/|r_1 - r_2|^3",
          "eq_Ri_248_1": "Q - d33 * F = 0",
          "eq_Ri_248_2": "V - (d33 * F  * w)/(e33 * A) = 0",
          "eq_Ri_250_1": "2 * pi * f - omega = 0",
          "eq_Ri_251_1": "f - k * x = 0",
          "eq_Ri_252_1": "f - k * x = 0",
          "eq_Ri_253_1": "O_0 - I_0 = 0",
          "eq_Ri_254_1": "p_o - p_i - 4 * A * omega/c^2 = 0",
          "eq_Ri_255_1": "E - m * g * h = 0",
          "eq_Ri_256_1": "E - m * g * h = 0",
          "eq_Ri_257_1": "P - F/A = 0",
          "eq_Ri_258_1": "P - F/A = 0",
          "eq_Ri_216_1": "V_H + I*B/(n*w*q) = 0",
          "eq_Ri_155_1": "F - q(v x B ) = 0",
          "eq_Ri_264_1": "F - q(v x B ) = 0",
          "eq_Ri_265_1": "F - q(v x B ) = 0",
          "eq_Ri_167_1": "E + d_phi_dt = 0",
          "eq_Ri_97_1": "E + diff_phi_b = 0",
          "eq_Ri_40_1": "dR_dt + R * rho * d_dt_epsilon = 0",
          "eq_Ri_246_1": "B - mu * i * N/L = 0",
          "eq_Ri_269_1": "q - K*d = 0",
          "eq_Ri_271_1": "B - K s = 0",
          "eq_Ri_274_1": "df_t - K dR_t = 0",
          "eq_Ri_279_1": "dc_dt - K df_dt = 0",
          "eq_Ri_284_1": "dC_dt - KN = 0",
          "eq_Ri_284_2": "dR_dt - K N = 0",
          "eq_Ri_285_1": "I A - V i = 0",
          "eq_Ri_270_1": "I A - V i = 0",
          "eq_Ri_286_1": "I - O = 0",
          "eq_Ri_287_1": "I - O = 0",
          "eq_Ri_288_1": "O - K I = 0",
          "eq_Ri_289_1": "j - sigma T^4 = 0",
          "eq_Ri_296_1": "dA - A a dT = 0",
          "eq_Ri_299_1": "F_d - C_d rho v^2 A /2 = 0",
          "eq_Ri_300_1": "C_d R_e - 1 = 0",
          "eq_Ri_301_1": "R_e - rho v L / nu = 0",
          "eq_Ri_306_1": "O - k I= 0",
          "eq_Ri_312_1": "c - mu A/h = 0",
          "eq_Ri_305_1": "T - 2 pi  (-c  + (c^2 - 4mk)^0.5)/2m = 0"
        }
      },
      "condAttrsDb": {
        "content": {
          "A1": {
            "name": "absorption of photon at resonance frequency",
            "desc": "absorption of photon at the resonance frequency",
            "condAttrType": "Happens"
          },
          "A10": {
            "name": "bragg grating",
            "desc": "bragg grating",
            "condAttrType": "ThereIs"
          },
          "A11": {
            "name": "bragg wavelength",
            "desc": "bragg wavelength",
            "condAttrType": "HasQProperty"
          },
          "A12": {
            "name": "compares spatial light intensity of a band",
            "desc": "compares spatial light intensity of a band",
            "condAttrType": "IsA"
          },
          "A13": {
            "name": "connected",
            "desc": "quantity flows across the boundary",
            "condAttrType": "HasNQProperty"
          },
          "A14": {
            "name": "differential photo intensity sensor",
            "desc": "differential photo intensity sensor",
            "condAttrType": "IsA"
          },
          "A15": {
            "name": "finite electrical conductance",
            "desc": "material has finite electrical conductance",
            "condAttrType": "HasNQProperty"
          },
          "A16": {
            "name": "fixed on one end",
            "desc": "body is fixed on one end",
            "condAttrType": "HasSituation"
          },
          "A17": {
            "name": "flat surface",
            "desc": "has a flat surface",
            "condAttrType": "HasNQProperty"
          },
          "A18": {
            "name": "flows",
            "desc": "quantity flows across the boundary",
            "condAttrType": "HasNQProperty"
          },
          "A19": {
            "name": "heat conductor",
            "desc": "is a conductor of heat",
            "condAttrType": "HasNQProperty"
          },
          "A2": {
            "name": "adsorption",
            "desc": "adsorption effect takes place",
            "condAttrType": "Happens"
          },
          "A20": {
            "name": "incident light",
            "desc": "incident light",
            "condAttrType": "ThereIs"
          },
          "A21": {
            "name": "insulator",
            "desc": "electrical insulator",
            "condAttrType": "HasNQProperty"
          },
          "A22": {
            "name": "laser beam",
            "desc": "laser beam",
            "condAttrType": "ThereIs"
          },
          "A23": {
            "name": "length",
            "desc": "length",
            "condAttrType": "HasQProperty"
          },
          "A24": {
            "name": "light",
            "desc": "light is present",
            "condAttrType": "ThereIs"
          },
          "A25": {
            "name": "light beam on photo diode",
            "desc": "light beam on photo diode",
            "condAttrType": "Happens"
          },
          "A26": {
            "name": "mass",
            "desc": "mass is present",
            "condAttrType": "HasQProperty"
          },
          "A27": {
            "name": "metal reflection layer",
            "desc": "metal reflection layer",
            "condAttrType": "HasNQProperty"
          },
          "A28": {
            "name": "optical fiber",
            "desc": "optical fiber",
            "condAttrType": "ThereIs"
          },
          "A29": {
            "name": "overlapping region",
            "desc": "overlapping region",
            "condAttrType": "ThereIs"
          },
          "A3": {
            "name": "area",
            "desc": "has some area",
            "condAttrType": "HasQProperty"
          },
          "A30": {
            "name": "photo diode",
            "desc": "photo diode",
            "condAttrType": "ThereIs"
          },
          "A31": {
            "name": "photo sensitive surface",
            "desc": "photo sensitive surface",
            "condAttrType": "HasNQProperty"
          },
          "A32": {
            "name": "piezo electric",
            "desc": "piezo electric",
            "condAttrType": "ThereIs"
          },
          "A33": {
            "name": "piezo resistive",
            "desc": "piezo resistive",
            "condAttrType": "ThereIs"
          },
          "A34": {
            "name": "position",
            "desc": "position",
            "condAttrType": "HasQProperty"
          },
          "A35": {
            "name": "produces light",
            "desc": "produces light",
            "condAttrType": "Happens"
          },
          "A36": {
            "name": "reflected light",
            "desc": "reflected light",
            "condAttrType": "ThereIs"
          },
          "A37": {
            "name": "reflection of light",
            "desc": "reflection of light",
            "condAttrType": "Happens"
          },
          "A38": {
            "name": "slender body",
            "desc": "slender body",
            "condAttrType": "HasNQProperty"
          },
          "A39": {
            "name": "solid",
            "desc": "solid",
            "condAttrType": "HasNQProperty"
          },
          "A4": {
            "name": "area of cross section",
            "desc": "area of cross section",
            "condAttrType": "HasQProperty"
          },
          "A40": {
            "name": "solid body",
            "desc": "solid body",
            "condAttrType": "HasNQProperty"
          },
          "A41": {
            "name": "surface",
            "desc": "surface",
            "condAttrType": "HasNQProperty"
          },
          "A42": {
            "name": "thermal coefficient of resistance",
            "desc": "thermal coefficient of resistance",
            "condAttrType": "HasQProperty"
          },
          "A43": {
            "name": "vibrates",
            "desc": "vibrates",
            "condAttrType": "HasNQProperty"
          },
          "A44": {
            "name": "volume",
            "desc": "volume",
            "condAttrType": "HasQProperty"
          },
          "A45": {
            "name": "electric field",
            "desc": "electric field is present",
            "condAttrType": "ThereIs"
          },
          "A46": {
            "name": "overlapping non-contact surfaces",
            "desc": "plates of a capacitor",
            "condAttrType": "HasSituation"
          },
          "A47": {
            "name": "liquid",
            "desc": "liquid state of matter",
            "condAttrType": "HasNQProperty"
          },
          "A48": {
            "name": "charged",
            "desc": "charged body",
            "condAttrType": "HasQProperty"
          },
          "A49": {
            "name": "equal",
            "desc": "equal by definition",
            "condAttrType": "HasSituation"
          },
          "A50": {
            "name": "ideal gas",
            "desc": "ideal gas",
            "condAttrType": "ThereIs"
          },
          "A51": {
            "name": "soil -- clay",
            "desc": "clay type of soil",
            "condAttrType": "ThereIs"
          },
          "A52": {
            "name": "water",
            "desc": "water",
            "condAttrType": "ThereIs"
          },
          "A53": {
            "name": "finite electrical resistance",
            "desc": "material has finite electrical resistance",
            "condAttrType": "HasNQProperty"
          },
          "A54": {
            "name": "electro magnetic wave",
            "desc": "electro magnetic wave",
            "condAttrType": "ThereIs"
          },
          "A55": {
            "name": "magnetic flux",
            "desc": "magnetic flux",
            "condAttrType": "ThereIs"
          },
          "A56": {
            "name": "thermo electric",
            "desc": "thermo electric material",
            "condAttrType": "HasQProperty"
          },
          "A57": {
            "name": "pyroelectric",
            "desc": "pyroelectric property",
            "condAttrType": "HasNQProperty"
          },
          "A7": {
            "name": "bi directional light beam",
            "desc": "bi directional light beam",
            "condAttrType": "ThereIs"
          },
          "A8": {
            "name": "bodies in contact",
            "desc": "bodies in contact",
            "condAttrType": "HasSituation"
          },
          "A9": {
            "name": "bodies very close",
            "desc": "bodies very close",
            "condAttrType": "HasSituation"
          },
          "A58": {
            "name": "energy band gap",
            "desc": "energy band gap in semiconductor",
            "condAttrType": "ThereIs"
          },
          "A59": {
            "name": "charge moves",
            "desc": "charge moves along the electric field",
            "condAttrType": "Happens"
          },
          "A60": {
            "name": "laser",
            "desc": "laser",
            "condAttrType": "ThereIs"
          },
          "A61": {
            "name": "confined space",
            "desc": "confined space",
            "condAttrType": "HasSituation"
          },
          "A62": {
            "name": "boundary between two different isotropic medium",
            "desc": "boundary between two different isotropic medium",
            "condAttrType": "HasSituation"
          },
          "A63": {
            "name": "current in conductor",
            "desc": "current flowing through a conductor",
            "condAttrType": "HasSituation"
          },
          "A64": {
            "name": "gravitational field",
            "desc": "gravitational field",
            "condAttrType": "ThereIs"
          },
          "A65": {
            "name": "body in circular motion",
            "desc": "body in circular motion",
            "condAttrType": "HasSituation"
          },
          "A66": {
            "name": "motion",
            "desc": "body in motion",
            "condAttrType": "HasSituation"
          },
          "A67": {
            "name": "force field",
            "desc": "force field",
            "condAttrType": "HasSituation"
          },
          "A68": {
            "name": "transverse magnetic flux",
            "desc": "transverse magnetic flux",
            "condAttrType": "ThereIs"
          },
          "A69": {
            "name": "potentiometer",
            "desc": "potentiometer to change electrical resistance",
            "condAttrType": "IsA"
          },
          "A70": {
            "name": "screw like mechanism",
            "desc": "screw like mechanism",
            "condAttrType": "IsA"
          },
          "A71": {
            "name": "electrical motor",
            "desc": "electrical motor mechanism",
            "condAttrType": "IsA"
          },
          "A72": {
            "name": "force of rotation",
            "desc": "tendency of a force to rotate an object about an axis",
            "condAttrType": "HasSituation"
          },
          "A73": {
            "name": "strain gauge",
            "desc": "strain gauge machanism",
            "condAttrType": "IsA"
          },
          "A74": {
            "name": "optical beat detector",
            "desc": "a optical to electrical transducer",
            "condAttrType": "IsA"
          },
          "A75": {
            "name": "phase shifter",
            "desc": "phase shifter",
            "condAttrType": "IsA"
          },
          "A76": {
            "name": "electroscope",
            "desc": "a gold leaf electroscope",
            "condAttrType": "IsA"
          },
          "A77": {
            "name": "photo conductor",
            "desc": "electrical conductivity is sensitive to light",
            "condAttrType": "ThereIs"
          },
          "A78": {
            "name": "gas",
            "desc": "chemical agent in the gaseous state",
            "condAttrType": "ThereIs"
          },
          "A79": {
            "name": "heat source",
            "desc": "heat source",
            "condAttrType": "IsA"
          },
          "A80": {
            "name": "nuclear reaction",
            "desc": "nuclear reactor",
            "condAttrType": "IsA"
          },
          "A81": {
            "name": "frictional force",
            "desc": "frictional force",
            "condAttrType": "HasSituation"
          },
          "A82": {
            "name": "solid moving in a fluid",
            "desc": "solid moving in a fluid medium",
            "condAttrType": "HasSituation"
          },
          "A83": {
            "name": "vibrational gyroscope",
            "desc": "vibrational gyroscope",
            "condAttrType": "IsA"
          },
          "A84": {
            "name": "sliding plate in a fluid",
            "desc": "sliding a plate in a container of fluid causing viscous drag",
            "condAttrType": "HasSituation"
          }
        }
      },
      "condDb": {
        "content": {
          "C0": {
            "id": "C0",
            "name": "Beam",
            "isA": "",
            "property": {
              "A23": "true",
              "A38": "true",
              "A4": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C1": {
            "id": "C1",
            "name": "Cantilever Beam",
            "isA": "C0",
            "property": {
              "A16": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C10": {
            "id": "C10",
            "name": "Electric field interactions",
            "isA": "",
            "property": {
              "A45": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C11": {
            "id": "C11",
            "name": "Two Equal things",
            "isA": "",
            "property": {
              "A49": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C12": {
            "id": "C12",
            "name": "Fiber Bragg Grating",
            "isA": "",
            "property": {
              "A10": "true",
              "A11": "true",
              "A28": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C13": {
            "id": "C13",
            "name": "Something that flows",
            "isA": "",
            "property": {
              "A18": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C14": {
            "id": "C14",
            "name": "Fluid",
            "isA": "",
            "property": {
              "A18": "true",
              "A47": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C15": {
            "id": "C15",
            "name": "Heat Conductor",
            "isA": "",
            "property": {
              "A19": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C16": {
            "id": "C16",
            "name": "Ideal Gas",
            "isA": "",
            "property": {
              "A50": "true",
              "A61": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C17": {
            "id": "C17",
            "name": "Light source",
            "isA": "",
            "property": {
              "A35": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C18": {
            "id": "C18",
            "name": "Optical Amp of Displacement",
            "isA": "",
            "property": {
              "A22": "true",
              "A31": "true",
              "A37": "true"
            },
            "has": {
              "numParts": 3,
              "parts": {
                "1": "C17",
                "2": "C22",
                "3": "C24"
              }
            }
          },
          "C19": {
            "id": "C19",
            "name": "Optical Band Detector",
            "isA": "",
            "property": {
              "A12": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C2": {
            "id": "C2",
            "name": "Capacitor",
            "isA": "",
            "property": {
              "A46": "true"
            },
            "has": {
              "numParts": 1,
              "parts": {
                "1": "C8"
              }
            }
          },
          "C20": {
            "id": "C20",
            "name": "Optical Interferometer",
            "isA": "",
            "property": {
              "A7": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C21": {
            "id": "C21",
            "name": "Optical wave",
            "isA": "",
            "property": {
              "A24": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C22": {
            "id": "C22",
            "name": "Oscillates",
            "isA": "",
            "property": {
              "A43": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C23": {
            "id": "C23",
            "name": "Parallel Plates",
            "isA": "",
            "property": {
              "A13": "false",
              "A29": "true"
            },
            "has": {
              "numParts": 2,
              "parts": {
                "1": "C27",
                "2": "C27"
              }
            }
          },
          "C24": {
            "id": "C24",
            "name": "Photo Diode",
            "isA": "",
            "property": {
              "A25": "true",
              "A30": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C25": {
            "id": "C25",
            "name": "Piezo Electric",
            "isA": "",
            "property": {
              "A32": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C26": {
            "id": "C26",
            "name": "Piezo Resistive",
            "isA": "",
            "property": {
              "A33": "false"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C27": {
            "id": "C27",
            "name": "Plain Surface",
            "isA": "",
            "property": {
              "A17": "true",
              "A3": "true",
              "A40": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C28": {
            "id": "C28",
            "name": "Solid Substance",
            "isA": "",
            "property": {
              "A26": "true",
              "A39": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C29": {
            "id": "C29",
            "name": "Split Photo Diode",
            "isA": "C24",
            "property": {
              "A14": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C3": {
            "id": "C3",
            "name": "Charged body",
            "isA": "",
            "property": {
              "A48": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C30": {
            "id": "C30",
            "name": "Substance",
            "isA": "",
            "property": {
              "A26": "true",
              "A34": "true",
              "A44": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C31": {
            "id": "C31",
            "name": "Surface Plasmon Resonance",
            "isA": "",
            "property": {
              "A1": "true",
              "A2": "true",
              "A20": "true",
              "A27": "true",
              "A36": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C32": {
            "id": "C32",
            "name": "Thermistor",
            "isA": "C9",
            "property": {
              "A42": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C33": {
            "id": "C33",
            "name": "Two point mass",
            "isA": "",
            "property": {
            },
            "has": {
              "numParts": 2,
              "parts": {
                "1": "C30",
                "2": "C30"
              }
            }
          },
          "C34": {
            "id": "C34",
            "name": "EM Wave",
            "isA": "",
            "property": {
              "A54": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C35": {
            "id": "C35",
            "name": "Wave",
            "isA": "",
            "property": {
              "A43": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C36": {
            "id": "C36",
            "name": "Magnetic Surface",
            "isA": "",
            "property": {
              "A3": "true",
              "A55": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C37": {
            "id": "C37",
            "name": "Coil",
            "isA": "",
            "property": {
              "A15": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C38": {
            "id": "C38",
            "name": "Magnetic field",
            "isA": "",
            "property": {
              "A55": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C39": {
            "id": "C39",
            "name": "Thermo Electric",
            "isA": "C7",
            "property": {
              "A56": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C4": {
            "id": "C4",
            "name": "Interacting Charged Bodies",
            "isA": "",
            "property": {
            },
            "has": {
              "numParts": 2,
              "parts": {
                "1": "C3",
                "2": "C3"
              }
            }
          },
          "C40": {
            "id": "C40",
            "name": "Pyroelectric",
            "isA": "C25",
            "property": {
              "A57": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C5": {
            "id": "C5",
            "name": "Clay Soil and water",
            "isA": "",
            "property": {
              "A51": "true",
              "A52": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C6": {
            "id": "C6",
            "name": "Bodies in close proximity",
            "isA": "",
            "property": {
              "A8": "false",
              "A9": "true"
            },
            "has": {
              "numParts": 2,
              "parts": {
                "1": "C30",
                "2": "C30"
              }
            }
          },
          "C7": {
            "id": "C7",
            "name": "Electrical conductor",
            "isA": "",
            "property": {
              "A15": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C8": {
            "id": "C8",
            "name": "Electrical Insulator",
            "isA": "",
            "property": {
              "A21": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C9": {
            "id": "C9",
            "name": "Electrical Resistance",
            "isA": "",
            "property": {
              "A53": "true"
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C41": {
            "id": "C41",
            "name": "PN junction",
            "isA": "",
            "property": {
              "A58": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C42": {
            "id": "C42",
            "name": "Charge in Elec Field",
            "isA": "",
            "property": {
              "A45": true,
              "A59": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C43": {
            "id": "C43",
            "name": "LASER",
            "isA": "",
            "property": {
              "A22": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C44": {
            "id": "C44",
            "name": "Refraction at boundary",
            "isA": "",
            "property": {
              "A62": true,
              "A20": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C45": {
            "id": "C45",
            "name": "Elec current flowing",
            "isA": "",
            "property": {
              "A63": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C46": {
            "id": "C46",
            "name": "Gravity",
            "isA": "",
            "property": {
              "A64": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C47": {
            "id": "C47",
            "name": "Body in circular motion",
            "isA": "",
            "property": {
              "A65": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C48": {
            "id": "C48",
            "name": "Motion in magnetic field",
            "isA": "",
            "property": {
              "A55": true,
              "A66": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C49": {
            "id": "C49",
            "name": "Body in force field",
            "isA": "",
            "property": {
              "A67": true,
              "A26": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C50": {
            "id": "C50",
            "name": "Hall Effect Scenario",
            "isA": "",
            "property": {
              "A63": true,
              "A68": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C51": {
            "id": "C51",
            "name": "Potentiometer",
            "isA": "",
            "property": {
              "A69": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C52": {
            "id": "C52",
            "name": "Screw",
            "isA": "",
            "property": {
              "A70": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C53": {
            "id": "C53",
            "name": "Electrcial Motor",
            "isA": "",
            "property": {
              "A71": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C54": {
            "id": "C54",
            "name": "Rotational force",
            "isA": "",
            "property": {
              "A72": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C55": {
            "id": "C55",
            "name": "Strain Gauge",
            "isA": "",
            "property": {
              "A73": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C56": {
            "id": "C56",
            "name": "Optical beat detector",
            "isA": "",
            "property": {
              "A74": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C57": {
            "id": "C57",
            "name": "Phase shifter",
            "isA": "",
            "property": {
              "A75": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C58": {
            "id": "C58",
            "name": "Changing magnetic Field",
            "isA": "",
            "property": {
              "A55": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C59": {
            "id": "C59",
            "name": "Electroscope",
            "isA": "",
            "property": {
              "A76": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C60": {
            "id": "C60",
            "name": "Body in Magnetic Field",
            "isA": "",
            "property": {
              "A55": true,
              "A38": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C61": {
            "id": "C61",
            "name": "Photo Conductive",
            "isA": "",
            "property": {
              "A77": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C62": {
            "id": "C62",
            "name": "Gaseous environment",
            "isA": "",
            "property": {
              "A78": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C63": {
            "id": "C63",
            "name": "Heat Source",
            "isA": "",
            "property": {
              "A79": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C64": {
            "id": "C64",
            "name": "Nuclear Thermal Power",
            "isA": "",
            "property": {
              "A80": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C65": {
            "id": "C65",
            "name": "Frictional force",
            "isA": "",
            "property": {
              "A81": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C66": {
            "id": "C66",
            "name": "Moving Solid in Fluid",
            "isA": "",
            "property": {
              "A82": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C67": {
            "id": "C67",
            "name": "Vibrational Gyroscope",
            "isA": "",
            "property": {
              "A83": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          },
          "C68": {
            "id": "C68",
            "name": "Dashpot",
            "isA": "",
            "property": {
              "A84": true
            },
            "has": {
              "numParts": 0,
              "parts": {
              }
            }
          }
        }
      }
    }
  }
};