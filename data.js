window.CIVIC_DATA = {
  records: [
    {id:"t1",type:"timeline",tag:"TIMELINE",date:"1971",title:"বাংলাদেশের স্বাধীনতার প্রেক্ষাপট",text:"স্বাধীনতা যুদ্ধ, রাষ্ট্রগঠন ও পরবর্তী রাজনৈতিক ইতিহাসের জন্য foundational timeline record.",source:"Bangladesh Liberation War / public historical archives",url:"https://en.wikipedia.org/wiki/History_of_Bangladesh"},
    {id:"t2",type:"timeline",tag:"TIMELINE",date:"1991",title:"সংসদীয় সরকারব্যবস্থার পুনঃপ্রতিষ্ঠা",text:"বাংলাদেশের শাসনব্যবস্থা ও সাংবিধানিক পরিবর্তনের একটি গুরুত্বপূর্ণ পর্যায়.",source:"Bangladesh Constitution / public legal references",url:"https://bdlaws.minlaw.gov.bd/"},
    {id:"t3",type:"timeline",tag:"TIMELINE",date:"1996",title:"জাতীয় রাজনৈতিক পরিবর্তন",text:"নির্বাচন, সরকার গঠন এবং রাজনৈতিক পরিবর্তনের timeline entry.",source:"Bangladesh Election Commission / public records",url:"https://ecs.gov.bd/"},
    {id:"t4",type:"timeline",tag:"TIMELINE",date:"2008",title:"নবম জাতীয় সংসদ নির্বাচন",text:"জাতীয় নির্বাচনের historical record; source verification প্রয়োজন.",source:"Bangladesh Election Commission",url:"https://ecs.gov.bd/"},
    {id:"t5",type:"timeline",tag:"TIMELINE",date:"2014",title:"দশম জাতীয় সংসদ নির্বাচন",text:"নির্বাচনী ইতিহাসের জন্য indexed record.",source:"Bangladesh Election Commission",url:"https://ecs.gov.bd/"},
    {id:"t6",type:"timeline",tag:"TIMELINE",date:"2018",title:"একাদশ জাতীয় সংসদ নির্বাচন",text:"নির্বাচনী ফল, অংশগ্রহণ ও public reporting অনুসন্ধানের entry.",source:"Bangladesh Election Commission",url:"https://ecs.gov.bd/"},
    {id:"t7",type:"timeline",tag:"TIMELINE",date:"2024",title:"দ্বাদশ জাতীয় সংসদ নির্বাচন",text:"নির্বাচনী timeline record; publication-এর আগে official data মিলিয়ে দেখা উচিত.",source:"Bangladesh Election Commission",url:"https://ecs.gov.bd/"},
    {id:"t8",type:"timeline",tag:"TIMELINE",date:"2024–25",title:"রাজনৈতিক পরিবর্তন ও আইনগত প্রক্রিয়া",text:"রাজনৈতিক পরিবর্তন, প্রশাসনিক সিদ্ধান্ত ও আদালত-সংক্রান্ত developments আলাদা source দিয়ে track করার জন্য placeholder.",source:"Official gazettes / courts / reputable reporting",url:"https://www.supremecourt.gov.bd/"},
    {id:"c1",type:"claim",tag:"CLAIM",date:"RESEARCH",title:"কোনো রাজনৈতিক দাবির সত্যতা",text:"দাবিটিকে সরাসরি সত্য/মিথ্যা না ধরে primary source, date ও attributed reporting দিয়ে যাচাই করা হবে.",source:"Evidence methodology",url:"https://www.reuters.com/fact-check/"},
    {id:"c2",type:"claim",tag:"CLAIM",date:"RESEARCH",title:"মামলা বা আদালতের তথ্য",text:"মামলার status আদালতের official record দিয়ে যাচাই করা উচিত; সংবাদ প্রতিবেদনকে secondary source হিসেবে আলাদা label দেওয়া হবে.",source:"Bangladesh Supreme Court",url:"https://www.supremecourt.gov.bd/"},
    {id:"d1",type:"document",tag:"DOCUMENT",date:"SOURCE",title:"বাংলাদেশের সংবিধান",text:"Constitutional text এবং amendments-এর জন্য legal reference hub.",source:"Bangladesh Laws / Ministry of Law",url:"https://bdlaws.minlaw.gov.bd/"},
    {id:"d2",type:"document",tag:"DOCUMENT",date:"SOURCE",title:"নির্বাচন কমিশনের তথ্য",text:"নির্বাচন সংক্রান্ত official notices, results ও institutional information-এর entry point.",source:"Bangladesh Election Commission",url:"https://ecs.gov.bd/"},
    {id:"d3",type:"document",tag:"DOCUMENT",date:"SOURCE",title:"সুপ্রিম কোর্টের তথ্য",text:"Judgments, cause lists ও আদালত-সংক্রান্ত official information খুঁজতে primary source.",source:"Supreme Court of Bangladesh",url:"https://www.supremecourt.gov.bd/"},
    {id:"s1",type:"source",tag:"SOURCE",date:"RULE",title:"Primary source first",text:"Official document থাকলে সেটিকে primary evidence হিসেবে অগ্রাধিকার দেওয়া হবে.",source:"CivicLens source policy",url:"#evidence"},
    {id:"s2",type:"source",tag:"SOURCE",date:"RULE",title:"Attribution required",text:"Contested statements কে বলেছেন, কখন বলেছেন এবং কোন উৎসে এসেছে—তা আলাদাভাবে দেখানো হবে.",source:"CivicLens source policy",url:"#evidence"},
    {id:"s3",type:"source",tag:"SOURCE",date:"RULE",title:"No invented citations",text:"অজানা বা অসমর্থিত সূত্রকে factual citation হিসেবে ব্যবহার করা হবে না.",source:"CivicLens source policy",url:"#evidence"}
  ],
  evidence: [
    {claim:"“এই তথ্যটি সত্য” ধরনের দাবির ক্ষেত্রে",status:"VERIFY",detail:"Primary source → date → independent corroboration → publication."},
    {claim:"আদালতের মামলা/রায়ের ক্ষেত্রে",status:"PRIMARY",detail:"Official court record first; reporting as secondary context."},
    {claim:"নির্বাচনী ফলাফলের ক্ষেত্রে",status:"PRIMARY",detail:"Election Commission data first; derived analysis clearly labelled."},
    {claim:"রাজনৈতিক বক্তব্যের ক্ষেত্রে",status:"ATTRIBUTED",detail:"Direct quote/source attribution + date; interpretation আলাদা রাখা হবে."}
  ]
};