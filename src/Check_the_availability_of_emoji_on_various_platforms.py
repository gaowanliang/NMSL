# 检测emoji在各平台的可用性,此代码建议在Google Colab上跑
# Google Colab 地址:https://colab.research.google.com/drive/1w3LKN4oyLgP0Ik7MUjV-7E-_uZQho3_q
'''import requests
import re
rootURL = "https://emojipedia.org/"
r = requests.get(rootURL)
pattern = re.search('New Emojis: <a href="/(.*?)"', r.text)
latestEmojiURL = rootURL+pattern.group(1)
print("最新的Emoji地址", latestEmojiURL)
pat = re.compile(pattern.group(
    1) + r'(.*?)/">\n<img [s|c]')
emoji = pat.findall(requests.get(latestEmojiURL).text)
print(len(emoji))

android = "google/gmail"
ios = "apple/iphone-os-2.2"
microsoft = "microsoft/windows-8.0"

pattern = re.search('<a href="/google/(.*?)/' +
                    emoji[0], requests.get(rootURL+android+"/"+emoji[0]).text)
print(pattern.groups())'''

from pypinyin import pinyin, lazy_pinyin, Style
raw = ["氢", "氦", "锂", "铍", "硼", "碳", "氮", "氧", "氟", "氖", "钠", "镁", "铝", "硅", "磷", "硫", "氯", "氩", "钾", "钙", "钪", "钛", "钒", "铬", "锰", "铁", "钴", "镍", "铜", "锌", "镓", "锗", "砷", "硒", "溴", "氪", "铷", "锶", "钇", "锆", "铌", "钼", "锝", "钌", "铑", "钯", "银", "镉", "铟", "锡", "锑", "碲", "碘", "氙", "铯", "钡", "镧",
       "铈", "镨", "钕", "钷", "钐", "铕", "钆", "铽", "镝", "钬", "铒", "铥", "镱", "镥", "铪", "钽", "钨", "铼", "锇", "铱", "铂", "金", "汞", "铊", "铅", "铋", "钋", "砹", "氡", "钫", "镭", "锕", "钍", "镤", "铀", "镎", "钚", "镅", "锔", "锫", "锎", "锿", "镄", "钔", "锘", "铹", "𬬻", "𬭊", "𬭳", "𬭛", "𬭶", "鿏", "𫟼", "𬬭", "鿔", "𫓧", "镆", "𫟷"]
d = {}
for i in raw:
    d[str(pinyin(i)).replace("[", "").replace("]", "").replace("'", "")] = i
print(d)
