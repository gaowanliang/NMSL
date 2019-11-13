# 检测emoji在各平台的可用性,此代码建议在Google Colab上跑
# Google Colab 地址:https://colab.research.google.com/drive/1w3LKN4oyLgP0Ik7MUjV-7E-_uZQho3_q
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
print(len(emoji))

android = "google/gmail"
ios = "apple/iphone-os-2.2"
microsoft = "microsoft/windows-8.0"

pattern = re.search('<a href="/google/(.*?)/' +
                    emoji[0], requests.get(rootURL+android+"/"+emoji[0]).text)
print(pattern.groups())
