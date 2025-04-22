from dash import Dash, html, dcc
import plotly.express as px
import pandas as pd

app = Dash()


df = pd.DataFrame({
    "Method": ["Public Wi-Fi", "HTTP Traffic", "Unsecure Email", "Other", ],
    "Percent": [28, 10, 40, 22 ],
})

fig = px.bar(df, x="Method", y="Percent", barmode="group", title="Unsecure Communication Risks")


df2 = pd.DataFrame({
    "Method": ["SFTP", "FTPS", "HTTPS", "VPN", "Encrypted Mail", "Encrypted USB", ],
    "Effectiveness %": [95, 92, 93, 88, 80, 85]
})

fig2 = px.bar(df2, x="Method", y="Effectiveness %", barmode="group", title="Effectiveness of Secure File Transfer Methods")


app.layout = html.Div(children=[
    html.H1(children='ByteTower', style={'textAlign':'center'}),

    html.Div([
    html.Strong("What is Secure File Transfer?")
]),
    html.Div(children='''
        Secure file transfer is, as the name suggests, a way to securely transfer data from one point to another. This is done in many ways, such as using encryption, authentication, transfer services, and many more. Secure file transfer can be as complex as setting up cloud services, to as simple as putting files on a USB thumb stick and handing it to another person.
             
    '''),

    html.Div([
        html.Strong("Why should we care about secure file transfer?")
    ]),

     html.Div(children='''
        Think of how many times you send data on the internet, log
        on to a website, put your banking information into a checkout 
        screen, or even just send videos to other people. Most of this 
        information isn’t something you’d simply say to the public. 
        Without secure file transfer, this is basically what is happening; 
        yelling your debit card number into a crowd of people or giving 
        everybody your password to important accounts, if you wouldn’t 
        do any of these things, then secure file transfer is your friend. 

    '''),

     html.Div([
    html.Strong("What can you do to protect yourself?")
]),

     html.Div(children='''
        There are many ways to protect yourself when transferring files securely.  These can include, but are not limited to:
1	Using apps/websites such as DropBox or PrivateBin.
2	Use multi-factor authentication.
3	Password-protected files, time limits on shared files.
4	Always use encryption!

    '''),
    
  dcc.Graph(
        id='insecure-graph',
        figure=fig
    ),

    
    dcc.Graph(
        id='secure-graph',
        figure=fig2
    )
])

if __name__ == '__main__':
    app.run(debug=True)