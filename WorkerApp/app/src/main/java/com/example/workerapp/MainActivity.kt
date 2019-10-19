package com.example.workerapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
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
            Toast.makeText(this, "Your response has been recorded!", Toast.LENGTH_LONG).show()
        }
    }
}
