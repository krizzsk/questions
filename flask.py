import json
from flask import Flask, request, jsonify
from flask_cors import CORS
from google.oauth2 import service_account
import gspread
import threading  # Import the threading module

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Set up Google Sheets API
scopes = ["https://www.googleapis.com/auth/spreadsheets","https://www.googleapis.com/auth/drive"]
credentials = service_account.Credentials.from_service_account_file(
    "/root/credentials.json", scopes=scopes
)

gc = gspread.authorize(credentials)

# Open the Google Sheet by title and specify the worksheet
spreadsheet = gc.open("SEDATA")
worksheet = spreadsheet.get_worksheet(0)  # Choose the appropriate worksheet

# Create a thread lock
lock = threading.Lock()

@app.route('/count', methods=['POST'])
def update_topic_count():
    data = request.json
    topic = data['topic']
    count = data['count']

    # Define the topic names and their corresponding cell addresses
    topics = {
        "DevSecOps": "A",
        "ETAP": "B",
        "Quality & Agile": "C",
        "Testing": "D",
        "Pick Your Prize": "E",
        "Better Luck Next Time": "F",
    }

    # Check if the topic is in the predefined topics
    if topic in topics:
        col_letter = topics[topic]
        col_index = gspread.utils.a1_to_rowcol(f"{col_letter}1")[1]  # Get the column index from the column letter
        
        with lock:
            cell_value = worksheet.cell(1, col_index).value
            current_count_cell = worksheet.cell(2, col_index)
            
            if current_count_cell.value:
                current_count = int(current_count_cell.value)  # Get the count cell below the topic cell
            else:
                current_count = 0

            new_count = current_count + count
            worksheet.update_cell(2, col_index, new_count)  # Update the count in the corresponding cell
    else:
        return jsonify({'error': 'Topic not found'})

    return jsonify({'message': 'Topic count updated successfully'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
