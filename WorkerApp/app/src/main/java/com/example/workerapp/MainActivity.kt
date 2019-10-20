package com.example.workerapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import androidx.annotation.IntegerRes
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        worker_profile_open.setOnClickListener(){
            val intent = Intent(this, WorkerProfile::class.java)
            startActivity(intent)
        }

        submit_button.setOnClickListener(){
            val nmessage1 = non_recyclable_trash.text.toString()
            val nmessage2 = nmessage1.toInt()

            val rmessage1 = recyclable_trash.text.toString()
            val rmessage2 = (rmessage1).toInt()
            val rmessage3 = ((rmessage2+nmessage2)*137)
            val rmessage4 = rmessage3.toString()
            val intent = Intent(this, Submit_Message::class.java)
            Toast.makeText(this, "Your response has been recorded!", Toast.LENGTH_LONG).show()
            intent.putExtra("otp_generated", rmessage4)
            startActivity(intent)


        }
    }
}
