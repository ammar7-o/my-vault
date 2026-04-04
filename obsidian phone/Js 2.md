---
dg-publish: true
---
```dataviewjs
// استخدام الحاوية الافتراضية لـ Dataview
const container = dv.container;

// إنشاء عنصر واجهة المستخدم
const mainDiv = document.createElement("div");
mainDiv.style.cssText = `
    background: #1e1e2e; 
    padding: 20px; 
    border-radius: 12px; 
    border: 2px solid #4f46e5; 
    color: white; 
    direction: rtl; 
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
`;

mainDiv.innerHTML = `
    <h3 style="color: #a6e3a1; margin-top: 0; border-bottom: 1px solid #313244; padding-bottom: 10px;">📊 حاسبة السرعة المتوسطة</h3>
    
    <div style="margin: 15px 0;">
        <label style="display: block; margin-bottom: 5px;">المسافة (d) بالمتر:</label>
        <input type="number" id="v-dist" placeholder="مثلاً: 100" style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid #45475a; background: #313244; color: white;">
    </div>
    
    <div style="margin: 15px 0;">
        <label style="display: block; margin-bottom: 5px;">الزمن (t) بالثانية:</label>
        <input type="number" id="v-time" placeholder="مثلاً: 10" style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid #45475a; background: #313244; color: white;">
    </div>
    
    <button id="v-calc-btn" style="width: 100%; padding: 12px; background: #4f46e5; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1.1em; transition: 0.2s;">
        احسب الآن
    </button>
    
    <div id="v-result" style="margin-top: 20px; padding: 15px; background: #181825; border-radius: 8px; text-align: center; display: none; border-right: 4px solid #f9e2af;">
        <div style="font-size: 1.3em; color: #f9e2af;" id="res-ms"></div>
        <div style="font-size: 1em; color: #89b4fa; margin-top: 5px;" id="res-kmh"></div>
    </div>
`;

container.appendChild(mainDiv);

// إضافة التفاعل (Event Listener)
mainDiv.querySelector("#v-calc-btn").addEventListener("click", () => {
    const d = parseFloat(mainDiv.querySelector("#v-dist").value);
    const t = parseFloat(mainDiv.querySelector("#v-time").value);
    const display = mainDiv.querySelector("#v-result");
    
    if (d > 0 && t > 0) {
        const ms = (d / t).toFixed(2);
        const kmh = (ms * 3.6).toFixed(2);
        
        display.style.display = "block";
        mainDiv.querySelector("#res-ms").innerHTML = `vₘ = <b>${ms} m/s</b>`;
        mainDiv.querySelector("#res-kmh").innerHTML = `تساوي <b>${kmh} km/h</b>`;
    } else {
        alert("يرجى إدخال قيم موجبة للمسافة والزمن!");
    }
});

// إضافة تأثير Hover للزر (اختياري كنوع من اللمسة البرمجية)
const btn = mainDiv.querySelector("#v-calc-btn");
btn.onmouseover = () => btn.style.background = "#4338ca";
btn.onmouseout = () => btn.style.background = "#4f46e5";
```

