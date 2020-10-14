import requests
def getdata():
    try:
        r = requests.get('https://nodejs-testapp-roks.jm-woodside-testing:30007')
        if (r.status_code == 200):
            requestdata = r.json()
            return requestdata
    except requests.exceptions.RequestException as e:
        raise SystemExit(e)
