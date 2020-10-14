FROM python:3
WORKDIR /src/app
COPY requirements.txt /src/app
RUN pip install -r requirements.txt
COPY . /src/app
RUN export FLASK_APP=main.py
CMD ["flask", "run"]
