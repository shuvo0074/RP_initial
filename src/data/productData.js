var imSourcea= require('../contents/productImages/ancotil.png')
var imSourcea2= require('../contents/productImages/alverin.png')
var imSourcea3= require('../contents/productImages/antif.png')
var imSourcea4= require('../contents/productImages/antipro.png')
var imSourcea5= require('../contents/productImages/antiplet.png')
var imSourcea6= require('../contents/productImages/artiflex.png')

var prod = require('../contents/htmlpages/product.html')

var productsData = [
    {
        "key":"a1",
        "name":" Alverin",
        "desc":" Alverine citrate .",
        "imageS": require('../contents/productLogo/Alverin.png') ,
        "details": require('../contents/productPages/Alverin.html') ,

    },
    {
        "key":"a2",
        "name":"Ancotil ",
        "desc":" Bromazepam .",
        "imageS": require('../contents/productLogo/Ancotil.png') ,
        "details": require('../contents/productPages/Ancotil.html') ,

    },
    {
        "key":"a3",
        "name":"Antif ",
        "desc":" Amoxycillin .",
        "imageS": require('../contents/productLogo/Antif.png') ,
        "details": require('../contents/productPages/Antif.html') ,

    },
    {
        "key":"a4",
        "name":"AntiPro ",
        "desc":" Metronidazole .",
        "imageS": require('../contents/productLogo/AntiPro.png') ,
        "details": require('../contents/productPages/AntiPro.html') ,

    },
    {
        "key":"a5",
        "name":"Artiflex ",
        "desc":"  ",
        "imageS": require('../contents/productLogo/Artiflex.png') ,
        "details": require('../contents/productPages/Artiflex.html') ,

    },
    {
        "key":"a6",
        "name":"Babiz ",
        "desc":" Vitamin B complex and Zinc .",
        "imageS": require('../contents/productLogo/Babiz.png') ,
        "details": require('../contents/productPages/Babiz.html') ,

    },
    {
        "key":"a7",
        "name":"Bactab ",
        "desc":" Baclofen BP",
        "imageS": require('../contents/productLogo/Bactab.png') ,
        "details": require('../contents/productPages/Bactab.html') ,

    },
    {
        "key":"a8",
        "name":"Cleomycin300 ",
        "desc":" Clindamycin ",
        "imageS": require('../contents/productLogo/Cleomycin300.png') ,
        "details": require('../contents/productPages/Cleomycin300.html') ,

    },
    {
        "key":"a9",
        "name":"CodOil",
        "desc":"Cod liver oil",
        "imageS": require('../contents/productLogo/CodOil.png') ,
        "details": require('../contents/productPages/CodOil.html') ,

    },
    {
        "key":"a10",
        "name":"Colamin",
        "desc":"Mecobalamin",
        "imageS": require('../contents/productLogo/Colamin.png') ,
        "details": require('../contents/productPages/Colamin.html') ,

    },
    {
        "key":"a11",
        "name":"CoralCd",
        "desc":"Calcium Carbonate from coral source",
        "imageS": require('../contents/productLogo/CoralCd.png') ,
        "details": require('../contents/productPages/CoralCd.html') ,

    },
    {
        "key":"a12",
        "name":"Curacid",
        "desc":"Esomeprazole",
        "imageS": require('../contents/productLogo/Curacid.png') ,
        "details": require('../contents/productPages/Curacid.html') ,

    },
    {
        "key":"a13",
        "name":"Depanil",
        "desc":"Clonazepam",
        "imageS": require('../contents/productLogo/Depanil.png') ,
        "details": require('../contents/productPages/Depanil.html') ,

    },
    {
        "key":"a14",
        "name":"Depresil",
        "desc":"Flupenthixol & Melitracen",
        "imageS": require('../contents/productLogo/Depresil.png') ,
        "details": require('../contents/productPages/Depresil.html') ,

    },
    {
        "key":"a15",
        "name":"Destacin",
        "desc":"Deslaretodine",
        "imageS": require('../contents/productLogo/Destacin.png') ,
        "details": require('../contents/productPages/Destacin.html') ,

    },
    {
        "key":"a",
        "name":"DiversaGold",
        "desc":"A to Z",
        "imageS": require('../contents/productLogo/DiversaGold.png') ,
        "details": require('../contents/productPages/DiversaGold.html') ,

    },
    {
        "key":"a",
        "name":"Droxil",
        "desc":"Cefadroxil",
        "imageS": require('../contents/productLogo/Droxil.png') ,
        "details": require('../contents/productPages/Droxil.html') ,

    },
    {
        "key":"a",
        "name":"Dysma",
        "desc":"Tiemonium Methylsulphate",
        "imageS": require('../contents/productLogo/Dysma.png') ,
        "details": require('../contents/productPages/Dysma.html') ,

    },
    {
        "key":"a",
        "name":"E_gold",
        "desc":"Vitamin E",
        "imageS": require('../contents/productLogo/E_gold.png') ,
        "details": require('../contents/productPages/E_gold.html') ,

    },
    {
        "key":"a",
        "name":"Fenargic",
        "desc":"Fexofenadine",
        "imageS": require('../contents/productLogo/Fenargic.png') ,
        "details": require('../contents/productPages/Fenargic.html') ,

    },
    {
        "key":"a",
        "name":"Fungitrol",
        "desc":"Fluconazole",
        "imageS": require('../contents/productLogo/Fungitrol.png') ,
        "details": require('../contents/productPages/Fungitrol.html') ,

    },
    {
        "key":"a",
        "name":"Kenodol",
        "desc":"Ketorolac tromethamine",
        "imageS": require('../contents/productLogo/Kenodol.png') ,
        "details": require('../contents/productPages/Kenodol.html') ,

    },
    {
        "key":"a",
        "name":"Laxativ",
        "desc":"Lactulose",
        "imageS": require('../contents/productLogo/Laxativ.png') ,
        "details": require('../contents/productPages/Laxativ.html') ,

    },
    {
        "key":"a",
        "name":"Lethiquin",
        "desc":"Levofloxacin",
        "imageS": require('../contents/productLogo/Lethiquin.png') ,
        "details": require('../contents/productPages/Lethiquin.html') ,

    },
    {
        "key":"a",
        "name":"Lindex",
        "desc":"Cephradine",
        "imageS": require('../contents/productLogo/Lindex.png') ,
        "details": require('../contents/productPages/Lindex.html') ,

    },
    {
        "key":"a",
        "name":"Lipicut",
        "desc":"Atorvastatin",
        "imageS": require('../contents/productLogo/Lipicut.png') ,
        "details": require('../contents/productPages/Lipicut.html') ,

    },
    {
        "key":"a",
        "name":"Losartium50",
        "desc":"Losartan Potassium",
        "imageS": require('../contents/productLogo/Losartium50.png') ,
        "details": require('../contents/productPages/Losartium50.html') ,

    },
    {
        "key":"a",
        "name":"Losartium_H",
        "desc":"Losartan Potassium and Hydrochlorothiazide",
        "imageS": require('../contents/productLogo/Losartium_H.png') ,
        "details": require('../contents/productPages/Losartium_H.html') ,

    },
    {
        "key":"a",
        "name":"Maxbac",
        "desc":"Ceftazidime",
        "imageS": require('../contents/productLogo/Maxbac.png') ,
        "details": require('../contents/productPages/Maxbac.html') ,

    },
    {
        "key":"a",
        "name":"Maxflo_U",
        "desc":"Tamsulosin HCl",
        "imageS": require('../contents/productLogo/Maxflo_U.png') ,
        "details": require('../contents/productPages/Maxflo_U.html') ,

    },
    {
        "key":"a",
        "name":"Merotic",
        "desc":"",
        "imageS": require('../contents/productLogo/Merotic.png') ,
        "details": require('../contents/productPages/Merotic.html') ,

    },
    {
        "key":"a",
        "name":"MonproX",
        "desc":"Montelukast",
        "imageS": require('../contents/productLogo/MonproX.png') ,
        "details": require('../contents/productPages/MonproX.html') ,

    },
    {
        "key":"a",
        "name":"Neurodol",
        "desc":"Vitamin b1 b6 b12",
        "imageS": require('../contents/productLogo/Neurodol.png') ,
        "details": require('../contents/productPages/Neurodol.html') ,

    },
    {
        "key":"a",
        "name":"Ngcef",
        "desc":"Cefixime",
        "imageS": require('../contents/productLogo/Ngcef.png') ,
        "details": require('../contents/productPages/Ngcef.html') ,

    },
    {
        "key":"a",
        "name":"Normogut",
        "desc":"Domperidone",
        "imageS": require('../contents/productLogo/Normogut.png') ,
        "details": require('../contents/productPages/Normogut.html') ,

    },
    {
        "key":"a",
        "name":"NT_par",
        "desc":"Albendazole",
        "imageS": require('../contents/productLogo/NT_par.png') ,
        "details": require('../contents/productPages/NT_par.html') ,

    },
    {
        "key":"a",
        "name":"Omag_DR",
        "desc":"Omeprazole",
        "imageS": require('../contents/productLogo/Omag_DR.png') ,
        "details": require('../contents/productPages/Omag_DR.html') ,

    },
    {
        "key":"a",
        "name":"OrafenPlus",
        "desc":"Diclofenac Sodium & idocaine Cl",
        "imageS": require('../contents/productLogo/OrafenPlus.png') ,
        "details": require('../contents/productPages/OrafenPlus.html') ,

    },
    {
        "key":"a",
        "name":"OrafenSR",
        "desc":"Diclofenac Sodium",
        "imageS": require('../contents/productLogo/OrafenSR.png') ,
        "details": require('../contents/productPages/OrafenSR.html') ,

    },
    {
        "key":"a",
        "name":"Oryx",
        "desc":"Ceftriaxone",
        "imageS": require('../contents/productLogo/Oryx.png') ,
        "details": require('../contents/productPages/Oryx.html') ,

    },
    {
        "key":"a",
        "name":"Ostacid",
        "desc":"Calcium Carbonate",
        "imageS": require('../contents/productLogo/Ostacid.png') ,
        "details": require('../contents/productPages/Ostacid.html') ,

    },
    {
        "key":"a",
        "name":"Ostacid_D",
        "desc":"Calcium & Vitamin D",
        "imageS": require('../contents/productLogo/Ostacid_D.png') ,
        "details": require('../contents/productPages/Ostacid_D.html') ,

    },
    {
        "key":"a",
        "name":"Pantocure",
        "desc":"Pantoprazole BP",
        "imageS": require('../contents/productLogo/Pantocure.png') ,
        "details": require('../contents/productPages/Pantocure.html') ,

    },
    {
        "key":"a",
        "name":"Pedicin",
        "desc":"Erythromycin",
        "imageS": require('../contents/productLogo/Pedicin.png') ,
        "details": require('../contents/productPages/Pedicin.html') ,

    },
    {
        "key":"a",
        "name":"PediZinc",
        "desc":"Zinc sulphate USP",
        "imageS": require('../contents/productLogo/PediZinc.png') ,
        "details": require('../contents/productPages/PediZinc.html') ,

    },
    {
        "key":"a",
        "name":"Perpen",
        "desc":"Flucloxicilin",
        "imageS": require('../contents/productLogo/Perpen.png') ,
        "details": require('../contents/productPages/Perpen.html') ,

    },
    {
        "key":"a",
        "name":"Pregmin",
        "desc":"Carbonyl Iron & Folic Acid",
        "imageS": require('../contents/productLogo/Pregmin.png') ,
        "details": require('../contents/productPages/Pregmin.html') ,

    },
    {
        "key":"a",
        "name":"Pregmin_Z",
        "desc":"Carbonyl Iron,Folic Acid & Zinc",
        "imageS": require('../contents/productLogo/Pregmin_Z.png') ,
        "details": require('../contents/productPages/Pregmin_Z.html') ,

    },
    {
        "key":"a",
        "name":"Prevencid",
        "desc":"Omeprazole",
        "imageS": require('../contents/productLogo/Prevencid.png') ,
        "details": require('../contents/productPages/Prevencid.html') ,

    },
    {
        "key":"a",
        "name":"Ranflox",
        "desc":"Ciprofloxacin",
        "imageS": require('../contents/productLogo/Ranflox.png') ,
        "details": require('../contents/productPages/Ranflox.html') ,

    },
    {
        "key":"a",
        "name":"Ranoxen",
        "desc":"Naproxen",
        "imageS": require('../contents/productLogo/Ranoxen.png') ,
        "details": require('../contents/productPages/Ranoxen.html') ,

    },
    {
        "key":"a",
        "name":"RanoxenPlus500",
        "desc":"Naproxen & Esomeprazole",
        "imageS": require('../contents/productLogo/RanoxenPlus500.png') ,
        "details": require('../contents/productPages/RanoxenPlus500.html') ,

    },
    {
        "key":"a",
        "name":"Ranvit_B",
        "desc":"Vitamin B complex",
        "imageS": require('../contents/productLogo/Ranvit_B.png') ,
        "details": require('../contents/productPages/Ranvit_B.html') ,

    },
    {
        "key":"a",
        "name":"Ranzith",
        "desc":"Azithromycin",
        "imageS": require('../contents/productLogo/Ranzith.png') ,
        "details": require('../contents/productPages/Ranzith.html') ,

    },
    {
        "key":"a",
        "name":"Recofast",
        "desc":"Cefuroxime",
        "imageS": require('../contents/productLogo/Recofast.png') ,
        "details": require('../contents/productPages/Recofast.html') ,

    },
    {
        "key":"a",
        "name":"Sartec",
        "desc":"CetrizineDihydrochloride",
        "imageS": require('../contents/productLogo/Sartec.png') ,
        "details": require('../contents/productPages/Sartec.html') ,

    },
    {
        "key":"a",
        "name":"Sedaquil",
        "desc":"Midazolam",
        "imageS": require('../contents/productLogo/Sedaquil.png') ,
        "details": require('../contents/productPages/Sedaquil.html') ,

    },
    {
        "key":"a",
        "name":"Tacs",
        "desc":"Paracetamol + Caffeine",
        "imageS": require('../contents/productLogo/Tacs.png') ,
        "details": require('../contents/productPages/Tacs.html') ,

    },
    {
        "key":"a",
        "name":"TacsDol",
        "desc":"Paracetamol & Tramadol",
        "imageS": require('../contents/productLogo/TacsDol.png') ,
        "details": require('../contents/productPages/TacsDol.html') ,

    },
    {
        "key":"a",
        "name":"Vesocal",
        "desc":"Amlodipine",
        "imageS": require('../contents/productLogo/Vesocal.png') ,
        "details": require('../contents/productPages/Vesocal.html') ,

    },
    {
        "key":"a",
        "name":"VesocalPlus",
        "desc":"Amlodipine + Atenolol",
        "imageS": require('../contents/productLogo/VesocalPlus.png') ,
        "details": require('../contents/productPages/VesocalPlus.html') ,

    },
    {
        "key":"a",
        "name":"Xepodox",
        "desc":"cefpodoxime",
        "imageS": require('../contents/productLogo/Xepodox.png') ,
        "details": require('../contents/productPages/Xepodox.html') ,

    },
    {
        "key":"a",
        "name":"X_Pectoran",
        "desc":"Bromhexine Hydrochloride",
        "imageS": require('../contents/productLogo/X_Pectoran.png') ,
        "details": require('../contents/productPages/X_Pectoran.html') ,

    },
    {
        "key":"a",
        "name":"Zenil",
        "desc":"Ranitidine",
        "imageS": require('../contents/productLogo/Zenil.png') ,
        "details": require('../contents/productPages/Zenil.html') ,

    },

]
export default productsData;