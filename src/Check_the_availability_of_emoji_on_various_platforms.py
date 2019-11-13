# 检测emoji在各平台的可用性,此代码建议在Google Colab上跑
import requests
import re
rootURL = "https://emojipedia.org/"
r = requests.get(rootURL)
pattern = re.search('New Emojis: <a href="/(.*?)"', r.text)
latestEmojiURL = rootURL+pattern.group(1)
print("最新的Emoji地址", latestEmojiURL)
pat = re.compile(pattern.group(
    1) + r'(.*?)/">\n<img [s|c]')
emoji = pat.findall(requests.get(latestEmojiURL).text)
print(emoji)
android = "google/gmail"
ios = ""
